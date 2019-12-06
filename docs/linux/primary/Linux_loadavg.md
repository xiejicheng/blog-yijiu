## Linux loadavg

定义：特定时间间隔内运行队列中平均的进程数，进程数由内核统计得来。
> `top` 、`w` 、`uptime` 等命令可以查看 Linux loadavg 
> load 是从 `/proc/loadavg` 中读取的。
> 显示的三个数值是 1min、5min、15min的平均负载。

### 运行队列（Run Queue）
`runqueue` 的数据结构定义了许多内容，每个CPU的核上都会维护一个 `runqueue`数据结构。 其中的 `nr_running` 和 `nr_uninterruptible`分别放了这个CPU核上处于 R 状态和 D 状态的进程数量。
- R：正在运行的和准备就绪的等待运行的进程（running&runnable）
- D：不可中断的进程(I/O)(uninterruptible)

不可中断进程：
- 此进程不在CPU执行指令，但是它还是占用着CPU。
- 进程在做其他事，一般是磁盘I/O。
- 不可中断是因为所在的事很重要，打断得话后果很严重，如进程在读取磁盘数据，打断的话可能会导致数据不一致。

**运行队列是内核为每个CPU核维护的一个数据结构。**
**运行队列里包含了 R 状态的进程和 D 状态的进程。**

loadavg 在 Linux 里面写死了会计算 3 个数值，分别是 1min, 5min, 15min 的 loadavg 结果。

> 不能仅靠 loadavg 判断系统性能指标，还得查看其他得参数，综合判断。

