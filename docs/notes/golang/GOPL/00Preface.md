## 前言

学习 [《The Go Programming Language》](http://gopl.io/) 笔记。

中文版：[Go语言圣经（中文版）](http://github.com/golang-china/gopl-zh)

Go开源地址：https://golang.org/pkg 



#### Golang 安装

Linux平台

- 下载Linux版本的 tar.gz 包 [地址](https://studygolang.com/dl)，服务器使用 `wget` 下载。

- 解压：`tar -xvzf go1.12.2.linux-amd64.tar.gz -C /usr/local` 

- 设置环境变量，添加到`~/.bashrc` 中。

  ```sh
  $ cd ~
  $ mkdir mygo
  $ export GO_INSTALL_DIR=/usr/local/
  $ export GOROOT=$GO_INSTALL_DIR/go
  $ export GOPATH=$HOME/mygo
  $ export PATH=$GOPATH/bin:$PATH:$GO_INSTALL_DIR/go/bin
  ```

- 检查 `go version`

- 创建 `$GOPATH/src` 目录

  ```sh
  $ mkdir -p $GOPATH/src
  ```

  

