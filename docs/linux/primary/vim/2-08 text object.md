## 2-08 Vim 的 text object

### Text Object (文本对象)

- vim 里文本也要`对象`的概念，比如一个单词，一段句子、一个段落
- 许多编辑器只能操作单个字符修改文本
- 通过操作文本对象来修改要比单个字符高效

###  文本对象操作模式

#### 回忆一下 dw （删除一个单词）

- [number]< command > [text object]
- number 表示次数，command 是命令，d(delete)，c(change)，y(yank) v(visual)
- text object 是要操作的文本对象，比如单词w，句子s，段落p

**次数 + 命令 + 文本对象**

