import { useEffect, useState, useRef } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import About from './components/About';
import Experience from './components/Experience';
import Contact from './components/Contact';

function App() {
  const [loading, setLoading] = useState(true);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isRevealed, setIsRevealed] = useState(false);
  const [navAnimate, setNavAnimate] = useState(false);

  useEffect(() => {
    // 1. Cinematic Preloader
    const timer1 = setTimeout(() => {
      setLoading(false);
      document.body.classList.remove('no-scroll');
      
      // Staggered Reveal
      const timer2 = setTimeout(() => {
        setNavAnimate(true);
        setIsRevealed(true);
      }, 400);
      return () => clearTimeout(timer2);
    }, 1500);

    // 2. Custom Cursor
    const handleMouseMove = (e) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e) => {
      if (e.target.closest('a') || e.target.closest('.magnetic-btn')) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseover', handleMouseOver);

    // 4. Scroll Progress
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scroll = `${(totalScroll / windowHeight) * 100}%`;
      setScrollProgress(scroll);
    };

    window.addEventListener('scroll', handleScroll);

    // 5. Intersection Observer
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
        }
      });
    }, { threshold: 0.1 });

    const revealElements = document.querySelectorAll('.reveal-element');
    revealElements.forEach(el => observer.observe(el));

    return () => {
      clearTimeout(timer1);
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseover', handleMouseOver);
      window.removeEventListener('scroll', handleScroll);
      revealElements.forEach(el => observer.unobserve(el));
    };
  }, []);

  return (
    <>
      {/* Preloader */}
      <div className={`preloader fixed top-0 left-0 w-full h-screen bg-black z-[999999] flex justify-center items-center ${!loading ? 'fade-out' : ''}`}>
        <div className="preloader-text-wrapper overflow-hidden">
          <div className="preloader-text font-heading text-[clamp(3rem,8vw,8rem)] font-extrabold text-white">GILANG.</div>
        </div>
      </div>

      {/* 3D Grid Background */}
      <div className="grid-bg"></div>
      <div className="grid-overlay"></div>

      {/* Noise Overlay */}
      <div className="noise-overlay"></div>

      {/* Scroll Progress Line */}
      <div 
        className="scroll-progress fixed top-0 left-0 h-[3px] bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 z-[99999] transition-all duration-100 ease-out" 
        style={{ width: scrollProgress }}
      ></div>

      {/* Ambient Orbs */}
      <div className="ambient-orbs">
        <div className="orb orb-1"></div>
        <div className="orb orb-2"></div>
      </div>

      {/* Custom Cursor Follower */}
      <div 
        className={`cursor-follower ${isHovering ? 'cursor-hover' : ''}`}
        style={{ transform: `translate3d(${cursorPos.x}px, ${cursorPos.y}px, 0) translate(-50%, -50%)` }}
      ></div>

      <Navbar navAnimate={navAnimate} />
      <Hero isRevealed={isRevealed} />
      <Marquee />
      <About />
      <Experience />
      <Contact />
    </>
  );
}

export default App;
