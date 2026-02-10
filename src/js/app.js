export function renderApp() {
  const app = document.getElementById('app');
  app.innerHTML = `
    ${renderNavigation()}
    ${renderHeroSection()}
    ${renderFeaturesSection()}
    ${renderStatsSection()}
    ${renderTechSection()}
    ${renderFooter()}
  `;
  
  initAnimations();
  initParticles();
}

function renderNavigation() {
  return `
    <nav id="navbar" class="fixed top-0 w-full z-50 transition-all duration-300 py-4">
      <div class="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <div class="flex items-center gap-3 cursor-pointer group">
          <div class="w-10 h-10 rounded-lg bg-gradient-to-br from-[#0A87E2] to-[#0868b3] flex items-center justify-center transform group-hover:rotate-12 transition-transform">
            <i data-lucide="train-front" class="w-6 h-6 text-white"></i>
          </div>
          <div class="flex flex-col">
            <span class="text-lg font-bold tracking-tight">西南交通大学出版社</span>
            <span class="text-xs text-gray-400 tracking-widest uppercase">AI Empowerment Platform</span>
          </div>
        </div>
        
        <div class="hidden md:flex items-center gap-8">
          <a href="#home" class="text-sm font-medium text-gray-300 hover:text-[#0A87E2] transition-colors relative group">
            首页
            <span class="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#0A87E2] transition-all group-hover:w-full"></span>
          </a>
          <a href="#features" class="text-sm font-medium text-gray-300 hover:text-[#0A87E2] transition-colors relative group">
            AI能力
            <span class="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#0A87E2] transition-all group-hover:w-full"></span>
          </a>
          <a href="#tech" class="text-sm font-medium text-gray-300 hover:text-[#0A87E2] transition-colors relative group">
            技术架构
            <span class="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#0A87E2] transition-all group-hover:w-full"></span>
          </a>
          <a href="#about" class="text-sm font-medium text-gray-300 hover:text-[#0A87E2] transition-colors relative group">
            关于我们
            <span class="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#0A87E2] transition-all group-hover:w-full"></span>
          </a>
        </div>
        
        <div class="flex items-center gap-4">
          <button class="hidden md:flex items-center gap-2 text-sm text-gray-300 hover:text-white transition-colors">
            <i data-lucide="sun" class="w-4 h-4"></i>
          </button>
          <button class="btn-primary px-6 py-2.5 rounded-full text-sm font-semibold text-white flex items-center gap-2">
            <span>登录平台</span>
            <i data-lucide="arrow-right" class="w-4 h-4"></i>
          </button>
        </div>
      </div>
    </nav>
  `;
}

function renderHeroSection() {
  return `
    <section id="home" class="hero-bg min-h-screen flex items-center justify-center relative pt-20">
      <div class="grid-lines"></div>
      <canvas id="particles"></canvas>
      
      <div class="glow top-1/4 left-1/4"></div>
      <div class="glow bottom-1/4 right-1/4" style="background: radial-gradient(circle, rgba(10, 135, 226, 0.2) 0%, transparent 70%);"></div>
      
      <div class="max-w-6xl mx-auto px-6 text-center relative z-10">
        <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8 reveal">
          <span class="w-2 h-2 rounded-full bg-[#0A87E2] animate-pulse"></span>
          <span class="text-sm text-gray-300 tracking-wide">新一代轨道交通人工智能基础设施</span>
        </div>
        
        <h1 class="text-5xl md:text-7xl font-bold mb-6 leading-tight reveal">
          <span class="block text-white mb-2">"智轨未来"</span>
          <span class="gradient-text">AI智慧服务平台</span>
        </h1>
        
        <p class="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed reveal">
          依托西南交通大学百年轨道交通学科优势，融合大模型与知识图谱技术<br>
          赋能智慧交通，智领未来
        </p>
        
        <div class="flex flex-col sm:flex-row items-center justify-center gap-4 reveal">
          <button class="btn-primary px-8 py-4 rounded-full text-base font-semibold text-white flex items-center gap-3 w-full sm:w-auto justify-center">
            <i data-lucide="sparkles" class="w-5 h-5"></i>
            <span>开启AI旅程</span>
          </button>
          <button class="btn-secondary px-8 py-4 rounded-full text-base font-semibold text-white flex items-center gap-3 w-full sm:w-auto justify-center">
            <span>了解更多</span>
            <i data-lucide="chevron-down" class="w-5 h-5"></i>
          </button>
        </div>
        
        <div class="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto reveal">
          <div class="text-center">
            <div class="text-3xl font-bold text-[#0A87E2] mb-1">100万+</div>
            <div class="text-xs text-gray-500 uppercase tracking-wider">知识节点</div>
          </div>
          <div class="text-center">
            <div class="text-3xl font-bold text-[#0A87E2] mb-1">50+</div>
            <div class="text-xs text-gray-500 uppercase tracking-wider">AI模型</div>
          </div>
          <div class="text-center">
            <div class="text-3xl font-bold text-[#0A87E2] mb-1">99.9%</div>
            <div class="text-xs text-gray-500 uppercase tracking-wider">服务可用性</div>
          </div>
          <div class="text-center">
            <div class="text-3xl font-bold text-[#0A87E2] mb-1">24/7</div>
            <div class="text-xs text-gray-500 uppercase tracking-wider">智能服务</div>
          </div>
        </div>
      </div>
      
      <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <i data-lucide="chevron-down" class="w-6 h-6 text-gray-500"></i>
      </div>
    </section>
  `;
}

