---
title: SQL 范式
date: 2018-05-22 14:50:05
tags:
- SQL
toc: true
permalink: SQLnfs
categories: Database
---
SQL范式
<!--more-->
# 数据库基本概念
要理解范式，首先必须对知道什么是关系数据库，简单的说：关系数据库就是用二维表来保存数据。

概念
- `实体`现实世界中客观存在并可以被区别的事物。比如“一个学生”、“一本书”、“一门课”等等。值得强调的是这里所说的“事物”不仅仅是看得见摸得着的“东西”，它也可以是虚拟的，不如说“老师与学校的关系”。
- `字段` 就是一项数据，也就是我们平常所说的“列”。
- `记录` 一个实体的一个实例所特有的相关数据项的集合，也就是我们平常所说的“行”。
- ` 码` 表中可以唯一确定一个元组的某个属性（或者属性组），如果这    样的码有不止一个，那么大家都叫   候选码，我们从候选码中挑一个出    来做老大，它就叫主码。
- `主码` 被数据库设计者选中的，用来在同一实体集中区分不同实体的>    候选码；此外，应该选择哪些从不或极少变化的属性；
- `键` 可唯一标识一条记录的一个字段或字段集，有时翻译为“码”。
-  `主键（primary key)`用于唯一标识一个表中的一条记录的键。每个主键应该具有下列特征：
    - 唯一的。
    - 最小 的（尽量选择最少键的组合）。
    - 非空。
    - 不可更新的（不能随时更改）
-  `外键（foreign keys` 对连接父表和子表的相关记录的主键字段的复制。
- `依赖表（dependent table)` 也称为弱实体（weak entity）是需要用父表标识的子表。
- `关联表（associative table）` 是多对多关系中两个父表的子表。
-  `实体完整性` 每个表必须有一个有效的主 键。
-  `参照完整性` 没有不相匹配的外键值。
- `属性` 教科书上解释为：“实体所具有的某一特性”，由此可见，属性一开始是个逻辑概念，比如说，“性别”是“人”的一个属性。在关系数据库中，属性又是个物理概念，属性可以看作是“表的一列”。
- `元组` 表中的一行就是一个元组。
- `分量` 元组的某个属性值。在一个关系数据库中，它是一个操作原子，即关系数据库在做任何操作的时候，属性是“不可分的”。否则就不是关系数据库了。
- `候选码` 如果任意超码的真子集不能包括超码，则称其为候选码；超码包括候选码；
- `候选码` 若关系中的某一属性或属性组的值能唯一的标识一个元组，>    而其任何真子集都不能再标识，则称该属性组为（超级码）候选码。
- `全码` 如果一个码包含了所有的属性，这个码就是全码。
- `主属性(码属性)` 一个属性只要在任何一个候选码中出现过，这个属性就是主属性。
- `非主属性(非码属性)` 与上面相反，没有在任何候选码中出现过，这个属性就是非主属性。
- `超码` 一个或多个属性的集合，这些属性的组合可以使我们在一个实>    体集中唯一的标识一个实体。
- `外部码` 一个属性（或属性组），它不是码，但是它别的表的码，它就是外码。

