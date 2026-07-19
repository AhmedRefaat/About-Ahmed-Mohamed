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
import peugeotLogo from './assets/peugeot-logo.svg';
import fordLogo from './assets/ford-logo.svg';
import volkswagenLogo from './assets/vw-logo.svg';
import teslaLogo from './assets/tesla-logo.svg';
import fcaLogo from './assets/fca-logo.png';
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
    highlights: [
      {
        label: 'System scope',
        text: 'Linux-based Infotainment, Kombi and Rear Seat Entertainment: Ethernet, SOME/IP, IPsec, MACsec, CAN/Ethernet Signal Gateway, diagnostics, firewall and SELinux.',
      },
      {
        label: 'Domain & team leadership',
        text: 'Owned network and security scope end-to-end and coordinated up to five cross-functional teams across multiple vehicle generations.',
      },
      {
        label: 'Lifecycle delivery',
        text: 'Led delivery from core requirements and supplier specifications through software integration, validation and SOP release.',
      },
      {
        label: 'Security features',
        text: 'Drove security from proof of concept and architecture alignment through implementation, milestone control and series-production rollout.',
      },
      {
        label: 'Compliance',
        text: 'Tracked legal and homologation standards, aligned implementation timelines and coordinated stakeholders for market readiness.',
      },
      {
        label: 'Budget & reporting',
        text: 'Partnered with management on budget, effort and cost planning, staffing, milestones, after-sales analysis and OTA readiness.',
      },
      {
        label: 'Hiring',
        text: 'Owned job profiles, screening, technical interviews, hiring decisions and structured onboarding.',
      },
      {
        label: 'Site expansion — India',
        text: 'Established the domain at a new site, including team setup, budget planning and remote knowledge transfer.',
      },
      {
        label: 'Validation',
        text: 'Defined stability, regression and overnight strategies across ECUs and software branches, ensuring traceability and release readiness.',
      },
      {
        label: 'Process governance',
        text: 'Standardized integration, validation, debugging and release workflows; aligned teams and suppliers on risks, rollout and financial follow-up.',
      },
    ],
  },
  {
    id: 'kpit',
    period: '2019–2022',
    company: 'KPIT / MicroFuzzy',
    title: 'Two Technical Leadership Roles',
    logoSrc: kpitLogo,
    logoText: 'KPIT',
    logoAlt: 'KPIT logo',
    logoVariant: 'wide',
    accent: '#ef6c00',
    sections: [
      {
        period: '01/2022–11/2022',
        title: 'T. Project Leader — BMW IP-Next (ADAS)',
        bullets: [
          'Led scope, release planning, work allocation and reviews for a distributed team across Germany, Egypt and India.',
          'Owned budget planning, revenue tracking, billing, purchasing, effort estimation and customer status reporting.',
          'Supported AUTOSAR Ethernet and diagnostics modules for an ASIL-D Infineon AURIX controller.',
          'Created automation for network-catalog integration, ASPICE KPIs, team status and billing; delivered Automotive Ethernet training.',
        ],
      },
      {
        period: '04/2019–12/2021',
        title: 'AUTOSAR Technical Leader — ePowertrain',
        bullets: [
          'Led BSW, diagnostics and requirements delivery for EDU, inverter, cooler and onboard-charger controllers for JLR and Volkswagen programs.',
          'Performed Sys.1/Sys.2 analysis, supported SWE.1–SWE.3 work and contributed to FMEA and system-safety reviews.',
          'Configured DEM, DCM, COM and PduR over FlexRay, plus CSM/SecOC security and multicore partitioning.',
          'Served as ASPICE officer, Scrum Master and UDS trainer; automated requirements, test cases, coverage, KPI and status reporting.',
        ],
      },
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
    experienceAreas: [
      {
        title: 'Interior Control',
        summary: 'Body and comfort functions across global OEM programs.',
        oems: [
          { name: 'BMW', src: bmwLogo },
          { name: 'Volkswagen', src: volkswagenLogo },
          { name: 'FCA', src: fcaLogo },
          { name: 'Peugeot', src: peugeotLogo },
          { name: 'Ford', src: fordLogo },
        ],
        details: [
          'Developed embedded C/C++ software, AUTOSAR BSW modules and complex drivers for body and interior-control ECUs.',
          'Supported programs for BMW, Volkswagen, FCA, PSA, Renault-Nissan and Ford.',
          'Created Python-based software-component generators and reviewed MISRA-C, ASPICE and integration quality.',
        ],
      },
      {
        title: 'Automatic Parking Systems',
        summary: 'Ultrasonic parking functions from development through vehicle validation.',
        oems: [{ name: 'Tesla', src: teslaLogo }],
        details: [
          'Led Tesla ultrasonic automatic-parking feature delivery and end-to-end validation.',
          'Integrated ultrasonic sensing, parking logic and diagnostics across ECU and vehicle environments.',
          'Coordinated debugging, test execution, issue resolution and release readiness with distributed stakeholders.',
        ],
      },
      {
        title: 'ADAS Systems',
        summary: 'Driver-assistance software, integration and quality governance.',
        oems: [],
        details: [
          'Contributed to automatic-parking and driver-assistance functions using embedded software and vehicle-network interfaces.',
          'Supported system integration, regression testing and on-vehicle validation across development milestones.',
          'Served as Scrum Master and contributed to technical reviews, process compliance and continuous improvement.',
        ],
      },
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

function formatTimelinePeriod(period) {
  if (period.includes('Now')) {
    return 'Present — 2022';
  }

  const years = period.split('–');
  return years.length === 2 ? `${years[1]} — ${years[0]}` : period;
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
          style={{ '--role-color': role.accent }}
          onClick={() => window.RevealDeck?.slide(1, index + 1)}
          aria-label={`Open ${role.company}, ${role.period}`}
        >
          <span className="timeline-company">
            <Logo
              src={role.logoSrc}
              alt=""
              fallback={role.logoText}
              className="timeline-logo"
              variant={role.logoVariant}
            />
          </span>
          <span
            className="dot"
            style={{ '--role-color': role.accent }}
            aria-hidden="true"
          />
          <span className="time">{formatTimelinePeriod(role.period)}</span>
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

/** Interactive Valeo explorer: one focused area, two compact previews. */
function ValeoExperienceExplorer({ role }) {
  // null = overview mode: all three cards share one horizontal row.
  const [activeIndex, setActiveIndex] = React.useState(null);
  const activeIndexRef = useRef(null);

  const commitActiveIndex = (nextIndex) => {
    activeIndexRef.current = nextIndex;
    setActiveIndex(nextIndex);
  };

  useEffect(() => {
    const lastIndex = role.experienceAreas.length - 1;
    const api = {
      // Return true when Valeo consumes the command. Return false at the
      // boundary so Reveal.js can continue to Nile University or Marelli.
      next: () => {
        const current = activeIndexRef.current;
        if (current === null) {
          commitActiveIndex(0);
          return true;
        }
        if (current < lastIndex) {
          commitActiveIndex(current + 1);
          return true;
        }
        commitActiveIndex(null);
        return false;
      },
      previous: () => {
        const current = activeIndexRef.current;
        if (current === null) {
          return false;
        }
        if (current > 0) {
          commitActiveIndex(current - 1);
          return true;
        }
        commitActiveIndex(null);
        return false;
      },
      reset: () => {
        commitActiveIndex(null);
        return true;
      },
    };

    const handleArrowKeys = (event) => {
      const deck = window.RevealDeck;
      const indices = deck?.getIndices();
      const isValeoSlide = indices?.h === 1 && indices?.v === 4;

      if (!isValeoSlide) {
        return;
      }

      if (event.key === 'ArrowDown') {
        const consumed = api.next();
        if (consumed) {
          event.preventDefault();
          event.stopImmediatePropagation();
        }
      } else if (event.key === 'ArrowUp') {
        const consumed = api.previous();
        if (consumed) {
          event.preventDefault();
          event.stopImmediatePropagation();
        }
      } else if (event.key === 'Escape') {
        event.preventDefault();
        event.stopImmediatePropagation();
        api.reset();
      }
    };

    window.ValeoExperience = api;
    window.addEventListener('keydown', handleArrowKeys, true);

    return () => {
      window.removeEventListener('keydown', handleArrowKeys, true);
      if (window.ValeoExperience === api) {
        delete window.ValeoExperience;
      }
    };
  }, [role.experienceAreas.length]);

  const hasFocus = activeIndex !== null;

  return (
    <div className={`role-content role-content-valeo ${hasFocus ? 'has-focus' : 'is-overview'}`}>
      <p className="kicker">{role.period} · {role.company}</p>
      <h2>{role.title}</h2>
      <p className="valeo-instruction">
        ↓ / ↑ cycles through Interior Control, Automatic Parking, ADAS and the complete overview. Select the focused card or press Esc to close it.
      </p>

      <div className="valeo-experience-stage">
        {role.experienceAreas.map((area, index) => {
          const isActive = index === activeIndex;
          const isPreview = hasFocus && !isActive;
          const previewIndices = hasFocus
            ? role.experienceAreas.map((_, itemIndex) => itemIndex).filter((itemIndex) => itemIndex !== activeIndex)
            : [];
          const previewSlot = isPreview ? previewIndices.indexOf(index) : -1;

          const selectCard = () => {
            // Selecting the focused card returns to the three-card overview.
            commitActiveIndex(activeIndexRef.current === index ? null : index);
          };

          return (
            <button
              type="button"
              className={`valeo-experience-card ${isActive ? 'is-active' : ''} ${isPreview ? 'is-preview' : ''}`}
              style={{
                '--overview-index': index,
                '--preview-slot': previewSlot,
              }}
              onClick={selectCard}
              key={area.title}
              aria-expanded={isActive}
              aria-label={`${area.title}. ${area.summary}${isActive ? '. Select again to return to overview.' : ''}`}
            >
              <span className="valeo-card-copy">
                <strong>{area.title}</strong>
                <span className="valeo-summary">{area.summary}</span>
              </span>

              <span className="valeo-focus-content" aria-hidden={!isActive}>
                <ul>
                  {area.details.map((detail) => (
                    <li key={detail}>{detail}</li>
                  ))}
                </ul>

                {area.oems.length > 0 && (
                  <span className="oem-logo-row" aria-label="Related OEM programs">
                    {area.oems.map((oem) => (
                      <span className="oem-logo-tile" key={oem.name} title={oem.name}>
                        <img src={oem.src} alt={`${oem.name} logo`} />
                        <span>{oem.name}</span>
                      </span>
                    ))}
                  </span>
                )}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}

/** Role-specific content keeps dense BMW and KPIT information readable. */
function RoleDetails({ role }) {
  if (role.id === 'bmw') {
    return (
      <div className="role-content role-content-bmw">
        <p className="kicker">{role.period} · {role.company}</p>
        <h2>{role.title}</h2>
        <div className="bmw-highlight-grid">
          {role.highlights.map((item) => (
            <article className="experience-highlight" key={item.label}>
              <h3>{item.label}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    );
  }

  if (role.id === 'kpit') {
    return (
      <div className="role-content role-content-kpit">
        <p className="kicker">{role.period} · {role.company}</p>
        <h2>{role.title}</h2>
        <div className="kpit-sections">
          {role.sections.map((section) => (
            <article className="kpit-role-card" key={section.title}>
              <p className="role-period">{section.period}</p>
              <h3>{section.title}</h3>
              <ul>
                {section.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    );
  }

  if (role.id === 'valeo') {
    return <ValeoExperienceExplorer role={role} />;
  }

  return (
    <div className="role-content">
      <p className="kicker">{role.period} · {role.company}</p>
      <h2>{role.title}</h2>
      <ul>
        {role.bullets.map((bullet) => (
          <li key={bullet}>{bullet}</li>
        ))}
      </ul>
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
const sectionIndexItems = [
  { label: 'Cover', shortLabel: 'Cover' },
  { label: 'Work Experience', shortLabel: 'Work' },
  { label: 'Hobby Projects', shortLabel: 'Projects' },
  { label: 'Education & Research', shortLabel: 'Education' },
  { label: 'Personal Info', shortLabel: 'Personal' },
];

/** Persistent map that shows which major CV partition is currently active. */
function SectionIndex() {
  const [activeSection, setActiveSection] = React.useState(0);
  const [activeDetail, setActiveDetail] = React.useState(0);

  useEffect(() => {
    let deck;
    let retryTimer;

    const sync = () => {
      const indices = deck?.getIndices() || { h: 0, v: 0 };
      setActiveSection(indices.h || 0);
      setActiveDetail(indices.v || 0);
    };

    const bind = () => {
      deck = window.RevealDeck;
      if (!deck) {
        retryTimer = window.setTimeout(bind, 100);
        return;
      }
      deck.on('slidechanged', sync);
      sync();
    };

    bind();
    return () => {
      window.clearTimeout(retryTimer);
      deck?.off('slidechanged', sync);
    };
  }, []);

  return (
    <nav className="section-index" aria-label="CV section index">
      <span className="section-index-title">CV MAP</span>
      <div className="section-index-track">
        {sectionIndexItems.map((item, index) => (
          <button
            type="button"
            className={activeSection === index ? 'is-active' : ''}
            onClick={() => window.RevealDeck?.slide(index, 0)}
            aria-current={activeSection === index ? 'step' : undefined}
            aria-label={`Open ${item.label}`}
            key={item.label}
          >
            <span className="section-index-dot" aria-hidden="true" />
            <span className="section-index-label">{item.label}</span>
            <span className="section-index-short">{item.shortLabel}</span>
            {activeSection === index && activeDetail > 0 && (
              <span className="section-index-detail">{activeDetail + 1}</span>
            )}
          </button>
        ))}
      </div>
    </nav>
  );
}

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

    const isValeoSlide = h === 1 && v === 4;

    if (isValeoSlide && direction === 'down' && window.ValeoExperience) {
      const consumed = window.ValeoExperience.next();
      if (consumed) return;
    }

    if (isValeoSlide && direction === 'up' && window.ValeoExperience) {
      const consumed = window.ValeoExperience.previous();
      if (consumed) return;
    }

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
                <h1>
                  Ahmed
                  <br />
                  <span>Mohamed</span>
                </h1>
                <h2>Automotive Technical Leader</h2>
                <p className="lead">
                  15+ years delivering production-ready automotive platforms across embedded software,
                  vehicle networks and cybersecurity—while building automation tools and AI-enabled
                  workflows that improve efficiency, quality and daily team execution.
                </p>
                <div className="pill-row" aria-label="Core technologies and protocols">
                  <span>AUTOSAR</span>
                  <span>CAN · LIN · FlexRay</span>
                  <span>Automotive Ethernet</span>
                  <span>SOME/IP · DoIP · UDS</span>
                  <span>IPsec · MACsec · SecOC</span>
                  <span>Automation Tooling</span>
                  <span>AI-enabled Team Workflows</span>
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
                  <p className="profile-location">Munich, Germany</p>
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
              <p className="kicker work-experience-label">WORK EXPERIENCE</p>
              <h2>
                From Embedded SW Engineer
                <br />
                to Domain Owner
              </h2>
              <p className="lead">
                Move down to explore each role. The timeline remains visible
                and highlights the active period.
              </p>
              <div className="metrics">
                <div><b>15+</b><span>years</span></div>
                <div><b>5</b><span>teams in parallel</span></div>
                <div><b>8+</b><span>OEM programs</span></div>
                <div className="domain-metric"><b>6 Domains</b><span>Parking · Infotainment · PHEV · BEV · EDU · Interior Control</span></div>
              </div>
            </div>
          </section>

          {roles.map((role, index) => (
            <section key={role.id}>
              <Timeline active={index} />
              <div className="section-frame role-layout">
                <BrandMark role={role} />
                <RoleDetails role={role} />
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
              <h2>Engineering, security<br />then business.</h2>
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
            <div className="section-frame publication-slide">
              <div className="publication-header">
                <p className="kicker">MY RESEARCH PUBLICATIONS</p>
                <h2>Unified automotive security architecture.</h2>
                <p className="publication-mission">
                  My research aimed to establish a common, protocol-independent authentication
                  and trust model across the heterogeneous networking technologies used in vehicles.
                </p>
              </div>

              <div className="security-protocol-map" aria-label="Unified security protocol network map">
                <div className="security-map-hub">Unified Security Protocol</div>
                <div className="security-map-node security-map-can">CAN</div>
                <div className="security-map-node security-map-flexray">FlexRay</div>
                <div className="security-map-node security-map-ethernet">Ethernet</div>
                <div className="security-map-node security-map-gateway">Gateway</div>
                <span className="security-link link-can" aria-hidden="true" />
                <span className="security-link link-flexray" aria-hidden="true" />
                <span className="security-link link-ethernet" aria-hidden="true" />
                <span className="security-link link-gateway" aria-hidden="true" />
              </div>

              <div className="publication-cards">
                <article>
                  <b>01</b>
                  <h3>A Lightweight X-Authentication Protocol over Automotive Gateway</h3>
                  <p>Introduced a reusable security framework intended to bridge different automotive networks and suppliers.</p>
                </article>
                <article>
                  <b>02</b>
                  <h3>Lightweight Authentication Protocol Deployment over FlexRay</h3>
                  <p>Demonstrated the deployment requirements, feasibility and communication quality of the common approach on FlexRay.</p>
                </article>
                <article>
                  <b>03</b>
                  <h3>Replay Attack on Lightweight CAN Authentication Protocol</h3>
                  <p>Evaluated security strengths and weaknesses under replay attacks and proposed a stronger solution framework.</p>
                </article>
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
            <div className="section-frame technical-breadth-slide">
              <div className="technical-breadth-heading">
                <p className="kicker">TECHNICAL BREADTH</p>
                <h2>Engineering, leadership<br />and intelligent automation.</h2>
              </div>

              <div className="skill-mindmap" aria-label="Technical breadth mind map">
                <div className="mindmap-center">
                  <strong>Connected Expertise</strong>
                  <span>Engineering · Security · Delivery</span>
                </div>

                <article className="mindmap-node node-networks">
                  <h3>Automotive Networks</h3>
                  <p>CAN · LIN · FlexRay · Ethernet · SOME/IP · DoIP · UDS · CANoe · CANape · ASAP2 · CAPL · CANalyzer</p>
                </article>

                <article className="mindmap-node node-autosar">
                  <h3>AUTOSAR & Toolchains</h3>
                  <p>Classic AUTOSAR · BSW · DEM · DCM · COM · PduR · CSM · SecOC · Vector · Mentor · Electrobit</p>
                </article>

                <article className="mindmap-node node-security">
                  <h3>Cybersecurity & Safety</h3>
                  <p>ISO 21434 · ISO 26262 · Threat Modeling · Secure Boot · Secure Flashing · IPsec · MACsec · SELinux · Firewall · E2E</p>
                </article>

                <article className="mindmap-node node-software">
                  <h3>Software & Platforms</h3>
                  <p>Embedded C · C++ · Python · CAPL · M-Script · Bash · C# · Ruby on Rails · SQLite · ReactJS · Bazel · Embedded Linux · RTOS</p>
                </article>

                <article className="mindmap-node node-quality">
                  <h3>Quality & Validation</h3>
                  <p>ASPICE · MISRA-C · Requirements · Unit · Integration · Regression · Release Testing · FMEA · Traceability</p>
                </article>

                <article className="mindmap-node node-delivery">
                  <h3>Leadership & Delivery</h3>
                  <p>Domain Ownership · Project Management · Budget · Hiring · Supplier Management · Team Building · Agile/Scrum · Stakeholders · Time Management</p>
                </article>

                <article className="mindmap-node node-automation">
                  <h3>AI & Automation</h3>
                  <p>AI Trace Analysis · Root-Cause Support · Jira Automation · Requirements · Test Cases · Coverage · KPI · Reporting · Integration · Validation</p>
                </article>

                <article className="mindmap-node node-domains">
                  <h3>Vehicle Domains</h3>
                  <p>Infotainment · Telematics · ePowertrain · EDU · Inverter · Onboard Charger · Automatic Parking · Climate · Adaptive Cruise Control</p>
                </article>

                <article className="mindmap-node node-collaboration">
                  <h3>Collaboration & Tools</h3>
                  <p>Jira · DOORS · PTC Integrity · GitHub · Bitbucket · Serena · SVN · SharePoint · FileZilla · RTC · Teaching · Presentation · Business Writing</p>
                </article>
              </div>
            </div>
          </section>

          <section>
            <div className="section-frame contact contact-slide">
              <div className="contact-intro">
                <p className="kicker">PERSONAL & CONTACT INFORMATION</p>
                <h2>Ahmed Mohamed</h2>
                <p>Automotive Technical Leader</p>
                <p className="contact-closing">Let’s build secure, intelligent and production-ready automotive systems.</p>
              </div>

              <dl className="contact-card contact-details">
                <div>
                  <dt>Email</dt>
                  <dd><a href="mailto:ahmd.refat@gmail.com">ahmd.refat@gmail.com</a></dd>
                </div>
                <div>
                  <dt>Tel</dt>
                  <dd><a href="tel:+49015160148057">+49 0151 60148057</a></dd>
                </div>
                <div>
                  <dt>Location</dt>
                  <dd>Munich, Germany</dd>
                </div>
                <div>
                  <dt>Nationality</dt>
                  <dd>German</dd>
                </div>
                <div>
                  <dt>Languages</dt>
                  <dd>Arabic — Native<br />English — Advanced<br />German — Intermediate</dd>
                </div>
                <div>
                  <dt>Driving License</dt>
                  <dd>B · BE<br />BMW Professional Test Driver</dd>
                </div>
              </dl>
            </div>
          </section>
        </section>
        </div>
      </div>

      <SectionIndex />
      <MobileNavigation />
    </div>
  );
}

const rootElement = document.getElementById('root');

if (!rootElement) {
  throw new Error('React root element was not found in index.html.');
}

createRoot(rootElement).render(<App />);
