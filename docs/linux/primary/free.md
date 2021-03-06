## free 命令 - 查看内存使用情况

`free` 命令用于显示系统中物理上的空闲和已用内存、交换内存。还可以显示被内核使用的缓冲和缓存。

> 上面所提的信息都是通过文件 `/proc/meminfo` 收集到的。

常用参数：

|  -b  |                    以Byte显示内存使用情况                    |
| :--: | :----------------------------------------------------------: |
|  -k  |                  以kb为单位显示内存使用情况                  |
|  -m  |                  以mb为单位显示内存使用情况                  |
|  -g  |                  以gb为单位显示内存使用情况                  |
|  -s  |                         持续显示内存                         |
|  -t  |                       显示内存使用总合                       |
|  -h  | 以合适的单位显示内存使用情况，最大为三位数，自动计算对应的单位值 |

```bash
free -m
```

![1570284997252](https://yijiu-blog.oss-cn-hongkong.aliyuncs.com/images/linux/primary/free/free-m.png?x-oss-process=style/blog-image)

```bash
free -h
```

![1570285125144](https://yijiu-blog.oss-cn-hongkong.aliyuncs.com/images/linux/primary/free/free-h.png?x-oss-process=styimagele/blog-image)

```bash
free -h -s 3 # 每隔3s输出一次内存使用情况
```

![1570285217610](https://yijiu-blog.oss-cn-hongkong.aliyuncs.com/images/linux/primary/free/free-h-s-3.png?x-oss-process=style/blog-image)

### free 输出内容

- **Mem**：内存使用情况。
- **Swap**：交换空间使用情况。
- **total**：显示系统总的物理内存和交换空间。
- **used**：显示已经被使用的物理内存和交换空间。
- **free**：显示还有多少物理内存和交换空间可使用。
- **shared**：显示被共享使用的物理内存大小。
- **buff/cache**：显示被 `buffer` 和 `cache` 使用的物理内存大小。
- **available**：显示还可以被应用程序使用的物理内存大小。

