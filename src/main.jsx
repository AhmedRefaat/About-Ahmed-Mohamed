import React, { useEffect, useRef } from 'react';
import { createRoot } from 'react-dom/client';
import Reveal from 'reveal.js';

import 'reveal.js/reveal.css';
import './styles.css';

/* --------------------------------------------------------------------------
 * Local assets
 * --------------------------------------------------------------------------
 * Keep these files directly inside src/assets.
 * Import a new logo only after the corresponding file exists.
 */
import ahmedLogo from './assets/ahmed-logo.png';
import myPhoto from './assets/me.JPG';
import bmwLogo from './assets/bmw-logo.svg';
import kpitLogo from './assets/kpit-logo.svg';
import marelliLogo from './assets/marelli-logo.svg';
import valeoLogo from './assets/valeo_logo.svg';
import cairoUniversityLogo from './assets/cairo-university-logo.jpg';
import eslscaLogo from './assets/eslsca-logo.png';
import nileUniversityLogo from './assets/Nile_University_logo.png';

/* --------------------------------------------------------------------------
 * Work experience
 * --------------------------------------------------------------------------
 * Set logoSrc to an imported asset when available. Until then, use null and
 * the Logo component will display logoText without breaking the Vite build.
 */
const roles = [
  {
    id: 'bmw',
    period: '2022–Now',
    company: 'BMW AG',
    title: 'Network Domain Leader',
    logoSrc: bmwLogo,
    logoText: 'BMW',
    logoAlt: 'BMW logo',
    logoVariant: 'square',
    accent: '#1c69d4',
    bullets: [
      'Own network and cybersecurity scope for Linux infotainment, cluster and rear-seat systems.',
      'Lead up to five cross-functional teams across architecture, development, validation, supplier integration and security.',
      'Deliver Ethernet, SOME/IP, IPsec, MACsec, CAN/Ethernet gateway, diagnostics, firewall and SELinux from PoC to series release.',
      'Built AI-assisted trace analysis and Jira-integrated automation.',
    ],
  },
  {
    id: 'kpit1',
    period: '2022',
    company: 'KPIT / MicroFuzzy',
    title: 'Technical Project Leader — BMW IP-Next',
    logoSrc: kpitLogo,
    logoText: 'KPIT',
    logoAlt: 'KPIT logo',
    logoVariant: 'wide',
    accent: '#ef6c00',
    bullets: [
      'Led an international team across Germany, Egypt and India.',
      'Managed scope, releases, staffing, budget, revenue, billing and customer communication.',
      'Supported AUTOSAR Ethernet and diagnostics modules on an ASIL-D controller.',
      'Created integration, KPI, status and billing automation tools.',
    ],
  },
  {
    id: 'kpit2',
    period: '2019–2021',
    company: 'KPIT / MicroFuzzy',
    title: 'Technical Leader — ePowertrain',
    logoSrc: kpitLogo,
    logoText: 'KPIT',
    logoAlt: 'KPIT logo',
    logoVariant: 'wide',
    accent: '#ef6c00',
    bullets: [
      'Led BSW, diagnostics and requirements work for EDU, inverter and onboard-charger controllers.',
      'Programs included Jaguar Land Rover and Volkswagen.',
      'Configured AUTOSAR diagnostics, communication and security modules including CSM/SecOC.',
      'Acted as ASPICE officer, Scrum Master and UDS trainer.',
    ],
  },
  {
    id: 'marelli',
    period: '2017–2019',
    company: 'Magneti Marelli',
    title: 'Senior Embedded Linux Software Engineer',
    logoSrc: marelliLogo,
    logoText: 'MARELLI',
    logoAlt: 'Marelli logo',
    logoVariant: 'stacked',
    accent: '#e21b2d',
    bullets: [
      'Integrated software-update components for BMW EntryNav and FCA Giorgio infotainment and telematics.',
      'Automated vehicle flashing, coding and integration testing.',
      'Managed release planning, customer communication and test fleets.',
      'Performed on-road and track validation across development phases.',
    ],
  },
  {
    id: 'valeo',
    period: '2012–2017',
    company: 'Valeo',
    title: 'Senior Embedded Software Engineer',
    logoSrc: valeoLogo,
    logoText: 'VALEO',
    logoAlt: 'Valeo logo',
    logoVariant: 'wide',
    accent: '#77b82a',
    bullets: [
      'Led Tesla ultrasonic automatic-parking feature delivery and end-to-end validation.',
      'Developed embedded C/C++, AUTOSAR BSW, complex drivers and Python SWC generators.',
      'Worked across programs for BMW, VW, FCA, PSA, Renault-Nissan and Ford.',
      'Served as ASPICE and MISRA-C reviewer and Scrum Master.',
    ],
  },
  {
    id: 'academic',
    period: '2012–2017',
    company: 'Nile University & ITI',
    title: 'Research / Teaching Assistant & Trainer',
    logoSrc: nileUniversityLogo,
    logoText: 'NU · ITI',
    logoAlt: 'Nile University logo',
    logoVariant: 'wide',
    accent: '#6c63ff',
    bullets: [
      'Taught engineering, programming, embedded C, RTOS and AUTOSAR topics.',
      'Researched automotive network security and published work on CAN and FlexRay authentication.',
      'Prepared labs, course material, assessments and research experiments.',
    ],
  },
];

