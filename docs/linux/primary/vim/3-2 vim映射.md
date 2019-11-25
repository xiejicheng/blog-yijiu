## 3-02 Vim 映射

### 什么是 vim 映射

vim映射就是把 "一个操作" 映射到 "另一个操作"

- 不满意原来的按键设置
- 映射一些方便的快捷键
- 按下某些按键时，放弃默认操作，按我们的想法去做



### 基本映射

基本映射就是 **normal 模式**下的映射

- 通过 map 就可以实现映射。比如 `:map - x`  然后按 - 就会删除字符
- `:map <space> viw`  告诉 vim 按下空格的时候选中整个单词
- `:map <c-d> dd ` 可以使用 ctrl + d 执行 `dd` 删除一行

- 消除映射`unmap - ` 消除 - 的删除字符功能(对应第一点)



### 模式映射

vim 常用模式 noremal/visual/insert 都可以定义映射

- 用 `nmap` / `vmap` / `imap` 定义映射只在 noremal/visual/insert 分别有效

- `:vmap \ U`  把在 visual 模式下选中的文本大小(u/U 转换大小写)

- 在 insert 模式下映射 ctrl+d 来删除一行的方法： `imap <c-d> <Esc>ddi`

    

> 类似递归的写法
>
> :nmap - dd
>
> :nmap \ -



### 递归与非递归映射

***map** 系统命令有递归的风险

- 安装插件后，插件映射了同一个按键的不同行为，有冲突就会有一个失效
- 保证没有冲突比较难(风险)
- 使用非递归映射

#### 非递归映射

- 命令不会递归解释
- 使用 *map 对应的 nnoremap / vnoremap / inoremap
-  任何时候都应该使用 非递归映射



尝试在 vimrc 中定义映射，提高工作效率

参考开源的vim配置

### 学习与配置vim

- 了解常见的配置选项
- 学习vim映射
- vim进阶书籍 [《笨方法学Vimscript》](<http://learnvimscriptthehardway.onefloweroneworld.com/> )
- vim插件
- Neovim

