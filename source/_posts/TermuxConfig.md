---
title: Termux Config Shell
tags:
- Linux
- Windows
categories:
- Coding
author:
- Vitan
toc: true
date: 2020-01-08 12:11:49
---
> 写的一个 Termux 配置脚本，配置开发环境、美化等...

## via curl
```bash
apt install curl
bash -c "$(curl -fsSL https://raw.githubusercontent.com/ivitan/Shell/master/Termux/Termux.sh)"
```

## via wget
```bash
apt install wget
bash -c "$(wget -O- https://raw.githubusercontent.com/ivitan/Shell/master/Termux/Termux.sh)"
```