# 范式
概念
(数据库设计范式，数据库的设计范式）是符合某一种级别的关系模式的集合。构造数据库必须遵循一定的规则。在关系数据库中，这种规则就是范式。关系数据库中的关系必须满足一定的要求，即满足不同的范式。

满足最低要求的范式是第一范式（1NF）。在第一范式的基础上进一步满足更多要求的称为第二范式（2NF），其余范式以次类推。一般说来，数据库只需满足第三范式（3NF）就行了。

## 第一范式(1NF)
如果一个关系模式R的所有属性都是不可分的基本数据项，则R∈1NF（即R符合第一范式）。简单的说，就是每一个列（属性）只有一个，没有重复。

特点
- 有主键，且主键不能为空。
- 字段不能再分。

要求
- 1.必须有主键来加以识别。
- 2.每个字段只能存放单一的值并确保有数据没有重复的组。

例如：

|姓名|班级|课程|
|:---|:---|:---|
|小明|1班|数学,语文|
|小红|2班|英语|
|小明|2班|数学|

---
里面还有重复组并且没有存放单一的值，并不符合第一范式，给其增加主键学号加以区别：

|学号|姓名|班级|课程|
|:---|:---|:---|:---|
|101|小明|1班|数学|
|101|小明|1班|语文|
|201|小红|2班|英语|
|202|小明|2班|数学|

---

## 第二范式(2NF)
概念
1. 首先要满足第一范式。它的规则是要求数据表里的所有数据都要和该数据表的主键有完全依赖关系。
2. 若关系模式R€1NF，并且每一个 `非主属性` 都 `完全函数依赖` 于 R 的 `候选吗`，则R€2NF。

判断方法：
是否存在某个非主属性，它部分依赖`候选码`，或者说依赖候选码的一部分，存在则属于2NF。

特点
1. 满足第一范式。
2. 表中的每一个非主属性，必须完全依赖于本表码。
3. 只有当一个表中，主码由两个或以上的属性组成的时候，才会出现不符合第二范式的情况

例如有表：
|货物|供应商ID|供应商|价格|供应商地址|
|:---|:---|:---|:---|:---|:---|
|毛巾|01|世纪联华|10.0|星光大道|
|牙刷|01|世纪联华|5.0|星光大道|
|毛巾|02|十足|12.0|月光大道|


- 可知，这里的主键有货物和供应商ID，价格和两个主键都有关，可是供应商地址只和供应商ID有依赖关系。那么不符合第二范式，我们可以将其修改为两张表：

---

|供应商ID|供应商|供应商地址|
|:---|:---|:---|
|01|世纪联华|星光大道|
|02|十足|月光大道|

---

|货物|供应商ID|价格|
|:---|:---|:---|
|毛巾|01|10.0|
|牙刷|01|5.0|
|毛巾|01|12.0|

---
- 这样就符合了第二范式要求的表内数据和表内主键完全依赖的关系。

## 第三范式(3NF)
概念
1. 在第二范式的基础上，要求所有非键属性都只和候选键有相关性，也就是说非键属性之间应该是独立无关的。
2. 若关系模式R€1NF,并且每一个 `非主属性` 都` 非传递依赖` 于 `候选码`，R€3NF。

判断方法：

是否存在某个`非主属性`，它传递依赖`候选码`或者函数依赖某个`非主属性`，存在则不属于3NF，不存在则属于3NF。

特点：
1. 满足第二范式。
2. 非主属性不能传递依赖于码

从上述表来说，供应商和供应商地址是相关的，知道了供应商也就知道了供应商地址（不考虑一厂多址的情况）。可以分为：

|供应商ID|供应商|
|:---|:---|
|01|世纪联华|
|02|十足|

---

|供应商ID|供应商地址|
|:---|:---|
|01|星光大道|
|02|月光大道|

# BC范式(BCNF)
概念
1. BCNF是修正的第三范式。
2. 若关系模式R€1NF，对每个非平凡的函数依赖X-->Y，X一定是`超码`（具有唯一性）

判断方法：
1. 能够找到平凡函数依赖 X--->Y，左边的X不是超码
2. BCNF意味着在关系模式中每一个决定因素都包含候选键，也就是说，只要属性或属性组A能够决定任何一个属性B，则A的子集中必须有候选键。BCNF范式排除了任何属性(不光是非主属性，2NF和3NF所限制的都是非主属性)对候选键的传递依赖与部分依赖。

![例子](https://i.loli.net/2018/05/29/5b0d0900efe53.png)

要求：
:   在满足第三范式的基础上，且不允许主键的一部分被另一部分或其它部分决定。

特点：
1. 满足第三范式。
2. 所有非主属性对每一个码都是完全函数依赖。
3. 所有的主属性对每一个不包含它的码，也是完全函数依赖。
4. 没有任何属性完全函数依赖于非码的任何一组属性。

---
**参考**
- [转载来源1](https://www.jianshu.com/p/6e8254a99314)
- [转载来源2](http://josh-persistence.iteye.com/blog/2200644)
