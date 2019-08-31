---
title: Cat 追加与覆盖
date: 2019-05-16 10:16:23
tags:
  - Linux
  - Shell
categories:
  - notes
author:
  - Vitan
toc: true
enable_unread_badge: true
thumbnail: /images/Linux.png
---
Cat  追加与覆盖
<!--more-->
# 追加
- cat <<EOF>>
```bash
#!/bin/bash
cat << EOF >> cat.txt
vitan.me
EOF
```

- cat >>
```bash
#!/bin/bash
cat >> cat.txt << EOF
vitan.me
EOF
```

# 覆盖
- cat <<EOF>>
```bash
#!/bin/bash
cat << EOF > cat.txt
vitan.me
EOF
```

- cat >>
```bash
#!/bin/bash
cat > cat.txt << EOF
vitan.me
EOF
```

# 使用变量
- Warnning
追加和覆盖若要使用变量必须加 `\` 如 **`\$var`**