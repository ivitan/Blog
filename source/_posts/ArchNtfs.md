---
title: ArchLinux NTFS
date: 2019-03-17 18:07:57
tags:
- Linux
- ArchLinux
- Ubuntu
- Notes
categories: 
- notes
author:
name: Vitan
toc: true
enable_unread_badge: true
thumbnail: /images/ArchLinux.png
---
解决 ArchLInux 无法挂载 NTFS 的U盘和硬盘
<!--more-->

## 方法
```bash
sudo pacman -Syu 
sudo pacman -S ntfs-3g 
```  