## 文件查找之 find 命令

> find 命令可以根据给定的路径和表达式查找的文件或目录。
>
> find 命令参数很多，支持正则和管道。

#### 语法格式

**`find [路径] [选项] [操作]`**

#### 选项

|      选项       |            含义            |
| :-------------: | :------------------------: |
|      -name      |       根据文件名查找       |
|      -perm      |      根据文件权限查找      |
|     -prune      | 该选项可以排除某些查找目录 |
|      -user      |      根据文件属主查找      |
|     -group      |      根据文件属组查找      |
| -mtime -n \| +n |    根据文件更改时间查找    |

|         选项         |                    含义                     |
| :------------------: | :-----------------------------------------: |
|       -nogroup       |            查找无有效属主的文件             |
|       -nonser        |            查找无有效属组的文件             |
| -newer file1 ! file2 | 查找更改时间比 file1 新但比 file2 旧IDE文件 |
|        -type         |               按文件类型查找                |
|     -size -n +n      |               按文件大小查找                |
|     -mindepth n      |            从 n 级子目录开始搜索            |
|     -maxdepth n      |            最多搜索到 n 级子目录            |

### 常用选项

**`-name`**

根据文件名查找。

```sh
# 查找 /etc 目录下以conf结尾的文件
$ find /etc -name '*.conf'
```

`-iname` 

忽略大小写。

```bash
$ fund ./ -iname 'abc'
./ABC
./ABc
./Abc
./abc
$
```

**`-user`**

根据文件属主查找。

```sh
# 查找文件属主为 yijiu 的所有文件
$ find . -user yijiu
```

**`-group`**

根据文件属组查找。

```sh
# 查找文件属组为elastic的所有文件
$ find . -group elastic
```

**`-type`**

按文件类型查找。

- `f` ：文件  -  `find . -type f `
- `d` ：目录
- `c` ：字符设备文件
- `b`：块设备文件
- `l` ：链接文件
- `p` ：管道文件

**`-size`**

按文件大小查找。

- `-n` ：小于大小为n的文件
- `+n` ：大于大小为n的文件

```sh
# 查找/etc目录下小于1000字节的文件
$ find /etc -size -1000c
```

```sh
# 查找/etc目录下大于1M的文件
$ find /etc -size +1M
```

**`-mtime`**

根据文件的更改时间查找。

- `-n` ：n天以内修改的文件
- `+n` ：n天以外修改的文件
- `n`   ：正好n天修改的文件

```sh
# 查找/etc目录下5天之内修改且以conf结尾的文件
$ find /etc -mtime -5 -name '*.conf'
```

```sh
# 查找/etc目录下10天之前修改且属主为root的文件
$ find /etc -mtime +10 -user root
```

`-mmin`

- `-n` ：n分钟以内修改的文件
- `+n` ：n分钟以外修改的文件

```sh
# 查找/etc目录下30分钟之前修改的文件
$ find /etc -mmin +30
```

```sh
# 查找/etc目录下30分钟之内修改的目录
$ find /etc -mmin -30 -type d
```

`-atime`

根据文件的访问时间查找。

**`-mindepth n`**

表示从n级子目录开始搜索。

```sh
$ find /etc -mindepth 2
```

**`-maxdepth n`** 

表示最多搜索到 n-1 级子目录。

```sh
# 在/etc下搜索符合条件的文件，但最多搜索到2级子目录
$ find /etc -maxdepth 3 -name '*.json'
```



### 了解选项

**`-nouser`** 

查找没有属主的用户。

```sh
$ find . -type f -nouser
```

**`-nogroup`**

查找没有属组的用户。

```sh
$ find . -type f -nogroup
```

**`-perm` **

根据文件权限查找。

```sh
$ find . -perm 644
```

**`-prune`**

该选项可以排除某些查找目录，通常和 `-path` 一起使用，用于将特定目录排除在搜索条件之外。

```sh
# 查找当前目录下所有普通文件，但排除test目录
$ find . -path ./etc -prune -o -type f
```

- `-path ./xxx -prune -o` 为一个固定格式

```sh
# 查找当前目录下所有普通文件，但排除 etc 和 opt 目录
$ find . -path ./etc -prune -o -path ./opt -prune -o -type f
```

```sh
# 查找当前目录下所有普通文件，但排除 etc 和 opt 目录，但属主为yijiu
$ find . -path ./etc -prune -o -path ./opt -prune -o -type f -a -user yijiu
```

```sh
# 查找当前目录下所有普通文件，但排除 etc 和 opt 目录，但属主为yijiu，且文件大小必须大于500字
$ find . -path ./etc -prune -o -path ./opt -prune -o -type f -a -user yijiu -a -size +500c
```

`-newer file1`

查找比 file1 新的文件。



### 操作查找结果

`-print`

打印输出。

**`-exec`**

对搜索到的文件执行特定的操作，格式为 `-exec 'command' {} \;` 

`{}` 表示查询到的结果，`\;` 为固定结尾格式。

```sh
# 搜索/etc下的文件(非目录)，文件名以.conf结尾，且大于10k，然后将其删除
$ find ./etc/ -type f -name '*.conf' -size +10k -exec rm -f {} \;
```

```sh
# 将/var/log目录下以log结尾且更改时间在7天以上的文件删除
$ find ./var/log/ -name '*.log' -mtime +7 -exec rm -rf {} \;
```

```sh
# 搜索/etc下的文件(非目录)，文件名以.conf结尾，且大于10k，将其复制到/root/conf目录下
$ find ./etc/ -size +10k -type f -name '*.conf' -exec cp {} /root/conf/ \;
```

`-ok` 

`-ok`  和  `-exec` 功能一样，只是每次操作都会给用户提示（rm命令提示是否删除）。



### 逻辑运算符

- `-a` ：与
  - -a 在多个选项之间默认存在
- `-o` ：或
- `-not | !` ：非

```sh
# 查找当前目录下，属主不是yijiu的所有文件
$ find . -not -user yijiu 
$ find . ! -user yijiu
```

```sh
# 查找当前目录下，属主属于yijiu，且大小大于300字节的文件
$ find . -type f -a -user yijiu -a -size +300c
```

```sh
# 查找当前目录下的属主为yijiu或者以json结尾的普通文件
$ find . -type f -a \( -useryijiu -o -name '*.json' \)
```

