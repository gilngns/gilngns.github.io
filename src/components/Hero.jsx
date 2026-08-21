import { useState, useRef } from 'react';

export default function Hero({ isRevealed }) {
  const btnRef = useRef(null);
  const textRef = useRef(null);
  const [downloadState, setDownloadState] = useState('idle'); // idle, downloading, success
  const [ripple, setRipple] = useState(null);

  const handleMouseMove = (e) => {
    if (window.innerWidth <= 992) return;
    if (downloadState !== 'idle') return;
    const btn = btnRef.current;
    const text = textRef.current;
    if (!btn || !text) return;
    
    const rect = btn.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    
    btn.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`;
    text.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`;
  };

  const handleMouseLeave = () => {
    const btn = btnRef.current;
    const text = textRef.current;
    if (!btn || !text) return;
    
    btn.style.transform = `translate(0px, 0px)`;
    text.style.transform = `translate(0px, 0px)`;
  };

  const handleDownloadClick = (e) => {
    if (downloadState !== 'idle') {
      e.preventDefault();
      return;
    }
    
    const rect = btnRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    setRipple({ x, y });
    setDownloadState('downloading');
    
    setTimeout(() => {
      setDownloadState('success');
      setTimeout(() => {
        setDownloadState('idle');
        setRipple(null);
      }, 3000);
    }, 1000);
  };

  return (
    <section className="h-screen flex items-center relative z-10" id="home">
      <div className="container">
        <h1 className={`hero-title text-[clamp(4rem,10vw,10rem)] leading-[0.9] tracking-[-2px] uppercase overflow-hidden max-md:text-[clamp(2.2rem,11vw,3rem)] max-md:break-words ${isRevealed ? 'animate-reveal' : ''}`}>
          <span className="word">Fullstack</span><br />
          <span className="word gradient-text">Web Developer</span>
        </h1>
      </div>

      <div className={`hero-bottom absolute bottom-16 inset-x-0 max-md:bottom-10 ${isRevealed ? 'animate-reveal' : ''}`}>
        <div className="container flex items-end justify-between gap-12 max-lg:flex-col max-lg:items-start max-lg:gap-8">
          <div className="flex items-center gap-10 max-lg:flex-col max-lg:items-start max-lg:gap-6">
            <p className="max-w-[380px] text-base leading-relaxed text-muted max-lg:max-w-full max-md:text-sm">
              Information Systems student at UNIKOM. I turn messy manual operations into web systems people actually run on every day.
            </p>

            <a
              href="/assets/Gilang%20Nanda%20Saputra_Backend%20Engineer_CV.pdf"
              download="Gilang_Nanda_Saputra_CV.pdf"
              className={`magnetic-btn shrink-0 inline-flex items-center justify-center whitespace-nowrap py-5 px-10 rounded-full bg-white text-black font-body font-semibold uppercase tracking-[1px] text-sm relative overflow-hidden max-md:py-4 max-md:px-8 max-md:text-xs ${downloadState === 'downloading' ? 'is-downloading' : ''} ${downloadState === 'success' ? 'download-success' : ''}`}
              ref={btnRef}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              onClick={handleDownloadClick}
            >
              <span className="magnetic-text relative z-10 pointer-events-none" ref={textRef}>
                {downloadState === 'idle' && 'Download Resume'}
                {downloadState === 'downloading' && 'Downloading...'}
                {downloadState === 'success' && 'Downloaded!'}
              </span>
              {ripple && (
                <span
                  className="btn-ripple"
                  style={{ left: ripple.x, top: ripple.y }}
                ></span>
              )}
            </a>
          </div>

          <div className="scroll-hint shrink-0 flex items-center gap-4 uppercase text-xs tracking-[2px] text-muted max-lg:hidden">
            <span>Scroll to explore</span>
            <span className="scroll-hint-line"></span>
          </div>
        </div>
      </div>
    </section>
  );
}
