---
title: SQL 函数赖与模式分解
date: 2018-05-21 18:58:02
tags:
- SQL
toc: true
permalink: SQLfunDep
categories: Database
---
# 函数依赖 Functional Dependency
数据依赖的一种，它反映属性或属性组之间相依存，互相制约的关系，即反映现实世界的约束关系。

<!--more-->

定义
设R(U)是属性U上的一个关系模式，X和Y均为U={A1，A2，…，An}的子集，r为R的任一关系，如果对于r中的任意两个元组u，v，只要有u[X]=v[X]，就有u[Y]=v[Y]，则称X函数决定Y，或称Y函数依赖于X，记为X→Y。

例：
```
(sno-学生ID，tno-教师ID，cno-课程ID，
sname-学生姓名，tname-教师姓名，cname-课程名称，grade-成绩）
sno→sname, cno→cname,(sno,cno)→grade √
sname→sno, tno→cno, sno→tname ×
```
函数依赖是语义范畴
1. 语义：数据所反映的现实世界事物本质联系
2. 根据语义来确定函数依赖性的存在与否
3. 函数依赖反映属性之间的一般规律，必须在关系模式下的任一个关系r中都满足约束条件。

# 属性间的联系决定函数依赖关系
例子
设X、Y均是U的子集
1. X和Y间联系是1:1，则X→Y,Y→X。（相互依赖，可记作X←→Y）
2. X和Y间联系是M:1(M)， 则X→Y。
3. X和Y间联系是M:N(M,N)，则X、Y间不存在函数依赖。

# 完全函数依赖和部分函数依赖

函数依赖分为完全函数依赖和部分函数依赖

定义

在R(U)中，如果X→Y，并且对于X的任何真子集X'都有X'Y'，则称 Y 完全依赖于 X ，记作X→Y；否则，如果X→Y，且X中存在一个真子集X'，使得X'→Y成立，则称 Y 部分依赖 于 X。

例
```
学生ID，学生姓名，所修课程ID，课程名称，成绩
（学生ID，所修课程ID）→成绩
成绩既不能单独依赖于学生ID，也不能单独依赖于所修课程ID，因此成绩完全函数依赖于关键字。
（学生ID，所修课程ID）→学生姓名
学生ID→学生姓名
学生姓名可以依赖于关键字的一个主属性——学生ID，因此学生姓名部分函数依赖于（学生ID，所修课程ID）。
```
# 平凡函数依赖和非平凡函数依赖
平凡函数依赖

当关系中属性集合Y是属性集合X的子集时(Y?X)，存在函数依赖X→Y，即一组属性函数决定它的所有子集，这种函数依赖称为 `平凡函数依赖`

非平凡函数依赖

当关系中属性集合Y不是属性集合X的子集时，存在函数依赖X→Y，则称这种函数依赖为 `非平凡函数依赖`。

设X，Y均为某关系上的属性集，且X→Y
1. 若Y包含于X，则称X→Y为：平凡函数依赖；(Sno, Cno) → Sno  (Sno, Cno) → Cno
2. 若Y不包含于X，则称X→Y为：非平凡函数依赖。(Sno, Cno) → Grade
Y包含于X内，W于X相交，与Y无直接交集。则：X→Y为平凡函数依赖X→W, W→Y为非平凡函数依赖

# 传递函数依赖 X→Y，Y→Z 则Z传递函数依赖于X
例1
设X,Y,Z是关系R中互不相同的属性集合，存在X→Y(Y !→X),Y→Z，则称Z传递函数依赖于X。
- 函数依赖
设R(U)是一个属性集U上的关系模式，X和Y是U的子集。
若对于R(U)的任意一个可能的关系r，r中不可能存在两个元组在X上的属性值相等， 而在Y上的属性值不等， 则称 “X函数确定Y” 或 “Y函数依赖于X”，记作X→Y。
X称为这个函数依赖的决定属性集(Determinant)。
Y=f(x)
  - 说明：
    - 函数依赖不是指关系模式R的某个或某些关系实例满足的约束条件，而是指R的所有关系实例均要满足的约束条件。
    - 函数依赖是语义范畴的概念。只能根据数据的语义来确定函数依赖。
    例如“姓名→年龄”这个函数依赖只有在不允许有同名人的条件下成立
    - 数据库设计者可以对现实世界作强制的规定。例如规定不允许同名人出现，函数依赖“姓名→年龄”成立。所插入的元组必须满足规定的函数依赖，若发现有同名人存在， 则拒绝装入该元组。

例2
Student(Sno, Sname, Ssex, Sage, Sdept)
- 假设不允许重名，则有:
```
Sno → Ssex， Sno → Sage , Sno → Sdept，
Sno ←→ Sname, Sname → Ssex， Sname → Sage
Sname → Sdept
但Ssex －\→Sage
若X→Y，并且Y→X, 则记为X←→Y。
若Y不函数依赖于X, 则记为X－\→Y。
```
- 在关系模式R(U)中，对于U的子集X和Y，
```
如果X→Y，但Y 不为 X的子集，则称X→Y是非平凡的函数依赖
若X→Y，但Y 为 X的子集, 则称X→Y是平凡的函数依赖
```
例3
在关系SC(Sno, Cno, Grade)中
1. 凡函数依赖:(Sno, Cno) → Grade
2. 平凡函数依赖：(Sno, Cno) → Sno(Sno, Cno) → Cno
3. 部分函数依赖：若x->y 并且，存在X的真子集x1，使得x1->y,则 y部分依赖于 x。
4. 完全函数依赖：若x->y并且，对于x的任何一个真子集x1，都不在x1->y 则称y完全依赖于x