/* --------------------------------------------------------------------------
 * Education
 * -------------------------------------------------------------------------- */
const educationItems = [
  {
    year: '2026',
    title: 'Business Management Specialist',
    institution: 'ESLSCA University',
    description: 'Business administration, politics and economics',
    logoSrc: eslscaLogo,
    logoAlt: 'ESLSCA University logo',
    logoVariant: 'wide',
  },
  {
    year: '2018',
    title: 'M.Sc. Software Engineering',
    institution: 'Nile University',
    description: 'Information Security · Automotive network security focus',
    logoSrc: nileUniversityLogo,
    logoAlt: 'Nile University logo',
    logoVariant: 'wide',
  },
  {
    year: '2010',
    title: 'B.Sc. Communication & Electronics',
    institution: 'Cairo University',
    description: 'Communication and Electronics Engineering',
    logoSrc: cairoUniversityLogo,
    logoAlt: 'Cairo University logo',
    logoVariant: 'portrait',
  },
];

/* --------------------------------------------------------------------------
 * Shared components
 * -------------------------------------------------------------------------- */

/**
 * Renders an image without adding a decorative circle or white badge.
 * A text fallback keeps the page usable before every logo has been supplied.
 */
function Logo({ src, alt, fallback, className, variant = 'wide' }) {
  const classes = `${className} logo-${variant}`;

  if (src) {
    return <img className={classes} src={src} alt={alt} />;
  }

  return (
    <span className={`${classes} logo-fallback`} aria-label={alt}>
      {fallback}
    </span>
  );
}

/** Persistent timeline displayed across all work-experience detail slides. */
function Timeline({ active }) {
  return (
    <nav className="timeline" aria-label="Work experience timeline">
      {roles.map((role, index) => (
        <button
          key={role.id}
          type="button"
          className={active === index ? 'active' : ''}
          onClick={() => window.RevealDeck?.slide(1, index + 1)}
          aria-label={`Open ${role.company}, ${role.period}`}
        >
          <span
            className="dot"
            style={{ '--role-color': role.accent }}
            aria-hidden="true"
          />
          <span className="time">{role.period}</span>
          <span className="timeline-company">
            <Logo
              src={role.logoSrc}
              alt=""
              fallback={role.logoText}
              className="timeline-logo"
              variant={role.logoVariant}
            />
          </span>
        </button>
      ))}
    </nav>
  );
}

/** Large employer logo displayed beside each role description. */
function BrandMark({ role }) {
  return (
    <div className="brand-mark" aria-label={`${role.company} brand mark`}>
      <Logo
        src={role.logoSrc}
        alt={role.logoAlt}
        fallback={role.logoText}
        className="brand-logo"
        variant={role.logoVariant}
      />
    </div>
  );
}

/** Education card with a consistently sized logo canvas. */
function EducationCard({ item }) {
  return (
    <article className="edu-card">
      <div className="education-logo-stage">
        <Logo
          src={item.logoSrc}
          alt={item.logoAlt}
          fallback={item.institution}
          className="education-logo"
          variant={item.logoVariant}
        />
      </div>
      <b>{item.year}</b>
      <h3>{item.title}</h3>
      <p className="institution">{item.institution}</p>
      <p>{item.description}</p>
    </article>
  );
}

/* --------------------------------------------------------------------------
 * Application
 * -------------------------------------------------------------------------- */
/**
 * Large, reliable navigation controls for touch devices.
 * Left/right moves between CV sections; up/down moves through section details.
 */
