## 第一次搭建 Kubernetes

<center>
     <div>
         <span>
             <img src="../../../.vuepress/public/img/作者.svg" width="20px">
             ：yijiu &emsp;&emsp;
         </span>
        &emsp;
         <span>
             <img src="../../../.vuepress/public/img/时间.svg" width="20px">
             ：2019.11.18 &emsp;&emsp;
         </span>
         &emsp;
         <span>
             <img src="../../../.vuepress/public/img/标签.svg" width="20px">
             ：k8s &emsp;&emsp;
         </span>
     </div>
 </center>

---

### 前言

初次尝试 Kubernetes 的安装部署，设备是两台云服务器，使用的工具是 **kubeadm** ，使用它部署一个完整的 Kubernetes 集群。其中会提到很多注意事项。初次尝试，欢迎吐槽。



### 准备工作

- 熟悉 Linux 命令
- 了解 Docker 容器技术
- 准备好2台或以上的云服务器（使用云服务器请阅读下面的设备准备！），或者使用虚拟机
- 云服务器和虚拟机具备30 GB 或以上的磁盘空间，主要用于 Docker 镜像和 日志文件
- Linux 系统为64位，3.10 及以上的内核版本



### 设备准备

我采用的是某云厂商的两台云服务器，配置一模一样。

> Kubernetes 官方最小机器配置: CPU >= 2, 内存 >= 2G。个人建议配置越高越好，有压力的可以使用虚拟机。

我的机器配置：

|        Master        |        Node1         |
| :------------------: | :------------------: |
|       2核 CPU        |       2核 CPU        |
|       8G 内存        |       8G 内存        |
|    CentOS7.6 64位    |    CentOS7.6 64位    |
|       内网互通       |       内网互通       |
| 外网访问权限不受限制 | 外网访问权限不受限制 |
|   外网宽带：1Mbps    |   外网宽带：1Mbps    |

> 外网宽带不做限制，当然越大越好
>
> 不同的Linux 操作系统配置差别不大，使用 Ubuntu 也可以

#### 内网互通（很重要）

Kubernetes 的节点之间需要内网互通，虚拟机内网互通的方法不阐述了，来讲讲云服务器之间如何实现内网互通。

在云平台的控制台中，需要创建一个**私有网络（VPC）**，创建中需要先选择一个**地域**（区域），根据云服务器所在地域选择。两台云服务器的地域必须相同，**可用区**最好相同（部分厂商可以跨区，但是可能比较麻烦）。名称随意，最好有特征（k8s_vpc_xxxx）。**CIDR** 一般有`10` 、`172` 、`192` 的头选择，选择`10` 和 `192` 都可以，不建议选择 `172`，因为可能会和Docker 容器的 IP 地址冲突。

创建完私有网络（VPC）后，**新建子网**，地域选择相同，名称随意，私有网络选择我们刚刚建好的 VPC，其他不变。

在子网建好后，可以选购云服务器了，云服务器必须在同一地域，比如都在华东。可用区最好一起，部分厂商有解决不同可用区的内网互通方案，有需求的自行查询。

选购云服务器时，两台服务器的**网络配置**里，私有网络和子网选项，都需要选择我们刚刚创建好的。内网 IP 可以自定义也可以自动分配。

自此，两台云服务器实现了内网互通。

我的 Master 节点的内网IP 为：10.0.0.3

Node1 节点的内网IP 为：10.0.0.4

同属同一个私有网络里的子网。

> 不同云厂商的私有网络配置会有不同，可以查看帮助文档完成。



### 实现目标

- 在所有节点上安装 Docker 和 kubeadm
- 部署 Kubernetes Master

- 部署 Kubernetes Worker
- 使用 Dashboard 插件提供了可视化的 Web 界面



### 前期准备

**接下来开始云服务器内的操作，真正的开始部署 Kubernetes 了。**

> 我的一切操作是在 root 身份下进行。

云服务器一般配置了厂商自家的软件源，新的云服务器可以直接执行以下命令更新：

```sh
$ yum makecache && yum -y update
```

