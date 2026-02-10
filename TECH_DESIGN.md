## 研发设计文档 (Technical Design)

### 技术栈

- **前端**：HTML + Tailwind CSS + Vanilla JavaScript
- **动画**：GSAP (GreenSock) + CSS3 Animations
- **图标**：Lucide Icons (CDN)
- **响应式**：Mobile-first 设计

### 组件架构

```
├── Layout
│   ├── Navigation (Fixed, Glassmorphism)
│   └── Footer
├── Sections
│   ├── Hero (Full-screen, Video/Image Background)
│   ├── Features (Grid Layout, Hover Effects)
│   ├── Stats (Counter Animation)
│   └── TechStack (Icon Grid)
└── Components
    ├── Button (Primary/Secondary)
    ├── Card (Glassmorphism)
    └── Badge
```

### 动效设计

- **Hero区**：背景视差滚动 + 文字渐入
- **卡片**：悬停上浮 + 光晕效果
- **数据**：数字滚动计数
- **滚动**：Reveal on scroll 动画