function renderFeaturesSection() {
  return `
    <section id="features" class="py-32 relative">
      <div class="max-w-7xl mx-auto px-6">
        <div class="text-center mb-20 reveal">
          <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0A87E2]/10 border border-[#0A87E2]/20 text-[#0A87E2] text-sm mb-4">
            <i data-lucide="cpu" class="w-4 h-4"></i>
            <span>核心能力</span>
          </div>
          <h2 class="text-4xl md:text-5xl font-bold mb-6">AI赋能知识服务</h2>
          <p class="text-gray-400 max-w-2xl mx-auto">基于深度学习的多模态内容理解，构建轨道交通领域最专业的智能知识引擎</p>
        </div>
        
        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          ${renderFeatureCard('search', '智能语义检索', '基于大模型的自然语言理解，实现意图识别与精准内容匹配，支持多轮对话式检索')}
          ${renderFeatureCard('network', '知识图谱构建', '自动抽取实体关系，构建轨道交通领域知识图谱，实现知识关联与推理')}
          ${renderFeatureCard('wand-2', '智能内容生成', 'AIGC辅助内容创作，支持智能摘要、多语言翻译、风格改写与自动排版')}
          ${renderFeatureCard('bot', '数字人服务', 'AI数字人客服与讲师，提供7×24小时智能问答与个性化学习辅导')}
        </div>
      </div>
    </section>
  `;
}

function renderFeatureCard(icon, title, description) {
  return `
    <div class="glass-card rounded-2xl p-8 relative overflow-hidden group reveal">
      <div class="absolute top-0 right-0 w-32 h-32 bg-[#0A87E2]/10 rounded-full blur-3xl transform translate-x-16 -translate-y-16 group-hover:bg-[#0A87E2]/20 transition-all"></div>
      <div class="w-14 h-14 rounded-xl bg-gradient-to-br from-[#0A87E2]/20 to-[#0A87E2]/5 flex items-center justify-center mb-6 border border-[#0A87E2]/20">
        <i data-lucide="${icon}" class="w-7 h-7 text-[#0A87E2]"></i>
      </div>
      <h3 class="text-xl font-bold mb-3">${title}</h3>
      <p class="text-gray-400 text-sm leading-relaxed mb-4">${description}</p>
      <div class="flex items-center gap-2 text-[#0A87E2] text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
        <span>了解详情</span>
        <i data-lucide="arrow-right" class="w-4 h-4"></i>
      </div>
    </div>
  `;
}

