import { useEffect, useState } from 'react';

export default function Navbar({ navAnimate }) {
  return (
    <nav className={`flex justify-between items-center py-6 px-[4vw] fixed w-full top-0 z-[100] bg-black/20 backdrop-blur-md border-b border-white/5 nav-animate ${navAnimate ? 'in-view' : ''} md:flex-row flex-col md:gap-0 gap-3 md:items-center items-start md:py-6 md:px-[4vw] px-[5vw] py-4 max-md:bg-black/85`}>
      <div className="font-heading font-extrabold text-xl uppercase max-md:text-base max-md:text-left">Gilang Nanda Saputra</div>
      <div className="flex gap-12 text-sm uppercase tracking-wider max-md:gap-5 max-md:text-xs max-md:flex-wrap max-md:justify-start">
        <a href="#about" className="nav-link relative overflow-hidden">About</a>
        <a href="#experience" className="nav-link relative overflow-hidden">Experience</a>
        <a href="#contact" className="nav-link relative overflow-hidden">Contact</a>
      </div>
    </nav>
  );
}
