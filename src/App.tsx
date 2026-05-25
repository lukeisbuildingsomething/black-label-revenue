import { useEffect } from 'react';
import './App.css';

const Nav = () => {
  useEffect(() => {
    const handleScroll = () => {
      const nav = document.querySelector('nav');
      if (nav) {
        if (window.scrollY > 50) {
          nav.classList.add('py-2');
          nav.classList.remove('py-4');
          nav.style.backgroundColor = 'rgba(5, 5, 5, 0.95)';
        } else {
          nav.classList.remove('py-2');
          nav.classList.add('py-4');
          nav.style.backgroundColor = 'rgba(5, 5, 5, 0.8)';
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="w-full top-0 sticky z-50 bg-background/80 backdrop-blur-md border-b border-white/5 transition-all duration-300 py-4">
      <div className="max-w-container-max mx-auto px-margin-desktop flex justify-between items-center h-20">
        <div className="font-display-lg text-headline-sm font-bold tracking-tighter text-primary">
          <img 
            src="https://lh3.googleusercontent.com/aida/ADBb0ujaiGRX7QNfguvGMs7zC2EuiprBJwPj8VaZKnBXzW4HYTZ9_lPNBOs8_l0peupRxoglNJqPpsHGWS0kvYum9CXll_1t8EDWohBUNSGpWSSIOYBiiupk15ekVC9oXeX9F4p1K_T2me2nrXW75XhIYB7fkxS6hRjeyJxi3uKOHo1Sc0qIyMoA8eTd5MbMvzXCi0mod-A76otYb_TK_I95hiCsXKNgD9318SSQ7esZyZnltnLsAxz0V1ffkpHw" 
            alt="Black Label Revenue Logo" 
            className="h-12 w-auto object-contain"
          />
        </div>
        <div className="hidden md:flex items-center gap-10">
          <a className="font-label-mono text-[12px] uppercase tracking-widest text-secondary hover:text-gold-accent transition-colors" href="#expertise">Consulting</a>
          <a className="font-label-mono text-[12px] uppercase tracking-widest text-secondary hover:text-gold-accent transition-colors" href="#experience">Experience</a>
          <a className="font-label-mono text-[12px] uppercase tracking-widest text-secondary hover:text-gold-accent transition-colors" href="#insights">Insights</a>
          <a className="px-6 py-2 border border-gold-accent text-gold-accent font-label-mono text-[12px] uppercase tracking-widest hover:bg-gold-accent hover:text-background transition-all duration-300" href="#contact">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

const Hero = () => (
  <section className="hero-gradient min-h-[90vh] flex flex-col justify-center items-center text-center px-6 md:px-margin-desktop relative overflow-hidden">
    <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gold-accent/5 rounded-full blur-[120px]"></div>
    <div className="max-w-4xl relative z-10">
      <span className="font-label-mono text-gold-accent tracking-[0.3em] uppercase mb-6 block opacity-80">Luke Reimer — Operator</span>
      <h1 className="font-display-lg text-[clamp(2.5rem,8vw,5rem)] leading-[1.1] mb-8 text-primary">
        Independent <span className="italic text-gold-accent">GTM & AI</span> Consultant
      </h1>
      <p className="font-body-md text-lg md:text-xl text-secondary/80 max-w-2xl mx-auto mb-12 leading-relaxed">
        Sophisticated growth frameworks for vertical SaaS leaders. I don't just advise on the future; I ship the high-fidelity tools, outbound stacks, and AI maturity models that define it.
      </p>
      <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
        <a className="px-10 py-5 bg-white text-background font-label-mono text-sm uppercase tracking-widest font-bold hover:bg-gold-accent transition-all duration-300 active:scale-95" href="#contact">
          Inquire for Q3 Availability
        </a>
        <a className="group flex items-center gap-3 font-label-mono text-sm uppercase tracking-widest text-primary" href="#expertise">
          View Methodology
          <span className="material-symbols-outlined text-gold-accent group-hover:translate-x-1 transition-transform">arrow_forward</span>
        </a>
      </div>
    </div>
    <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 opacity-40">
      <div className="w-px h-16 bg-gradient-to-b from-transparent via-gold-accent to-transparent"></div>
    </div>
  </section>
);

const ExpertiseCard = ({ icon, title, description, tags }: { icon: string, title: string, description: string, tags: string[] }) => (
  <div className="premium-card p-10 flex flex-col h-full">
    <div className="mb-8">
      <span className="material-symbols-outlined text-4xl text-gold-accent" style={{ fontVariationSettings: "'FILL' 0" }}>{icon}</span>
    </div>
    <h3 className="font-display-lg text-2xl text-primary mb-4">{title}</h3>
    <p className="text-secondary/70 leading-relaxed mb-8 flex-grow">
      {description}
    </p>
    <ul className="space-y-3 font-label-mono text-[11px] text-gold-accent uppercase tracking-wider">
      {tags.map((tag, i) => (
        <li key={i} className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-gold-accent/40"></span> {tag}
        </li>
      ))}
    </ul>
  </div>
);

const Expertise = () => (
  <section className="py-section-gap px-6 md:px-margin-desktop max-w-container-max mx-auto" id="expertise">
    <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
      <div className="max-w-xl">
        <h2 className="font-display-lg text-4xl md:text-6xl text-primary mb-6 italic">Strategic Delivery</h2>
        <p className="text-secondary font-body-md text-lg">Beyond the slide deck. My engagement model is rooted in deep technical execution and reusable architectural patterns.</p>
      </div>
      <div className="font-label-mono text-gold-accent border-b border-gold-accent/30 pb-2">
        01 / CONSULTING
      </div>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      <ExpertiseCard 
        icon="account_tree"
        title="Portfolio GTM Strategy"
        description="Architecting reusable frameworks for multi-product OpCos. Transition from ad-hoc tactics to systematic pattern recognition that scales across vertical markets."
        tags={["ICP Architecture", "Unit Economic Modeling", "Playbook Serialization"]}
      />
      <ExpertiseCard 
        icon="hub"
        title="AI Outbound Systems"
        description="Deployment of sophisticated Clay + Claude API production stacks. Automating high-intent signal detection and hyper-personalized sequencing at industrial scale."
        tags={["Custom API Integration", "Dynamic Content Gen", "Signal Mining"]}
      />
      <ExpertiseCard 
        icon="model_training"
        title="AI Maturity Model"
        description="A Phase 1-3 roadmap for CEOs. Moving organizations from 'AI Curiosity' to 'AI Operationalized' with clear ROI benchmarks and risk mitigation."
        tags={["Executive Alignment", "LLM Policy Guardrails", "Workforce Upskilling"]}
      />
    </div>
  </section>
);

const Interstitial = () => (
  <section className="h-[60vh] relative overflow-hidden flex items-center justify-center">
    <img 
      className="absolute inset-0 w-full h-full object-cover opacity-30 grayscale" 
      src="https://lh3.googleusercontent.com/aida-public/AB6AXuBSjXcWz7NUpd5x8Q900cNkx6pwe7On-qUDTKcCBVkSPzOaJGQGkYceocl-6ZGEiYa3j3gVnO-rubudf88Og54SWdWbaczKJZlx78IAIgCq6rZ5MEOC4cd_uS8O4aicmHge5IL8XtQOy84zioKk8U4bTXSJNmIrSw1hFHKKxvcDzlc1VDU9_ExTYEH4TChtELBqJ0ke2gnqD1Ka_8MpRmg9n7CX0ntj4FJXjWuBKP6SRSvfvVJCjdLJOJ5Gs-E-mfR38yUZLotp_Bb8"
      alt="Luxury dark glass surface"
    />
    <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background"></div>
    <div className="relative z-10 text-center max-w-2xl px-6">
      <h2 className="font-display-lg text-3xl md:text-5xl text-primary italic mb-6">"Strategy without execution is just an expensive hallucination."</h2>
      <div className="w-24 h-px bg-gold-accent mx-auto"></div>
    </div>
  </section>
);

const ExperienceItem = ({ company, role, description, period }: { company: string, role: string, description: string, period: string }) => (
  <div className="group relative pb-12 border-b border-white/5">
    <div className="flex justify-between items-start mb-4">
      <div>
        <h4 className="font-display-lg text-2xl text-primary group-hover:text-gold-accent transition-colors duration-300">{company}</h4>
        <p className="font-label-mono text-xs text-gold-accent/60 uppercase tracking-widest mt-1">{role}</p>
      </div>
      <span className="font-label-mono text-secondary/40">{period}</span>
    </div>
    <p className="text-secondary/80 leading-relaxed max-w-xl">
      {description}
    </p>
  </div>
);

const Experience = () => (
  <section className="py-section-gap px-6 md:px-margin-desktop max-w-container-max mx-auto" id="experience">
    <div className="flex flex-col md:flex-row gap-20">
      <div className="md:w-1/3">
        <div className="sticky top-32">
          <span className="font-label-mono text-gold-accent tracking-widest uppercase mb-4 block">Track Record</span>
          <h2 className="font-display-lg text-5xl text-primary mb-8 leading-tight">The Operator <br/><span className="italic">Advantage</span></h2>
          <div className="flex items-baseline gap-4 mb-8">
            <span className="font-display-lg text-6xl text-gold-accent">110+</span>
            <span className="font-label-mono text-secondary text-sm uppercase leading-tight">Operating companies supported globally</span>
          </div>
          <p className="text-secondary/60 font-body-md">My experience isn't academic. It's forged in the high-stakes environment of growth-stage SaaS, where moving fast isn't an option—it's the baseline.</p>
        </div>
      </div>
      <div className="md:w-2/3 space-y-12">
        <ExperienceItem 
          company="BoostCX"
          role="Active Pilot — AI Revenue Ops"
          description="Deploying advanced AI systems to revolutionize customer experience intelligence. Architecting the bridge between raw data signals and automated outbound action."
          period="Present"
        />
        <ExperienceItem 
          company="Northwoods"
          role="GTM Infrastructure Lead"
          description="Standardizing the GTM stack across multiple product lines. Implementing automated reporting and predictive pipeline modeling for executive leadership."
          period="Active"
        />
        <ExperienceItem 
          company="Independent Consultant"
          role="Advisor to Venture Portfolios"
          description="Partnering with Tier 1 VCs to stabilize and scale their vertical SaaS investments. Focus on pattern-matching sales methodologies and technical GTM enablement."
          period="2020 — 2024"
        />
      </div>
    </div>
  </section>
);

const Contact = () => (
  <section className="px-6 md:px-margin-desktop py-section-gap" id="contact">
    <div className="max-w-4xl mx-auto premium-card p-12 md:p-20 text-center relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold-accent to-transparent"></div>
      <h2 className="font-display-lg text-4xl md:text-6xl text-primary mb-8 italic">Available for Selection</h2>
      <p className="text-secondary text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed">
        Now accepting inquiries for Q4 project-based or fractional GTM leadership engagements. Priority given to vertical SaaS and high-volume AI outbound deployments.
      </p>
      <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
        <div className="flex flex-col items-center">
          <span className="font-label-mono text-[10px] text-gold-accent/60 uppercase tracking-widest mb-2">Primary Contact</span>
          <a className="text-2xl font-serif text-primary hover:text-gold-accent transition-colors" href="mailto:luke@blacklabelrevenue.com">luke@blacklabelrevenue.com</a>
        </div>
        <div className="hidden md:block w-px h-12 bg-white/10"></div>
        <div className="flex flex-col items-center">
          <span className="font-label-mono text-[10px] text-gold-accent/60 uppercase tracking-widest mb-2">Location</span>
          <span className="text-2xl font-serif text-primary">Austin, TX</span>
        </div>
      </div>
      <div className="mt-16">
        <button className="px-12 py-6 bg-gold-accent text-background font-label-mono font-bold uppercase tracking-[0.2em] hover:scale-105 active:scale-95 transition-all duration-300">
          Book Initial Strategy Session
        </button>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-background py-20 border-t border-white/5">
    <div className="max-w-container-max mx-auto px-6 md:px-margin-desktop flex flex-col md:flex-row justify-between items-center gap-10">
      <div className="flex flex-col items-center md:items-start">
        <div className="font-display-lg text-2xl font-bold text-primary mb-2">BLACK LABEL REVENUE</div>
        <div className="font-label-mono text-[10px] text-secondary tracking-widest">© 2024 BLACK LABEL REVENUE. ALL RIGHTS RESERVED.</div>
      </div>
      <div className="flex gap-8 font-label-mono text-xs uppercase tracking-widest text-secondary/60">
        <a className="hover:text-gold-accent transition-colors" href="#">LinkedIn</a>
        <a className="hover:text-gold-accent transition-colors" href="#">Twitter / X</a>
        <a className="hover:text-gold-accent transition-colors" href="#">Privacy Policy</a>
      </div>
    </div>
  </footer>
);

function App() {
  return (
    <div className="app bg-background min-h-screen">
      <div className="noise-overlay"></div>
      <Nav />
      <main>
        <Hero />
        <Expertise />
        <Interstitial />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