function renderStatsSection() {
  return `
    <section class="py-32 relative overflow-hidden">
      <div class="max-w-7xl mx-auto px-6">
        <div class="glass-card rounded-3xl p-12 reveal">
          <div class="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div class="text-5xl font-bold gradient-text mb-2" data-count="1000000">0</div>
              <div class="text-gray-400">知识节点</div>
            </div>
            <div>
              <div class="text-5xl font-bold gradient-text mb-2" data-count="50">0</div>
              <div class="text-gray-400">AI模型</div>
            </div>
            <div>
              <div class="text-5xl font-bold gradient-text mb-2" data-count="99.9">0</div>
              <div class="text-gray-400">服务可用性 %</div>
            </div>
            <div>
              <div class="text-5xl font-bold gradient-text mb-2" data-count="10000">0</div>
              <div class="text-gray-400">日均服务请求</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}

function renderTechSection() {
  return `
    <section id="tech" class="py-32 relative">
      <div class="max-w-7xl mx-auto px-6">
        <div class="text-center mb-20 reveal">
          <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0A87E2]/10 border border-[#0A87E2]/20 text-[#0A87E2] text-sm mb-4">
            <i data-lucide="layers" class="w-4 h-4"></i>
            <span>技术架构</span>
          </div>
          <h2 class="text-4xl md:text-5xl font-bold mb-6">AI技术栈</h2>
          <p class="text-gray-400 max-w-2xl mx-auto">基于最新的人工智能技术，构建高效、稳定、可扩展的智能服务平台</p>
        </div>
        
        <div class="grid md:grid-cols-3 gap-6">
          ${renderTechCard('大语言模型', '基于Transformer架构的预训练模型，支持自然语言理解与生成')}
          ${renderTechCard('知识图谱', '领域知识图谱构建与推理，实现知识的结构化表示与关联')}
          ${renderTechCard('多模态AI', '融合文本、图像、音频等多模态信息，提供全面的智能服务')}
        </div>
      </div>
    </section>
  `;
}

function renderTechCard(title, description) {
  return `
    <div class="glass-card rounded-2xl p-8 reveal">
      <div class="flex items-center gap-4 mb-6">
        <div class="w-12 h-12 rounded-xl bg-gradient-to-br from-[#0A87E2]/20 to-[#0A87E2]/5 flex items-center justify-center border border-[#0A87E2]/20">
          <i data-lucide="cpu" class="w-6 h-6 text-[#0A87E2]"></i>
        </div>
        <h3 class="text-xl font-bold">${title}</h3>
      </div>
      <p class="text-gray-400 leading-relaxed">${description}</p>
    </div>
  `;
}

function renderFooter() {
  return `
    <footer class="py-12 border-t border-white/10">
      <div class="max-w-7xl mx-auto px-6">
        <div class="flex flex-col md:flex-row items-center justify-between gap-6">
          <div class="flex items-center gap-3">
            <div class="w-8 h-8 rounded-lg bg-gradient-to-br from-[#0A87E2] to-[#0868b3] flex items-center justify-center">
              <i data-lucide="train-front" class="w-5 h-5 text-white"></i>
            </div>
            <span class="text-sm text-gray-400">西南交通大学出版社 AI赋能平台</span>
          </div>
          <div class="text-sm text-gray-500">
            © 2024 西南交通大学出版社. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  `;
}

function initAnimations() {
  const reveals = document.querySelectorAll('.reveal');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, { threshold: 0.1 });
  
  reveals.forEach(el => observer.observe(el));
  
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.classList.add('nav-blur');
    } else {
      navbar.classList.remove('nav-blur');
    }
  });
}

function initParticles() {
  const canvas = document.getElementById('particles');
  if (!canvas) return;
  
  const ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  
  const particles = [];
  const particleCount = 50;
  
  for (let i = 0; i < particleCount; i++) {
    particles.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      radius: Math.random() * 2 + 1,
      vx: (Math.random() - 0.5) * 0.5,
      vy: (Math.random() - 0.5) * 0.5,
      opacity: Math.random() * 0.5 + 0.2
    });
  }
  
  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    particles.forEach(p => {
      p.x += p.vx;
      p.y += p.vy;
      
      if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
      if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
      
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(10, 135, 226, ${p.opacity})`;
      ctx.fill();
    });
    
    requestAnimationFrame(animate);
  }
  
  animate();
  
  window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  });
}
