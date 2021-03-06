## 排序算法

### 冒泡排序
冒泡排序（Bubble Sort）会遍历若干次要排序的数列，每次遍历时都会从前往后依次的比较相邻两个数的大小；当前者数比后者大，则交换它们的位置，完成遍历。重复此操作，直到整个数列有序为止。

#### 时间复杂性与复杂度

时间复杂性为：O(N^2)。

冒泡排序属于稳定算法。

> 算法稳定性 ： 假设在数列中存在a[i]=a[j]，若在排序之前，a[i]在a[j]前面；并且排序之后，a[i]仍然在a[j]前面。则这个排序算法是稳定的。

**C语言代码实现：**

```c
void bubble_sort(int a[], int n)
{
    int i, j, tmp;
    int flag;         //标记

    for(i = n-1; i > 0; i--)
    {
        flag = 0;     //初始化标记

        //将最大的数放到末尾
        for(j = 0; j < i; j++)
        {
            if (a[j] > a[j+1])
            {
                // 交换a[j]和a[j+1]
                tmp = a[j];
                a[j] = a[j+1];
                a[j+1] = tmp;
                flag = 1;     //发送交换，标记为1
            }
        }
        if(flag == 0)
            break;            //如果没有发生交换，则说明数列有序
    }
}

```



### 快速排序

快速排序（Quick Sort）

```c
void quick_sort(int a[], int l, int r)
{
    if(l < r)
    {
        int i, j, x;
        
        while(i < j)
        {
            while(i < j && a[j] > x)
                j--;
            if(i < j)
                a[i++] = a[j];
            while(i < j && a[i] < x)
                i++;
            if(i < j)
                a[j--] = a[i];
        }
        a[i] = x;
        quick_sort(a, l, i-1);
        quick_sort(a, i+1, r);
    }
}
```



### 直接插入排序



### 希尔排序



### 选择排序



### 堆排序



### 归并排序



### 桶排序



### 基数排序