可以安装 vim 和 git，方便接下来的一些操作：

```sh
$ yum install vim git -y
```



### 修改 hostname 和 hosts

```bash
# master节点
$ vim /etc/hostname
# 改成 k8s-master
$ cat /etc/hostname
k8s-master
# 将IP地址指向 hostname
$ vim /etc/hosts
#添加
10.0.0.3 k8s-master
10.0.0.4 k8s-node1
$ cat /etc/hosts | grep k8s
10.0.0.3 k8s-master
10.0.0.4 k8s-node1

#node1节点
$ vim /etc/hostname
# 改成 k8s-node1
$ cat /etc/hostname 
k8s-node1
# 将IP地址指向 hostname
$ vim /etc/hosts
#添加
10.0.0.3 k8s-master
10.0.0.4 k8s-node1
$ cat /etc/hosts | grep k8s
10.0.0.3 k8s-master
10.0.0.4 k8s-node1
```

最后，在两台云服务器相互 `ping` 另一台主机的内网 IP：

```sh
# Master主机的操作
$ ping 10.0.0.4 #node1的内网ip

# Node1主机的操作
$ ping 10.0.0.3 #master的内网ip
```

如果 `ping` 成功，说明已经实现内网互通。



### 配置防火墙

这次部署只是测试环境，为了方便，直接把防火墙关闭，追求安全性可以参考相关文档，开放特定端口。执行下面的命令，关闭防火墙：

```sh
$ systemctl stop firewalld   # 关闭服务
$ systemctl disable firewalld    # 禁用服务
```

### 禁用 SELinux

使用 `vim` 修改 `/etc/selinux/config` ，将 SELINUX 设置为 `SELINUX=disabled` ，然后重启机器。

```sh
# 查看 SELinux的状态
$ sestatus 
SELinux status:                 disabled
```



### 禁用交换分区

通过 `vim` 编辑 `/etc/fstab`，将 swap 注释，然后重启机器。

没有 swap 行的话，忽略这一步。



### 安装 Docker

