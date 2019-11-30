## Git

**Git** 是一个分布式版本控制系统。

> Git 项目是由 Linus 编写的开源工具

SVN、CVS 属于集中式版本控制系统。

Git 属于分布式版本管理系统。



### 安装 Git

#### Linux

```sh
# Ubuntu
$ sudo apt install git

# Centos
$ sudo yum install git
```

#### Windows

直接官网下载：[Git - download](https://git-scm.com/downloads) 。

#### 配置信息

安装完 Git 后，需要在命令行配置你的名字和 Email 地址。

```sh
$ git config --global user.name "Your Name"
$ git config --global user.name "email@example.com"
```

`--global` 参数是全局设置，代表你的机器电脑上所有的 Git 仓库都会使用这个配置。



### 创建版本库

版本库就是仓库（Repository），可以理解为是一个目录。

目录里的文件都被 Git 管理，Git 可以跟踪每个文件的修改、删除、添加，任何时刻都可以追踪历史或复原。

创建一个版本库：

```sh
# 找到一个空目录 Test，进入
$ cd Test
# 通过 git init 将这个目录变为 Git 管理的仓库
$ git init
```

`git init` 后仓库就建好了，目录中会多一个 `.git` 的目录，这个 `.git` 是 Git 用来跟踪管理版本库的，不能修改，删除。

版本控制系统跟踪的是**文本文件**的改动。可以跟踪到具体哪一行发生了那些改动。而面对二进制文件，版本控制系统只能知道文件的大小发生了什么变化，内容无从得知。

文本文件建议使用 `UTF-8 编码 `。

将文件添加到仓库的两个步骤：

```sh
# 把文件添加到仓库
$ git add index.html
$ git add .
# 告诉Git,把文件提交到仓库
$ git commit -m "add index.html"
```

`git commit -m ""` 中 `-m` 后面输入本次提交的说明，而且是强制必须填写。



### 仓库状态

`git status` 能查看仓库当前状态。

`git diff` 能比较工作目录中的文件和暂存区快照之间的差异。（文件内容之间的修改变化）

#### 版本回退

`git log` 能显示提交日志信息。

回退到上一个版本，Git 用 `HEAD` 表示当前版本，上一个版本为 `HEAD^` ，上上一个版本为 `HEAD^^` ，以此类推。如果是上100个版本，可以这样表示：`HEAD~100` 。

退回上一个版本：

```sh
$ git reset --hard HEAD^
```

退回指定的某个版本：

```sh
$ git reset --hard 85e8a
```

`git reflog` 命令记录了每一次命令操作历史，可用于找出特定的版本号回退。

#### 工作区和暂存区

工作区（Working Directory）就是电脑里看得见的目录（文件夹），之前 `git init` 后的目录就是工作区。

#### 版本库

`.git` 不算工作区，属于版本库（Repository）。

版本库里有称为 stage 的**暂存区**，还有 Git 为我们创建的第一个分支 `master` ，以及一个指向 master 的指针叫 `HEAD` 。

将文件添加入版本库有两步骤：

- `git add` 把文件添加进去，实际就是把文件修改添加到暂存区。
- `git commit` 提交更改，实际就是把暂存区的所有内容提交到当前分支（master）

#### 管理修改

Git跟踪并管理的是修改，而非文件。

`git commit` 只负责把暂存区(git add 的内容)的修改提交，不会提交工作区的修改。

使用 `git diff HEAD -- file` 命令可以查看工作区和版本库里面最新版本的区别。

每次修改，如果不用 `git add` 到暂存区，那就不会加入到 `commit` 中。

#### 撤销修改

`git checkout -- file` 命令可以丢弃工作区的修改，它能把文件在工作区的修改全部撤销，两种情况：

- 文件修改后还没有放到暂存区，这时撤销修改就回到和版本库一模一样的状态
- 文件已经添加到暂存区后，又作了修改，这时撤销修改就回到添加到暂存区的状态

总之，就是让这个文件回到最近一次 `git commit` 或 `git add` 时的状态。

`git checkout -- file` 中的 `--` 如果不写，命令就变成**切换到另一个分支**的功能。

`git reset HEAD <file>` 命令可以把暂存区(git add 的内容)的修改撤销。

`git reset` 命令既可以回退版本，也可以把暂存区的修改回退到工作区。当用 `HEAD `时，表示最新的版本。

#### 删除文件

从版本库中删除某文件：

```sh
$ git rm <file>
```

误删了可以使用以下命令恢复到最新版本：

```sh
$ git checkout -- <file>
```

`git checkout` 其实是用版本库里的版本替换工作区的版本，无论工作区是修改还是删除，都可以还原。

从来没有被添加到版本库就被删除的文件，是无法恢复的。



### 远程仓库

使用的远程仓库为 [GitHub](https://github.com/)

#### 创建 SSH_KEY 

在用户主目录进入 `.ssh` 目录，查看 `id_rsa` 和 `id_rsa_pub` 这两个文件，没有就创建：

```sh
$ ssh-keygen -t rsa -C "youremail@example.com"
```

一路回车，使用默认值。

`id_rsa `是私钥

`id_rsa.pub`是公钥

##### 添加 ssh_key 到 Github

登录 GitHub -> Settings -> SSH and GPG keys -> New SSH key

复制 `id_rsa_pub` 的内容到 Key 文本框中，添加。

#### 添加远程库

本地仓库关联到 GitHub 远程仓库：

```sh
$ git remote add origin git@github.com:Username/Test.git
```

Username 替换成自己的 GitHub 账号名。

`origin` ：远程库。

将本地库所有内容推送到远程库：

```sh
$ git push -u origin master
```

将当前分支 `master` 推送到远程，第一次推送，需要添加 `-u` 参数，将本地的 `master` 分支和远程的 `master` 分支关联起来。

下一次推送，不需要添加`-u` 参数了。

#### 克隆远程仓库

```sh
$ git clone <url地址>
```

Git 支持多种地址协议，默认的 `git://` 使用的是 `ssh` ，还支持 `https` 。



### 分支管理

#### 创建与合并分支

`HEAD` 指向当前分支。

Git 创建分支很快，其本质就是新建一个指针(例如叫`dev`)，指向 `master` 相同的提交，再把 `HEAD` 指向 `dev`，代表当前在 `dev` 分支上。

在 `dev` 分支下，对工作区的修改和提交就是针对 `dev` 分支了，新提交一次后，`dev` 指针往前移动一步，而 `master` 原地不动。

创建 `dev` 分支，并切换到 `dev` 分支：

```bash
$ git checkout -b dev
```

`git checkout `命令加上 `-b ` 参数表示创建并切换，相当于以下两条命令：

```bash
$ git branch dev
$ git checkout dev
```

查看当前有哪些分支：

```sh
$ git branch
```

`git branch ` 命令会列出所有分支，当前分支前面会标一个 `* `号。

##### 合并分支

把 `master` 指向 `dev` 的当前提交，就完成了把 `dec` 合并到 `master` 上。

合并完成后，删除 `dev` 分支就是把 `dev` 指针删除掉，只剩 `master` 分支。

把 `dev` 分支的工作成果合并到 `master` 分支上（首先要先切换回 master 分支）：

```
$ git merge dev
```

 `git merge` 命令是将指定分支与当前所在分支合并。合并后 `master` 分支内容和 `dev` 分支的相同。

删除 `dev` 分支：

```sh
$ git branch -d dev
```

`-D` 参数可以强行删除 未合并的分支。

##### git switch

此命令与 `git checkout <branch>` **切换分支**作用相同。

创建并切换到新的`dev`分支，可以使用：

```sh
$ git switch -c dev
```

切换到 `master` 分支：

```sh
$ git switch master
```



分支的作用很强大，应该使用分支完成某个模块、任务、功能，再合并到主分支上，最后删除。

#### 解决冲突

`dev` 分支完成了提交（add、commit），切换到 `master` 分支，对文件修改后提交，现在两个分支各自都有新的提交，这种情况下合并（merge），可能会产生冲突，在修改处，

Git用 `<<<<<<<` ，`=======`，`>>>>>>>`  记出不同分支的内容，修改后，再提交，就不会冲突了。

用 `git log --graph`  命令可以看到分支合并情况。

#### 分支管理策略

默认合并分支时，Git 采用的是 **Fast forward** 模式，这个模式下，删除分支后，就没有这个分支的信息了。

禁用 **Fast forward** 模式，Git 就会在合并(merge)的时候，生成一个新的 commit，这样就可以看到这个分支的历史信息。

合并 `dev` 分支时，使用 `--no-ff` 参数，禁用 **Fast forward**：

```sh
$ git merge --no-ff -m "merge with dev" dev
```

##### 分支策略

项目上，`master` 分支应该是一个稳定分支，用于发布新版本，而不是在这上面写代码。

应该在类似 `dev` 分支上工作，每个工作人员在 `dev` 上有自己的分支，往 `dev` 上合并，等项目完成新版本后，再由专门人员合并到 `master` 分支。

#### Bug分支

修复 bug 可以创建一个新的 bug 分支进行修复，修复完合并，删除分支。

修复前如果在 `dev` 分支下有未完成的工作，使用命令 `git stash` ，将当前工作现场隐藏起来，切换到有 bug 的分支，建立临时的分支来修复 bug。

回到工作区，用 `git stash list` 命令查看被隐藏的工作现场，通过`git stash apply`（隐藏内容不删除） 或 `git stash pop`（恢复后隐藏内容删除） 来恢复。

在 `master` 分支上修复的bug，想要合并到当前 `dev` 分支，可以用 `git cherry-pick <commit>` 命令，把bug提交的修改“复制”到当前分支，避免重复劳动。

#### Feature分支

开发一个新feature，最好新建一个分支。

如果要丢弃一个没有被合并过的分支，可以通过 `git branch -D <name>` 强行删除。

#### 多人协作

- 用 `git push origin <branch-name>` 推送自己的修改。
- 推送失败得话，原因是远程分支比本地分支更加新，需先 `git pull` 合并。
- 合并有冲突，需要先解决，再提交
- `git pull` 提示 `no tracking information ` 说明本地分支与远程分支链接关系没有创建，通过命令 `git branch --set-upstream-to <branch-name> origin/<branch-name>` 建立链接关系。

- 查看远程库信息：`git remote -v` 。
- 本地新建的分支不推送到远程，其他人是不可见的。

#### Rebase

`git rebase` 操作可以把本地未push的分叉提交历史整理成直线。

rebase 的目的是使得我们在查看历史提交的变化时更容易，因为分叉的提交需要三方对比。



### 标签管理

发布一个新版本时，需要先在版本库打一个标签（tag），确认版本信息。

标签时版本库的一个快照。

标签实质是指向某个 commit 的指针。

标签意义是起一个有意义的名字，让人容易记住。

#### 创建标签

便签打在分支上

创建新标签：

```sh
$ git tag v1.0
```

查看所有标签：

```sh
$ git tag
```

标签默认打在最新的 commit 上，也可以往历史的 commit 上打标签：

```sh
# 查看历史提交的 commit id
$ git log --pretty=oneline --abbrev-commit
```

指定 commit id 打标签：

```sh
$ git tag v0.5 4c98e5e
```

`4c98e5e` 为 commit id。

可以用 `git show <tagname>` 查看便签信息。

可以创建有说明的标签，用 `-a` 指定标签名，`-m` 指定说明文字：

```sh
$ git tag -a v0.7 -m "version 0.7 released" 0d78ccb
```

#### 操作标签

删除标签：

```sh
$ git tag -d v0.5
```

创建的便签存储在本地，不会自动推送到远程。

推送标签：`git push origin <tagname> ` 。

##### 删除远程标签

先在本地删除：`git tag -d v0.7` 。

再远程删除：`git push origin :refs/tags/v0.7` 。



### .gitignore

特殊文件、保密文件、二进制文件等不想提交到仓库中，在 Git 工作区根目录创建一个 `.gitignore` 文件，可以把需要忽略的文件名、文件目录填进去，Git 会自动忽略这些文件。

[GitHub 推荐的配置文件](https://github.com/github/gitignore)

主要忽略的文件：

- 操作系统自动生成的文件，缩略图等
- 编译生成的中间文件、可执行文件
- 带敏感信息的配置文件

`git add -f <file>` 使用 `-f` 强制添加到 Git

检查 `.gitignore` 哪写错了：`git check-ignore -v <filename>` 。

#### .gitignore 不生效问题

```sh
# 把本地缓存删除，再提交
$ git rm -r --cached .
$ git add .
$ git commit -m 'update .gitignore'
```

#### .gitignore 忽略规则

```git
#                 注释
*.o               忽略所有 .o 结尾的文件
!foo.o            foo.o例外(不忽略此名的文件)
/dist             忽略 根目录下 /dist 里的所有文件
docs/             忽略 docs/ 目录下所有文件
**/foo:           表示忽略/foo,a/foo,a/b/foo等
...
```



### 命令配置别名

使用 `ci` 表示 `commit` 。

```sh
$ git config --global alias.ci commit
```

`--global` 表示全局参数

每个Git 仓库配置文件在 `.git/config` 文件中。

别名就在这个文件的 `[alias]` 配置项下。

当前用户的 Git 配置文件放在用户主目录下的一个隐藏文件：`.gitconfig` 里，别名也可以修改这个文件的 `[alias]` 项。





####  参考资料

- [Git 文档](https://git-scm.com/book/zh/v2)
- [廖雪峰 - Git教程](https://www.liaoxuefeng.com/wiki/896043488029600)

- [Git忽略提交规则 - .gitignore配置运维总结](https://www.cnblogs.com/kevingrace/p/5690241.html)