import { useState } from 'react';

export default function Experience() {
  const [activeTab, setActiveTab] = useState('work');

  const handleMouseMove = (e, idx) => {
    const card = document.getElementById(`exp-card-${idx}`);
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    card.style.setProperty('--x', `${x}px`);
    card.style.setProperty('--y', `${y}px`);
  };

  const experiences = [
    {
      company: "Mercedes-Benz PT Citrakarya Pranata",
      date: "Apr 2026 - Jul 2026",
      role: "Fullstack Web Developer",
      desc: "Developed PICATINNY, an end-to-end Vehicle Dealer Management System. Digitalized dealership operations covering service management, spare parts inventory, cashier transactions, and management reporting dashboards.",
      category: "work"
    },
    {
      company: "PT. MARIKU AIC INDONESIA - KARIR JEPANG",
      date: "Jan 2026 - Mar 2026",
      role: "Fullstack Web Developer",
      desc: "Built web solutions integrating Google Cloud Platform (GCP) and Laravel to streamline career matching processes.",
      category: "work"
    },
    {
      company: "PT. Kurniawan Indonesia Group",
      date: "Jul 2025 - Sep 2025",
      role: "Web Developer",
      desc: "Developed robust web platforms using Laravel and optimized technical SEO utilizing Google Search Console.",
      category: "work"
    },
    {
      company: "Permata Bumi Pertiwi",
      date: "May 2025 - Aug 2025",
      role: "Web Developer",
      desc: "Engineered data-driven web applications leveraging MySQL databases and Google Search Console insights.",
      category: "work"
    },
    {
      company: "Dinas PU Kabupaten Bandung (Soreang)",
      date: "Aug 2024 - Sep 2024",
      role: "Fullstack Web Developer",
      desc: "Built SIRANDA PaCira, a public road damage reporting platform for the Pasirjambu and Ciwidey area. Citizens submit damage reports with location and photo evidence, while officers track and publish the follow-up results.",
      link: "https://sirandapacira.my.id",
      category: "work"
    },
    {
      company: "Sistem Perlengkapan UNIKOM",
      date: "Apr 2026 - Aug 2026",
      role: "Fullstack Web Developer",
      desc: "Internal inventory and equipment management system for UNIKOM. Handles equipment records, borrowing and return workflows, and stock reporting for campus staff.",
      category: "product"
    },
    {
      company: "TrustFund",
      date: "Mar 2026 - Aug 2026",
      role: "Fullstack Web Developer",
      desc: "Social aid transparency platform run on our own independent validator network instead of a single government authority. Validators verify foundations and approve budgets, so every disbursement stays traceable in real time.",
      link: "https://nextrust.my.id",
      category: "product"
    },
    {
      company: "SiCantik",
      date: "Dec 2025 - Apr 2026",
      role: "Fullstack Web Developer",
      desc: "Agricultural commodity tracking system for farmers in Garut. Records crop stock by area, such as how much chili a village currently has, tracks who it gets sold to, and stores the transaction proof for every sale.",
      category: "product"
    },
    {
      company: "UNIKOM CodeLabs",
      date: "Feb 2025 - Present",
      role: "Back End Developer & Member",
      desc: "Collaborated on backend architectures and community-driven projects.",
      category: "product"
    },
    {
      company: "FIKSI (Pusat Prestasi Nasional)",
      date: "Jul 2021 - Okt 2021",
      role: "Finalist & Android Developer",
      desc: "Developed \"AYBER\" using Sketchware, an Android-based visual programming platform. Designed application logic and tested functionality to ensure seamless execution.",
      category: "competition"
    },
    {
      company: "Digdaya X Hackathon (Bank Indonesia)",
      date: "Mar 2026 - Aug 2026",
      role: "Semifinalist (Top 480 Team)",
      desc: "Developed TrustFund, an innovative product built on Artificial Intelligence and Blockchain technologies.",
      link: "https://nextrust.my.id",
      category: "competition"
    }
  ];

  const tabs = [
    { id: 'work', label: 'Work Experience' },
    { id: 'product', label: 'Products & CodeLabs' },
    { id: 'competition', label: 'Competitions' }
  ];

  const filteredExperiences = experiences.filter(exp => exp.category === activeTab);

  return (
    <section className="experience section-padding relative z-10" id="experience">
      <div className="container">
        <h2 className="section-title reveal-element">02 / Experience</h2>
        
        {/* Tabs */}
        <div className="flex gap-4 mb-16 flex-wrap justify-start reveal-element max-md:gap-3">
          {tabs.map(tab => (
            <button 
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-8 py-4 rounded-full text-sm font-body font-semibold uppercase tracking-[1px] transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] max-md:px-5 max-md:py-3 max-md:text-xs ${
                activeTab === tab.id 
                  ? 'bg-white text-black shadow-[0_0_20px_rgba(255,255,255,0.4)] scale-105 max-md:scale-100' 
                  : 'bg-white/5 text-white/70 hover:bg-white/10 hover:text-white border border-white/10 hover:scale-105 max-md:hover:scale-100'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="flex flex-col min-h-[400px]">
          {filteredExperiences.map((exp, idx) => (
            <div 
              key={`${activeTab}-${idx}`}
              id={`exp-card-${idx}`}
              className="exp-item p-12 mb-4 rounded-[20px] border border-white/5 bg-white/2 grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-16 relative overflow-hidden animate-[fadeInUp_0.6s_cubic-bezier(0.23,1,0.32,1)_forwards] opacity-0 max-lg:gap-4 max-lg:p-6"
              style={{ animationDelay: `${idx * 0.1}s` }}
              onMouseMove={(e) => handleMouseMove(e, idx)}
            >
              <div>
                <h3 className="text-2xl mb-2">{exp.company}</h3>
                <span className="text-sm text-muted font-body">{exp.date}</span>
              </div>
              <div>
                <div className="font-heading text-3xl mb-4">{exp.role}</div>
                <p className="exp-desc text-lg">{exp.desc}</p>
                {exp.link && (
                  <a
                    href={exp.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 mt-5 text-sm font-body uppercase tracking-[1px] text-white/70 border-b border-white/20 pb-1 transition-colors duration-300 hover:text-white hover:border-white"
                  >
                    {exp.link.replace(/^https?:\/\//, '')}
                    <span aria-hidden="true">&#8599;</span>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