function MobileNavigation() {
  const lastNavigationRef = useRef(0);

  const navigate = (direction, event) => {
    event?.preventDefault();
    event?.stopPropagation();

    // Ignore the synthetic click that mobile Safari can emit immediately
    // after touchend, while still allowing normal mouse clicks.
    const now = Date.now();
    if (now - lastNavigationRef.current < 250) {
      return;
    }
    lastNavigationRef.current = now;

    const deck = window.RevealDeck;
    if (!deck) {
      return;
    }

    const { h = 0, v = 0 } = deck.getIndices();
    const routes = {
      left: [Math.max(0, h - 1), 0],
      right: [h + 1, 0],
      up: [h, Math.max(0, v - 1)],
      down: [h, v + 1],
    };

    const target = routes[direction];
    if (target) {
      deck.slide(target[0], target[1]);
    }
  };

  const button = (direction, label, symbol) => (
    <button
      type="button"
      className={`mobile-nav-button mobile-nav-${direction}`}
      onClick={(event) => navigate(direction, event)}
      onTouchEnd={(event) => navigate(direction, event)}
      aria-label={label}
    >
      {symbol}
    </button>
  );

  return (
    <nav className="mobile-navigation" aria-label="CV presentation navigation">
      {button('left', 'Previous section', '←')}
      {button('up', 'Previous detail', '↑')}
      {button('down', 'Next detail', '↓')}
      {button('right', 'Next section', '→')}
    </nav>
  );
}

function getResponsiveDeckSize() {
  const width = window.innerWidth;
  const height = window.innerHeight;
  const isTouchLayout = width <= 900 || window.matchMedia('(pointer: coarse)').matches;

  if (!isTouchLayout) {
    return { width: 1440, height: 900 };
  }

  if (height >= width) {
    // Portrait phone/tablet: use a portrait canvas instead of shrinking a
    // 1440 x 900 landscape canvas into a very narrow viewport.
    return { width: 430, height: 820 };
  }

  // Landscape phone/tablet.
  return { width: 900, height: 430 };
}

