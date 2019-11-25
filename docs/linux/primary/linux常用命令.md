## Linux 常用命令

### 构建块

#### 1.**cat**                       打印文件

​	cat 命令用于连接文件并打印到标准输出设备上。cat可以用来制作镜像文件。

**语法格式:** cat [-AbeEnstTuv] [--help] [--version] fileName

**参数说明**：

​	-n 由1开始对所有输出的行数编号

​	-b 空白行不编号  

**实例**

​	把 textfile1 的文档内容加上行号后输入 textfile2 这个文档里（复制）：

​		cat -n textfile1 > textfile2

​	清空 /etc/test.txt 文档内容：

​		清空 /etc/test.txt 文档内容：



#### 2.clear  清除屏幕

​	Linux clear命令用于清除屏幕。

##### **实例**

​	clear



### 比较文件

#### 1.diff       比较文件

​	diff命令用于比较文件的差异。

​	diff以逐行的方式，比较文本文件的异同处。如果指定要比较目录，则diff会比较目录中相同文件名的文件，但不会比较其中子目录。

**参数说明**：

​	<行数> 指定要显示多少行的文本。此参数必须与-c或-u参数一并使用。

​	-a diff预设只会逐行比较文本文件。

​	-c 显示全部内文，并标出不同之处

​	-i 不检查大小写不同

​	-u 以合并的方式来显示文件内容的不同。

**实例：**

​	比较两个文件：

​		diff log2014.log log2013.log 

​	并排格式输出：

​		diff log2014.log log2013.log  -y -W 50



#### 2.comm    比较文件

​	comm命令用于比较两个已排过序的文件。

**语法格式**：

​	comm [-123] [--help] [--version] [第1个文件] [第2个文件]

**参数说明**：

​	-1 不显示只在第1个文件里出现过的列。

​	-2 不显示只在第2个文件里出现过的列。

​	--version 显示版本信息

**实例：**

​	comm aaa.txt bbb.txt 

​	输出的第一列只包含在aaa.txt中出现的行，第二列包含在bbb.txt中出现的行，第三列包含在aaa.txt和bbb.txt中相同的行。



### 目录

#### 1.cd   切换目录

​	cd命令用于切换当前工作目录至 dirName(目录参数)

​	只输入cd，会直接到达home目录下

​	“~”表示home目录，“.”则表示当前所在目录，“..”则表示当前目录的上一层目录

**语法：**

​	cd [dirName]

​	dirName为切换的目标目录

**实例：**

​	跳到 /usr/bin/ :

​		cd /usr/bin

​	跳到自己的home目录：

​		cd ~

​	跳到当前目录的上一层目录：

​		cd ..

​	跳到目前目录的上上两层 :

​		cd ../..



#### 2.chmod   设置权限

​	Linux/Unix 的文件调用权限分为三级 : 文件拥有者、群组、其他。利用 chmod 可以藉以控制文件如何被他人所调用。

**语法：**

​	chmod [-cfvR] [--help] [--version] mode file...

**参数：**

​	r代表可读取，w代表可写入，x代表可执行，X代表只有当该文件是个子目录或者该文件被设定过为可执行。

​	u 表示该文件的拥有者，g 表示与该文件的拥有者属于同一个群体(group)者，o 表示其他以外的人，a 表示这三者皆是。

​	+ 表示增加权限、- 表示取消权限、= 表示唯一设定权限。

**实例：**

​	将文件 file1.txt 设为所有人皆可读取 :

​		chmod a+r file1.txt

​	将 ex1.py 设定为只有该文件拥有者可以执行 :

​		chmod u+x ex1.py

​	此外chmod也可以用数字来表示权限如 :

​		chmod 777 file

​		其中a,b,c各为一个数字，分别表示User、Group、及Other的权限。

​		r=4，w=2，x=1

​		若要rwx属性则4+2+1=7；

​	        若要rw-属性则4+2=6；

​                若要r-x属性则4+1=5。



#### **3.du**   文件/目录大小

​	du命令用于显示目录或文件的大小。

​	du会显示指定的目录或文件所占用的磁盘空间。

**参数：**

​	-b 显示目录或文件大小时，以byte为单位。

​	-s 仅显示总计

​	-h 以K，M，G 为单位，提高信息可读性

**实例：**

​	方便阅读的格式显示test目录所占空间情况：

​		 du -h test



#### 4.file       文件类型

​	 file命令用于辨识文件类型。通过file指令，我们得以辨识该文件的类型。

**语法：**

​	file [-bcLvz] [-f <名称文件>] [-f <文件名字>] [-m <魔法数字文件>...] [文件或目录...]

**参数：**

​	-b 列出辨识结果时，不显示文件名称。

​	-c 详细显示指令执行过程，便于排错或分析程序执行的情形。

​	-z 尝试去解读压缩文件的内容

**实例:**

​	file install.log

​		install.log: UTF-8 Unicode text



#### **5.ls**    显示目录内容

​	 ls命令用于显示指定工作目录下之内容（列出目前工作目录所含之文件及子目录)。

**参数：**

​	-a 显示所有文件及目录 （.文件）

​	-l 除文件名称外，亦将文件型态、权限、拥有者、文件大小等资讯详细列出

​	-t 将文件依建立时间之先后次序列出

​	

#### 6.mkdir   创建目录

​	mkdir命令用于建立名称为 dirName 之子目录。

**段落：**

​	mkdir [-p] dirName

**参数说明**：

​	-p 确保目录名称存在，不存在就建一个

**实例：**

​	在工作目录下，建立一个名为 AAA 的子目录 :	

​		mkdir AAA

​	在工作目录下的 BBB 目录中，建立一个名为 Test 的子目录。 若 BBB 目录原本不存在，则建立一个。（注：本例若不加 -p，且原本 BBB目录不存在，则产生错误。）

​		mkdir -p BBB/Test



#### 7.mv   修改名/移动

​	mv命令用来为文件或目录改名、或将文件或目录移入其它位置。

**语法：**

​	

```shell
mv [options] source dest
mv [options] source... directory
```

**参数说明：**

​	-i 若指定目录已有同名文件，则先询问是否覆盖旧文件;

​	-f 在mv操作要覆盖某已有的目标文件时不给任何指示;

**命令格式：**

​	mv 文件名 文件名   //将源文件名改为目标文件名

​	mv 文件名 目录名   //将文件移动到目标目录

​	mv 目录名 目录名   // 目标目录已存在，将源目录移动到目标目录；不存在则改名

​	mv 目录名 文件名   // 出错

**实例：**

​	将文件 aaa 更名为 bbb :

​		mv aaa bbb

​	将info目录放入logs目录中。注意，如果logs目录不存在，则该命令将info改名为logs。

​		mv info/ logs

​	再如将/usr/student下的所有文件和目录移到当前目录下，命令行为：

