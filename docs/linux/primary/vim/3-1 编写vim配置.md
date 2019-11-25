## 3-01 编写 Vim 配置 

### 什么是 vim 的配置

- vim 有非常多常用的设置，比如 `:set number` 设置行号
- vimrc 提供了**持久化配置**，让我们自定义配置



### 如何编写自己的 vim 配置文件

- linux/unix 在`~` 目录新建一个 `.vimrc`  文件，命令是   `vim ~/.vimrc` 
- windows系统 `vim $MYVIMRC`

### Vim 配置包含内容

- 常用设置，比如 `set nu`  设置行号，`colorscheme hybrid`  设置主题
- 常用的vim 映射，比如 `noremap <leader>w :w<cr>`  保存文件
- 自定义的 `vimscript`  函数和插件的配置



### vim 常用设置

- 常用设置写到 .vimrc 中，避免每次打开vim要重新设置
- 比如把 `set nu;`  加到.vimrc里，每次打开vim就会显示行号
- vim的配置非常多，可以参考别人的配置学习



### vim 中的映射

vim 中的映射很复杂，因为vim有很多模式

- 设置一下 leader 键 `let mapleader = ","`  常用的是逗号或空格
- 比如用 `inoremap <leader>w <Esc>:w<cr>` 在插入模式保存(按下 `,w`  保存)
- 映射概念复杂，后面再写



> 在vim中执行.vimcr生效
>
> :source ~/.vimrc



### Vim 插件

vim可以使用插件管理器安装插件

- 插件可以扩充vim功能
- 需要具备vim配置知识



### Vim 脚本

**vim自己的脚本语言 Vimscript**

- vim脚本可以用来编写插件
- 高阶



> 可以研究一下 github 上的 vim-go教程 vim-go-tutorial 的 vimrc 文件
>
> 参考 一下  go 开发的基本配置

