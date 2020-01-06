## 数学运算之 expr

#### 数学运算的两种方法

- `expr $num1 operator $num2 `
- `$(($num1 operator $num2))`



### expr 操作符对照表

|    操作符    |                  含义                   |
| :----------: | :-------------------------------------: |
| num1 \| num2 | num1不为空且非0，返回num1; 否则返回num2 |
| num1 & num2  |  num1不为空且非0，返回num1; 否则返回0   |
| num1 < num2  |     num1小于num2，返回1; 否则返回0      |
| num1 <= num2 |   num1小于等于num2，返回1; 否则返回0    |
| num1 = num2  |     num1等于num2，返回1; 否则返回0      |
| num1 != num2 |    num1不等于num2，返回1; 否则返回0     |
| num1 > num2  |     num1大于num2，返回1; 否则返回0      |
| num1 >= num2 |   num1大于等于num2，返回1; 否则返回0    |

|   操作符    | 含义 |
| :---------: | :--: |
| num1 + num2 | 求和 |
| num1 - num2 | 求差 |
| num1 * num2 | 求积 |
| num1 / num2 | 求商 |
| num1 % num2 | 求余 |

大部分操作符在 bash 中其他作用，使用时需要通过 `\` 转义。



`$(())` 适用与加减乘除余的运算，比较与判断的运算，得使用 `expr` 。



#### 例子

提示用户输入一个正整数 num，然后计算出 1+2+3+...+num 的值; 必须对 num 是否为正整数做判断，不符合应当允许再次输入 num.

代码:

```sh
#!/bin/bash

while true
do
    read -p "pls input a positive number: " num
    
    expr $num + 1 &> /dev/null

    if [ $? -eq 0 ]; then
        if [ `expr $num \> 0` -eq 1 ]; then
            for((i=1;i<=$num;i++))
            do
                sum=`expr $sum + $i`
            done
            echo "1+2+3...+$num= $sum"
            exit
        fi
    fi
    echo "error, input enlegal"
    continue
done
```

