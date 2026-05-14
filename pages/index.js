'use client';
import { useEffect, useRef, useState } from 'react';
import Head from 'next/head';

import SplashScreen from '@/components/SplashScreen';
import ScrollText from '@/components/ScrollText';
import Navbar from '@/components/Navbar';
import MenuOverlay from '@/components/MenuOverlay';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import SkillsSection from '@/components/SkillsSection';
import WorkSection from '@/components/WorkSection';
import CertificatesSection from '@/components/CertificatesSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import ProjectModal from '@/components/ProjectModal';
import CertificateModal from '@/components/CertificateModal';
import AllCertificatesModal from '@/components/AllCertificatesModal';

import { projects } from '@/data/projects';
import { certificates } from '@/data/certificates';

export default function Home() {
  // ── Splash ──────────────────────────────────────────────
  const [splashDone, setSplashDone] = useState(false);

  useEffect(() => {
    const t1 = setTimeout(() => setSplashDone(true), 2500);
    return () => clearTimeout(t1);
  }, []);

  // ── Menu ─────────────────────────────────────────────────
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('home');

  const toggleMenu = () => {
    setMenuOpen((prev) => {
      document.body.style.overflow = prev ? 'auto' : 'hidden';
      return !prev;
    });
    // toggle active class on hamburger
    const toggle = document.getElementById('menuToggle');
    if (toggle) toggle.classList.toggle('active');
  };

  const menuNavigate = (sectionId) => {
    setMenuOpen(false);
    setActiveLink(sectionId);
    document.body.style.overflow = 'auto';
    const toggle = document.getElementById('menuToggle');
    if (toggle) toggle.classList.remove('active');
    scrollToSection(sectionId);
  };

  // ── Scroll helpers ───────────────────────────────────────
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (!el) return;
    const offset = 100;
    const top = el.getBoundingClientRect().top + window.pageYOffset - offset;
    window.scrollTo({ top, behavior: 'smooth' });
  };

  // ── Custom Cursor ────────────────────────────────────────
  const cursorRef = useRef(null);
  const followerRef = useRef(null);

  useEffect(() => {
    if (window.innerWidth <= 768) return;

    let mouseX = 0, mouseY = 0;
    let cursorX = 0, cursorY = 0;
    let raf;

    const onMove = (e) => { mouseX = e.clientX; mouseY = e.clientY; };
    document.addEventListener('mousemove', onMove);

    const animate = () => {
      cursorX += (mouseX - cursorX) * 0.2;
      cursorY += (mouseY - cursorY) * 0.2;
      if (cursorRef.current) {
        cursorRef.current.style.left = mouseX + 'px';
        cursorRef.current.style.top  = mouseY + 'px';
      }
      if (followerRef.current) {
        followerRef.current.style.left = cursorX + 'px';
        followerRef.current.style.top  = cursorY + 'px';
      }
      raf = requestAnimationFrame(animate);
    };
    raf = requestAnimationFrame(animate);

    return () => {
      document.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  // cursor scale on hover
  useEffect(() => {
    const enter = () => {
      if (cursorRef.current) { cursorRef.current.style.transform = 'translate(-50%,-50%) scale(1.5)'; cursorRef.current.style.borderColor = '#f7931e'; }
      if (followerRef.current) followerRef.current.style.transform = 'translate(-50%,-50%) scale(1.5)';
    };
    const leave = () => {
      if (cursorRef.current) { cursorRef.current.style.transform = 'translate(-50%,-50%) scale(1)'; cursorRef.current.style.borderColor = '#ff6b35'; }
      if (followerRef.current) followerRef.current.style.transform = 'translate(-50%,-50%) scale(1)';
    };
    const selectors = 'a, button, .project-card, .skill-card, .certificate-card, .menu-toggle';
    const attach = () => {
      document.querySelectorAll(selectors).forEach((el) => {
        el.addEventListener('mouseenter', enter);
        el.addEventListener('mouseleave', leave);
      });
    };
    attach();
    // Re-attach when modals open
    const obs = new MutationObserver(attach);
    obs.observe(document.body, { childList: true, subtree: true });
    return () => obs.disconnect();
  }, []);

  // ── Scroll Reveal ────────────────────────────────────────
  useEffect(() => {
    const reveal = () => {
      const wh = window.innerHeight;
      const point = 150;
      document.querySelectorAll('.reveal, .skill-card, .project-card, .certificate-card').forEach((el) => {
        if (el.getBoundingClientRect().top < wh - point) el.classList.add('active');
      });
    };

    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => { reveal(); ticking = false; });
        ticking = true;
      }
    };
    window.addEventListener('scroll', onScroll);
    reveal();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // ── Parallax ─────────────────────────────────────────────
  useEffect(() => {
    const onScroll = () => {
      const scrolled = window.pageYOffset;
      document.querySelectorAll('.parallax-section').forEach((section) => {
        const top = section.offsetTop;
        const h   = section.offsetHeight;
        if (scrolled > top - window.innerHeight && scrolled < top + h) {
          section.style.transform = `translateY(${(scrolled - top) * 0.05}px)`;
        }
      });
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // ── Modals: Project ──────────────────────────────────────
  const [activeProject, setActiveProject] = useState(null);

  const openProjectModal = (id) => {
    setActiveProject(projects[id]);
    document.body.style.overflow = 'hidden';
  };
  const closeProjectModal = () => {
    setActiveProject(null);
    document.body.style.overflow = 'auto';
  };

  // ── Modals: Certificate ──────────────────────────────────
  const [activeCert, setActiveCert]         = useState(null);
  const [certFromExtra, setCertFromExtra]   = useState(false);
  const [allCertsOpen, setAllCertsOpen]     = useState(false);

  const openCertModal = (id) => {
    setActiveCert(certificates[id]);
    setCertFromExtra(false);
    document.body.style.overflow = 'hidden';
  };
  const closeCertModal = () => {
    setActiveCert(null);
    document.body.style.overflow = 'auto';
  };
  const openAllCerts = () => {
    setAllCertsOpen(true);
    document.body.style.overflow = 'hidden';
  };
  const closeAllCerts = () => {
    setAllCertsOpen(false);
    document.body.style.overflow = 'auto';
  };
  const openExtraCert = (cert) => {
    setAllCertsOpen(false);
    setActiveCert(cert);
    setCertFromExtra(true);
    document.body.style.overflow = 'hidden';
  };
  const backToAll = () => {
    setActiveCert(null);
    setCertFromExtra(false);
    openAllCerts();
  };

  // ── Anchor hash links ────────────────────────────────────
  useEffect(() => {
    const handler = (e) => {
      const a = e.target.closest('a[href^="#"]');
      if (!a) return;
      const href = a.getAttribute('href');
      if (href !== '#' && href.length > 1) {
        e.preventDefault();
        scrollToSection(href.substring(1));
      }
    };
    document.addEventListener('click', handler);
    return () => document.removeEventListener('click', handler);
  }, []);

  return (
    <>
      <Head>
        <title>Hemanth - Full Stack Developer</title>
        <meta name="description" content="Hemanth's portfolio — Full Stack Developer crafting digital experiences that blend innovation with elegant code." />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      {/* Splash Screen */}
      <div
        id="splashScreen"
        className={`splash-screen${splashDone ? ' fade-out' : ''}`}
        style={splashDone ? { display: 'none' } : {}}
      >
        <SplashScreen />
      </div>

      {/* Main Content */}
      <div className={`main-content${splashDone ? ' show' : ''}`} id="mainContent">

        {/* Custom Cursor */}
        <div className="cursor" ref={cursorRef}></div>
        <div className="cursor-follower" ref={followerRef}></div>

        <ScrollText />
        <Navbar onToggleMenu={toggleMenu} />
        <MenuOverlay isOpen={menuOpen} activeLink={activeLink} onNavigate={menuNavigate} />

        <HeroSection onScrollTo={scrollToSection} />
        <AboutSection />
        <SkillsSection />
        <WorkSection onOpenModal={openProjectModal} />
        <CertificatesSection onOpenCert={openCertModal} onOpenAll={openAllCerts} />
        <ContactSection />
        <Footer />

        {/* Modals */}
        {activeProject && (
          <ProjectModal project={activeProject} onClose={closeProjectModal} />
        )}
        {activeCert && (
          <CertificateModal
            cert={activeCert}
            onClose={closeCertModal}
            fromExtra={certFromExtra}
            onBackToAll={backToAll}
          />
        )}
        {allCertsOpen && (
          <AllCertificatesModal onClose={closeAllCerts} onViewCert={openExtraCert} />
        )}
      </div>
    </>
  );
}
