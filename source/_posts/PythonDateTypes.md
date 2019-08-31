---
title: Date Types
date: 2019-01-10 19:57:13
tags:
    - Python
    - WebCrawler
    - Note
categories:
  - notes
author:
  name: Vitan
toc: true
enable_unread_badge: true
thumbnail: /images/Python.png
---
数据类型
<!--more-->
# 数值类型
## Int 整形
整数类型
- 声明：
1. 十进制：`0~9`
2. var = 十进制数字
4. var = 进制数字
    - 二进制：`0~1`, 符号:  `0b`
    - 八进制：`0~7`,符号:  `0o`
    - 十六进制：`0~9A~F`,符号: `0x`

## Float 浮点型
即小数
- 声明：
- var = 小数

## Bool 布尔类型
只有两个值：True 和 False

## Complex 复数类型
复数的完整结构:实数部分+虚数部分 
-  声明：
1. var = 实数 + 虚数 如：var = 5 + 4j
2. var = complex(实数，虚数值) 如：var = complex(5,3) 

# String类型,字符类型
## String 字符串类型
即文字类型
- 声明：
1. var = 'str...'
2. var = "str..."
3. var = '''str...'''    or   var = """str..."""

## 转义字符
某种特定的格式使得字符的意义发生改变

|符号 |  含义 |
|:---|:---|
|`\` |续行符|
|`\\` |反斜杠符号(\)|
|`\'` |单引号|
|`\"` |双引号|
|`\a` |响铃|
|`\b` |退格(backspace)|
|`\e` |转义|
|`\000` |空|
|`\n` |换行|
|`\v` |纵向制表符|
|`\t` |横向制表符|
|`\r` |回车|
|`\f` |换页|
|`\oyy` |八进制数，yy代表的字符，例如：\o12代表换行|
|`\xyy` |十六进制数，yy代表的字符，例如：\x0a代表换行|
|`\other`| 其它的字符以普通格式输出|

## 元字符串
任意字符串之前添加字母r或者R，则当前字符串中所有转义字符在使用时都不会进行转义操作

# 列表类型(List)
一系列数据的顺序组合，并且组合之后可以修改
- 声明：
  - list = []

## 元组类型(Tuple)
一系列数据的顺序组合，但是组合之后不可以修改
- 声明:
   - tuple = ()

## 字典类型(Dict)
具有键值映射关系的一组无序数据组合，可以修改
- 声明:
   - dict = {'key1':'value1','key2':'value2'...}

## 集合类型(Set)
一组特定数据的无序组合，所有数据不会重复
- 声明:
- var = {value1,value2...}