function App() {
  const deckElementRef = useRef(null);
  const revealInstanceRef = useRef(null);

  useEffect(() => {
    // Avoid duplicate Reveal.js initialization in React development mode.
    if (!deckElementRef.current || revealInstanceRef.current) {
      return undefined;
    }

    const deck = new Reveal(deckElementRef.current, {
      hash: true,
      center: false,
      controls: true,
      controlsTutorial: true,
      controlsLayout: 'bottom-right',
      navigationMode: 'default',
      progress: true,
      slideNumber: 'c/t',
      touch: true,
      keyboard: true,
      overview: true,
      transition: 'slide',
      ...getResponsiveDeckSize(),
      margin: 0.035,
      minScale: 0.2,
      maxScale: 1.0,
    });

    revealInstanceRef.current = deck;

    let layoutTimer;

    const updateLayout = () => {
      window.clearTimeout(layoutTimer);

      layoutTimer = window.setTimeout(() => {
        const size = getResponsiveDeckSize();
        deck.configure(size);
        deck.layout();
      }, 40);
    };

    const scheduleLayoutPasses = () => {
      updateLayout();
      window.requestAnimationFrame(updateLayout);
      window.setTimeout(updateLayout, 180);
      window.setTimeout(updateLayout, 500);
    };

    deck
      .initialize()
      .then(() => {
        window.RevealDeck = deck;

        deck.on('ready', scheduleLayoutPasses);
        deck.on('slidechanged', scheduleLayoutPasses);
        deck.on('resize', scheduleLayoutPasses);

        document.fonts?.ready.then(scheduleLayoutPasses);

        deckElementRef.current
          ?.querySelectorAll('img')
          .forEach((image) => {
            if (!image.complete) {
              image.addEventListener('load', scheduleLayoutPasses, { once: true });
            }
          });

        scheduleLayoutPasses();
      })
      .catch((error) => {
        console.error('Reveal.js initialization failed:', error);
      });

    window.addEventListener('load', scheduleLayoutPasses, { passive: true });
    window.addEventListener('resize', scheduleLayoutPasses, { passive: true });
    window.addEventListener('orientationchange', scheduleLayoutPasses, { passive: true });

    return () => {
      window.clearTimeout(layoutTimer);
      window.removeEventListener('load', scheduleLayoutPasses);
      window.removeEventListener('resize', scheduleLayoutPasses);
      window.removeEventListener('orientationchange', scheduleLayoutPasses);
      deck.off('ready', scheduleLayoutPasses);
      deck.off('slidechanged', scheduleLayoutPasses);
      deck.off('resize', scheduleLayoutPasses);
      delete window.RevealDeck;

      if (revealInstanceRef.current) {
        try {
          revealInstanceRef.current.destroy();
        } catch (error) {
          console.warn('Reveal.js cleanup failed:', error);
        }

        revealInstanceRef.current = null;
      }
    };
  }, []);

  return (
    <div className="presentation-app">
      <div ref={deckElementRef} className="reveal">
        <div className="slides">
        {/* ==================================================================
            Cover letter
            ================================================================== */}
        <section data-menu-title="Cover Letter">
          <section className="hero">
            <div className="eyebrow">
              INTERACTIVE CV · USE ← → FOR SECTIONS · ↓ FOR DETAILS
            </div>

            <div className="hero-grid">
              <div>
                <p className="hello">Hello, I’m</p>
                <h1>
                  Ahmed
                  <br />
                  <span>Mohamed</span>
                </h1>
                <h2>Automotive Technical Leader</h2>
                <p className="lead">
                  15+ years turning complex embedded systems, vehicle networks
                  and cybersecurity requirements into production-ready automotive platforms.
                </p>
                <div className="pill-row">
                  <span>Embedded Systems</span>
                  <span>Cybersecurity</span>
                  <span>Team Leadership</span>
                  <span>Automation</span>
                </div>
              </div>

              <aside className="hero-profile" aria-label="Profile summary">
                <div className="profile-photo-frame">
                  <img
                    className="profile-photo"
                    src={myPhoto}
                    alt="Ahmed Mohamed standing outdoors"
                  />
                </div>

                <div className="profile-summary">
                  <img
                    className="profile-signature-logo"
                    src={ahmedLogo}
                    alt="Ahmed Mohamed personal logo"
                  />
                  <p className="profile-location">Freising, Germany</p>
                  <p>
                    Automotive technical leader focused on embedded systems,
                    vehicle networks, cybersecurity and cross-functional delivery.
                  </p>
                  <p className="profile-status">
                    Available for technical leadership, product security and
                    domain ownership roles
                  </p>
                </div>
              </aside>
            </div>

            <div className="down-hint">↓ Read cover letter</div>
          </section>

          <section>
            <div className="section-frame two-col">
              <div>
                <p className="kicker">COVER LETTER</p>
                <h2>
                  Technical credibility.
                  <br />
                  Operational leadership.
                </h2>
              </div>

              <div className="letter">
                <p>Dear Hiring Team,</p>
                <p>
                  I bring more than 15 years of automotive embedded-systems
                  experience, combining hands-on engineering depth with
                  cross-functional leadership. At BMW, I own network and
                  security scope across Linux-based infotainment, cluster and
                  rear-seat systems, coordinating architecture, implementation,
                  validation and supplier delivery through series release.
                </p>
                <p>
                  My background spans secure in-vehicle communication, AUTOSAR,
                  diagnostics, ePowertrain, infotainment, automatic parking,
                  compliance, budgets and distributed team development.
                </p>
                <p className="signature">Ahmed Mohamed</p>
              </div>
            </div>
          </section>
        </section>

        {/* ==================================================================
            Work experience
            ================================================================== */}
        <section data-menu-title="Work Experience">
          <section>
            <Timeline active={-1} />
            <div className="section-frame intro">
              <p className="kicker">WORK EXPERIENCE</p>
              <h2>
                From embedded code
                <br />
                to domain ownership.
              </h2>
              <p className="lead">
                Move down to explore each role. The timeline remains visible
                and highlights the active period.
              </p>
              <div className="metrics">
                <div><b>15+</b><span>years</span></div>
                <div><b>5</b><span>teams in parallel</span></div>
                <div><b>8+</b><span>OEM programs</span></div>
                <div><b>ICE + EV</b><span>platforms</span></div>
              </div>
            </div>
          </section>

          {roles.map((role, index) => (
            <section key={role.id}>
              <Timeline active={index} />
              <div className="section-frame role-layout">
                <BrandMark role={role} />
                <div>
                  <p className="kicker">{role.period} · {role.company}</p>
                  <h2>{role.title}</h2>
                  <ul>
                    {role.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>
          ))}
        </section>

        {/* ==================================================================
            Hobby projects
            ================================================================== */}
        <section data-menu-title="Hobby Projects">
          <section>
            <div className="section-frame intro">
              <p className="kicker">HOBBY PROJECTS</p>
              <h2>Engineering beyond<br />the vehicle.</h2>
              <p className="lead">
                A space for systems thinking, AI, embedded technology and real-world impact.
              </p>
              <div className="down-hint">↓ Explore the agriculture drone platform</div>
            </div>
          </section>

          <section>
            <div className="section-frame project-layout">
              <div className="project-visual" aria-hidden="true">
                <div className="orbit orbit-one" />
                <div className="orbit orbit-two" />
                <div className="drone">✦</div>
                <span>EDGE AI</span>
                <span>RGB + MULTISPECTRAL</span>
                <span>GEOFENCED MISSIONS</span>
              </div>

              <div>
                <p className="kicker">SMART AGRICULTURE DRONE PLATFORM</p>
                <h2>Autonomous crop intelligence.</h2>
                <ul>
                  <li>End-to-end drone, embedded software, communications and crowdsourcing architecture.</li>
                  <li>Autonomous surveying missions, route optimization and geofenced operations.</li>
                  <li>AI image processing for irrigation issues, crop stress and disease indicators.</li>
                  <li>Digital farm dashboard with health maps, recommendations and automated alerts.</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <div className="section-frame two-col">
              <div>
                <p className="kicker">AUTOMATION MINDSET</p>
                <h2>Do the same work<br />in a better way.</h2>
              </div>
              <div>
                <blockquote>
                  “Knowledge and intention are what you need to transform the
                  world into a better, easier place.”
                </blockquote>
                <p>
                  Examples include trace-analysis tooling, Jira integration,
                  requirement and test generation, KPI matrices, automated
                  status reporting, network catalog integration and billing workflows.
                </p>
              </div>
            </div>
          </section>
        </section>

        {/* ==================================================================
            Education
            ================================================================== */}
        <section data-menu-title="Education">
          <section>
            <div className="section-frame intro">
              <p className="kicker">EDUCATION & RESEARCH</p>
              <h2>Security, engineering<br />and business.</h2>
              <p className="lead">
                Technical specialization supported by research and business-management education.
              </p>
              <div className="down-hint">↓ View qualifications</div>
            </div>
          </section>

          <section>
            <div className="section-frame education">
              {educationItems.map((item) => (
                <EducationCard key={`${item.year}-${item.institution}`} item={item} />
              ))}
            </div>
          </section>

          <section>
            <div className="section-frame">
              <p className="kicker">SELECTED RESEARCH</p>
              <h2>Automotive network security.</h2>
              <div className="publication-list">
                <div>
                  <b>01</b>
                  <span>A Lightweight X-Authentication Protocol over Automotive Gateway</span>
                </div>
                <div>
                  <b>02</b>
                  <span>Lightweight Authentication Protocol Deployment over FlexRay</span>
                </div>
                <div>
                  <b>03</b>
                  <span>Replay Attack on Lightweight CAN Authentication Protocol</span>
                </div>
              </div>
            </div>
          </section>
        </section>

        {/* ==================================================================
            Personal information
            ================================================================== */}
        <section data-menu-title="Personal Info">
          <section>
            <div className="section-frame intro">
              <p className="kicker">PERSONAL INFO</p>
              <h2>Let’s build secure,<br />production-ready systems.</h2>
              <p className="lead">
                Move down for skills, languages and contact information.
              </p>
              <div className="down-hint">↓ Details</div>
            </div>
          </section>

          <section>
            <div className="section-frame skills">
              <div>
                <p className="kicker">CORE STRENGTHS</p>
                <h2>Technical breadth.<br />Leadership depth.</h2>
              </div>
              <div className="skill-cloud">
                <span>AUTOSAR</span>
                <span>Embedded C/C++</span>
                <span>Python</span>
                <span>Linux</span>
                <span>CAN · LIN · FlexRay</span>
                <span>Automotive Ethernet</span>
                <span>Cybersecurity</span>
                <span>ISO 21434</span>
                <span>ISO 26262</span>
                <span>ASPICE</span>
                <span>Diagnostics</span>
                <span>Budget Management</span>
                <span>Team Leadership</span>
                <span>ReactJS</span>
              </div>
            </div>
          </section>

          <section>
            <div className="section-frame contact">
              <div>
                <p className="kicker">CONTACT</p>
                <h2>Ahmed Mohamed</h2>
                <p>Automotive Technical Leader</p>
              </div>
              <div className="contact-card">
                <a href="mailto:ahmd.refat@gmail.com">ahmd.refat@gmail.com</a>
                <a href="tel:+49015160148057">+49 0151 60148057</a>
                <p>Freising, Germany</p>
                <p>Arabic · Native</p>
                <p>English · Advanced</p>
                <p>German · Intermediate</p>
              </div>
            </div>
          </section>
        </section>
        </div>
      </div>

      <MobileNavigation />
    </div>
  );
}

const rootElement = document.getElementById('root');

if (!rootElement) {
  throw new Error('React root element was not found in index.html.');
}

createRoot(rootElement).render(<App />);