​		mv /usr/student/*  . 



#### 8.pwd    查看路径

​	pwd命令用于显示工作目录。执行pwd指令可立刻得知您目前所在的工作目录的**绝对路径**名称。

**语法：**

​	pwd [--help] [--version]

参数（一般不使用参数）

​	--help 在线帮助

​	--version 显示版本信息

**实例：**

​	pwd



#### 9.rm   删除

​	 rm命令用于删除一个文件或者目录。

**语法：**

​	rm [options] name...

**参数：**

​	-i 删除前逐一询问确认

​	-f 即使原档案属性设为唯读，亦直接删除，无需逐一确认。（强制删除）

​	-r 将目录及以下之档案亦逐一删除。（删除目录需要配合选项-r使用）

**实例：**

​	删除文件可以直接使用rm命令，若删除目录则必须配合选项"-r"，例如：

​		rm  -r  homework  

​	删除当前目录下的所有文件及目录，命令行为：

​		rm  -r  * 

文件一旦通过rm命令删除，则无法恢复，所以必须格外小心地使用该命令。



#### 10.rmdir  输出空目录

​	 rmdir命令删除空的目录。

**语法：**

​	rmdir [-p] dirName

**参数：**

​	-p 是当子目录被删除后使它也成为空目录的话，则顺便一并删除

**实例**：

​	将工作目录下，名为 AAA 的子目录删除 :

​		rmdir AAA

​	在工作目录下的 BBB 目录中，删除名为 Test 的子目录。若 Test 删除后，BBB 目录成为空目录，则 BBB 亦予删除。

​		rmdir -p BBB/Test

#### 11.tree  树

​	tree命令用于以树状图列出目录的内容。执行tree指令，它会列出指定目录下的所有文件，包括子目录里的文件。

**语法：**

​	tree [-aACdDfFgilnNpqstux] [-I <范本样式>] [-P <范本样式>] [目录...]

**参数：**

​	-a 显示所有文件和目录

​	-c 在文件目录清单加上色彩，便于区分各种类型

​	-s 列出文件或目录大小（配合-h，显示大小单位）

​	-p 列出权限标识

​	-f 在每个文件或目录前显示完整的相对路径名称

**实例:**

​	以树状图列出当前目录结构。可直接使用如下命令：

​		tree



### 显示数据

#### 1.cat  打印文件

​	(构建块中有详细介绍)



#### 2.echo   字符串输出

​	用于字符串的输出。常用于shell编程中。

**语法：**

​	echo string

**实例：**

​	显示普通字符串：

​		echo "It is a test"        //此句双引号省略，效果也一样

​	显示转义字符

​		echo "\\"It is a test\\""      // 用 \ ”  来显示“

​		结果："It is a test"

​	原样输出字符串，不进行转义或取变量(用单引号)

​		echo '$name\\"'

​		输出结果：$name\\"   

​	显示命令执行结果，这里使用的是反引号 **`**, 而不是单引号 **'**。

```
echo `date`                                    // date 为显示日期的命令
结果： Thu Jul 24 10:08:46 CST 2014            //结果将显示当前日期
```



#### 3.less  浏览文件

​	less 与 more 类似，但使用 less 可以随意浏览文件，而 more 仅能向前移动，却不能向后移动，而且 less 在查看之前不会加载整个文件。

**语法:**

​	less [参数] 文件 

**参数：**

​	-b <缓冲区大小> 设置缓冲区的大小

​	-e 当文件显示结束后，自动离开

​	-m 显示类似more命令的百分比

​	-N 显示行数

​	b 向后翻一页    d向后翻半页

​	h 显示帮助界面

​	Q 退出less 命令

​	空格键 滚动一页

​	回车键 滚动一行

**实例：**

​	查看文件

​		less hello.c

​	ps查看进程信息并通过less分页显示

​		ps -ef |less

​	查看命令历史使用记录并通过less分页显示

​		history | less

​	浏览多个文件

​		less log2013.log log2014.log

​			输入 ：n后，切换到 log2014.log

​			输入 ：p 后，切换到log2013.log



#### 4.more 浏览文件

​	more 命令类似 cat ，不过会以一页一页的形式显示，更方便使用者逐页阅读，而最基本的指令就是按空白键（space）就往下一页显示，按 b 键就会往回（back）一页显示，而且还有搜寻字串的功能（与 vi 相似），使用中的说明文件，请按 h 。

**语法：**

​	more [-dlfpcsu] [-num] [+/pattern] [+linenum] [fileNames..]

**参数**：

​	-num 一次显示的行数

​	+num 从第 num 行开始显示

​	-s 当遇到有连续两行以上的空白行，就代换为一行的空白行

​	q 退出more

​	V 调用vi编辑器

​	空格键 向下滚动一屏

​	= 输出当前行行数

​	Enter 向下n行，默认1行。

**实例：**

​	逐页显示 testfile 文档内容，如有连续两行以上空白行则以一行空白行显示。

​		more -s testfile

​	从第 20 行开始显示 testfile 之文档内容。

​		more +20 testfile

#### 5.which 查找文件
Linux which命令用于查找文件。
which指令会在环境变量$PATH设置的目录里查找符合条件的文件。
**实例：**
​ $ which bash  
​ /bin/bash   

#### 文档资料

#### 1.man  联机帮助

​	**man命令**是Linux下的帮助指令，通过man指令可以查看Linux中的指令帮助、配置文件帮助和编程帮助等信息。

**语法：**

​	man(选项)(参数)

**选项：**

​	-a 在所有的man帮助手册中搜索；

​	-f：等价于whatis指令，显示给定关键字的简短描述信息；

​	数字：指定从哪本man手册中搜索帮助；

​	关键字：指定要搜索帮助的关键字。

**实例：**

man是按照手册的章节号的顺序进行搜索的，比如：		

​	man sleep

​		只会显示sleep命令的手册,如果想查看库函数sleep，就要输入:

​			man 3 sleep

### 编辑

#### Vi/Vim

​	Vim是从 vi 发展出来的一个文本编辑器。代码补完、编译及错误跳转等方便编程的功能特别丰富，在程序员中被广泛使用。

​	基本上 vi/vim 共分为三种模式，分别是**命令模式（Command mode）**，**输入模式（Insert mode）**和**底线命令模式（Last line mode）**。

​	参考网址 <http://www.runoob.com/linux/linux-vim.html>



### 文件

#### 1.chmod  设置权限

​	(目录列表中有详细介绍)



#### 2.cp  复制

​	cp命令主要用于复制文件或目录。

**语法：**

​	cp [options] source dest	

**参数：**

​	-d 复制时保留链接（相当于快捷方式）

​	-f 覆盖已经存在的文件而不给提示

​	-i 与-f相反，覆盖给出提示，用户确定是否覆盖，回答y时目标文件将被覆盖

​	-p 除复制文件的内容外，还把修改时间和访问权限也复制到新文件中。

​	-r 若给出的源文件是一个目录文件，此时将复制该目录下所有的子目录和文件。（目录）

​	-l：不复制文件，只是生成链接文件。

​	-a：此选项通常在复制目录时使用，它保留链接、文件属性，并复制目录下的所有内容。其作用等于dpR参数组合。



**实例：**

​	使用指令"cp"将当前目录"test/"下的所有文件复制到新目录"newtest"下，输入如下命令：

​		cp –r test/ newtest          



#### 3.du  文件/目录大小

​	(目录列表中有详细介绍)



#### 4.find  /查找文件

​	find命令用来**在指定目录下查找文件**。任何位于参数之前的字符串都将被视为欲查找的目录名。如果使用该命令时，不设置任何参数，则find命令将在当前目录下查找子目录与文件。并且将查找到的子目录和文件全部进行显示。

**语法：**

​	find   path   -option   [   -print ]   [ -exec   -ok   command ]   {} \;

**实例：**

​	将目前目录及其子目录下所有延伸档名是 c 的文件列出来。

​		find . -name "*.c"

​	将目前目录其其下子目录中所有一般文件列出

​		find . -type f

​	将目前目录及其子目录下所有最近 20 天内更新过的文件列出

​		find . -ctime -20

​	查找/var/log目录中更改时间在7日以前的普通文件，并在删除之前询问它们：

​		find /var/log -type f -mtime +7 -ok rm {} \;

​	为了查找系统中所有文件长度为0的普通文件，并列出它们的完整路径：

​		find / -type f -size 0 -exec ls -l {} \;

#### 5.In 链接

​	为某一个文件在另外一个位置建立一个同步的链接。

​	当我们需要在不同的目录，用到相同的文件时，我们不需要在每一个需要的目录下都放一个必须相同的文件，我们只要在某个固定的目录，放上该文件，然后在 其它的目录下用ln命令链接（link）它就可以，不必重复的占用磁盘空间。

**语法：**

​	ln [参数] [源文件或目录] [目标文件或目录]

**命令功能：**

​	链接分为硬链接（hard link）和软链接（symbolic link）,硬链接的意思是一个档案可以有多个名称，而软链接的方式则是产生一个特殊的档案，该档案的内容是指向另一个档案的位置。硬链接是存在同一个文件系统中，而软链接却可以跨越不同的文件系统。

​	不论是硬链接或软链接都不会将原本的档案复制一份，只会占用非常少量的磁碟空间。

​	软链接：

​			软链接，以路径的形式存在。类似于Windows操作系统中的快捷方式

​			软链接可以 跨文件系统 ，硬链接不可以

​			软链接可以对一个不存在的文件名进行链接

​			软链接可以对目录进行链接

​	硬链接：

​			硬链接，以文件副本的形式存在。但不占用实际空间。

​			不允许给目录创建硬链接

​			硬链接只有在同一个文件系统中才能创建

**参数：**

​	-b 删除，覆盖以前建立的链接

​	-d 允许超级用户制作目录的硬链接

​	-f 强制执行

​	-i 交互模式，文件存在则提示用户是否覆盖

​	-s 软链接(符号链接)

​	-v 显示详细的处理过程

实例：

​	给文件创建软链接，为log2013.log文件创建软链接link2013，如果log2013.log丢失，link2013将失效：

​		ln -s log2013.log link2013



#### 6.ls 显示目录内容

​	(目录列表中有详细介绍)



#### 7.mv 修改名/目录

​	(目录列表中有详细介绍)



#### 8.rm  删除

​	(目录列表中有详细介绍)



#### 9.touch  新建文件

​	touch命令用于修改文件或者目录的时间属性，包括存取时间和更改时间。若文件不存在，系统会建立一个新的文件。

​	ls -l 可以显示档案的时间记录。

**语法：**

​	touch [-acfm] [-d<日期时间>] [-r<参考文件或目录>]  [-t<日期时间>] [--help]  [--version] [文件或目录…]

**参数：**

​	a 改变档案的读取时间记录

​	m 改变档案的修改时间记录

**实例：**	

​	使用指令"touch"修改文件"testfile"的时间属性为当前系统时间，输入如下命令：

​		touch testfile                #修改文件的时间属性 

​	使用指令"touch"时，如果指定的文件不存在，则将创建一个新的空白文件。例如，在当前目录下，使用该指令创建一个空白文件"file"，输入如下命令：

​		touch file            #创建一个名为“file”的新的空白文件 



### 文件系统

#### 1.df   磁盘使用情况

 	df命令用于显示目前在Linux系统上的文件系统的磁盘使用情况统计。

**语法：**

​	df [选项]... [FILE]...

参数：

​	文件-a, --all 包含所有的具有 0 Blocks 的文件系统

​	文件-h, --human-readable 使用人类可读的格式(预设值是不加这个选项的...)

**实例：**

​	显示文件系统的磁盘使用情况统计：

​		df

​	-h选项，通过它可以产生可读的格式df命令的输出：

​		df -h

​		我们可以看到输出显示的数字形式的'G'（千兆字节），"M"（兆字节）和"K"（千字节）。



#### 2.mount  挂载

​	mount命令是经常会使用到的命令，它用于挂载Linux系统外的文件。

**语法：**

​	mount [-hV]

​	mount -a [-fFnrsvw] [-t vfstype]
​	mount [-fnrsvw] [-o options [,...]] device | dir
​	mount [-fnrsvw] [-t vfstype] [-o options] device dir

**参数：**

​	-V 显示程序版本

​	-h 显示辅助信息

​	-v：显示较讯息，通常和 -f 用来除错。

​	-f：通常用在除错的用途。它会使 mount 并不执行实际挂上的动作，而是模拟整个挂上的过程。通常会和 -v 一起使用。

**实例**

​	将 /dev/hda1 挂在 /mnt 之下。

​		#mount /dev/hda1 /mnt

​	将 /dev/hda1 用唯读模式挂在 /mnt 之下。

​		#mount -o ro /dev/hda1 /mnt



#### 3.umount  卸除文件系统

​	 umount命令用于卸除文件系统。

​	umount可卸除目前挂在Linux目录中的文件系统。

**语法：**

​	umount [-ahnrvV] [-t <文件系统类型>] [文件系统]

**参数：**	

​	-a 卸除/etc/mtab中记录的所有文件系统。

​	-h 显示帮助

​	-n 卸除时不要将信息存入/etc/mtab文件中。

​	-v 执行时显示详细的信息。



**实例**

​	下面两条命令分别通过设备名和挂载点卸载文件系统，同时输出详细信息：	

​		umount -v /dev/sda1          通过设备名卸载  

​		umount -v /mnt/mymount/      通过挂载点卸载  

​	如果设备正忙，卸载即告失败。卸载失败的常见原因是，某个打开的shell当前目录为挂载点里的某个目录：

​		umount -v /mnt/mymount/  



### 登录与注销

#### 1.login 登入系统

​	login命令用于登入系统。

login指令让用户登入系统，您亦可通过它的功能随时更换登入身份。在Slackware发行版中 ，您可在指令后面附加欲登入的用户名称，它会直接询问密码，等待用户输入。当/etc目录里含名称为nologin的文件时，系统只root帐号登入系统，其他用户一律不准登入。

#### 2.passwd  修改密码

​	passwd命令用来更改使用者的密码

**语法**

​	passwd [-k] [-l] [-u [-f]] [-d] [-S] [username]

**参数：**

​	-d 删除密码

​	-f 强制执行

​	-l 停止账户使用

​	-S 显示密码信息

​	 -u 启动已被停止

**实例**	

​	修改用户密码

​		passwd runoob  //设置runoob用户的密码

​		Enter new UNIX password:  //输入新密码，输入的密码无回显
​		Retype new UNIX password:  //确认密码
​		passwd: password updated successfully

​	显示账号密码信息

​		passwd -S runoob

​	删除用户密码

​		passwd -d lx138 



#### 3.halt  关闭系统

​	Linux halt命令关闭系统

参数

​	-n 在关机前不做将记忆体资料写回硬盘的动作

​	-w 并不会真的关机，只是把记录写到 /var/log/wtmp 档案里

​	-d 关闭系统，不留下记录

​	-i 在关机之前先把所有网络相关的装置先停止

​	-p 当关机的时候，顺便做关闭电源（poweroff）的动作

**实例**

​	关闭系统

​		halt

​	关闭系统并关闭电源

​		halt -p

​	关闭系统，但不留下纪录	

​		halt -d

#### 4.reboot 重启计算机

​	（系统工具中有详细介绍）

#### 5.shutdown 关机

​	（系统工具中有详细介绍）

### 进程与作业控制

#### 1.&  各种进程控制

​	**& 放在命令后面表示设置此进程为后台进程**

​	默认情况下，进程是前台进程，这时此进程（命令执行相当于本质是开启一个进程）就把Shell给占据了，我们无法进行其他操作，对于那些没有交互的进程，很多时候，我们希望将其在后台启动，可以在启动参数的时候加一个'&'实现这个目的。

​	**&& 表示前一条命令执行成功时，才执行后一条命令** 

​	**&& 表示前一条命令执行成功时，才执行后一条命令** 

​	**|| 表示上一条命令执行失败后，才执行下一条命令，**

​	**来看>符号是指：将正常信息重定向**

​	**&>可以将错误信息或者普通信息都重定向输出**

#### 2.^Z  中断

​	**Linux命令中Ctrl+z、Ctrl+c和Ctrl+d的区别和使用**

​	Ctrl+c和ctrl+z都是中断命令,但是他们的作用却不一样.

​	Ctrl+c是强制中断程序的执行。

​	Ctrl+z的是将任务中断,但是此任务并没有结束,他仍然在进程中他只是维持挂起的状态。

​	Ctrl+d 不是发送信号，而是表示一个特殊的二进制值，表示 EOF。

#### 3.top  进程动态

​	top命令用于实时显示 process 的动态。

**语法**

​	top [-] [d delay] [q] [c] [S] [s] [i] [n] [b]

**参数说明**:

​	d 改变显示的更新速度

​	s 安全模式

​	c 显示模式

​	-S 累计模式，累计消失的子进程

​	n 更新的次数，完成后会退出top

**实例**

​	显示进程信息

​		top

​	以累积模式显示程序信息

​		top -S

​	设置信息更新次数

​		top -n 2     //表示更新两次后终止更新显示

​	设置信息更新时间	

​		 top -d 3       //表示更新周期为3秒

​	显示指定的进程信息

​		 top -p 139     //显示进程号为139的进程信息，CPU、内存占用率等



#### 4.kill  删除执行

​	 kill命令用于删除执行中的程序或工作。

​	kill可将指定的信息送至程序。预设的信息为SIGTERM(15)，可将指定程序终止。若仍无法终止该程序，可使用SIGKILL(9)信息尝试强制删除程序。程序或工作的编号可利用ps指令或jobs指令查看。

**语法**

​	kill [-s <信息名称或编号>] [程序]　或　kill [-l <信息编号>]

**参数：**

​	-l <信息编号> 　若不加<信息编号>选项，则-l参数会列出全部的信息名称。



#### 5.nice   优先序来执行程序

​	nice命令以更改过的优先序来执行程序，如果未指定程序，则会印出目前的排程优先序，内定的 adjustment 为 10，范围为 -20（最高优先序）到 19（最低优先序）。

**语法：**

​	nice [-n adjustment] [-adjustment] [--adjustment=adjustment] [--help] [--version] [command [arg...]]

**实例**

​	

```
# vi & //后台运行
[1] 15297
# nice vi & //设置默认优先级
[2] 15298
```

​	将 ls 的优先序加 1 并执行

​		nice -n 1 ls

​	将 ls 的优先序加 10 并执行（默认10）

​		nice ls



#### 6.ps  进程状态

​	ps命令用于显示当前进程 (process) 的状态。

**语法**

​	ps [options] [--help]

**参数**

​	-A 列出所有进程

​	-aux 显示所有包含其他使用者的行程

​	%CPU: 占用的 CPU 使用率

**实例**

​	ps -A 显示进程信息

​	显示指定用户信息

​		ps -u root //显示root进程用户信息

​	显示所有进程信息，连同命令行

​		ps -ef //显示所有命令，连带命令行



### shell

#### 1.!

​	shell 中！叫做事件提示符，英文是：Event Designators,可以方便的引用历史命令， 也就是history中记录的命令

​	!当后面跟随的字母不是“空格、换行、回车、=和(”时，做命令替换

​	**!!**是!-1的一个alias ，因为**执行上一条命令**的情况比较多一些，一般如果只是执行上一条命令只按下键盘中的↑即可，有时候如果命令前加点东西执行起来会快一点（当然↑然后ctrl+a也可以跳到命令最面前插入内容）



#### 2.bash shell

​	Linux 的 Shell的一种，也就是 Bourne Again Shell，由于易用和免费，Bash 在日常工作中被广泛使用。同时，Bash 也是大多数Linux 系统默认的 Shell。

​	像 **#!/bin/sh**，它同样也可以改为 **#!/bin/bash**。

​	**#!** 告诉系统其后路径所指定的程序即是解释此脚本文件的 Shell 程序。

**实例**

```shell
#!/bin/bash
echo "Hello World !"
```

**运行 Shell 脚本有两种方法：**

​	1.将上面的代码保存为 test.sh，并 cd 到相应目录：

```shell
chmod +x ./test.sh  #使脚本具有执行权限
./test.sh  #执行脚本
```

​	2、作为解释器参数



#### 3.exit  退出shell

​	exit命令用于退出目前的shell。

执行exit可使shell以指定的状态值退出。若不设置状态值参数，则shell以预设值退出。状态值0代表执行成功，其他值代表执行失败。exit也可用在script，离开正在执行的script，回到shell。

**语法**

​	exit [状态值]

**实例**

​	退出终端

​		# exit



#### 4.fc

​	fc 命令显示了历史命令文件内容或调用一个编辑器去修改并重新执行以前在 shell 中输入的命令。 

**实例**

​	

- 要对最近所使用的命令调用环境变量 FCEDIT 所定义的编辑器（缺省的编辑器是 /usr/bin/ed），请输入：

```
fc 当完成编辑之后，执行该命令。
```

- 要列出执行过的前两个命令，请输入：

```
fc -l -2
```

- 要找到以 cc 字符开始的命令，且将 foo 更改为 bar，并显示和执行该命令，请输入：

```
fc -s foo=bar cc
```

- 要列出先前执行的命令及其执行时间，请输入：

```
fc –t
```



### 选择数据

#### 1.grep 查找字符串

​	grep命令用于查找文件里符合条件的字符串。

​	grep指令用于查找内容包含指定的范本样式的文件，如果发现某文件的内容符合所指定的范本样式，预设grep指令会把含有范本样式的那一列显示出来。若不指定任何文件名称，或是所给予的文件名为"-"，则grep指令会从标准输入设备读取数据。

**语法：**

​	grep [-abcEFGhHilLnqrsvVwxy] [-A<显示列数>] [-B<显示列数>] [-C<显示列数>] [-d<进行动作>] [-e<范本样式>] [-f<范本文件>] [--help] [范本样式] [文件或目录...]

**参数**

​	-a 或 --text : 不要忽略二进制的数据。**

​	-A<显示行数> 或 --after-context=<显示行数> : 除了显示符合范本样式的那一列之外，	并显示该行之后的内容。

​	-b 或 --byte-offset : 在显示符合样式的那一行之前，标示出该行第一个字符的编号。
​	-B<显示行数> 或 --before-context=<显示行数> : 除了显示符合样式的那一行之外，并显示该行之前的内容。
​	-c 或 --count : 计算符合样式的列数。
​	-C<显示行数> 或 --context=<显示行数>或-<显示行数> : 除了显示符合样式的那一行之外，并显示该行之前后的内容。
​	-d <动作> 或 --directories=<动作> : 当指定要查找的是目录而非文件时，必须使用这项参数，否则grep指令将回报信息并停止动作。
​	-e<范本样式> 或 --regexp=<范本样式> : 指定字符串做为查找文件内容的样式。
​	-E 或 --extended-regexp : 将样式为延伸的普通表示法来使用。
​	-f<规则文件> 或 --file=<规则文件> : 指定规则文件，其内容含有一个或多个规则样式，让grep查找符合规则条件的文件内容，格式为每行一个规则样式。
​	-F 或 --fixed-regexp : 将样式视为固定字符串的列表。
​	-G 或 --basic-regexp : 将样式视为普通的表示法来使用。
​	-h 或 --no-filename : 在显示符合样式的那一行之前，不标示该行所属的文件名称。
​	-H 或 --with-filename : 在显示符合样式的那一行之前，表示该行所属的文件名称。
​	-i 或 --ignore-case : 忽略字符大小写的差别。
​	-l 或 --file-with-matches : 列出文件内容符合指定的样式的文件名称。
​	-L 或 --files-without-match : 列出文件内容不符合指定的样式的文件名称。
​	-n 或 --line-number : 在显示符合样式的那一行之前，标示出该行的列数编号。
​	-o 或 --only-matching : 只显示匹配PATTERN 部分。
​	-q 或 --quiet或--silent : 不显示任何信息。
​	-r 或 --recursive : 此参数的效果和指定"-d recurse"参数相同。
​	-s 或 --no-messages : 不显示错误信息。
​	-v 或 --revert-match : 显示不包含匹配文本的所有行。
​	-V 或 --version : 显示版本信息。
​	-w 或 --word-regexp : 只显示全字符合的列。
​	-x --line-regexp : 只显示全列符合的列。
​	-y : 此参数的效果和指定"-i"参数相同。

**实例**

​	1.在当前目录中，查找后缀有 file 字样的文件中包含 test 字符串的文件，并打印出该字符串的行。此时，可以使用如下命令：

​		grep test *file 

​	2.以递归的方式查找符合条件的文件。例如，查找指定目录/etc/acpi 及其子目录（如果存在子目录的话）下所有文件中包含字符串"update"的文件，并打印出该字符串所在行的内容，使用的命令为：

​		grep -r update /etc/acpi 		

​	3.反向查找。前面各个例子是查找并打印出符合条件的行，通过"-v"参数可以打印出不符合条件行的内容。

查找文件名中包含 test 的文件中不包含test 的行，此时，使用的命令为：

​		grep -v test *test*



#### 2.awk 

AWK是一种处理文本文件的语言，是一个强大的文本分析工具。

**语法**

```shell
awk [选项参数] 'script' var=value file(s)
或
awk [选项参数] -f scriptfile var=value file(s)
```



#### 3.sed

Linux sed命令是利用script来处理文本文件。

sed可依照script的指令，来处理、编辑文本文件。

Sed主要用来自动编辑一个或多个文件；简化对文件的反复操作；编写转换程序等。

**语法**

​	sed [-hnV] [-e <script> ] [-f<script文件>]  [文本文件]

**参数**

-e<script>或--expression=<script> 以选项中指定的script来处理输入的文本文件。

-f<script文件>或--file=<script文件> 以选项中指定的script文件来处理输入的文本文件。
-h或--help 显示帮助。
-n或--quiet或--silent 仅显示script处理后的结果。
-V或--version 显示版本信息。



### 系统工具

#### 1.reboot 重启

​	reboot命令用于用来重新启动计算机。

​	若系统的 runlevel 为 0 或 6 ，则重新开机，否则以 shutdown 指令（加上 -r 参数）来取代

**语法**

​	reboot [-n] [-w] [-d] [-f] [-i]

参数

​	-n 在重开机前不做将记忆体资料写回硬盘的动作

​	-w 并不会真的重开机，只是把记录写到 /var/log/wtmp 档案里

​	-d 不把记录写到 /var/log/wtmp 档案里（-n 这个参数包含了 -d）

​	-f 强迫重开机，不呼叫 shutdown 这个指令

​	-i 在重开机之前先把所有网络相关的装置先停止

**实例**

​	重新启动

​		reboot



#### 2.shutdown  关机

​	shutdown命令可以用来进行关机程序，并且在关机以前传送讯息给所有使用者正在执行的程序，shutdown 也可以用来重开机。

**语法**

​	shutdown [-t seconds] [-rkhncfF] time [message]

**参数**

​	-t seconds 设定在几秒钟之后进行关机程序。

​	-k 并不会真的关机，只是将警告讯息传送给所有使用者。

​	-r 关机后重新开机。

​	-h 关机后停机。 

​	-n 不采用正常程序来关机，用强迫的方式杀掉所有执行中的程序后自行关机。

​	time 设定关机的时间。

​	message 传送给所有使用者的警告讯息。

实例

​	立即关机

​		shutdown -h now

#### 3.su   变更身份

​	su命令用于变更为其他使用者的身份，除 root 外，需要键入该使用者的密码。

**语法**

​	su [-fmp] [-c command] [-s shell] [--help] [--version] [-] [USER [ARG]]

**参数说明**

​	-f 不必读启动档

​	-m -p 执行su时不改变环境变数

​	-c command 或 --command=command 变更为帐号为 USER 的使用者并执行指令（command）后再变回原来使用者

**实例**

​	变更帐号为 root 并在执行 ls 指令后退出变回原使用者

​		su -c ls root

​	变更帐号为 root 并传入 -f 参数给新执行的 shell

​		su root -f

​	变更帐号为 clsung 并改变工作目录至 clsung 的家目录（home dir）

​		su - clsung

​	su root //切换到root用户



#### 4.sudo 管理员身份

​	 sudo命令以系统管理者的身份执行指令，也就是说，经由 sudo 所执行的指令就好像是 root 亲自执行。

**语法**

​	sudo [ -b ] [ -p prompt ] [ -u username/#uid] -s

**参数**

​	-V 显示版本编号

​	-h 会显示版本编号及指令的使用方式说明

​	-l 显示出自己（执行 sudo 的使用者）的权限

​	-v 因为 sudo 在第一次执行时或是在 N 分钟内没有执行（N 预设为五）会问密码，这个参数是重新做一次确认，如果超过 N 分钟，也会问密码

​	-k 将会强迫使用者在下一次执行 sudo 时问密码（不论有没有超过 N 分钟）

​	

实例

​	以root权限执行上一条命令

​		sudo !!

​	列出目前的权限

​		sudo -l

​	列出 sudo 的版本资讯

​		sudo -V



#### 5.uname   显示系统信息

​	uname命令用于显示系统信息。uname可显示电脑以及操作系统的相关信息。

**语法**

​	uname [-amnrsv] [--help] [--version]

**参数**

​	-a 显示全部信息

​	-m 显示电脑类型

​	-n 显示在网络上的主机名称。

​	-r 显示操作系统发行编号

​	-s 显示操作系统名称

​	-v 显示操作系统版本

​	

**实例**

​	显示系统信息	

​		uname -a

​	显示计算机类型

​		uname -m

​	显示计算机名

​		uname -n

​	显示操作系统名称

​		uname -s

​	显示系统时间

​		uname -v



#### 6.uptime

​	显示系统已经运行了多长时间，它依次显示下列信息：当前时间、系统已经运行了多长时间、目前有多少登陆用户、系统在过去的1分钟、5分钟和15分钟内的平均负载。

**实例**

​	

```shell
uptime
  08:21:34 up 36 min,  2 users,  load average: 0.00, 0.00, 0.00
 
#当前服务器时间：    08:21:34
#当前服务器运行时长  36 min
#当前用户数          2 users
#当前的负载均衡      load average  0.00, 0.00, 0.00，分别取1min,5min,15min的均值
```



### 终端

#### 1.tty

​	tty命令用于显示终端机连接标准输入设备的文件名称。

**语法**

​	tty [-s ] [--help] [--version]

**参数**

​	-s 不显示任何信息，只回传状态代码

​	--help 在线帮助

​	--version 显示版本信息

**实例**

```shell
tty
/dev/pts/4
```



### 文本格式化

#### 1.fmt

​	fmt命令用于编排文本文件。

​	fmt指令会从指定的文件里读取内容，将其依照指定格式重新编排后，输出到标准输出设备。若指定的文件名为"-"，则fmt指令会从标准输入设备读取数据。

**语法**

​	fmt [-cstu] [-p<列起始字符串>] [-w<每列字符数>] [--help] [--version] [文件...]

**参数说明**

​	-c 每段前两列缩排

​	-w<每列字符数>或--width=<每列字符数>或-<每列字符数> 设置每列的最大字符数。

**实例**

​	重排指定文件。如文件testfile共5 行文字，可以通过命令对该文件格式进行重排，其命令为：

​		fmt testfile 

​	将文件testfile重新排成85 个字符一行，并在标准输出设备上输出，其命令应该为：

​		fmt -w 85 testfile



### 工具

#### 1.bc/dc  计算器

​	bc 命令是任意精度计算器语言，通常在linux下当计算器用。

​	它类似基本的计算器, 使用这个计算器可以做基本的数学运算。

​	加减乘除指数余数都可以

​	( dc古老一些，是desk caclulator的缩写，使用逆波兰式来表达算式)

**语法** 

​	bc(选项)(参数)

**选项值**

​	-i 强制进入交互模式

​	-l 定义使用的标准数学库

​	输入quit退出

**实例**

​	通过管道符

​	cho "15+5" | bc

​	计算平方和平方根：		

```shell
$ echo "10^10" | bc 
10000000000
$ echo "sqrt(100)" | bc
10
```



#### 2.cal 日历

​	cal命令可以用来显示公历（阳历）日历。

**语法**

​	cal [参数] [月份] [年份]

**参数**

​	-1 显示一个月的月历

​	-3 显示系统前一个月，当前月，下一个月的月历
​	-s  显示星期天为一个星期的第一天，默认的格式
​	-m 显示星期一为一个星期的第一天
​	-j  显示在当年中的第几天（一年日期按天算，从1月1号算起，默认显示当前月在一年中的天数）
​	-y  显示当前年份的日历

**实例**

​	显示当前月份日历

​		cat

​	显示指定月份的日历

​		cal 9 2012     //2012年9月



#### 3.date 日期时间	

​	date命令可以用来显示或设定系统的日期与时间，在显示方面，使用者可以设定欲显示的格式，格式设定为一个加号后接数个标记，其中可用的标记列表如下：

**参数**

​	%c 直接显示日期与时间

​	%Y : 完整年份 (0000..9999)

​	%T : 直接显示时间 (24 小时制)

​	%Z : 显示时区

​	%n : 下一行

​	...

**实例**

​	显示当前时间

​		date

​	显示时间后跳行，再显示目前日期

​		date '+%T%n%D'

​	显示月份与日数

​		date '+%B %d'



#### 4.sleep 延迟

​	sleep命令可以用来将目前动作延迟一段时间。

**语法**

​	sleep [--help] [--version] number[smhd]

**参数**

​	number : 时间长度，后面可接 s、m、h 或 d

​	其中 s 为秒，m 为 分钟，h 为小时，d 为日数

**实例**

​	休眠五分钟

​		sleep 5m

​	显示目前时间后延迟 1 分钟，之后再次显示时间	

​		date;sleep 1m;date



#### 5.wc

​	 wc命令用于计算字数。

​	利用wc指令我们可以计算文件的Byte数、字数、或是列数，若不指定文件名称、或是所给予的文件名为"-"，则wc指令会从标准输入设备读取数据。

**语法**

​	wc [-clw] [--help] [--version] [文件...]

**参数**

​	-c 只显示Bytes数

​	-l 只显示行数

​	-w 只显示字数 

**实例**

​	在默认的情况下，wc将计算指定文件的行数、字数，以及字节数。使用的命令为：

​	wc testfile 

​	3 92 598 testfile       # testfile文件的行数为3、单词数92、字节数598 



### 用户与用户标识

#### 1.id   显示用户ID

​	id命令用于显示用户的ID，以及所属群组的ID。

​	id会显示用户以及所属群组的实际与有效ID。若两个ID相同，则仅显示实际ID。若仅指定用户名称，则显示目前用户的ID。

**语法**

​	id [-gGnru] [--help] [--version] [用户名称]

**参数**

​	-g 显示用户所属群组的ID

​	-G 显示用户所属附加群组的ID。

​	-n 显示用户，所属群组或附加群组的名称。

​	-r 显示实际ID

​	-u 显示用户ID

**实例**

​	显示当前用户信息

​	id

​	显示用户群组的ID

​	id -g

​	显示指定用户信息

​	id yijiu



#### 2.last   显示用户最近登录信息

​	 last 命令用于显示用户最近登录信息。

**语法**

​	shell>> last [options]

**参数**

​	-R 省略 hostname 的栏位

​	-num 展示前num个

​	username 展示 username 的登入讯息

​	tty 限制登入讯息包含终端机代号

实例

​	一般显示方法

​		last

​	简略显示，并指定显示的个数

​		last -n 5 -R



#### 3.who  显示系统使用者

​	who命令用于显示系统中有哪些使用者正在上面，显示的资料包含了使用者 ID、使用的终端机、从哪边连上来的、上线时间、呆滞时间、CPU 使用量、动作等等。

(**whoami**命令用于显示自身用户名称，本指令相当于执行"id -un"指令。)

**语法**

​	who - [husfV] [user]

**参数**

​	-H 显示各栏位的标题信息列；

​	-i 显示闲置时间

​	-w 显示用户的信息状态栏；

​	-q 只显示登入系统的帐号名称和总人数；

**实例**

​	显示当前登录系统的用户

​		who

​	显示标题栏

​		who -H

​	显示用户登录来源

​		who -l -H

​	显示登入系统的帐号名称和总人数

​		who -q



### 变量

#### 1.echo

​	(在显示数据列表中有详细介绍)

#### 2.export  设置或显示环境变量

​	 export命令用于设置或显示环境变量。

​	在shell中执行程序时，shell会提供一组环境变量。export可新增，修改或删除环境变量，供后续执行的程序使用。export的效力仅及于该次登陆操作。

**语法**

​	export [-fnp] [变量名称]=[变量设置值]

**参数**

​	-f 代表[变量名称]中为函数名称。

​	-n 删除指定的变量。变量实际上并未删除，只是不会输出到后续指令的执行环境中。

​	-p 列出所有的shell赋予程序的环境变量。

**实例**

​	列出当前所有的环境变量

​		export -p //列出当前的环境变量值

​	定义环境变量

​		export MYENV //定义环境变量

​	定义环境变量赋值

​		export MYENV=7 //定义环境变量并赋值



#### 3.setenv 查询或显示环境变量。

​	 setenv命令用于查询或显示环境变量。

​	setenv为tsch中查询或设置环境变量的指令。

​	(set/env可能需要分开使用)

**语法**

​	setenv [变量名称] [变量值]

**实例**

​	显示环境变量

​		setenv

​	设置环境变量

​		setenv USER lx138



#### 4.unset 删除变量或函数

​	 unset命令用于删除变量或函数。

​	unset为shell内建指令，可删除变量或函数。

**语法**

​	unset [-fv] [变量或函数名称]

参数

​	-f 仅删除函数

​	-v 仅删除变量



### 压缩

#### 1.tar

​	tar命令用于备份文件。

​	tar是用来建立，还原备份文件的工具程序，它可以加入，解开备份文件内的文件。

**语法**

​	tar [-ABcdgGhiklmMoOpPrRsStuUvwWxzZ]......

**参数**

​	-c 建立新的备份文件。

​	-z 通过gzip指令处理备份文件。

​	-v 显示指令执行过程。

​	-f <备份文件>或--file=<备份文件> 指定备份文件。

​	-t 列出备份文件的内容。

​	-x 从备份文件中还原文件。

**实例**

​	压缩文件 非打包

​		tar -czvf test.tar.gz a.c   //压缩 a.c文件为test.tar.gz

​	列出压缩文件内容

​		tar -tzvf test.tar.gz 

​	解压文件（常用）

​		tar -xzvf test.tar.gz 



#### 2.zip

​	zip命令用于压缩文件。

​	zip是个使用广泛的压缩程序，文件经它压缩后会另外产生具有".zip"扩展名的压缩文件。

**语法**

​	zip [-AcdDfFghjJKlLmoqrSTuvVwXyz$].....

参数

​	-d 从压缩文件内删除指定的文件。

​	-F 尝试修复已损坏的压缩文件。

​	-g 将文件压缩后附加在既有的压缩文件之后，而非另行建立新的压缩文件。

​	-m 将文件压缩并加入压缩文件后，删除原始文件，即把文件移到压缩文件中。

​	-q 不显示指令执行过程。

​	-r 递归处理，将指定目录下的所有文件和子目录一并处理。

​	-v 显示指令执行过程或显示版本信息。

​	

**实例**

​	将 /home/html/ 这个目录下所有文件和文件夹打包为当前目录下的 html.zip：

​		zip -q -r html.zip /home/html

​	如果在我们在 /home/html 目录下，可以执行以下命令：

​		zip -q -r html.zip *

​	从压缩文件 cp.zip 中删除文件 a.c

​		zip -dv cp.zip a.c



#### 3.unzip

​	unzip命令用于解压缩zip文件

​	unzip为.zip压缩文件的解压缩程序。

**语法**

​	unzip [-cflptuvz] [-agCjLMnoqsVX] [-P <密码>] [.zip文件] [文件] [-d <目录>] [-x <文件>] 或 unzip [-Z]

参数

​	-c 将解压缩的结果显示到屏幕上，并对字符做适当的转换。

​	-l 显示压缩文件内所包含的文件。

​	-t 检查压缩文件是否正确。

​	-v 执行是时显示详细的信息。

​	-C 压缩文件中的文件名称区分大小写。

​	-P<密码> 使用zip的密码选项。

​	-q 执行时不显示任何信息。

​	-d<目录> 指定文件解压缩后所要存储的目录。

**实例**

​	查看压缩文件中包含的文件：

​		 unzip -l abc.zip 

​	-v 参数用于查看压缩文件目录信息，但是不解压该文件。

​		unzip -v abc.zip 



### 托管

#### 1.git

​	(敬请期待)



### 软件

#### 1.gcc/g++

​	gcc 与 g++ 分别是 gnu 的 c & c++ 编译器 gcc/g++ 在执行编译工作的时候，总共需要4步：

​	1、预处理,生成 .i 的文件[预处理器cpp]

​	2、将预处理后的文件不转换成汇编语言, 生成文件 .s [编译器egcs]

​	3、有汇编变为目标代码(机器代码)生成 .o 的文件[汇编器as]

​	4、连接目标代码, 生成可执行程序 [链接器ld]

**gcc常用选项**

​	-v ：查看gcc版本号 

​	-I：注意这是大写的 i，指定头文件目录，注意-I和目录之间没有空格 

​	-c ：只编译，生成.o文件，不进行链接 

​	-g ：包含调试信息 

​	-On ：n=0∼3 编译优化，n越大优化得越多 

​	-Wall ：提示更多警告信息 

​	-D ：编译时定义宏，注意-D和之间没有空格 

​	-E ：生成预处理文件 

​	-M ：生成.c文件与头文件依赖关系以用于Makefile，包括系统库的头文件 

​	-MM ：生成.c文件与头文件依赖关系以用于Makefile，不包括系统库的头文件 

​	-wl,option ：该选项把 option 传递给 linker，option选项用逗号分割



#### 2.curl

​	在Linux中curl是一个利用URL规则在命令行下工作的文件传输工具，可以说是一款很强大的http命令行工具。它支持文件的上传和下载，是综合传输工具，但按传统，习惯称url为下载工具。

**语法**

​	curl [option] [url]

参数

```
-A/--user-agent <string>              设置用户代理发送给服务器
-b/--cookie <name=string/file>    cookie字符串或文件读取位置
-c/--cookie-jar <file>                    操作结束后把cookie写入到这个文件中
-C/--continue-at <offset>            断点续转
-D/--dump-header <file>              把header信息写入到该文件中
-e/--referer                                  来源网址
-f/--fail                                          连接失败时不显示http错误
-o/--output                                  把输出写到该文件中
-O/--remote-name                      把输出写到该文件中，保留远程文件的文件名
-r/--range <range>                      检索来自HTTP/1.1或FTP服务器字节范围
-s/--silent                                    静音模式。不输出任何东西
-T/--upload-file <file>                  上传文件
-u/--user <user[:password]>      设置服务器的用户和密码
-w/--write-out [format]                什么输出完成后
-x/--proxy <host[:port]>              在给定的端口上使用HTTP代理
-#/--progress-bar                        进度条显示当前的传送状态
```



#### 3.wget

​	Linux系统中的wget是一个下载文件的工具，它用在命令行下。对于Linux用户是必不可少的工具，我们经常要下载一些软件或从远程服务器恢复备份到本地服务器。wget支持HTTP，HTTPS和FTP协议，可以使用HTTP代理。（可在后台下载）

**命令格式**

​	wget [参数] [URL地址]

**参数**

​	-a<日志文件>：在指定的日志文件中记录资料的执行过程；

​	-A<后缀名>：指定要下载文件的后缀名，多个后缀名之间使用逗号进行分隔；

​	-b：进行后台的方式运行wget；

​	-i<文件>：从指定文件获取要下载的URL地址；

​	-r：递归下载方式；

​	-nc：文件存在时，下载文件不覆盖原有文件；

​	-q：不显示指令执行过程；

​	-v：显示详细执行过程；

​	-V：显示版本信息；

**实例**

​	下载单个文件

​		wget 文件的URL

​	限速下载文件

​		wget –limit-rate=300k 文件的URL

​	后台下载文件	

​		wget -b 文件的URL



#### 4.apt/apt-get

​	*apt*-get，是一条linux*命令*，适用于deb包管理式的操作系统，主要用于自动从互联网的软件仓库中搜索、安装、升级、卸载软件或操作系统。(apt是新出的一种包管理工具，建议在Ubuntu下直接使用apt)

常用操作

|     apt 命令     |      取代的命令      |           命令的功能           |
| :--------------: | :------------------: | :----------------------------: |
|   apt install    |   apt-get install    |           安装软件包           |
|    apt remove    |    apt-get remove    |           移除软件包           |
|    apt purge     |    apt-get purge     |      移除软件包及配置文件      |
|    apt update    |    apt-get update    |         刷新存储库索引         |
|   apt upgrade    |   apt-get upgrade    |     升级所有可升级的软件包     |
|  apt autoremove  |  apt-get autoremove  |       自动删除不需要的包       |
| apt full-upgrade | apt-get dist-upgrade | 在升级软件包时自动处理依赖关系 |
|    apt search    |   apt-cache search   |          搜索应用程序          |
|     apt show     |    apt-cache show    |           显示装细节           |

|   新的apt命令    |              命令的功能              |
| :--------------: | :----------------------------------: |
|     apt list     | 列出包含条件的包（已安装，可升级等） |
| apt edit-sources |              编辑源列表              |

​	目前还没有任何 Linux 发行版官方放出 apt-get 将被停用的消息，至少它还有比 apt 更多、更细化的操作功能。对于低级操作，仍然需要 apt-get。

- apt 可以看作 apt-get 和 apt-cache 命令的子集, 可以为包管理提供必要的命令选项。
- apt-get 虽然没被弃用，但作为普通用户，还是应该首先使用 apt。



#### 5.yum

​	Yum(全称为 Yellow dogUpdater, Modified)是一个在Fedora和RedHat以及CentOS中的Shell前端软件包管理器。基于RPM包管理，能够从指定的服务器自动下载RPM包并且安装，可以自动处理依赖性关系，并且一次安装所有依赖的软件包，无须繁琐地一次次下载、安装。yum提供了查找、安装、删除某一个、一组甚至全部软件包的命令，而且命令简洁而又好记。

**语法**

​	yum –选项命令包

​	其中选项是可选的，选项包括-h（帮助），-y（当安装过程提示选择全部为"yes"），-q（不显示安装的过程）等等。[command]为所要进行的操作，[package ...]是操作的对象。

**实例参考**

1 安装
yum install 全部安装
yum install package1 安装指定的安装包package1
yum groupinsall group1 安装程序组group1

2 更新和升级
yum update 全部更新
yum update package1 更新指定程序包package1
yum check-update 检查可更新的程序
yum upgrade package1 升级指定程序包package1
yum groupupdate group1 升级程序组group1

3 查找和显示
yum info package1 显示安装包信息package1
yum list 显示所有已经安装和可以安装的程序包
yum list package1 显示指定程序包安装情况package1
yum groupinfo group1 显示程序组group1信息yum search string 根据关键字string查找安装包

4 删除程序
yum remove &#124; erase package1 删除程序包package1
yum groupremove group1 删除程序组group1
yum deplist package1 查看程序package1依赖情况

5 清除缓存
yum clean packages 清除缓存目录下的软件包
yum clean headers 清除缓存目录下的 headers
yum clean oldheaders 清除缓存目录下旧的 headers
yum clean, yum clean all (= yum clean packages; yum clean oldheaders) 清除缓存目录下的软件包及旧的header



### 网络

#### 1.ifconfig   设置网络设备

​	ifconfig命令用于显示或设置网络设备。

​	ifconfig可设置网络设备的状态，或是显示目前的设置。

**参数**

​	add<地址> 设置网络设备IPv6的IP地址。

​	del<地址> 删除网络设备IPv6的IP地址。

​	down 关闭指定的网络设备。

​	<hw<网络设备类型><硬件地址> 设置网络设备的类型与硬件地址。

​	io_addr<I/O地址> 设置网络设备的I/O地址。

​	up 启动指定的网络设备。

​	[IP地址] 指定网络设备的IP地址。

​	[网络设备] 指定网络设备的名称。

**实例**

​	显示网络设备信息

​		ifconfig     

​	启动关闭指定网卡	

```shell
 #ifconfig eth0 down
# ifconfig eth0 up
```

​	为网卡配置和删除IPv6地址

```shell
# ifconfig eth0 add 33ffe:3240:800:1005::2/ 64 //为网卡诶之IPv6地址
# ifconfig eth0 del 33ffe:3240:800:1005::2/ 64 //为网卡删除IPv6地址
```

​	用ifconfig修改MAC地址

```shell
# ifconfig eth0 down //关闭网卡
# ifconfig eth0 hw ether 00:AA:BB:CC:DD:EE //修改MAC地址
# ifconfig eth0 up //启动网卡
# ifconfig eth1 hw ether 00:1D:1C:1D:1E //关闭网卡并修改MAC地址 
# ifconfig eth1 up //启动网卡
```

​	配置IP地址	

```shell
# ifconfig eth0 192.168.1.56 
//给eth0网卡配置IP地址
# ifconfig eth0 192.168.1.56 netmask 255.255.255.0 
// 给eth0网卡配置IP地址,并加上子掩码
# ifconfig eth0 192.168.1.56 netmask 255.255.255.0 broadcast 192.168.1.255
// 给eth0网卡配置IP地址,加上子掩码,加上个广播地址
```

​	启用和关闭ARP协议

```shell
# ifconfig eth0 arp  //开启
# ifconfig eth0 -arp  //关闭
```

​	设置最大传输单元

```shell
# ifconfig eth0 mtu 1500 
//设置能通过的最大数据包大小为 1500 bytes
```



#### 2.ip  网络配置工具

​	ip是iproute2软件包里面的一个强大的网络配置工具，用来显示或操作路由、网络设备、策略路由和隧道，它能够替代一些传统的网络管理工具，例如ifconfig、route等。用ip配置的设备信息，大部分会在设备重启后还原，如果想永久保留配置，请尽量进入配置文件修改。

**语法**

​	ip [ OPTIONS ] OBJECT { COMMAND | help }

**对象**

```shell
link 网络设备
address 设备上的协议（IP或IPv6）地址
addrlabel 协议地址选择的标签配置
neighbour ARP或NDISC缓存条目
route 路由表条目
rule 路由策略数据库中的规则
maddress 组播地址
mroute 组播路由缓存条目
tunnel IP隧道
xfrm IPSec协议框架
```

**参数选项**

```shell
-V，-Version 显示指令版本信息
-s,-stats,statistics 输出详细信息
-h,-human,-human-readable 输出人类可读的统计信息和后缀
-iec 以IEC标准单位打印人类可读速率（例如1K=1024）
-f,-family <FAMILY> 指定要使用的协议族。协议族标识可以是inet、inet6、ipx、dnet或link之一。如果此选项不存在，则从其他参数中推测协议族。如果命令行的其余部分没有提供足够的信息来推测该族，则ip会退回到默认值，通常是inet或any。link是一个特殊的系列标识符，表示不涉及网络协议。
-4 –family inet的快捷方式
-6 –family inet6的快捷方式
-0 –family link的快捷方式
-o,-oneline 将每条记录输出到一行，用’\’字符替换换行符。
-r,-resolve 使用系统名称解析程序来打印DNS名称而不是主机地址。
```

**实例**

以下介绍的ip命令都是临时配置，一但重启就会还原，如"service network restart"

​	查看所有IP地址

​		ip a/addr/address

​		ip a/addr/address sh/show

​	查看指定IP地址

​		ip a/addr/address sh/show dev eth1

​		ip a/addr/address sh/show eth1

​	增加或删除IP地址

​		ip a/addr/address add 192.168.78.130/24 dev eth1

​		ip a/addr/address del/delete 192.168.78.130/24 dev eth1

​	删除eth1所有IP地址

​		ip a flush dev eth1

​	删除eth1的所有IPv4的IP地址

​		ip -4 a flush dev eth1

​	默认路由的删除、添加与修改

​		ip r/ro/route d/del/delete default

​		ip r/ro/route add default via 192.168.78.1

​		ip r/ro/route chg/change default via 192.168.78.2

​	查看ARP表

​		ip n/neigh/neighbuor sh/show



#### 3.ping  检测主机

​	 ping命令用于检测主机。

​	执行ping指令会使用**ICMP传输协议**，发出要求回应的信息，若远端主机的网络功能没有问题，就会回应该信息，因而得知该主机运作正常。

**语法**

​	ping [-dfnqrRv] [-c<完成次数>] [-i<间隔秒数>] [-I<网络界面>] [-l<前置载入>] [-p<范本样式>] [-s<数据包大小>] [-t<存活数值>] [主机名称或IP地址]

**参数**

```shell
-d 使用Socket的SO_DEBUG功能。
-c<完成次数> 设置完成要求回应的次数。
-f 极限检测。
-i<间隔秒数> 指定收发信息的间隔时间。
-I<网络界面> 使用指定的网络接口送出数据包。
-l<前置载入> 设置在送出要求信息之前，先行发出的数据包。
-n 只输出数值。
-p<范本样式> 设置填满数据包的范本样式。
-q 不显示指令执行过程，开头和结尾的相关信息除外。
-r 忽略普通的Routing Table，直接将数据包送到远端主机上。
-R 记录路由过程。
-s<数据包大小> 设置数据包的大小。
-t<存活数值> 设置存活数值TTL的大小。
-v 详细显示指令的执行过程。
```

**实例**

​	检测是否与主机连通

​		ping www.baidu.com 

​	指定接收包的次数

​		ping -c 2 www.baidu.com	

​		//收到两次包后，自动退出

​	多参数使用

​		ping -i 3 -s 1024 -t 255 g.cn //ping主机

​		//-i 3 发送周期为 3秒 -s 设置发送包的大小 -t 设置TTL值为 255



#### 4.netstat     显示网络状态

​	netstat命令用于显示网络状态。

​	利用netstat指令可让你得知整个Linux系统的网络情况。	

**语法**

​	netstat [-acCeFghilMnNoprstuvVwx] [-A<网络类型>] [--ip]

**参数**

```shell
-a或--all 显示所有连线中的Socket。
-A<网络类型>或--<网络类型> 列出该网络类型连线中的相关地址。
-c或--continuous 持续列出网络状态。
-C或--cache 显示路由器配置的快取信息。
-e或--extend 显示网络其他相关信息。
-F或--fib 显示FIB。
-g或--groups 显示多重广播功能群组组员名单。
-h或--help 在线帮助。
-i或--interfaces 显示网络界面信息表单。
-l或--listening 显示监控中的服务器的Socket。
-M或--masquerade 显示伪装的网络连线。
-n或--numeric 直接使用IP地址，而不通过域名服务器。
-N或--netlink或--symbolic 显示网络硬件外围设备的符号连接名称。
-o或--timers 显示计时器。
-p或--programs 显示正在使用Socket的程序识别码和程序名称。
-r或--route 显示Routing Table。
-s或--statistice 显示网络工作信息统计表。
-t或--tcp 显示TCP传输协议的连线状况。
-u或--udp 显示UDP传输协议的连线状况。
-v或--verbose 显示指令执行过程。
-V或--version 显示版本信息。
-w或--raw 显示RAW传输协议的连线状况。
-x或--unix 此参数的效果和指定"-A unix"参数相同。
--ip或--inet 此参数的效果和指定"-A inet"参数相同。
```

**实例**

​	显示详细的网络状况

​		netstat -a

​	显示当前户籍UDP连接状况

​		netstat -nu

​	显示UDP端口号的使用情况

​		netstat -apu

​	显示网卡列表

​		netstat -i

​	显示网络统计信息

​		netstat -s

​	显示监听的套接口

​		netstat -l



#### 5.telnet  远端登入

​	telnet命令用于远端登入。

​	执行telnet指令开启终端机阶段作业，并登入远端主机。

**参数**

​	-a 尝试自动登入远端系统。

​	-b<主机别名> 使用别名指定远端主机名称。

​	-n<记录文件> 指定文件记录相关信息。	

**实例**

​	telnet 192.168.0.2

​	//登录IP为 192.168.0.2 的远程主机



#### 6.ftp 文件传输

​	 ftp命令设置文件系统相关功能。

​	FTP是ARPANet的标准文件传输协议，该网络就是现今Internet的前身。

**语法**

​	ftp [-dignv] [主机名称或IP地址]

**参数**

-d 详细显示指令执行过程，便于排错或分析程序执行的情形。

-i 关闭互动模式，不询问任何问题。

-g 关闭本地主机文件名称支持特殊字符的扩充特性。

-n 不使用自动登陆。

-v 显示指令执行过程。

**实例**

​	例如使用ftp命令匿名登录ftp.kernel.org服务器，该服务是Linux 内核的官方服务器，可以使用如下命令：

```shell
ftp ftp.kernel.org #发起链接请求 
```



#### 7.tftp 文件传输

​	tftp命令用于传输文件。

​	FTP让用户得以下载存放于远端主机的文件，也能将文件上传到远端主机放置。tftp是简单的文字模式ftp程序，它所使用的指令和FTP类似。

**语法**

​	tftp [主机名称或IP地址]

**参数**

```shell
connect：连接到远程tftp服务器
mode：文件传输模式
put：上传文件
get：下载文件
quit：退出
verbose：显示详细的处理信息
trace：显示包路径
status：显示当前状态信息
binary：二进制传输模式
ascii：ascii 传送模式
rexmt：设置包传输的超时时间
timeout：设置重传的超时时间
help：帮助信息
? ：帮助信息
```

**实例**

​	连接远程服务器"218.28.188.288"，然后使用put 命令下载其中根目录下的文件"README"，可使用命令如下：

​	tftp 218.28.188.288 #连接远程服务器  #连接远程服务器  

​	tftp>get README  #远程下载README文件  

​	tftp>quit  #离开tftp 

 

#### 8.route  路由表

​	route命令用于显示和操作IP路由表。要实现两个不同的子网之间的通信，需要一台连接两个网络的路由器，或者同时位于两个网络的网关来实现。在Linux系统中，设置路由通常是为了解决以下问题：该Linux系统在一个局域网中，局域网中有一个网关，能够让机器访问Internet，那么就需要将这台机器的IP地址设置为 Linux机器的默认路由。要注意的是，直接在命令行下执行route命令来添加路由，不会永久保存，当网卡重启或者机器重启之后，该路由就失效了；

**参数**

​	 -n  ：不要使用通讯协定或主机名称，直接使用 IP 或 port number；

​	 -ee ：使用更详细的资讯来显示

​	增加 (add) 与删除 (del) 路由的相关参数：

​	 -net：表示后面接的路由为一个网域；

​	 -host：表示后面接的为连接到单部主机的路由；

​	 netmask ：与网域有关，可以设定 netmask 决定网域的大小；

​	 gw：gateway 的简写，后续接的是 IP 的数值喔，与 dev 不同；

​	dev：如果只是要指定由那一块网路卡连线出去，则使用这个设定，后面接 eth0 等

​	-v 显示详细的处理信息

​	-F 显示发送信息

​	-C 显示路由缓存

| 参数   | 说明                                                         |
| ------ | ------------------------------------------------------------ |
| add    | 增加路由记录                                                 |
| del    | 删除路由记录                                                 |
| target | 目标网络或目的主机                                           |
| gw     | 设置默认网关。gateway 的简写，后续接的是 IP 的数值。         |
| mss    | 设置TCP的最大区块长度（MSS），单位MB。                       |
| window | 指定通过路由表的TCP连接的TCP窗口大小。                       |
| dev    | 如果只是要指定由那一块网路卡连线出去，则使用这个设定，后面接 eth0 等。 |
| reject | 设置到指定网络为不可达，避免在连接到这个网络的地址时程序过长时间的等待，直接就知道该网络不可达。 |

**实例**

​	添加和删除路由

```shell
route {add | del } [-net|-host] [网域或主机] netmask [mask] [gw|dev]
 
 
增加 (add) 与删除 (del) 路由的相关参数：
(a) -net ：表示后面接的路由为一个网域。
(b) -host ：表示后面接的为连接到单部主机的路由。
(c) netmask ：与网域有关，可以设定 netmask 决定网域的大小。
(d) gw ：gateway 的简写，后续接的是 IP 的数值，与 dev 不同。
(e) dev ：如果只是要指定由那一块网路卡连线出去，则使用这个设定，后面接 eth0 等。
```

​	查询路由信息

```shell
route -nee
 
(a) -n：不要使用通讯协定或主机名称，直接使用 IP 或 port number。
(b) -ee：使用更详细的资讯来显示。
```

​	添加/删除默认网关路由

​	

```shell
route {add | del } default gw {IP-ADDRESS} {INTERFACE-NAME}
 
(a) IP-ADDRESS：用于指定路由器（网关）的IP地址。
(b) INTERFACE-NAME：用于指定接口名称，如eth0。
 
 
例1：route add default gw 192.168.1.1 eth0
例2：route del default gw 192.168.1.1 eth0
```

​	添加/删除到指定网络的路由规则

```shell
route {add | del } -net {NETWORK-ADDRESS} netmask {NETMASK} dev {INTERFACE-NAME}
 
(a) NETWORK-ADDRESS：用于指定网络地址。
(b) NETMASK：用于指定子网掩码。
(c) INTERFACE-NAME：用于指定接口名称，如eth0。
 
 
例1：route add -net 192.168.1.0 netmask 255.255.255.0 dev eth0
例2：route del -net 192.168.1.0 netmask 255.255.255.0 dev eth0
```

​	添加/删除路由到指定网络为不可达

```shell
设置到指定网络为不可达，避免在连接到这个网络的地址时程序过长时间的等待，直接就知道该网络不可达。
 
route {add | del } -net {NETWORK-ADDRESS} netmask {NETMASK} reject
 
(a) NETWORK-ADDRESS：用于指定网络地址。
(b) NETMASK：用于指定子网掩码。
 
 
例1：route add -net 10.0.0.0 netmask 255.0.0.0 reject
例2：route del -net 10.0.0.0 netmask 255.0.0.0 reject
```

​	查看路由信息

```shell
[root@localhost ~]# route -n
Kernel IP routing table
Destination     Gateway         Genmask         Flags Metric Ref    Use Iface
0.0.0.0         192.168.1.1     0.0.0.0         UG    0      0        0 eth0
169.254.0.0     0.0.0.0         255.255.0.0     U     1002   0        0 eth0
192.168.1.0     0.0.0.0         255.255.255.0   U     0      0        0 eth0
192.168.233.0   0.0.0.0         255.255.255.0   U     0      0        0 eth1
```

更多例子请访问：<https://blog.csdn.net/u011857683/article/details/83795435>



#### 9.rlogin 远端登入

 	rlogin命令用于远端登入。

​	执行rlogin指令开启终端机阶段操作，并登入远端主机。	

**语法**

​	rlogin [-8EL] [-e <脱离字符>] [-l <用户名称>] [主机名称或IP地址]

**参数**

```shell
-E 忽略escape字符
-8 只识别8位字的字符
-L 允许rlogin会话运行在litout模式
-ec 设置escape字符为c
-c 断开连接前要求确认
-a 强制要求远程主机在发送完一个空的本地用户名之后请求一个密码
-f 向远端主机发送一个本地认证
-F 向远程主机发送一个可转寄的本地认证
-7 强制执行7为的传输
-d 打开用于远端主机通信的TCP套接口的调试
-k 要求包含远端主机的tisckets
-x 启动数据传输的DES加密
-4 只使用 kerkberos的版本4的认证
```

**实例**

​	显示rlogin服务是否开启

​		 chkconfig --list //检测rlogin服务是否开启

​	开启rlogin服务

​		chkconfig rlogin on //开启rlogin服务

​	登陆远程主机

​		rlogin 192.168.1.88

​	指定用户名登陆远程主机

​		rlogin 192.168.1.88 -l hnlinux



#### 10.rcp  复制远程文件

​	 rcp命令用于复制远程文件或目录。

rcp指令用在远端复制文件或目录，如同时指定两个以上的文件或目录，且最后的目的地是一个已经存在的目录，则它会把前面指定的所有文件或目录复制到该目录中。

**语法**

​	rcp [-pr] [源文件或目录] [目标文件或目录]

**参数**

-p 　保留源文件或目录的属性，包括拥有者，所属群组，权限与时间。

-r 　递归处理，将指定目录下的文件与子目录一并处理。

**实例**

​	使用rcp指令复制远程文件到本地进行保存。

​	设本地主机当前账户为rootlocal，远程主机账户为root，要将远程主机（218.6.132.5）主目录下的文件"testfile"复制到本地目录"test"中，则输入如下命令：	

```shell
rcp root@218.6.132.5:./testfile testfile  #复制远程文件到本地  
rcp root@218.6.132.5:home/rootlocal/testfile testfile  
#要求当前登录账户cmd 登录到远程主机  
rcp 218.6.132.5:./testfile testfile
```

指令"rcp"执行以后不会有返回信息，仅需要在目录"test"下查看是否存在文件"testfile"。若存在，则表示远程复制操作成功，否则远程复制操作失败。



#### 11.finger  查询资料

​	 finger命令可以让使用者查询一些其他使用者的资料。

**语法**

​	finger [options] user[@address]

**参数**

​	-l 多行显示。

​	-s 单行显示。这个选项只显示登入名称、真实姓名、终端机名称、闲置时间、登入时间、办公室号码及电话号码。如果所查询的使用者是远端服务器的使用者，这个选项无效。

**实例**

​	列出当前登录用户的相关信息

​		 finger -l //显示用户信息	

​	显示指定用户信息	

​		finger -m hnlinux

​	显示远程用户信息

​		finger -m root@192.168.1.13



#### 12.mail   邮件

​	mail 是 Linux 的邮件客户端命令，可以利用这个命令给其他用户发送邮件。

​	使用mail发邮件时，必须先将[sendmail](http://www.server110.com/sendmail/)服务启动。

**参数**

​	mail –s “邮件主题”

​	 –c”抄送地址” 

​	–b “密送地址”

​	 -- -f 发送人邮件地址 

​	–F 发件人姓名 < 要发送的邮件内容>

**三种常用格式发信**

​	mail -s test yangfang@fudan.edu.cn #第一种方法，你可以把当前shell当成编辑器来用，编辑完内容后Ctrl-D结束

　　echo “mail content”|mail -s test yangfang@fudan.edu.cn #第二种方法，我用的最多，可能是喜欢管道的缘故吧

　　mail -s test yangfang@fudan.edu.cn < file #第三种方法，以file的内容为邮件内容发信

 

#### 13.nslookup  DNS域名

​	nslookup命令是常用域名查询工具。

​	nslookup有两种工作模式，即交互模式和非交互模式。在交互模式下，用户可以向域名服务器查询各类主机，域名的信息

​	或者输出域名中的主机列表。而在非交互模式下，用户可以针对一个主机或域名仅仅获取特定的名称或所需要信息

​	进入交互模式：直接输入nslookup命令，不带任何参数，则直接进入交互模式，此时nslookup会连接到默认的域名服务器

​	即/etc/resolv.conf的第一个dns地址），或者输入nslookup -nameserver/ip。进入非交互模式，就直接输入nslookup域

**语法**

​	nslookup (选项) (参数)

**选项**

​	-sil：不显示任何警告信息

**参数**

​	域名：指定要查询域名

**实例**	

```shell
$ nslookup
> www.baidu.com
Server:         61.139.2.69 //上连的DNS服务器
Address:        61.139.2.69#53 //上连的DNS服务器的IP地址与端口号

Non-authoritative answer: //非权威答案，即从上连DNS服务器的本地缓存中读取出的值，而非实际去查询到的值
www.baidu.com   canonical name = www.a.shifen.com. //说明www.baidu.com有个别名叫www.a.shifen.com
Name:   www.a.shifen.com //域名www.a.shifen.com
Address: 119.75.217.56 //对应的IP地址之一
Name:   www.a.shifen.com
Address: 119.75.218.77//对应的IP地址之二
```

​	exit 退出nslookup的交互模式。

​	set all 列出nslookup工具的常用选项的当前设置值。

​	
