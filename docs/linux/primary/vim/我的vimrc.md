## 我的.vimrc

> 路径：~/.vimrc

```sh
""""""""""""""""
"   vim-plug   "
""""""""""""""""

" Specify a directory for plugins
" - For Neovim: ~/.local/share/nvim/plugged
" - Avoid using standard Vim directory names like 'plugin'
call plug#begin('~/.vim/plugged')

" 启动画面
Plug 'mhinz/vim-startify'

" 底部状态栏美化
Plug 'vim-airline/vim-airline'
Plug 'vim-airline/vim-airline-themes'

" 代码缩进线条
Plug 'Yggdroot/indentLine'

" gruvbox配色
Plug 'morhetz/gruvbox'

" nerdtree 目录树
Plug 'scrooloose/nerdtree'

" ctrlp快速搜索
Plug 'ctrlpvim/ctrlp.vim'

" 快速移动
Plug 'easymotion/vim-easymotion'

" 快速替换
Plug 'tpope/vim-surround'

" fzf 模糊搜索工具
Plug 'junegunn/fzf', { 'dir': '~/.fzf', 'do': './install --all' }
Plug 'junegunn/fzf.vim'

" far 搜索替换
Plug 'brooth/far.vim'

" vim-go golang插件
Plug 'fatih/vim-go', { 'do': ':GoUpdateBinaries' }

"YCM 补全
" Plug '~/.vim/plugged/YouCompleteMe'
" Plug 'rdnetto/YCM-Generator', {'branch':'stable'}

" 快速注释代码
Plug 'tpope/vim-commentary'

" 括号匹配高亮
Plug 'kien/rainbow_parentheses.vim'

" 括号引号补全
Plug 'jiangmiao/auto-pairs'

" 宏定义补全
Plug 'SirVer/ultisnips'

" 静态代码分析
Plug 'vim-syntastic/syntastic'

" 文件类型标志符号/图标
" Plug 'ryanoasis/vim-devicons'

" Initialize plugin system
call plug#end()


" lazy load plugins
autocmd! InsertEnter * call Init()
let g:lazy_load = 0
function! Init()
  if g:lazy_load == 0
    let g:lazy_load = 1
    call plug#load('YouCompleteMe')
  endif
endfunction






""""""""""""""""
"   常用设置   "
""""""""""""""""

" 行号
set number

" 语法高亮
syntax on

" 设置主题
"colorscheme default

" 高亮搜索
set hlsearch

" 默认配色
colorscheme gruvbox
set background=dark

" 开启类型检查
filetype plugin indent on

" 去除 vi 与 vim 一致性
set nofoldenable

" 禁止折叠
set nofoldenable

" 开启语法高亮
syntax on

" 自动缩进
set autoindent

" C语言的缩进格式
set cindent

" 遇到右花括号}，则取消缩进形式
set smartindent
set shiftround

" 关于 Tab 的设置
set tabstop=4
set expandtab
set shiftwidth=4

" 去掉输入错误的提示声
set novisualbell

" 逢空格进1制表符
set softtabstop=4

" 禁用粗体
set t_md=

" 开启 256 色
set t_Co=256

" filetype
set fileformat=unix

" 编码 UTF-8
set encoding=utf-8
set cmdheight=1

" 忽略大小写
set ignorecase



""""""""""""""""
"     映射     "
""""""""""""""""

" 一些方便的映射
let mapleader = ','


" 使用 jj 进入 normal 模式
inoremap jj <Esc>`^

" 使用 leader+w 直接保存
inoremap <leader>w <Esc>:w<cr>
noremap <leader>w :w<cr>

" use ctrl+h/j/k/l switch window
noremap <C-h> <C-w>h
noremap <C-j> <C-w>j
noremap <C-k> <C-w>k
noremap <C-l> <C-w>l

" json 格式化
com! FormatJSON %!python3 -m json.tool

" nerdtree 目录树映射
nnoremap <leader>v :NERDTreeFind<cr>
nnoremap <leader>g :NERDTreeToggle<cr>
let NERDTreeShowHidden=1

"ctrlp快速搜索映射
let g:ctrlp_map='<c-p>'

"easymotion 映射
map ss <Plug>(easymotion-s2)

