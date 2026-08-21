import { useRef } from 'react';

export default function About() {
  const containerRef = useRef(null);
  const imgRef = useRef(null);

  const handleMouseMove = (e) => {
    if (window.innerWidth <= 992) return;
    const container = containerRef.current;
    const img = imgRef.current;
    if (!container || !img) return;

    const rect = container.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = ((y - centerY) / centerY) * -15; 
    const rotateY = ((x - centerX) / centerX) * 15;
    
    img.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
  };

  const handleMouseLeave = () => {
    const img = imgRef.current;
    if (!img) return;
    img.style.transform = `rotateX(0) rotateY(0) scale(1)`;
    img.style.transition = `transform 0.5s cubic-bezier(0.23, 1, 0.32, 1)`;
  };

  const handleMouseEnter = () => {
    const img = imgRef.current;
    if (!img) return;
    img.style.transition = `none`;
  };

  return (
    <section className="about section-padding relative z-10" id="about">
      <div className="container">
        <h2 className="section-title reveal-element">01 / About</h2>
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-24 items-center max-lg:gap-12">
          <div 
            className="about-image w-full aspect-[4/5] rounded-[20px] relative"
            ref={containerRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            onMouseEnter={handleMouseEnter}
          >
            <img 
              src="/assets/pp.jpg" 
              alt="Gilang Nanda Saputra"
              className="w-full h-full object-cover scale-100 rounded-[20px] shadow-[0_20px_40px_rgba(0,0,0,0.5)] will-change-transform"
              ref={imgRef}
            />
          </div>
          <div className="about-text reveal-element">
            <p className="font-heading text-[clamp(1.5rem,3vw,2.5rem)] leading-[1.2] mb-8">
              I am Gilang, an Information Systems student at Universitas Komputer Indonesia with a deep passion for software engineering.
            </p>
            <p className="text-muted text-lg mb-12">
              From building complete Dealer Management Systems to participating in national innovation festivals, my journey is driven by a desire to craft scalable, high-performance digital solutions. I thrive in challenging environments and constantly seek to elevate user experiences through code.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
