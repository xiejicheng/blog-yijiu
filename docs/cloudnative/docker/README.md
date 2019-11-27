## Docker

![](https://yijiu-blog.oss-cn-hongkong.aliyuncs.com/images/cloudnative/docker/docker.png?x-oss-process=style/blog-image)

### 什么是 Docker

**Docker** 是使用 Go 语言开发，基于 Linux 内核的 `namespace` 和 `cgroup` 技术和 AUFS 类的 Union FS 等技术，对**进程**进行封装隔离，属于操作系统层面的虚拟化技术。

由于 Docker 隔离的进程独立于宿主和其他隔离的进程，所以其也称为容器。

Docker 的火热，使其成为容器的代名词。

Docker 是一个开源工具，它可以将应用打包成一个标准格式的镜像，并以容器的方式运行。

Docker 容器将一系列软件打包在一个完整的**文件系统**中，这个文件系统包含应进程运行所需要的一切：代码、运行时工具、系统工具、系统依赖等。



#### Docker 架构图

![](https://docs.microsoft.com/en-us/virtualization/windowscontainers/deploy-containers/media/docker-on-linux.png)

- `runc` 是一个Linux 命令行工具，用于根据 [OCI容器运行时规范](https://github.com/opencontainers/runtime-spec) 创建和运行容器。
- `containerd` 是一个守护程序，它管理容器生命周期，提供了在一个节点上执行容器和管理镜像的最小功能集。

Docker 在容器的基础上，对文件系统、网络、进程隔离等做了进一步地封装。

Docker 利用 **Linux Namespace** 完全隔离工作环境中的一系列资源，比如进程树、网络接口、挂载点、用户ID等，与用户空间、其他实例隔离开。

Docker 利用 **Cgroups** 对资源进行分配与控制，可以限制 CPU、内存、存储、网络等资源。

Docker 技术比虚拟机技术更为轻便、快捷。

`传统虚拟机技术` 是虚拟化出一套硬件，在其之上运行一个完整的操作系统，再在该操作系统上运行应用进程。

`容器` 内的应用进程之间运行于宿主的内核，容器自己没有内核，所有的容器会共享一个 Kernel ，也不需要硬件虚拟，因此容器比传统虚拟机更加轻便。

### 为什么要使用 Docker

- 更高效的利用系统资源
- 更加快速的启动时间
- 一致的运行环境
- 持续交付与部署
- 更轻松的迁移
- 更轻松的维护和扩展
- 分层存储，提高存储效率



#### 容器对比传统虚拟机

|    特性    |        容器        |   虚拟机   |
| :--------: | :----------------: | :--------: |
|    启动    |        秒级        |   分钟级   |
|  硬盘使用  |         MB         |     GB     |
|    性能    |      接近原生      |    弱于    |
| 系统支持量 | 单机支持上千个容器 | 一般几十个 |

### Docker 的三大概念

- 镜像（Image）
- 容器（Container）
- 仓库（Repository）

