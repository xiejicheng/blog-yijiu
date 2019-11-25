## Linux 网络管理

 <center>
     <div>
         <span>
             <img src="../../.vuepress/public/img/作者.svg" width="20px">
             ：yijiu &emsp;&emsp;
         </span>
        &emsp;
         <span>
             <img src="../../.vuepress/public/img/时间.svg" width="20px">
             ：2019.11.01 &emsp;&emsp;
         </span>
         &emsp;
         <span>
             <img src="../../.vuepress/public/img/标签.svg" width="20px">
             ：Linux &emsp;&emsp;
         </span>
     </div>
 </center>

---

### 网络状态查看
> **net-tools and iproute**
> net-tools是centos6产物|iproute是centos7产物
#### net-tools
- ifconfig
  - eth0 第一块网卡（网络接口）
  - eno1 板载网卡
  - ens33 PCI-E网卡
  - enp0s3 无法获取物理信息的 PCI-E 网卡
  - CentOS 7 使用了一致性网络设备命名，以上都不匹配则使用 eth0
- route
- netstat
#### iproute2
- ip
- ss



#### 查看网络情况
- 查看网卡物理连接情况
  - mii-tool eth0
- 查看网关
  - route -n
  - 使用 -n 参数不解析主机名



### 网络配置
#### 网络配置命令
- ifconfig <接口> <IP地址> [netmask 子网掩码]
- ifup <接口> #启动网卡
- ifdown <接口> #关闭网卡

#### 添加网关
- route add default gw <网关ip>
- route add -host <指定ip> gw <网关ip>
- route add -net <指定网段> netmask <子网掩码> gw <网关ip>

#### ip命令
- ip addr ls
  - ifconfig
- ip link set dev eth0 up
  - ifup eth0
- ip addr add 10.0.0.1/24 dev eth1
  - ifconfig eth1 10.0.0.1 netmask 255.255.255.0
- ip route add 10.0.0/24 via 192.168.0.1
  - route add -net 10.0.0.0 netmask 255.255.255.0 gw 192.168.0.1

### 路由命令



### 网络故障排除
<a data-fancybox title="1.4.2系统抽象层" href="https://yijiu-blog.oss-cn-hongkong.aliyuncs.com/images/booknotes/itcs/CH01/1.4.2%E7%B3%BB%E7%BB%9F%E6%8A%BD%E8%B1%A1%E5%B1%82.png?x-oss-process=style/blog-image">![1.4.2系统抽象层](https://yijiu-blog.oss-cn-hongkong.aliyuncs.com/images/booknotes/itcs/CH01/1.4.2%E7%B3%BB%E7%BB%9F%E6%8A%BD%E8%B1%A1%E5%B1%82.png?x-oss-process=style/blog-image)</a>


### 网络服务管理


### 常用网络配置文件

