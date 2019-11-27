## 快速安装 Docker

### Ubuntu

#### 卸载旧版本 Docker

```sh
$ sudo apt-get remove docker \
               docker-engine \
               docker.io
```

#### 安装

```sh
# 更新缓存
$ sudo apt-get update

# 安装必要的系统工具
$ sudo apt-get -y install apt-transport-https ca-certificates curl software-properties-common

# 写入软件源信息（阿里云）
$ curl -fsSL http://mirrors.aliyun.com/docker-ce/linux/ubuntu/gpg | sudo apt-key add -

# 写入软件源信息
$ sudo add-apt-repository "deb [arch=amd64] http://mirrors.aliyun.com/docker-ce/linux/ubuntu $(lsb_release -cs) stable"

# 更新并安装 Docker-CE
$ sudo apt-get -y update
$ sudo apt-get -y install docker-ce
```

#### 安装指定版本Docker

```sh
# 查找Docker-CE的版本:
$ sudo apt-get -y update
$ apt-cache madison docker-ce

# 安装指定版本的Docker-CE:
$ sudo apt-get -y install docker-ce=[VERSION]
```

#### 启动 Docker CE

```sh
$ sudo systemctl enable docker
$ sudo systemctl start docker
```

#### 镜像加速器

安装完毕，并启动 Docker 后，在 `/etc/docker/daemon.json` 中写入以下内容（如果文件不存在请自行新建文件）：

```json
{
  "registry-mirrors": [
    "https://reg-mirror.qiniu.com",
  ]
}
```

> https://reg-mirror.qiniu.com 为七牛云加速服务，阿里云加速服务需要登录账号在容器镜像服务里获取地址。

### CentOS7

#### 卸载旧版本 Docker

```sh
$ sudo yum remove docker \
                  docker-client \
                  docker-client-latest \
                  docker-common \
                  docker-latest \
                  docker-latest-logrotate \
                  docker-logrotate \
                  docker-selinux \
                  docker-engine-selinux \
                  docker-engine
```

#### 安装

```sh
# 安装必要的系统工具
$ sudo yum install -y yum-utils device-mapper-persistent-data lvm2

# 添加软件源信息
$ sudo yum-config-manager --add-repo http://mirrors.aliyun.com/docker-ce/linux/centos/docker-ce.repo

# 更新并安装 Docker-CE
$ sudo yum makecache fast
$ sudo yum -y install docker-ce
```

#### 安装指定版本Docker

```sh
# 查找Docker-CE的版本:
$ sudo yum makecache fast
$ yum list docker-ce.x86_64 --showduplicates | sort -r

# 安装指定版本的Docker-CE: 
$ sudo yum -y install docker-ce-[VERSION]
```

#### 启动 Docker CE

```sh
$ sudo systemctl enable docker
$ sudo systemctl start docker
```

#### 镜像加速器

安装完毕，并启动 Docker 后，在 `/etc/docker/daemon.json` 中写入以下内容（如果文件不存在请自行新建文件）：

```json
{
  "registry-mirrors": [
    "https://reg-mirror.qiniu.com",
  ]
}
```

> https://reg-mirror.qiniu.com 为七牛云加速服务，阿里云加速服务需要登录账号在容器镜像服务里获取地址。

### 其他

检查是否安装完成：

```sh
$ docker version
```

#### 阿里云 - 容器镜像服务

只要有阿里云的账号，就可以使用。地址在 `阿里云 -> 容器镜像服务 -> 镜像中心 -> 镜像加速器 -> 加速器地址` 。

每个人都有专属的镜像加速地址，只需将加速器地址添加到 `/etc/docker/daemon.json` 即可。

#### 参考资料

- [云栖社区文章 - Docker CE 镜像源站](https://yq.aliyun.com/articles/110806?spm=5176.8351553.0.0.5ff91991rQ1Qok)

- [安装 Docker](https://yeasy.gitbooks.io/docker_practice/install/) 