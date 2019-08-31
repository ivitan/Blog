---
title: Hexo 同时部署到 Github Coding
date: 2019-03-10 12:01:39
tags:
- Hexo
- Linux
- Termux
toc: true
categories: notes
thumbnail: /images/Hexo.png
---
Hexo 同时部署到 Github Coding
<!--more-->
## 添加 SSH 公钥
1. Github Coding添加同一个 SSH 公钥
2. Github Coding 都部署好相关的仓库

## 设置 _config.yml
 ```bash _config.yml
deploy:
type: git
repository: 
    github: ssh://git@github.com/ivitan/ivitan.github.io,master
    coding: git@git.coding.net:Vitan/vitan.coding.me.git,master
branch: master
```
- 效果
    - [Github Page](https://ivitan.github.io)
    - [Coding Page](https://vitan.coding.me)