可以参考这本电子书：[Docker — 从入门到实践](https://yeasy.gitbooks.io/docker_practice/install/centos.html)

- Docker 版本使用的是 `18.09`，Kubernetes 暂时不支持最新版的 Docker 19.x 。
- 我使用的是阿里云的 `yum` Docker 软件源：

``` sh
# 首先安装一些依赖包
$ yum install -y yum-utils device-mapper-persistent-data lvm2

# 添加软件源信息(阿里云)
$ yum-config-manager --add-repo http://mirrors.aliyun.com/docker-ce/linux/centos/docker-ce.repo

# 查看Docker-CE的版本
$ yum list docker-ce.x86_64 --showduplicates | sort -r

# 更新
sudo yum makecache fast

# 我选择了 18.09.9-3.el7 版本安装
$ yum install docker-ce-18.09.9-3.el7 docker-ce-cli-18.09.9-3.el7 containerd.io
```

安装完成后，通过命令 `docker version` 可以查看到 Docker 的版本信息。

建议将 **Docker 镜像源** 更换为国内的，我使用的是阿里云的镜像加速。只要有阿里云的账号，就可以使用。地址在 `阿里云 -> 容器镜像服务 -> 镜像中心 -> 镜像加速器 -> 加速器地址 ` 。

每个人都有专属的镜像加速地址，只需将加速器地址添加到 `/etc/docker/daemon.json` 即可。

```sh
$ sudo mkdir -p /etc/docker
$ cd /etc/docker
$ vim daemon.json
#添加以下内容
{
  "registry-mirrors": ["https://xxxxxxx.mirror.aliyuncs.com"]
}
#每个人的地址不同，上面的只是示范
```

安装配置完成后执行下面的命令

```bash
$ systemctl enable docker
$ systemctl start docker
```

完成后，执行 `docker info` ，在 `Registry Mirrors:` 选项，如果可以看到我们输入的加速器地址，证明配置成功了。



### 安装 Kubernetes

前面一切就绪后，可以开始安装 Kubernetes 了！

#### 添加国内源

Kubernetes 需要访问外网，国内网络的问题，需要在 `yum` 源中添加阿里云的镜像源：

```sh
$ cd /etc/yum.repos.d/
$ vim kubernetes.repo
# 添加以下内容
[kubernetes]
name=Kubernetes
baseurl=http://mirrors.aliyun.com/kubernetes/yum/repos/kubernetes-el7-x86_64
enabled=1
gpgcheck=1
repo_gpgcheck=1
gpgkey=http://mirrors.aliyun.com/kubernetes/yum/doc/yum-key.gpg http://mirrors.aliyun.com/kubernetes/yum/doc/rpm-package-key.gpg
exclude=kube*
```

#### 开始安装

```bash
$ yum install -y kubelet kubeadm kubectl --disableexcludes=kubernetes
$ systemctl enable kubelet && systemctl start kubelet
```

在上述安装的过程中，kubeadm 和 kubelet、kubectl 这几个二进制文件都会被自动安装好。

#### 修改网络配置

```sh
$ vim /etc/sysctl.d/k8s.conf
# 添加以下内容
net.bridge.bridge-nf-call-ip6tables = 1
net.bridge.bridge-nf-call-iptables = 1
$ sysctl --system
```

> **上面所有操作，在 Master 和 Node 主机上都要执行。下面进行的，是 Master 节点的初始化。** 



### 初始化 Master 节点

#### 生成初始化文件

```sh
$ kubeadm config print init-defaults > kubeadm-init.yaml
```

`kubeadm-init.yaml` 文件里有两个地方需要修改：

- 将 `advertiseAddress: 1.2.3.4 `修改为本机的内网IP 地址
- 将 `imageRepository: ` 的 `k8s.gcr.io` 修改为：`registry.cn-hangzhou.aliyuncs.com/google_containers` 

修改完毕的 yaml 文件：

```yaml
apiVersion: kubeadm.k8s.io/v1beta2
bootstrapTokens:
- groups:
  - system:bootstrappers:kubeadm:default-node-token
  token: abcdef.0123456789abcdef
  ttl: 24h0m0s
  usages:
  - signing
  - authentication
kind: InitConfiguration
localAPIEndpoint:
  advertiseAddress: 10.0.0.3
  bindPort: 6443
nodeRegistration:
  criSocket: /var/run/dockershim.sock
  name: k8s-master
  taints:
  - effect: NoSchedule
    key: node-role.kubernetes.io/master
---
apiServer:
  timeoutForControlPlane: 4m0s
apiVersion: kubeadm.k8s.io/v1beta2
certificatesDir: /etc/kubernetes/pki
clusterName: kubernetes
controllerManager: {}
dns:
  type: CoreDNS
etcd:
  local:
    dataDir: /var/lib/etcd
imageRepository: registry.cn-hangzhou.aliyuncs.com/google_containers
kind: ClusterConfiguration
kubernetesVersion: v1.16.0
networking:
  dnsDomain: cluster.local
  serviceSubnet: 10.96.0.0/12
scheduler: {}
```

#### 下载镜像

```sh
$ kubeadm config images pull --config kubeadm-init.yaml
```

下载下来的镜像，都可以通过命令 `docker images` 看到。

#### 初始化

```sh
$ kubeadm init --config kubeadm-init.yaml
```

初始化执行完成后，会输出以下内容：

```sh
Your Kubernetes control-plane has initialized successfully!

To start using your cluster, you need to run the following as a regular user:

  mkdir -p $HOME/.kube
  sudo cp -i /etc/kubernetes/admin.conf $HOME/.kube/config
  sudo chown $(id -u):$(id -g) $HOME/.kube/config

You should now deploy a pod network to the cluster.
Run "kubectl apply -f [podnetwork].yaml" with one of the options listed at:
  https://kubernetes.io/docs/concepts/cluster-administration/addons/

Then you can join any number of worker nodes by running the following on each as root:       
kubeadm join 10.0.0.3:6443 --token abcdef.0123456789abcdef \
    --discovery-token-ca-cert-hash sha256:cb43abf70cbe7b48d107de76dba1a1e0d1b5d25a8bc5df20d766d82eb353df1f
```

其中一条指令：

```sh
kubeadm join 10.0.0.3:6443 --token abcdef.0123456789abcdef \
    --discovery-token-ca-cert-hash sha256:cb43abf70cbe7b48d107de76dba1a1e0d1b5d25a8bc5df20d766d82eb353df1f
```

这个 kubeadm join 命令，就是用来给这个 Master 节点添加更多工作节点（Worker）的命令。我们在后面部署 Worker 节点的时候马上会用到它，所以找一个地方把这条命令记录下来。

此外，kubeadm 还会提示我们第一次使用 Kubernetes 集群所需要的配置命令：

```sh
$ mkdir -p $HOME/.kube
$ sudo cp -i /etc/kubernetes/admin.conf $HOME/.kube/config
$ sudo chown $(id -u):$(id -g) $HOME/.kube/config
```

执行上面这些配置命令的原因是，K8s 集群默认需要加密方式访问，这几条命令是将刚刚部署生成的 Kubernetes 集群的安全配置文件 `admin.conf` ，复制保存到当前用户的 `.kube` 目录里，这样 kubectl 默认会使用这个目录下的授权信息访问 K8s 集群，这样当前用户就可以执行 kubectl 命令：

```sh
$ kubectl get node
NAME         STATUS     ROLES    AGE   VERSION
k8s-master   NotReady   master   11m   v1.16.3
```

k8s-master 的 STATUS 是 `NotReady` ，是因为我们没有部署任何网络插件。

#### 配置网络

下载文件：

```sh
$ wget https://docs.projectcalico.org/v3.8/manifests/calico.yaml
$ cat kubeadm-init.yaml | grep serviceSubnet:
  serviceSubnet: 10.96.0.0/12
```

修改 `calico.yaml` ，将 `192.168.0.0/16` 修改为 `10.96.0.0/12` 。

> calico.yaml 里的 IP 要和 kubeadm-init.yaml 里的 IP 保持一致

执行命令初始化网络：

```sh
$ kubectl apply -f calico.yaml
```

再次通过 kubectl get 查看 node 的信息：

```sh
$ kubectl get node
NAME         STATUS   ROLES    AGE   VERSION
k8s-master   Ready    master   22m   v1.16.3
```

状态变成 `Ready` 了。



### 安装 Dashboard

Dashboard 可以给用户提供一个可视化的 Web 界面来查看当前集群的各种信息。

#### 部署 Dashboard 可视化插件

下载文件：

```sh
$ wget https://raw.githubusercontent.com/kubernetes/dashboard/v2.0.0-beta4/aio/deploy/recommended.yaml
$ kubectl apply -f recommended.yaml 
```

部署完成后，查看 pods 的状态：

```sh
$ kubectl get pods --all-namespaces | grep dashboard
NAMESPACE              NAME                                         READY   STATUS    RESTARTS 
kubernetes-dashboard   dashboard-metrics-scraper-566cddb686-zqqv4   1/1     Running   0          7m38s
kubernetes-dashboard   kubernetes-dashboard-7b5bf5d559-rg2ch        1/1     Running   0          7m38s
```

#### 创建用户

创建一个用于登录 Dashboard 的用户账号，创建文件 `dashboard-adminuser.yaml` ，内容如下：

```yaml
apiVersion: v1
kind: ServiceAccount
metadata:
  name: admin-user
  namespace: kube-system
---
apiVersion: rbac.authorization.k8s.io/v1
kind: ClusterRoleBinding
metadata:
  name: admin-user
roleRef:
  apiGroup: rbac.authorization.k8s.io
  kind: ClusterRole
  name: cluster-admin
subjects:
- kind: ServiceAccount
  name: admin-user
  namespace: kube-system
```

完成后执行命令：

```sh
$ kubectl apply -f dashboard-adminuser.yaml
```

#### 生成证书

```sh
$ grep 'client-certificate-data' ~/.kube/config | head -n 1 | awk '{print $2}' | base64 -d >> kubecfg.crt
$ grep 'client-key-data' ~/.kube/config | head -n 1 | awk '{print $2}' | base64 -d >> kubecfg.key
$ openssl pkcs12 -export -clcerts -inkey kubecfg.key -in kubecfg.crt -out kubecfg.p12 -name "kubernetes-client"
```

第三条命令生成证书的时候会提示输入密码，我选择两次回车直接跳过。

`kubecfg.p12` 文件可以存放在 `~/.kube` 里。

`kubecfg.p12` 是需要导入客户端PC机器的证书，通过 `scp` 命令：

```sh
$ scp root@{master节点的ip}:/root/.kube/kubecfg.p12
```

然后在PC端，安装 `kubecfg.p12` 文件。

通过浏览器，登录 Dashboard 面板，访问的地址：`https://{k8s-master-ip}:6443/api/v1/namespaces/kubernetes-dashboard/services/https:kubernetes-dashboard:/proxy/#/login` ，登录时可能是一个不安全链接，需要选择继续访问，然后浏览器会提示选择证书，确认将会进入登录界面。

> 如果没有跳出验证证书的窗口，需要关闭浏览器，重新打开输入地址。

![Dashboard-login](https://yijiu-blog.oss-cn-hongkong.aliyuncs.com/images/cloudnative/k8s/setup/Dashboard-login.png?x-oss-process=style/blog-image)

选择 **Token** 方式登录，执行`kubectl -n kube-system describe secret $(kubectl -n kube-system get secret | grep admin-user | awk '{print $1}')` , 获取 **Token** 。

复制得到的 token到页面里输入，点击登录即可，效果如下：

![Dashboard](https://yijiu-blog.oss-cn-hongkong.aliyuncs.com/images/cloudnative/k8s/setup/Dashboard.png?x-oss-process=style/blog-image)



### 添加 Worker 节点

Worker 节点的操作从 `准备工作` 到 `配置网络` 步骤不变，现在开始部署 Worker 节点。

K8s 的 Worker 节点和 Master 节点几乎是相同的，它们运行着的都是一个 kubelet 组件。

唯一区别就是，在 kubeadm init 的过程中，kubelet 启动后，Master 节点上还会自动运行 `kube-apiserver` 、`kube-scheduler` 、`kube-controller-manger` 、这三个系统 Pod。

Worker 节点完成 `kubeadm` 和 `Docker` 的安装后，执行部署 Master 节点时生成的 `kubeadm join` 指令，在 Worker 节点执行下面命令(Master节点初始化时生成)：

```sh
$ kubeadm kubeadm join 10.0.0.3:6443 --token abcdef.0123456789abcdef \
    --discovery-token-ca-cert-hash sha256:cb43abf70cbe7b48d107de76dba1a1e0d1b5d25a8bc5df20d766d82eb353df1f
```

执行完毕后，在 Master 节点 执行命令 `kubectl get nodes` 查看所有节点状态：

```sh
$ kubectl get nodes
k8s-master   Ready    master   23h    v1.16.3
k8s-node1    Ready    <none>   2m2s   v1.16.3
```

在 Dashboard 面板也可以查看到：

![Dashboard-nodes](https://yijiu-blog.oss-cn-hongkong.aliyuncs.com/images/cloudnative/k8s/setup/Dashboard-nodes.png?x-oss-process=style/blog-image)



### 小结

至此，我从0开始，在云服务器环境下，使用 kubeadm 工具部署了一个Kubernetes 集群，这个集群有一个  Master 节点和一个 Worker 节点，Worker 节点后续还可以扩充。



#### 参考文档

- [https://kubernetes.io](https://kubernetes.io/)

- [Dashboard](https://github.com/kubernetes/dashboard)
- [跟着官方文档从零搭建K8S](https://blog.piaoruiqing.com/2019/09/17/kubernetes-1-installation/#Kubernetes) （大部分步骤参考此文章）

- [极客时间 - 深入剖析Kubernetes](https://time.geekbang.org/column/intro/100015201)

