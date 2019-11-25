## Linux 开机流程

<center>
     <div>
         <span>
             <img src="../../.vuepress/public/img/作者.svg" width="20px">
             ：yijiu &emsp;&emsp;
         </span>
        &emsp;
         <span>
             <img src="../../.vuepress/public/img/时间.svg" width="20px">
             ：2019.10.12 &emsp;&emsp;
         </span>
         &emsp;
         <span>
             <img src="../../.vuepress/public/img/标签.svg" width="20px">
             ：Linux &emsp;&emsp;
         </span>
     </div>
 </center>

---

步骤：
- BIOS：开机主动执行韧体，会识别第一个可开机的装置。
- MBR：第一个可开机装置的第一个扇区内的主要启动记录区块，内存开机管理程序。
- 开机管理程序（boot loader）：一支可读取核心档案来执行的软件。
- 核心档案：开始操作系统的功能。


> 韧体（Firmware）就是介于硬件与软件之间的一种本身具备程序代码的硬件装置。

启动阶段：
- 内核的引导
- 运行 init
- 系统初始化
- 建立终端
- 用户登录系统

init 程序的类型：
- Centos 6 配置文件：`/etc/inittab`、`/etc/init/*.conf`

#### 内核引导
一开始时BIOS开机自检，按照BIOS设置的启动硬盘启动。操作接管硬件后，首先读取 `/boot` 目录下的内核文件。

#### 运行 init
init 进程是操作系统所有进程的起点

Linux 系统的 7 个运行级别（runlevel）:
- 运行级别0：系统停机状态，系统默认运行级别不能设为0，否则不能正常启动
- 运行级别1：单用户工作状态，root权限，用于系统维护，禁止远程登陆
- 运行级别2：多用户状态(没有NFS)
- 运行级别3：完全的多用户状态(有NFS)，登陆后进入控制台命令行模式
- 运行级别4：系统未使用，保留
- 运行级别5：X11控制台，登陆后进入图形GUI模式
- 运行级别6：系统正常关闭并重启，默认运行级别不能设为6，否则不能正常启动
> 一般常用的为 `3` 和 `5` 运行级别。

#### 系统初始化
- 激活交换分区
- 检查磁盘
- 加载硬件模块
- 优先执行的任务

#### 建立终端
init 进程启动后，init  会打开多个终端，便于用户登录。