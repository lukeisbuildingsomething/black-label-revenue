import './App.css';
import { Cpu, Layers, Activity, Shield, ChevronRight } from 'lucide-react';

const Nav = () => (
  <nav className="nav">
    <div className="container" style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
      <div className="label-mono" style={{ fontSize: '16px', fontWeight: 700, color: 'var(--color-primary)' }}>
        BLACK LABEL REVENUE
      </div>
      <div className="nav-links">
        <a href="#services" className="nav-link">Services</a>
        <a href="#architecture" className="nav-link">Architecture</a>
        <a href="#infrastructure" className="nav-link">Infrastructure</a>
        <a href="#contact" className="nav-link">Connect</a>
      </div>
    </div>
  </nav>
);

const Hero = () => (
  <section className="hero">
    <div className="container">
      <div className="label-mono" style={{ color: 'var(--color-secondary)', marginBottom: '16px' }}>
        <span className="status-indicator" style={{ marginRight: '8px' }}></span>
        SYSTEMS OPERATIONAL // Q2 2026
      </div>
      <h1>Industrial-Grade Revenue Infrastructure for B2B SaaS.</h1>
      <p>We build the technical foundation that powers high-velocity shipping. No advice, just execution.</p>
      <div style={{ display: 'flex', gap: '16px' }}>
        <button className="button-primary sharp">INITIALIZE PROJECT</button>
        <button className="button-outline sharp">VIEW ARCHITECTURE</button>
      </div>
    </div>
  </section>
);

const BentoCard = ({ icon: Icon, label, title, content }: { icon: any, label: string, title: string, content: string }) => (
  <div className="bento-card">
    <div className="marker marker-tl"></div>
    <div className="marker marker-tr"></div>
    <div className="marker marker-bl"></div>
    <div className="marker marker-br"></div>
    <div className="card-label">
      <Icon size={14} />
      {label}
    </div>
    <div className="card-title">{title}</div>
    <div className="card-content">{content}</div>
    <div style={{ marginTop: 'auto', display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--color-primary)', fontSize: '12px', cursor: 'pointer' }} className="label-mono">
      EXPLORE SPECS <ChevronRight size={14} />
    </div>
  </div>
);

const BentoGrid = () => (
  <section id="services" className="container" style={{ paddingBottom: 'var(--spacing-section-gap)' }}>
    <div className="bento-grid">
      <BentoCard 
        icon={Cpu}
        label="CORE_INFRA"
        title="High-Velocity Deployment"
        content="Automated pipelines designed for technical founders who need to ship daily without infrastructure overhead."
      />
      <BentoCard 
        icon={Layers}
        label="STACK_ARCHITECTURE"
        title="Modular Scalability"
        content="Battle-tested architectural patterns that grow from MVP to Enterprise without refactoring."
      />
      <BentoCard 
        icon={Shield}
        label="SEC_OPS"
        title="Hardened Security"
        content="Zero-trust infrastructure as code. We ensure your revenue engine is protected by default."
      />
      <BentoCard 
        icon={Activity}
        label="PERF_MONITOR"
        title="Real-time Observability"
        content="Deep-trace monitoring for every transaction. Understand your system performance at the kernel level."
      />
    </div>
  </section>
);

const Footer = () => (
  <footer className="footer">
    <div className="container" style={{ display: 'flex', justifyContent: 'space-between', width: '100%', alignItems: 'center' }}>
      <div className="label-mono" style={{ color: 'var(--color-secondary)' }}>
        © 2026 BLACK LABEL REVENUE // ALL RIGHTS RESERVED
      </div>
      <div className="nav-links">
        <a href="#" className="nav-link">GitHub</a>
        <a href="#" className="nav-link">Terminal</a>
        <a href="#" className="nav-link">Docs</a>
      </div>
    </div>
  </footer>
);

function App() {
  return (
    <div className="app">
      <Nav />
      <Hero />
      <BentoGrid />
      <Footer />
    </div>
  );
}

export default App;
