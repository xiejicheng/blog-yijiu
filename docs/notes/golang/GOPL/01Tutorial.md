## 入门

学习GO语言基本组件。

本章涉及简单的文件处理、图像处理、互联网客户端、服务端并发。



### Hello, World

```go
// helloworld.go
package main

import "fmt"

func main() {
    fmt.Println("Hello, World")
}
```

Go 是编译型语言，Go 的工具链将源代码及其依赖转换成计算机的机器指令(静态编译)。

`go run ` 命令编译一个或多个以 `.go` 结尾的源文件、链接库文件，然后运行生成的可执行文件。

```sh
$ go run helloworld.go
```

输出：

```sh
Hello, World
```

Go语言原生支持Unicode。

仅编译程序，生成可执行程序（二进制文件），可以用 `build  `子命令。

```sh
$ go build helloworld.go
```

```sh
$ ./helloworld
Hello, World
```

[源代码](https://github.com/adonovan/gopl.io/)

Go语言代码通过**包（package）**组织，包类似其他语言里的库（libraries）或者模块（modules）。

一个包由位于单个目录下的一个或多个 `.go`  源代码文件组成，目录定义包的作用。

每个源文件以一条 `package` 声明语句开始，**表示该文件属于哪个包**。

接下来就是导入（import）一系列的包。

然后是程序语句。

`fmt` 包含有格式化输出、接收输入的函数。`Println` 函数可以打印以空格间隔的一个或多个值，并在最后添加一个**换行符**。

`main` 包比较特殊。它定义了一个独立可执行的程序，而不是一个库。

缺少了必要的包或者导入了不需要的包，程序都无法编译通过。



### 命令行参数

`os` 包提供了与操作系统交互的函数和变量。程序的命令行参数从 os 包的 Args 变量获取——os 包外部使用 os.Args 访问该变量。





