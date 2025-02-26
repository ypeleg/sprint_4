import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, ChevronDown, Sparkles, Star, Check, ArrowUpRight } from 'lucide-react';

export function HomePage2 () {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollPosition, setScrollPosition] = useState(0);
  const [revealed, setRevealed] = useState(false);
  const [activeCard, setActiveCard] = useState(0);
  const heroRef = useRef(null);
  const canvasRef = useRef(null);

  // Initialize 3D particle universe
  useEffect(() => {
    const initParticles = () => {
      const canvas = canvasRef.current;
      if (!canvas) return;

      const ctx = canvas.getContext('2d');
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      let particles = [];
      const particleCount = 100;

      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 3 + 1,
          speedX: Math.random() * 2 - 1,
          speedY: Math.random() * 2 - 1,
          color: `rgba(${Math.random() * 100 + 155}, ${Math.random() * 100 + 155}, 255, ${Math.random() * 0.5 + 0.5})`
        });
      }

      const animate = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = 'rgba(0, 0, 0, 0)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        particles.forEach(particle => {
          // Add mouse influence
          const dx = mousePosition.x - particle.x;
          const dy = mousePosition.y - particle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 300) {
            const angle = Math.atan2(dy, dx);
            const force = (300 - distance) / 1500;
            particle.speedX -= Math.cos(angle) * force;
            particle.speedY -= Math.sin(angle) * force;
          }

          // Update position
          particle.x += particle.speedX;
          particle.y += particle.speedY;

          // Boundary check
          if (particle.x < 0 || particle.x > canvas.width) particle.speedX *= -1;
          if (particle.y < 0 || particle.y > canvas.height) particle.speedY *= -1;

          // Draw particle
          ctx.fillStyle = particle.color;
          ctx.beginPath();
          ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
          ctx.fill();

          // Draw connections
          particles.forEach(otherParticle => {
            const dx = particle.x - otherParticle.x;
            const dy = particle.y - otherParticle.y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < 150) {
              ctx.strokeStyle = `rgba(${parseInt(particle.color.slice(4))}, ${(1 - distance / 150) * 0.5})`;
              ctx.lineWidth = 1;
              ctx.beginPath();
              ctx.moveTo(particle.x, particle.y);
              ctx.lineTo(otherParticle.x, otherParticle.y);
              ctx.stroke();
            }
          });
        });

        requestAnimationFrame(animate);
      };

      animate();

      const handleResize = () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      };

      window.addEventListener('resize', handleResize);

      return () => {
        window.removeEventListener('resize', handleResize);
      };
    };

    initParticles();
  }, [mousePosition]);

  // Track mouse position for interactive effects
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  // Handle scroll effects
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setScrollPosition(scrollPosition);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Trigger entrance animations after initial render
  useEffect(() => {
    const timer = setTimeout(() => {
      setRevealed(true);
    }, 100);

    // Auto-rotate featured cards
    const cardInterval = setInterval(() => {
      setActiveCard(prev => (prev + 1) % 3);
    }, 3000);

    return () => {
      clearTimeout(timer);
      clearInterval(cardInterval);
    };
  }, []);

  // Calculate parallax movements based on mouse position
  const getParallaxStyle = (strength = 1, invert = false) => {
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
    const moveX = ((mousePosition.x - centerX) / centerX) * 30 * strength * (invert ? -1 : 1);
    const moveY = ((mousePosition.y - centerY) / centerY) * 30 * strength * (invert ? -1 : 1);

    return {
      transform: `translate(${moveX}px, ${moveY}px)`,
    };
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-black" ref={heroRef}>
      {/* Interactive particle background */}
      <canvas ref={canvasRef} className="absolute inset-0 z-0" />

      {/* Animated background elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Radial gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/80 via-purple-900/80 to-black"></div>

        {/* Abstract shapes */}
        <div className="absolute inset-0">
          {/* Main glowing orb */}
          <div
            className="absolute top-1/3 left-1/4 w-96 h-96 rounded-full bg-gradient-to-r from-indigo-600/40 to-blue-500/40 blur-3xl mix-blend-screen animate-pulse"
            style={{...getParallaxStyle(0.4), animationDuration: '10s'}}
          ></div>

          {/* Secondary orb */}
          <div
            className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-gradient-to-r from-fuchsia-600/30 to-purple-500/30 blur-3xl mix-blend-screen animate-pulse"
            style={{...getParallaxStyle(0.6, true), animationDuration: '15s'}}
          ></div>

          {/* Tertiary orb */}
          <div
            className="absolute top-1/2 right-1/3 w-64 h-64 rounded-full bg-gradient-to-r from-cyan-500/20 to-teal-500/20 blur-3xl mix-blend-screen animate-pulse"
            style={{...getParallaxStyle(0.3), animationDuration: '12s'}}
          ></div>
        </div>

        {/* Dynamic grid */}
        <div
          className={`absolute inset-0 z-0 transition-opacity duration-1000 ${revealed ? 'opacity-40' : 'opacity-0'}`}
          style={{
            backgroundImage: 'radial-gradient(circle at center, rgba(148, 163, 255, 0.15) 0%, transparent 7%)',
            backgroundSize: '50px 50px',
            transform: `translateX(${(mousePosition.x - window.innerWidth/2) * 0.02}px) translateY(${(mousePosition.y - window.innerHeight/2) * 0.02}px)`
          }}
        ></div>

        {/* Diagonal lines */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 rotate-45">
            {Array.from({ length: 10 }).map((_, i) => (
              <div
                key={i}
                className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-500 to-transparent"
                style={{ top: `${i * 20}%` }}
              ></div>
            ))}
            {Array.from({ length: 10 }).map((_, i) => (
              <div
                key={i}
                className="absolute top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-purple-500 to-transparent"
                style={{ left: `${i * 20}%` }}
              ></div>
            ))}
          </div>
        </div>
      </div>

      {/* Noise texture overlay */}
      <div className="absolute inset-0 z-10 pointer-events-none opacity-30 mix-blend-soft-light"
        style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.8\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")',
          width: '100%',
          height: '100%'
        }}
      ></div>

      {/* Main Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-40 pb-24">
        {/* Animated decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
          {/* Circular indicator */}
          <div
            className={`absolute top-20 right-10 transform transition-all duration-1000 ${revealed ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
            style={{...getParallaxStyle(1.2, true), transitionDelay: '300ms'}}
          >
            <div className="relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full blur opacity-70"></div>
              <div className="relative bg-black/70 backdrop-blur-xl rounded-full border border-indigo-500/50 p-4 shadow-2xl shadow-indigo-500/20">
                <div className="flex items-center space-x-3">
                  <div className="relative w-12 h-12">
                    <div className="absolute inset-0 rounded-full border-2 border-indigo-400 opacity-75 animate-ping"></div>
                    <div className="absolute inset-0 rounded-full border-4 border-indigo-400 opacity-75 animate-pulse"></div>
                    <div className="relative w-full h-full rounded-full bg-gradient-to-br from-indigo-600 to-purple-600 flex items-center justify-center">
                      <Sparkles className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  <div>
                    <div className="text-indigo-200 font-medium">AI-Powered</div>
                    <div className="text-indigo-400 text-sm">Task Management</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Code snippet */}
          <div
            className={`absolute bottom-24 left-10 transform transition-all duration-1000 ${revealed ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
            style={{...getParallaxStyle(0.8), transitionDelay: '400ms'}}
          >
            <div className="relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl blur opacity-70"></div>
              <div className="relative bg-black/70 backdrop-blur-xl rounded-xl border border-purple-500/50 p-4 shadow-2xl shadow-purple-500/20">
                <pre className="text-xs font-mono">
                  <span className="text-purple-400">import</span> <span className="text-indigo-300">Roillo</span> <span className="text-purple-400">from</span> <span className="text-green-300">'roillo'</span>;
                  <br />
                  <br />
                  <span className="text-purple-400">const</span> <span className="text-indigo-300">board</span> <span className="text-white">=</span> <span className="text-indigo-300">Roillo</span>.<span className="text-cyan-300">createBoard</span><span className="text-white">({'{'}</span>
                  <br />
                  <span className="text-white ml-4">name:</span> <span className="text-green-300">'Project Alpha'</span><span className="text-white">,</span>
                  <br />
                  <span className="text-white ml-4">theme:</span> <span className="text-green-300">'dark'</span>
                  <br />
                  <span className="text-white">{'}'});</span>
                </pre>
              </div>
            </div>
          </div>

          {/* Stats card */}
          <div
            className={`absolute top-1/2 right-10 transform transition-all duration-1000 ${revealed ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
            style={{...getParallaxStyle(1.5, true), transitionDelay: '500ms'}}
          >
            <div className="relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl blur opacity-70"></div>
              <div className="relative bg-black/70 backdrop-blur-xl rounded-xl border border-blue-500/50 p-4 shadow-2xl shadow-blue-500/20">
                <div className="flex flex-col">
                  <div className="text-blue-300 text-xs uppercase tracking-wider mb-1">Team Productivity</div>
                  <div className="text-white text-2xl font-bold">+147%</div>
                  <div className="flex items-center mt-1">
                    <ArrowUpRight className="h-3 w-3 text-green-400 mr-1" />
                    <span className="text-green-400 text-xs">Trending up</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Hero content */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
          {/* Text content */}
          <div className="lg:col-span-2 relative">
            {/* Text glowing effect container */}
            <div className="absolute -inset-2 rounded-3xl bg-gradient-to-r from-indigo-500/20 via-purple-500/20 to-pink-500/20 blur-3xl opacity-50 animate-pulse-slow"></div>

            <div className="relative">
              {/* Staggered reveal heading */}
              <div className="overflow-hidden">
                <h1 className={`text-6xl md:text-7xl lg:text-8xl font-black leading-tight transition-transform duration-1000 ${revealed ? 'translate-y-0' : 'translate-y-full'}`}>
                  <div className="overflow-hidden">
                    <span className="block text-white transform transition-transform duration-1000 delay-100 opacity-0 translate-y-full animate-reveal">Work.</span>
                  </div>
                  <div className="overflow-hidden">
                    <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 transform transition-transform duration-1000 delay-300 opacity-0 translate-y-full animate-reveal animate-delay-300">Flow.</span>
                  </div>
                  <div className="overflow-hidden">
                    <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 transform transition-transform duration-1000 delay-500 opacity-0 translate-y-full animate-reveal animate-delay-500">Done.</span>
                  </div>
                </h1>
              </div>

              {/* Subtitle with typewriter effect */}
              <p className="mt-8 text-xl text-indigo-200 font-light max-w-xl typewriter">
                The ultimate workspace that brings all your
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 font-semibold"> tasks, teammates, and tools </span>
                together in perfect harmony.
              </p>

              {/* Features */}
              <div className="mt-10 grid grid-cols-2 gap-5">
                {[
                  { text: "AI workflow automation", icon: <Sparkles className="h-4 w-4" />, color: "from-purple-500 to-indigo-500" },
                  { text: "Real-time collaboration", icon: <Check className="h-4 w-4" />, color: "from-indigo-500 to-blue-500" },
                  { text: "Seamless integrations", icon: <Star className="h-4 w-4" />, color: "from-blue-500 to-cyan-500" },
                  { text: "Enterprise security", icon: <Sparkles className="h-4 w-4" />, color: "from-pink-500 to-purple-500" }
                ].map((feature, index) => (
                  <div
                    key={index}
                    className={`flex items-center space-x-3 group transition-transform duration-300 transform ${revealed ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}
                    style={{ transitionDelay: `${600 + index * 100}ms` }}
                  >
                    <div className="relative">
                      <div className={`absolute -inset-1 rounded-full bg-gradient-to-r ${feature.color} blur opacity-70 group-hover:opacity-100 transition-opacity duration-300`}></div>
                      <div className="relative h-8 w-8 rounded-full bg-black/50 backdrop-blur-sm border border-indigo-500/30 flex items-center justify-center text-white group-hover:border-indigo-400/80 transition-colors duration-300">
                        {feature.icon}
                      </div>
                    </div>
                    <span className="text-indigo-200 text-sm group-hover:text-white transition-colors duration-300">{feature.text}</span>
                  </div>
                ))}
              </div>

              {/* CTA buttons */}
              <div className="mt-12 flex flex-col sm:flex-row gap-6">
                {/* Primary button */}
                <div
                  className={`transition-all duration-1000 ${revealed ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}
                  style={{ transitionDelay: '1000ms' }}
                >
                  <div className="relative group">
                    <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl blur opacity-70 group-hover:opacity-100 transition-opacity duration-300 animate-pulse-slow"></div>
                    <button className="relative px-8 py-4 bg-black backdrop-blur-md rounded-xl leading-none flex items-center justify-center overflow-hidden">
                      {/* Gradient border effect */}
                      <div className="absolute inset-0 rounded-xl border border-indigo-500/50 group-hover:border-indigo-400 transition-colors duration-300"></div>

                      {/* Text slide effect */}
                      <div className="relative flex items-center transition-transform duration-300 group-hover:-translate-y-24">
                        <span className="text-white whitespace-nowrap">Get started for free</span>
                      </div>

                      {/* Hidden text that appears on hover */}
                      <div className="absolute flex items-center transition-transform duration-300 translate-y-24 group-hover:translate-y-0">
                        <span className="text-indigo-200 whitespace-nowrap group-hover:text-white transition-colors duration-300">Launch Roillo</span>
                        <ArrowRight className="ml-2 h-4 w-4 text-indigo-400 group-hover:text-white transition-colors duration-300" />
                      </div>
                    </button>
                  </div>
                </div>

                {/* Secondary button */}
                <div
                  className={`transition-all duration-1000 ${revealed ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}
                  style={{ transitionDelay: '1100ms' }}
                >
                  <button className="relative px-8 py-4 rounded-xl text-indigo-300 overflow-hidden group">
                    {/* Animated border effect */}
                    <div className="absolute inset-0 rounded-xl border border-indigo-500/30 group-hover:border-indigo-400/50 transition-colors duration-300"></div>

                    {/* Hover background effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/0 to-purple-900/0 group-hover:from-indigo-900/30 group-hover:to-purple-900/30 transition-colors duration-300 rounded-xl"></div>

                    <span className="relative group-hover:text-white transition-colors duration-300">Watch demo</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* 3D Product visualization */}
          <div className="lg:col-span-3 relative">
            {/* Animated cards showcase */}
            <div className={`relative aspect-[4/3] transition-all duration-1000 delay-300 ${revealed ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
              <div className="absolute inset-0">
                {/* Base glow effect */}
                <div className="absolute -inset-4 bg-gradient-to-r from-indigo-500/20 via-purple-500/20 to-indigo-500/20 rounded-3xl blur-3xl opacity-70 animate-pulse-slow"></div>

                {/* 3D cards showcase */}
                <div
                  className="relative aspect-[4/3] w-full h-full perspective-1000"
                  style={{
                    transform: `perspective(1000px) rotateX(${(mousePosition.y - window.innerHeight/2) * 0.01}deg) rotateY(${-(mousePosition.x - window.innerWidth/2) * 0.01}deg)`
                  }}
                >
                  {/* Main product visual */}
                  <div className="relative w-full h-full rounded-2xl overflow-hidden border border-indigo-500/30 shadow-2xl transform hover:scale-105 transition-transform duration-700 bg-black/80 backdrop-blur-md">
                    {/* Sliding cards UI */}
                    <div className="relative w-full h-full overflow-hidden">
                      {/* Card 1 */}
                      <div className={`absolute top-0 left-0 w-full h-full transition-all duration-700 ease-in-out ${activeCard === 0 ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-full'}`}>
                        <img
                          src="https://images.ctfassets.net/rz1oowkt5gyp/75rDABL8fyMtNLlUAtBxrg/c5e145977a86c41c47e17c69410c64f7/TrelloUICollage_4x.png?w=960&fm=webp"
                          alt="Board view"
                          className="w-full h-full object-cover rounded-2xl"
                        />
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/80"></div>
                        <div className="absolute bottom-8 left-8 right-8">
                          <div className="text-white text-xl font-bold mb-2">Board View</div>
                          <div className="text-indigo-200 text-sm">Visualize your workflow with customizable boards</div>
                        </div>
                      </div>

                      {/* Card 2 */}
                      <div className={`absolute top-0 left-0 w-full h-full transition-all duration-700 ease-in-out ${activeCard === 1 ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-full'}`}>
                        <img
                          src="https://images.ctfassets.net/rz1oowkt5gyp/5Hb09iiMrK6mSpThW5HS89/f5683a167ad3f74bed4dc7592ae5a002/TrelloBoard_Timeline_2x.png?w=960&fm=webp"
                          alt="Timeline view"
                          className="w-full h-full object-cover rounded-2xl"
                        />
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/80"></div>
                        <div className="absolute bottom-8 left-8 right-8">
                          <div className="text-white text-xl font-bold mb-2">Timeline View</div>
                          <div className="text-indigo-200 text-sm">Plan and track your projects with precision</div>
                        </div>
                      </div>

                      {/* Card 3 */}
                      <div className={`absolute top-0 left-0 w-full h-full transition-all duration-700 ease-in-out ${activeCard === 2 ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-full'}`}>
                        <img
                          src="https://images.ctfassets.net/rz1oowkt5gyp/7sxChS4x6XAcUgDpp4VAZk/25377d162e964f4243e329c447bfd7dc/TrelloBoard_Calendar_2x.png?w=960&fm=webp"
                          alt="Calendar view"
                          className="w-full h-full object-cover rounded-2xl"
                        />
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/80"></div>
                        <div className="absolute bottom-8 left-8 right-8">
                          <div className="text-white text-xl font-bold mb-2">Calendar View</div>
                          <div className="text-indigo-200 text-sm">Stay on top of deadlines with the calendar view</div>
                        </div>
                      </div>

                      {/* Navigation dots */}
                      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                        {[0, 1, 2].map(index => (
                          <button
                            key={index}
                            className={`w-3 h-3 rounded-full transition-all duration-300 ${activeCard === index ? 'bg-white scale-125' : 'bg-white/30 scale-100'}`}
                            onClick={() => setActiveCard(index)}
                          ></button>
                        ))}
                      </div>
                    </div>

                    {/* Reflection effect */}
                    <div
                      className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      style={{
                        clipPath: `polygon(${mousePosition.x/5}% ${mousePosition.y/5}%, ${mousePosition.x/10 + 50}% ${mousePosition.y/10}%, ${mousePosition.x/5 + 60}% ${mousePosition.y/5 + 60}%)`
                      }}
                    ></div>
                  </div>

                  {/* Floating UI elements */}
                  <div className="absolute -top-12 -right-12 transform rotate-12 animate-float">
                    <div className="relative">
                      <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl blur opacity-70"></div>
                      <div className="relative bg-black/70 backdrop-blur-md rounded-xl border border-indigo-500/50 p-3 shadow-2xl">
                        <div className="flex items-center space-x-2">
                          <div className="h-8 w-8 rounded-full bg-gradient-to-br from-purple-600 to-indigo-600 flex items-center justify-center text-white text-xs font-bold">
                            R
                          </div>
                          <div className="text-indigo-200 text-sm">Drag & Drop</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="absolute -bottom-10 -left-10 transform -rotate-6 animate-float-delayed">
                    <div className="relative">
                      <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-500 to-purple-500 rounded-xl blur opacity-70"></div>
                      <div className="relative bg-black/70 backdrop-blur-md rounded-xl border border-pink-500/50 p-3 shadow-2xl">
                        <div className="flex items-center space-x-2">
                          <Star className="h-5 w-5 text-yellow-500" fill="currentColor" />
                          <div className="text-pink-200 text-sm">2M+ Happy Users</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Social proof */}
        <div className={`mt-24 transition-all duration-1000 delay-1200 ${revealed ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500/30 via-purple-500/30 to-pink-500/30 rounded-2xl blur-xl opacity-70"></div>
            <div className="relative bg-black/40 backdrop-blur-xl rounded-2xl p-8 border border-indigo-500/20">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
                <div className="flex items-center gap-6">
                  <div className="flex -space-x-4">
                    {[1, 2, 3, 4].map(i => (
                      <div key={i} className="h-12 w-12 rounded-full bg-gradient-to-br from-indigo-600 to-purple-600 border-2 border-black flex items-center justify-center text-white text-xs font-bold">
                        {String.fromCharCode(64 + i)}
                      </div>
                    ))}
                    <div className="h-12 w-12 rounded-full bg-black/70 backdrop-blur-md border-2 border-indigo-500 flex items-center justify-center text-indigo-400 text-xs font-bold">
                      +2M
                    </div>
                  </div>
                  <div>
                    <div className="text-indigo-200 text-lg font-medium">Trusted by 2M+ teams worldwide</div>
                    <div className="text-indigo-400 text-sm mt-1">From startups to Fortune 500 companies</div>
                  </div>
                </div>
                <div className="flex items-center gap-8">
                  <div className="flex flex-col items-center">
                    <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">99.9%</div>
                    <div className="text-indigo-300 text-sm">Uptime</div>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">4.9/5</div>
                    <div className="text-indigo-300 text-sm">User rating</div>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-indigo-400">24/7</div>
                    <div className="text-indigo-300 text-sm">Support</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className={`absolute bottom-10 left-1/2 transform -translate-x-1/2 transition-all duration-1000 delay-1500 ${revealed ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
          <div className="flex flex-col items-center">
            <div className="text-indigo-300 text-sm font-medium mb-2">Scroll to explore</div>
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full blur opacity-70"></div>
              <div className="relative h-10 w-10 rounded-full bg-black/70 backdrop-blur-md border border-indigo-500/50 flex items-center justify-center">
                <ChevronDown className="h-5 w-5 text-indigo-400 animate-bounce" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Add the necessary CSS for the animations
const cssAnimations = `
@keyframes pulse-slow {
  0% { opacity: 0.5; }
  50% { opacity: 0.8; }
  100% { opacity: 0.5; }
}

@keyframes float {
  0% { transform: translateY(0px) rotate(12deg); }
  50% { transform: translateY(-10px) rotate(14deg); }
  100% { transform: translateY(0px) rotate(12deg); }
}

@keyframes float-delayed {
  0% { transform: translateY(0px) rotate(-6deg); }
  50% { transform: translateY(-12px) rotate(-8deg); }
  100% { transform: translateY(0px) rotate(-6deg); }
}

@keyframes reveal {
  0% { opacity: 0; transform: translateY(100%); }
  100% { opacity: 1; transform: translateY(0); }
}

.animate-reveal {
  animation: reveal 1s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}

.animate-delay-300 {
  animation-delay: 300ms !important;
}

.animate-delay-500 {
  animation-delay: 500ms !important;
}

.animate-pulse-slow {
  animation: pulse-slow 4s infinite;
}

.animate-float {
  animation: float 6s ease-in-out infinite;
}

.animate-float-delayed {
  animation: float-delayed 7s ease-in-out infinite;
}

.perspective-1000 {
  perspective: 1000px;
}

/* Typewriter effect */
.typewriter {
  overflow: hidden;
  border-right: 2px solid rgba(255, 255, 255, 0.75);
  white-space: nowrap;
  margin: 0 auto;
  letter-spacing: 0.15em;
  animation: typing 3.5s steps(30, end), blink-caret 0.75s step-end infinite;
  animation-delay: 1.5s;
  animation-fill-mode: both;
}

@keyframes typing {
  from { width: 0 }
  to { width: 100% }
}

@keyframes blink-caret {
  from, to { border-color: transparent }
  50% { border-color: rgba(255, 255, 255, 0.75) }
}
`;

