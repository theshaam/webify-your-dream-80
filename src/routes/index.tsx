import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState, type PointerEvent } from "react";
import { ArrowRight, BarChart3, Boxes, Code2, Gamepad2, Globe2, Menu, MonitorSmartphone, Network, Search, ShieldCheck, Smartphone, UserRound, Users, Wrench, X } from "lucide-react";
import hero from "../assets/gamenock-illustrated-hero.jpg";
import vista from "../assets/gamenock-illustrated-vista.jpg";
import projects from "../assets/gamenock-illustrated-adventure.jpg";
import western from "../assets/gamenock-illustrated-western.jpg";
import racer from "../assets/gamenock-illustrated-racer.jpg";
import keyart from "../assets/gamenock-illustrated-keyart.jpg";

export const Route = createFileRoute("/")({
  head: () => ({ meta: [
    { title: "GameNock — Game Development Partner" },
    { name: "description", content: "GameNock creates ambitious games through complete development, co-development, and specialist engineering across platforms." },
    { property: "og:title", content: "GameNock — Game Development Partner" },
    { property: "og:description", content: "Build your game. Strengthen your team. Reach more platforms with GameNock." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: Index,
});

const Arrow = () => <ArrowRight size={17} strokeWidth={2} aria-hidden="true" />;
const nav = [
  ["What We Do", "#models"], ["How We Work", "#process"], ["Our Work", "#work"],
  ["Expertise", "#expertise"], ["Insights", "#insights"], ["Company", "#company"],
] as const;

function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  const siteRef = useRef<HTMLElement>(null);
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const site = siteRef.current;
    if (!site || !window.matchMedia("(prefers-reduced-motion: no-preference)").matches) return;

    const targets = site.querySelectorAll<HTMLElement>(
      ".approach-list li, .approach-copy, .section-intro, .project-card, .models-intro, .model-item, .orbit, .capabilities-copy, .expertise-card, .process-intro, .step, .technology .eyebrow, .tech-list, .metrics, blockquote, .insights-head, .insight-card, .contact .container"
    );
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.1, rootMargin: "0px 0px -35px 0px" });

    targets.forEach((target) => {
      target.classList.add("reveal");
      observer.observe(target);
    });
    site.classList.add("motion-ready");
    return () => observer.disconnect();
  }, []);

  const moveHero = (event: PointerEvent<HTMLElement>) => {
    if (event.pointerType !== "mouse" || !window.matchMedia("(prefers-reduced-motion: no-preference)").matches) return;
    const bounds = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - bounds.left) / bounds.width - 0.5;
    const y = (event.clientY - bounds.top) / bounds.height - 0.5;
    heroRef.current?.style.setProperty("--scene-x", `${x * -16}px`);
    heroRef.current?.style.setProperty("--scene-y", `${y * -12}px`);
  };

  const resetHero = () => {
    heroRef.current?.style.setProperty("--scene-x", "0px");
    heroRef.current?.style.setProperty("--scene-y", "0px");
  };

  return <main className="site" ref={siteRef}>
    <section className="hero" id="top" ref={heroRef} onPointerMove={moveHero} onPointerLeave={resetHero}>
      <img src={keyart} className="hero-image" alt="Adventurer and robot overlooking a floating fantasy city" width={1920} height={1024} />
      <div className="hero-shade" />
      <header className="header">
        <a className="brand" href="#top" aria-label="GameNock home"><span className="brand-mark" />GameNock</a>
        <nav className={`nav ${menuOpen ? "open" : ""}`} aria-label="Main navigation">
          {nav.map(([label, href]) => <a key={href} href={href} onClick={() => setMenuOpen(false)}>{label}</a>)}
        </nav>
        <a className="button button-primary" href="#contact">Discuss Your Project <Arrow /></a>
        <button className="menu-toggle" type="button" aria-label={menuOpen ? "Close menu" : "Open menu"} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X size={21} /> : <Menu size={21} />}</button>
      </header>
      <div className="container hero-content">
        <div className="eyebrow">Global game development partner</div>
        <h1>Build Your Game.<br />Strengthen Your Team.<br /><span className="cyan">Reach More Platforms.</span></h1>
        <p>Complete development, co-development and specialist engineering for ambitious game projects.</p>
        <div className="hero-actions"><a className="button button-primary" href="#contact">Discuss Your Project <Arrow /></a><a className="button button-outline" href="#work">Explore Our Work <Arrow /></a></div>
      </div>
      <div className="wave" aria-hidden="true" />
    </section>

    <div className="stats-band"><div className="container stats">
      <div className="stat"><Gamepad2 size={34} strokeWidth={1.6}/><div><strong>50+</strong><span>Games Developed</span></div></div>
      <span className="stat-divider" />
      <div className="stat"><MonitorSmartphone size={34} strokeWidth={1.6}/><div><strong>Mobile · PC · WebGL</strong></div></div>
      <span className="stat-divider" />
      <div className="stat"><Network size={34} strokeWidth={1.6}/><div><strong>Multiplayer & Backend</strong></div></div>
    </div></div>

    <section className="approach scene-section" id="company"><img className="scene-bg" src={vista} alt="" loading="lazy" width={1920} height={1024}/><div className="scene-overlay" />
      <div className="container approach-grid">
        <ul className="approach-list"><li><UserRound size={23}/> Strategic thinking, not just execution</li><li><Search size={23}/> Flexible engagement models</li><li><Users size={23}/> Experienced multidisciplinary teams</li><li><BarChart3 size={23}/> A long-term partner in your success</li></ul>
        <div className="approach-copy"><div className="eyebrow">Our approach</div><h2>A Development Partner<br />for Every Serious Stage.</h2><p>From first concept to live operations, we integrate with your team to help you move faster, ship higher quality games, and reach more players worldwide.</p></div>
      </div>
    </section>

    <section className="work" id="work"><div className="container">
      <div className="section-intro"><div className="eyebrow">Featured work</div><h2>Selected Worlds. Real Impact.</h2><p>Original IP, co-development and specialised engineering across genres and platforms.</p><a href="#contact" className="link-arrow">View All Projects <Arrow /></a></div>
      <div className="project-grid">
        <a href="#contact" className="project-card"><img src={projects} alt="Adventurer and robot exploring a fantasy kingdom" loading="lazy" width={1536} height={1024}/><div className="project-details"><h3>Gamisodes</h3><p>A vibrant adventure for a new generation.</p><div className="project-row"><span className="tag">Complete Development</span><span className="round-arrow"><Arrow /></span></div><div className="platforms">PC · Mobile · Console</div></div></a>
        <a href="#contact" className="project-card"><img src={western} alt="Cowboy overlooking a western frontier at sunset" loading="lazy" width={1536} height={1024}/><div className="project-details"><h3>HighNoon</h3><p>A bold co-development partnership.</p><div className="project-row"><span className="tag">Co-Development</span><span className="round-arrow"><Arrow /></span></div><div className="platforms">PC · Console</div></div></a>
        <a href="#contact" className="project-card"><img src={racer} alt="Off-road racing truck at sunset" loading="lazy" width={1536} height={1024}/><div className="project-details"><h3>Blast Wheels</h3><p>High-speed action built for more platforms.</p><div className="project-row"><span className="tag">Specialized Development</span><span className="round-arrow"><Arrow /></span></div><div className="platforms">PC · Mobile · WebGL</div></div></a>
      </div>
    </div></section>

    <section className="models scene-section" id="models"><img className="scene-bg" src={vista} alt="" loading="lazy" width={1920} height={1024}/><div className="scene-overlay" /><div className="container models-grid">
      <div className="models-intro"><div className="eyebrow">Our approach</div><h2>Engagement Models for Every Ambition.</h2><p>From full game development to embedded team support, we adapt to your goals, scale and timeline.</p><a href="#contact" className="link-arrow">Learn More <Arrow /></a></div>
      <div className="model-item"><img src={vista} alt="Floating world for complete development" loading="lazy" width={1920} height={1024}/><h3>Complete<br/>Development</h3><p>We have a vision from concept to launch. We bring the full production cycle.</p><a href="#contact" className="link-arrow">Learn More <Arrow /></a></div>
      <div className="model-item"><img src={western} alt="Western adventure world for co-development" loading="lazy" width={1536} height={1024}/><h3>Co-Development</h3><p>We integrate with your team to add capacity, capability and momentum.</p><a href="#contact" className="link-arrow">Learn More <Arrow /></a></div>
      <div className="model-item"><img src={projects} alt="Game world for specialist development" loading="lazy" width={1536} height={1024}/><h3>Specialized<br/>Development</h3><p>We take ownership of specialist systems and challenges for complex projects.</p><a href="#contact" className="link-arrow">Learn More <Arrow /></a></div>
    </div></section>

    <section className="capabilities scene-section"><img className="scene-bg" src={vista} alt="" loading="lazy" width={1920} height={1024}/><div className="scene-overlay" /><div className="container capabilities-grid">
      <div className="orbit"><img className="orbit-image" src={keyart} alt="Floating island at the center of GameNock's capabilities" loading="lazy" width={1920} height={1024}/>
        <span className="orbit-label l1"><Gamepad2/>Game Design<br/>& Production</span><span className="orbit-label l2"><Code2/>Engineering<br/>& Programming</span><span className="orbit-label l3"><Wrench/>Porting &<br/>Optimization</span><span className="orbit-label l4"><ShieldCheck/>QA & Testing</span><span className="orbit-label l5"><BarChart3/>Live Ops<br/>& Analytics</span><span className="orbit-label l6"><Network/>Multiplayer<br/>& Backend</span>
      </div>
      <div className="capabilities-copy"><div className="eyebrow">Our capabilities</div><h2>A Complete Orbit of Capabilities.</h2><p>End-to-end game development capabilities to support ambitious projects at any scale.</p></div>
    </div></section>

    <section className="expertise scene-section" id="expertise"><img className="scene-bg" src={vista} alt="" loading="lazy" width={1920} height={1024}/><div className="scene-overlay" /><div className="container">
      <div className="section-intro"><div className="eyebrow">Our expertise</div><h2>Creative Range. Technical Depth.</h2><p>A full spectrum of game development capabilities to support ambitious projects at any scale.</p></div>
      <div className="expertise-grid">
        {[
          { title: "Unity", description: "Game development, prototyping and production expertise.", img: projects, icon: Gamepad2 },
          { title: "Multiplayer", description: "Online systems, co-op experiences, and social features.", img: western, icon: Network },
          { title: "Backend", description: "Player services, live operations and scalable infrastructure.", img: vista, icon: Boxes },
          { title: "Mobile", description: "Optimized experiences for iOS and Android.", img: projects, icon: Smartphone },
          { title: "WebGL", description: "High-quality browser games that reach new players.", img: vista, icon: Globe2 },
          { title: "Porting & Optimization", description: "Engine upgrades, performance optimization and multi-platform support.", img: racer, icon: Gamepad2 },
        ].map(({title, description, img, icon: Icon}) => <a key={title} href="#contact" className="expertise-card"><img src={img} alt="" loading="lazy" width={1536} height={1024}/><div><div><Icon size={26}/><h3>{title}</h3><p>{description}</p></div><ArrowRight size={24}/></div></a>)}
      </div>
    </div></section>

    <section className="process scene-section" id="process"><img className="scene-bg" src={keyart} alt="" loading="lazy" width={1920} height={1024}/><div className="scene-overlay" /><div className="container">
      <div className="process-intro"><div className="eyebrow">Our process</div><h2>From Concept<br/>to a World Players Love.</h2><p>A clear, collaborative process that keeps your project on track from day one to long-term success.</p></div>
      <div className="steps">{[
        ["01", "Discover", "Align on vision, opportunities and requirements"], ["02", "Plan", "Define scope, team structure and roadmap"], ["03", "Build", "Develop, iterate and integrate"], ["04", "Validate", "Test, refine and ensure quality across platforms"], ["05", "Launch & Grow", "Release with confidence and support what comes next"],
      ].map(([number,title,description]) => <div className="step" key={number}><strong>{number}</strong><h3>{title}</h3><p>{description}</p></div>)}</div>
    </div></section>

    <section className="technology"><div className="container"><div className="eyebrow">Built with proven technology</div><div className="tech-list"><span>◈ Unity</span><span>aws</span><span>⬡ PlayFab</span><span>Ⓤ UNREAL ENGINE</span><span>iOS / Android</span><span>◁ PlayStation</span><span>✕ Xbox</span></div></div></section>
    <section className="quote-band scene-section"><img className="scene-bg" src={hero} alt="" loading="lazy" width={1920} height={1024}/><div className="scene-overlay"/><div className="container quote-grid"><div className="metrics"><h3>Strong Partners.<br/>Brighter Worlds.</h3><div className="metrics-row"><div><strong>95%</strong><span>Would work with<br/>GameNock again</span></div><div><strong>4.8/5</strong><span>Average client<br/>satisfaction</span></div></div></div><blockquote><p>GameNock felt like a true extension of our team.</p><small>They brought expertise, creativity and real ownership to the project. The quality, communication and speed were outstanding.</small><cite>Sarah Chen<span>Studio Director, Indie Studio</span></cite></blockquote></div></section>
    <section className="insights scene-section" id="insights"><img className="scene-bg" src={vista} alt="" loading="lazy" width={1920} height={1024}/><div className="scene-overlay"/><div className="container"><div className="insights-head"><div><div className="eyebrow">Insights</div><h2>Latest Guides and Perspectives.</h2></div><a href="#contact" className="link-arrow">View All Insights <Arrow/></a></div><div className="insights-grid">
      {[
        ["PROCESS", "A Practical Guide to Multiplayer Architecture", projects, "6 min read"],
        ["TECHNICAL", "Optimizing Your Game for Multiple Platforms", racer, "7 min read"],
        ["STRATEGY", "From Launch to Live Operations", vista, "6 min read"],
      ].map(([label,title,img,time]) => <a href="#contact" className="insight-card" key={title}><img src={img} alt="" loading="lazy" width={1536} height={1024}/><div><div className="eyebrow">{label}</div><h3>{title}</h3><span>◷ {time}</span></div></a>)}
    </div></div></section>
    <section className="contact scene-section" id="contact"><img className="scene-bg" src={hero} alt="" loading="lazy" width={1920} height={1024}/><div className="scene-overlay"/><div className="container"><div className="eyebrow">Let's work together</div><h2>Let’s Build<br/>What’s Next.</h2><p>A long-term partner for bold ideas, ambitious teams and unforgettable games.</p><a className="button button-primary" href="mailto:hello@gamenock.com?subject=Let's%20discuss%20a%20project">Discuss Your Project <Arrow/></a></div></section>
    <footer className="footer"><div className="container"><div className="footer-grid"><div className="footer-brand"><a className="brand" href="#top"><span className="brand-mark"/>GameNock</a><p>Building the next generation of game experiences. Together.</p></div>
      <div><h4>Services</h4><a href="#models">Complete Development</a><a href="#models">Co-Development</a><a href="#models">Specialized Development</a></div>
      <div><h4>Our Process</h4><a href="#process">Discover</a><a href="#process">Plan</a><a href="#process">Build</a><a href="#process">Validate</a></div>
      <div><h4>Portfolio</h4><a href="#work">All Projects</a><a href="#work">Case Studies</a></div>
      <div><h4>Expertise</h4><a href="#expertise">Unity</a><a href="#expertise">Multiplayer</a><a href="#expertise">Backend</a><a href="#expertise">Mobile</a><a href="#expertise">WebGL</a></div>
      <div><h4>Company</h4><a href="#company">About Us</a><a href="#contact">Contact</a><a href="#insights">Insights</a></div>
    </div><div className="copyright">© {new Date().getFullYear()} GameNock. All rights reserved.</div></div></footer>
  </main>;
}