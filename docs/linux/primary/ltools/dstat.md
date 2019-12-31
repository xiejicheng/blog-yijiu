## dstat

**dstat 介绍：**

> dstat命令是一个用来替换vmstat、iostat、netstat、nfsstat和ifstat这些命令的工具，是一个全能系统信息统计工具。

dstat 拥有彩色的界面，可以实时地查看多种系统资源的数据。dstat 还支持即时刷新，输入 `dstat 2` 每隔 2s 收集一次数据。

dstat 以列表形式提供数据信息以某种幅度和单位显示输出，dstat 不仅可以实时查看系统资源，还可以将数据输出到 CSV 文件中，导入到 Excel 生成表格。

dstat 支持实时显示统计信息，适用于分析排查故障，监控设备。它由 python 编写，具有扩展性。时间精度高，彩色界面显示。

![dstat](https://yijiu-blog.oss-cn-hongkong.aliyuncs.com/images/linux/primary/ltools/dstat.png?x-oss-process=style/blog-image)

**下载安装**

```sh
# CentOS7
$ yum install -y dstat

#Ubuntu
$ sudo apt-get install dstat
```



### 输出分组

|   分组   |                             含义                             |
| :------: | :----------------------------------------------------------: |
| CPU 状态 | CPU 的适用率。显示了用户占比(usr)，系统占比(sys)，空闲占比(idl)，等待占比(wai)，硬中断(hiq)、软中断(siq)情况。 |
| 磁盘统计 |         磁盘读写，显示磁盘的读(read)、写(writ)总数。         |
| 网络统计 | 网络设备发送和接受的数据，显示网络收(recv)、发(send)数据总数。 |
| 分页统计 |           系统分页活动。显示换入(in)、换出(out)。            |
| 系统统计 |               统计中断(int)和上下文切换(csw)。               |

**分页**指的是一种内存管理技术用于查找系统的场景，分页值大表示系统正在大量使用交换空间，说明内存非常分散。

**中断(int)和上下文切换(csw)** 这项统计得有比较基线时才有意义。较高的统计值表示大量的进程造成拥塞，需要额外关注 CPU项。



### 常用参数

> You did not select any stats, using -cdngy by default.
>
> 直接输入 dstat 命令，默认使用 `-cdngy` 参数。



- `-c` ：显示 CPU 系统占用，有用户占用、系统、空闲、等待、硬中断、软中断等占用信息。
- `-C` ：存在多个 CPU 时，可以按需显示不同 CPU 的状态。例 `-C 0,1` 显示cpu0和cpu1的信息。
- `-d` ：显示磁盘读写数据大小。
- `--fs` ：开启文件系统统计(open files，inodes)
- `-n` ：显示网络状态。
- `-N eth1,total` ：存在多块网卡时，指定监控的网卡。
- `-l` ：显示系统负载情况(load-avg)。
- `--lock` ：文件统计(posix，flock，read，write)
- `-m` ：显示内存使用情况。
- `-g` ：显示页面使用情况。
- `-p` ：显示进程的状态。
- `-s` ：显示交换分区使用情况。
- `-r` ：I/O 请求情况。(`--io`)
- `-y` ：系统状态。
- `--ipc` ：显示ipc消息队列，信号等信息。
- `--socket` ：显示网络统计数据。
- `--tcp` ：显示 TCP 连接信息。
- `--udp` ：显示 UDP 连接信息。

- `-a` ：默认选项，等同于：`-cdngy` 。
- `--output` ：把状态信息以csv的格式重定向到指定的文件中，例如 `dstat --output /root/dev/dstat.scv &` 。

- `-t` ：显示时间与日期。
- `--list` ：显示内置插件名称。
- `-–nocolor ` ：不显示颜色。 

- `--float` ：输出强制显示为浮点数。
- `--integer` ：输出强制显示为整数值。



### 插件

dstat 的强大也体现在**插件**使用上，扩展了许多功能。

插件存储在 `/usr/share/dstat` 。

**常用插件：**

- `--disk-util` ：显示某一时间磁盘的忙碌情况。
- `--freespace` ：显示当前磁盘空间使用率。
- `--proc-count` ：显示正在运行的程序数量。
- `--top-bio` ：显示消耗块I/O最大的进程。

- `-–top-cpu` ：图形化显示CPU占用最大的进程。
- `--top-cputime` ：显示使用CPU时间最大的进程(单位ms)。
- `-top-cputime-avg` ：显示使用CPU时间平均最大的进程(单位ms)。

- `-–top-io` ：显示正常 I/O 最大的进程。
- `--top-mem` ：显示占用最多内存的进程。
- `--top-oom` ：显示第一个被 OMM 结束的进程。

dstat 还有支持监控 Mysql 的插件。



#### 参考资料

- [Linux命令大全 - dstat命令](https://man.linuxde.net/dstat)

- [Linux终端下 dstat 监控工具](https://linux.cn/article-3215-1.html)

- [dstat 源码](https://github.com/dagwieers/dstat/blob/master/dstat#L602)

