import { defineConfig } from 'vite'

export default defineConfig({
  // 核心修改：添加这一行，必须与你的 Nginx 配置路径 /homepage/ 保持一致
  // 注意前后都要有斜杠
  base: '/homepage/',

  server: {
    port: 3000,
    open: true
  }
})
