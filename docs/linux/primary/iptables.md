## iptables 原理

 <center>
     <div>
         <span>
             <img src="../../.vuepress/public/img/作者.svg" width="20px">
             ：yijiu &emsp;&emsp;
         </span>
        &emsp;
         <span>
             <img src="../../.vuepress/public/img/时间.svg" width="20px">
             ：2019.11.02 &emsp;&emsp;
         </span>
         &emsp;
         <span>
             <img src="../../.vuepress/public/img/标签.svg" width="20px">
             ：Linux &emsp;&emsp;
         </span>
     </div>
 </center>

---

### Linux 防火墙

Linux 系统的防火墙功能是由内核实现的

- 2.0版内核中，包过滤机制是 `ipfw` ，管理工具是 `ipfwadm` 
- 2.2版内核中，包过滤机制是 `ipchain` ，管理工具是 `ipchains`
- 2.4内核及以后的内核中，包过滤机制是 `netfilter` ，管理工具是 `iptables`

> 包过滤机制可认为是内核中的程序，管理工具是用户接口（命令行工具），通过管理工具输入一些命令与规则，从而实现过滤。



#### netfilter

- 位于 linux 内核中的包过滤防火墙功能体系
- 工作于内核中，成为 Linux 防火墙的 “内核态”
- 对传输来的数据包拆开检查

#### iptables

- 位于 `/sbin/iptables` ，是用来管理防火墙的命令行工具
- 为防火墙体系提供过滤规则/策略，决定如何过滤或处理到达防火墙主机的数据包
  - 对网络中的数据包通过表的形式进行一些限定和规则的修改
- 称为 Linux 防火墙的 “用户态”

> `netfilter` 工作在 TCP/IP 协议的网络层

```
外部网络(链路层)----->网络防火墙(网络层)----->受保护网络(链路层)
```





### iptables 的四表五链

#### 规则链

- 规则的作用在于对数据包进行过滤或处理，根据处理时机的不同，各种规则被组织在不同的 “链中”
- 规则链是防火墙规则/策略的集合

#### 默认的 5 种规则链

- **INPUT** -> 处理入站的数据包
- **OUTPUT** -> 处理出站的数据包
- **FORWARD** -> 处理转发的数据包（目标ip不是本机）
- **PREROUTING** -> 选择路由前处理数据包（所有包先经过此处，判断包是入站还是转发还是丢弃）
- **POSTROUTING** -> 选择路由后处理数据包（出站和转发的数据包都在此处出去）



#### 规则表

具有某一类**相似**用途的防火墙规则，按照不同处理时机区分到不同的规则链以后，被归置到不同的“表”中，规则表是规则链的集合。

#### 默认的 4 个规则表

- **raw 表** -> 确定是否对该数据包进行状态跟踪
- **mangle 表** -> 为数据包设置标记
- **nat 表** -> 修改数据包中的源、目的 ip 地址或端口
- **filter 表** -> 确定是否放行该数据包（过滤）



#### iptables 命令的语法格式

- iptables [-t 表名] 管理选项 [链名] 条件匹配 -j 执行动作
  - 默认原则：不指定表名时，默认表示 `filter表`
  - 不指定链名时，默认表示该表内所有链
  - 除非设置规则链的缺省策略，**否则需要指定匹配条件**

演示：

```bash
# 禁止192.168.182.10主机访问本机的ssh
$ iptables -t filter -A INPUT -s 192.168.182.10 -p tcp --dport 22 -j DROP

```

查看本机 iptables 所有规则：

```bash
$ iptables -L -n
```

##### 参数说明

|    参数     |                             说明                             |                             示例                             |
| :---------: | :----------------------------------------------------------: | :----------------------------------------------------------: |
|     -F      |                          清空规则链                          |                         iptables -F                          |
|     -L      |                          查看规则链                          |                         iptables -L                          |
|     -A      |                           追加规则                           |                      iptables -A INPUT                       |
|     -D      |                           删除规则                           |                     iptables -D INPUT 1                      |
|     -R      |                           修改规则                           |         iptable -R INPUT 1 -s 192.168.120.0 -j DROP          |
|     -I      |                        在头部插入规则                        |           iptables -I INPUT 1 --dport 80 -j ACCEPT           |
|     -L      |                           查看规则                           |                      iptables -L INPUT                       |
|     -N      |                           新的规则                           |                     iptables -N allowed                      |
|     -V      |                       查看iptables版本                       |                         iptables -V                          |
|     -p      |                     协议（tcp/udp/icmp）                     |                   iptables -A INPUT -p tcp                   |
|     -s      |              匹配原地址，加" ! "表示除这个IP外               |               iptables -A INPUT -s 192.168.1.1               |
|     -d      |                         匹配目的地址                         |              iptables -A INPUT -d 192.168.12.1               |
|   --sport   |                     匹配源端口流入的数据                     |             iptables -A INPUT -p tcp --sport 22              |
|   --dport   |                    匹配目的端口流出的数据                    |             iptables -A INPUT -p tcp --dport 22              |
|     -i      |                    匹配入口网卡流入的数据                    |                  iptables -A INPUT -i eth0                   |
|     -o      |                    匹配出口网卡流出的数据                    |                 iptables -A FORWARD -o eth0                  |
|     -j      | 要进行的处理动作:DROP(丢弃)，REJECT(拒绝)，ACCEPT(接受)，SANT(基于原地址的转换) |         iptable -A INPUT 1 -s 192.168.120.0 -j DROP          |
| --to-source |                     指定SANT转换后的地址                     | iptables -t nat -A POSTROUTING -s 192.168.10.0/24 -j SANT --to-source 172.16.100.1 |
|     -t      |                表名(raw、mangle、nat、filter)                |                       iptables -t nat                        |
|     -m      | 使用扩展模块来进行数据包的匹配(multiport/tcp/state/addrtype) |                    iptables -m multiport                     |

- 对于**filter**来讲一般只能做在3个链上：INPUT ，FORWARD ，OUTPUT

- 对于**nat**来讲一般也只能做在3个链上：PREROUTING ，OUTPUT ，POSTROUTING

- 而**mangle**则是5个链都可以做：PREROUTING，INPUT，FORWARD，OUTPUT，POSTROUTING

#### **详解-j ACTION**

常用的ACTION：

- DROP：悄悄丢弃
  - 一般我们多用DROP来隐藏我们的身份，以及隐藏我们的链表

- REJECT：明示拒绝

- ACCEPT：接受

- custom_chain：转向一个自定义的链

- DNAT：目的地址转换，修改网络包目的ip地址的

- SNAT：修改网络包源ip地址的

- MASQUERADE：源地址伪装

- REDIRECT：重定向：主要用于实现端口重定向

- MARK：打防火墙标记的

- RETURN：返回
  - 在自定义链执行完毕后使用返回，来返回原规则链。