# 传递与直接函数依赖
概念
设有两个非平凡函数依赖 X  → Y，Y → Z，当 X 不依赖于 Y，则称 Z` 传递`函数依赖于 X。
-这里之所以规定" X 不函数依赖于 Y”，是因为当 Y → X 时，X 与 Y 就一一对应了，在这种情况下 Z 就`直接`函数依赖于 X（而不是我们所说的传递函数依赖）。

- Z 传递函数依赖于 X，表名 Z 间接依赖于 X，从而表明 X 和 Z 之间关联较弱。

# 函数依赖的 Armstrong 公理
无冗余的函数依赖集 和 函数依赖的完备集（闭包）是好的关系设计。由已知的函数依赖集可以推导出 无冗余的函数依赖集 和 函数依赖的完备集（闭包）。

## 基本公理和推理规则：
基本公理：
- `自反律`如果 Y ∈ X∈ U，则 X → Y 成立。（平凡函数依赖）
- `增广律`如果 X → Y 在 R(U)  成立，且 Z∈ U，则 XZ → XY
- `传递律`如果 X → Y，Y → Z 成立，则 X → Z 成立。

推理规则：
- `合并规则`{X → Y，X → Z}，则 X → YZ
- `分解规则`{X → Y，Z ∈ Y}，则 X → Z。（或：X → YZ，那么 X → Y，X → Z）
- `伪传递规则` {X → Y,YW → Z}，则 WX → Z
- `复合规则`{X → Y，W → Z},则 XW → YZ
- `自积律规则`{X → YZ，Z → W}，则 X → YZW

## 属性闭包
概念

设 F 是属性集合 U 上的一个函数依赖集，X ∈ U，称 X+ = { A|:	A∈U,X → A 由 F 按照 Armstrong 公理系统推导得到 } 为属性集的 x 关于 F 的闭包。

例子：
设有关系模式 R（U，F），U = ABC，F={A→B，B → C}，则有 A 的闭包 A+ = ABC，B+=BC，C+=C。

函数依赖闭包和属性集闭包

一般来说，我们很少会求函数依赖闭包，因为这样会产生大量“无意义”或者意义不大的函数依赖。多数时候，我们关心的只是 F+ 的一个子集，常常伴随的问题是某函数依赖 X → Y 是否在 F+中。而求解这个问题的解决方式，通常是求在 F 下，属性集合 X 的闭包 X+（至于其证明，有兴趣的可以查阅一下相关资料）。

 - 如何求解 X 的属性闭包：
  	- 设置初始值：令X(0) = ?，X(1)= X，F’=?。
    - 若X(0)≠X(1),令 X(0)=X(1)。否则转向 4）。
  - 构造函数依赖集合 F’={Y→Z | (Y→Z)∈F∩Y∈X(1)}，令 F = F – F’,对于其中的每个函数依赖 Y→Z，令X(1) = X(1)∪Z，转向 2）。
    - 输出 X(1),它就是X+

# 最小函数依赖集
概念
对于函数集 F ，称函数集Fmin 为F 的最小函数依赖集，如果 Fmin满足一下条件：
1. Fmin与 F等价：Fmin+=F+。
2. Fmin中每个函数依赖 X→Y 的依赖因素为单元素集，即Y中只含有一个属性集合。
3. Fmin中每个函数依赖 X→Y的决定因素不存在冗余，即既要删除X中任何一个属性，就会改变Fmin的闭包。
4. Fmin中每个函数毒不是冗余的，即删除 Fmin 中任意一个函数依赖，就会改变Fmin 的闭包。

# 无损分解
概念

无损分解指的是对关系模式分解时，原关系模型下任一合法的关系值在分解之后应能通过自然联接运算恢复起来。反之，则称为有损分解。

这里解释一下：“损”代表了信息的丢失的丢失，可能发生的情况是：分解后的关系模式通过自然连接合并，原有元组丢失或增加了无意义的元组，此情况记为“损”。在实际应用当中，我们希望通过自然连接之后可恢复原有关系模式，既不减少也不增加新的元组。那如何才可以做到无损分解呢？？答案是：保持原有关系模式的函数依赖

保持函数依赖的分解

分解需要保持函数依赖，因为 F 中每一个函数依赖都代表数据库的一个约束。如果模式分解不保持函数依赖，那在模式分解中就会丢失一些函数依赖。注意：这里保持原有的函数依赖，包括了通过原有函数依赖推到出来的函数依赖，可以理解为保持原有函数的 F+
---
**Via**
- [源地址](http://www.cnblogs.com/ndxsdhy/archive/2010/12/21/1913123.html)
- [函数依赖与模式分解](http://blog.51cto.com/peiquan/1425012)