" 括号、引号补全
inoremap ( ()<ESC>i
inoremap ) <c-r>=ClosePair(')')<CR>
inoremap { {}<ESC>i
inoremap } <c-r>=ClosePair('}')<CR>
inoremap [ []<ESC>i
inoremap ] <c-r>=ClosePair(']')<CR>
inoremap < <><ESC>i
inoremap > <c-r>=ClosePair('>')<CR>
inoremap ‘ ’‘<ESC>i
inoremap " ""<ESC>i
inoremap " <c-r>=QuoteDelim('"')<CR>
inoremap ' <c-r>=QuoteDelim("'")<CR>

function ClosePair(char)
    if getline('.')[col('.') - 1] == a:char
        return "\<Right>"
    else
        return a:char
    endif
endf

function QuoteDelim(char)
 let line = getline('.')
 let col = col('.')
 if line[col - 2] == "\\"
 "Inserting a quoted quotation mark into the string
 return a:char
 elseif line[col - 1] == a:char
 "Escaping out of the string
 return "\<Right>"
 else
 "Starting a string
 return a:char.a:char."\<Esc>i"
 endif
endf


""""""""""""""""
"   插件设置   "
""""""""""""""""

" vim-go
let g:go_fmt_command = "goimports"
let g:go_autodetect_gopath = 1
let g:go_list_type = "quickfix"

let g:go_highlight_types = 1
let g:go_highlight_fields = 1
let g:go_highlight_functions = 1
let g:go_highlight_function_calls = 1
let g:go_highlight_extra_types = 1
let g:go_highlight_generate_tags = 1

" YouCompleteMe
let g:ycm_server_python_interpreter = '/usr/bin/python3'
let g:ycm_python_binary_path = 'python3'
let g:ycm_seed_identifiers_with_syntax = 1
let g:ycm_collect_identifiers_from_tags_files = 1
let g:ycm_add_preview_to_completeopt = 0
let g:ycm_server_keep_logfiles = 1
let g:ycm_autoclose_preview_window_after_completion = 1
let g:ycm_max_num_candidates = 14
let g:ycm_max_num_identifier_candidates = 7
" set completefunc=youcompleteme#Complete
set completeopt=longest,menu   " 让Vim的补全菜单行为与一般IDE一致(参考VimTip1228)
let g:ycm_global_ycm_extra_conf = "~/.ycm_extra_conf.py"
nnoremap <leader>j :YcmCompleter GoToDeclaration<CR>
nnoremap <leader>k :YcmCompleter GoToDefinition<CR>
nnoremap <leader>l :YcmCompleter GoToDefinitionElseDeclaration<CR>
nnoremap <F6> :YcmForceCompileAndDiagnostics<CR>    "force recomile with syntastic
" nnoremap <leader>lo :lopen<CR>    "open locationlist
" nnoremap <leader>lc :lclose<CR>   "close locationlist
inoremap <leader><leader> <C-x><C-o>
let g:ycm_cache_omnifunc=0
let g:ycm_complete_in_comments = 1
let g:ycm_complete_in_strings = 1
let g:ycm_show_diagnostics_ui = 0 "close syntax checked
let g:ycm_filetype_blacklist = {
      \ 'tagbar' : 1,
      \ 'nerdtree' : 1,
      \}
let g:ycm_semantic_triggers =  {
  \   'c' : ['->', '.'],
  \   'objc' : ['->', '.'],
  \   'cpp,objcpp' : ['->', '.', '::'],
  \   'perl' : ['->'],
  \   'php' : ['->', '::'],
  \   'cs,java,javascript,d,vim,ruby,python,perl6,scala,vb,elixir,go' : ['.'],
  \   'lua' : ['.', ':'],
  \   'erlang' : [':'],
  \   'css' : ['re!^\s{4}', 're!:\s+'],
  \   'html' : ['</'],
  \ }

"锁定光标位置
"set cursorcolumn
"set cursorline
"hi CursorLine   cterm=NONE ctermbg=darkred ctermfg=white guibg=darkgreen guifg=white
"hi CursorColumn cterm=NONE ctermbg=darkred ctermfg=white guibg=darkgreen guifg=white

