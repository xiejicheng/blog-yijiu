## 数学运算之 bc

- `bc` 是 bash 内建的运算器，支持**浮点数运算**。

- 内建变量 `scale` 可以设置浮点数精度，默认为 0。

`scale` 变量可以在 `bc` 操作台中定义设置。

#### bc 操作符对照表

|   操作符    |     含义     |
| :---------: | :----------: |
| num1 + num2 |     求和     |
| num1 - num2 |     求差     |
| num1 * num2 |     求积     |
| num1 / num2 |     求商     |
| num1 % num2 |     求余     |
| num1 ^ num2 | **指数运算** |



**实际操作**

```sh
$ bc
bc 1.07.1
Copyright 1991-1994, 1997, 1998, 2000, 2004, 2006, 2008, 2012-2017 Free Software Foundation, Inc.
This is free software with ABSOLUTELY NO WARRANTY.
For details type `warranty'. 
30+20
50
22/7
3
scale=3
22/7
3.142
```

**终端上直接运算**

```sh
$ echo "50+34" | bc
84

$ echo "scale=5;44/7" | bc
6.28571
```

