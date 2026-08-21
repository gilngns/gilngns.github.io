import { useRef, useState } from 'react';

export default function Contact() {
  const btnRef = useRef(null);
  const textRef = useRef(null);
  
  const handleMouseMove = (e) => {
    if (window.innerWidth <= 992) return;
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

  return (
    <section className="contact section-padding relative z-10" id="contact">
      <div className="container">
        <h2 className="section-title reveal-element">03 / Contact</h2>
        <div className="flex flex-col items-center text-center py-24 max-md:py-16">
          <h3 className="contact-cta text-[clamp(3rem,6vw,5rem)] mb-16 max-md:text-[clamp(1.5rem,8vw,2.5rem)] reveal-element">
            Let's build something<br />extraordinary.
          </h3>
          
          <a 
            href="mailto:nsgilang10@gmail.com" 
            className="magnetic-btn email-btn bg-transparent text-white border border-white text-[clamp(1.5rem,3vw,3rem)] py-8 px-16 mb-24 rounded-[100px] inline-flex items-center justify-center font-body font-semibold uppercase tracking-[1px] relative overflow-hidden reveal-element max-md:py-3 max-md:px-6 max-md:text-base max-md:mb-8"
            ref={btnRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            <span className="magnetic-text relative z-10 pointer-events-none" ref={textRef}>
              nsgilang10@gmail.com
            </span>
          </a>
          
          <div className="footer-links flex justify-center gap-12 uppercase tracking-[2px] reveal-element max-md:gap-6 max-md:flex-wrap">
            <a href="https://www.linkedin.com/in/gilang-nanda-saputra-6b63a2292/" target="_blank" rel="noreferrer" className="hover:text-muted transition-colors">LinkedIn</a>
            <a href="https://www.instagram.com/gilngns/" target="_blank" rel="noreferrer" className="hover:text-muted transition-colors">Instagram</a>
          </div>
        </div>
      </div>
    </section>
  );
}