"kien/rainbow_parentheses.vim 括号匹配高亮
let g:rbpt_colorpairs = [
    \ ['brown',       'RoyalBlue3'],
    \ ['Darkblue',    'SeaGreen3'],
    \ ['darkgray',    'DarkOrchid3'],
    \ ['darkgreen',   'firebrick3'],
    \ ['darkcyan',    'RoyalBlue3'],
    \ ['darkred',     'SeaGreen3'],
    \ ['darkmagenta', 'DarkOrchid3'],
    \ ['brown',       'firebrick3'],
    \ ['gray',        'RoyalBlue3'],
    \ ['black',       'SeaGreen3'],
    \ ['darkmagenta', 'DarkOrchid3'],
    \ ['Darkblue',    'firebrick3'],
    \ ['darkgreen',   'RoyalBlue3'],
    \ ['darkcyan',    'SeaGreen3'],
    \ ['darkred',     'DarkOrchid3'],
    \ ['red',         'firebrick3'],
    \ ]
let g:rbpt_max = 40
let g:rbpt_loadcmd_toggle = 0
au VimEnter * RainbowParenthesesToggle
au Syntax * RainbowParenthesesLoadRound
au Syntax * RainbowParenthesesLoadSquare
au Syntax * RainbowParenthesesLoadBraces

"宏定义补全 Ultisnips
let g:UltiSnipsExpandTrigger = "<tab>"
let g:UltiSnipsJumpForwardTrigger = "<tab>"
let g:UltiSnipsJumpBackwardTrigger="<s-tab>"
"定义存放代码片段的文件夹 .vim/snippets下，使用自定义和默认的，将会的到全局，有冲突的会提示

"静态代码分析 Syntastic
"设置error和warning的标志
let g:syntastic_enable_signs = 1
let g:syntastic_error_symbol='✗'
let g:syntastic_warning_symbol='►'
"总是打开Location List（相当于QuickFix）窗口，如果你发现syntastic因为与其他插件冲突而经常崩溃，将下面选项置0
let g:syntastic_always_populate_loc_list = 1
"自动打开Locaton List，默认值为2，表示发现错误时不自动打开，当修正以后没有再发现错误时自动关闭，置1表示自动打开自动关闭，0表示关闭自动打开和自动关闭，3表示自动打开，但不自动关闭
let g:syntastic_auto_loc_list = 1
"修改Locaton List窗口高度
let g:syntastic_loc_list_height = 5
"打开文件时自动进行检查
let g:syntastic_check_on_open = 1
"自动跳转到发现的第一个错误或警告处
let g:syntastic_auto_jump = 1
"进行实时检查，如果觉得卡顿，将下面的选项置为1
let g:syntastic_check_on_wq = 0
"高亮错误
let g:syntastic_enable_highlighting=1
"让syntastic支持C++11
let g:syntastic_cpp_compiler = 'clang++'
let g:syntastic_cpp_compiler_options = ' -std=c++11 -stdlib=libc++'
"设置pyflakes为默认的python语法检查工具
let g:syntastic_python_checkers = ['pyflakes']
"修复syntastic使用:lnext和:lprev出现的跳转问题，同时修改键盘映射使用sn和sp进行跳转
function! <SID>LocationPrevious()                       
  try                                                   
    lprev                                               
  catch /^Vim\%((\a\+)\)\=:E553/                        
    llast                                               
  endtry                                                
endfunction                                             
function! <SID>LocationNext()                           
  try                                                   
    lnext                                               
  catch /^Vim\%((\a\+)\)\=:E553/                        
    lfirst                                              
  endtry                                                
endfunction                                             
nnoremap <silent> <Plug>LocationPrevious    :<C-u>exe 'call <SID>LocationPrevious()'<CR>                                        
nnoremap <silent> <Plug>LocationNext        :<C-u>exe 'call <SID>LocationNext()'<CR>
nmap <silent> sp    <Plug>LocationPrevious              
nmap <silent> sn    <Plug>LocationNext
"关闭syntastic语法检查, 鼠标复制代码时用到, 防止把错误标志给复制了
nnoremap <silent> <Leader>ec :SyntasticToggleMode<CR>
function! ToggleErrors()
    let old_last_winnr = winnr('$')
    lclose
    if old_last_winnr == winnr('$')
        " Nothing was closed, open syntastic error location panel
        Errors
    endif
endfunction
```

