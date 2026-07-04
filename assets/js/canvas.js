// Canvas Connecting Nodes Animation (Aone Company Theme)

document.addEventListener('DOMContentLoaded', () => {
  const canvas = document.getElementById('particles-canvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  let animationFrameId;

  // Particle configuration
  let particlesArray = [];
  const numberOfParticles = Math.min(80, Math.floor((window.innerWidth * window.innerHeight) / 18000));
  const connectionDistance = 140;
  
  // Color palette matching theme
  const particleColor = 'rgba(37, 99, 235, 0.28)'; // Electric blue particles
  const lineColorTemplate = (opacity) => `rgba(37, 99, 235, ${opacity * 0.65})`; // Electric blue lines
  
  const mouse = {
    x: null,
    y: null,
    radius: 180
  };

  // Tracking mouse move
  window.addEventListener('mousemove', (event) => {
    mouse.x = event.clientX;
    mouse.y = event.clientY;
  });

  window.addEventListener('mouseout', () => {
    mouse.x = null;
    mouse.y = null;
  });

  // Handle Resize
  window.addEventListener('resize', () => {
    resizeCanvas();
    initParticles();
  });

  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }

  // Particle Class
  class Particle {
    constructor() {
      this.x = Math.random() * canvas.width;
      this.y = Math.random() * canvas.height;
      this.size = Math.random() * 2.5 + 1;
      this.baseSpeedX = Math.random() * 0.4 - 0.2;
      this.baseSpeedY = Math.random() * 0.4 - 0.2;
      this.speedX = this.baseSpeedX;
      this.speedY = this.baseSpeedY;
    }

    update() {
      // Movement
      this.x += this.speedX;
      this.y += this.speedY;

      // Bounce off walls
      if (this.x < 0 || this.x > canvas.width) this.speedX = -this.speedX;
      if (this.y < 0 || this.y > canvas.height) this.speedY = -this.speedY;

      // Mouse interactivity (gentle pull/push)
      if (mouse.x !== null && mouse.y !== null) {
        const dx = mouse.x - this.x;
        const dy = mouse.y - this.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < mouse.radius) {
          // Calculate force
          const force = (mouse.radius - distance) / mouse.radius;
          const angle = Math.atan2(dy, dx);
          
          // Move slowly towards mouse
          this.x += Math.cos(angle) * force * 0.5;
          this.y += Math.sin(angle) * force * 0.5;
        }
      }
    }

    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
      ctx.fillStyle = particleColor;
      ctx.fill();
    }
  }

  function initParticles() {
    particlesArray = [];
    for (let i = 0; i < numberOfParticles; i++) {
      particlesArray.push(new Particle());
    }
  }

  function drawLines() {
    for (let a = 0; a < particlesArray.length; a++) {
      for (let b = a + 1; b < particlesArray.length; b++) {
        const p1 = particlesArray[a];
        const p2 = particlesArray[b];
        
        const dx = p1.x - p2.x;
        const dy = p1.y - p2.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < connectionDistance) {
          const opacity = (1 - distance / connectionDistance) * 0.22;
          ctx.strokeStyle = lineColorTemplate(opacity);
          ctx.lineWidth = 0.8;
          ctx.beginPath();
          ctx.moveTo(p1.x, p1.y);
          ctx.lineTo(p2.x, p2.y);
          ctx.stroke();
        }
      }

      // Draw line to mouse
      if (mouse.x !== null && mouse.y !== null) {
        const p = particlesArray[a];
        const dx = p.x - mouse.x;
        const dy = p.y - mouse.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < mouse.radius - 40) {
          const opacity = (1 - distance / (mouse.radius - 40)) * 0.18;
          ctx.strokeStyle = `rgba(37, 99, 235, ${opacity * 0.85})`;
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.stroke();
        }
      }
    }
  }

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    for (let i = 0; i < particlesArray.length; i++) {
      particlesArray[i].update();
      particlesArray[i].draw();
    }
    
    drawLines();
    animationFrameId = requestAnimationFrame(animate);
  }

  // Launch
  resizeCanvas();
  initParticles();
  animate();
});
