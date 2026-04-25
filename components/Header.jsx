"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Active section tracking
      const sections = document.querySelectorAll('section');
      const headerOffset = 100;
      let current = '';

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        if (window.scrollY >= sectionTop - headerOffset) {
          current = section.getAttribute('id');
        }
      });
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSmoothScroll = (e, targetId) => {
    if (targetId === '#') return;
    e.preventDefault();
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      if (isMobileMenuOpen) setIsMobileMenuOpen(false);
      const headerOffset = 80;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <header className="header" style={{ boxShadow: isScrolled ? '0 4px 6px -1px rgba(0,0,0,0.1)' : 'none' }}>
      <div className="container header-inner">
        <Link href="#" className="logo">
          SolaMax<span>.</span>
        </Link>
        <nav className={`nav ${isMobileMenuOpen ? 'active' : ''}`}>
          <ul className="nav-list">
            <li>
              <a 
                href="#" 
                className={!activeSection || activeSection === '' ? 'active' : ''} 
                onClick={(e) => { e.preventDefault(); window.scrollTo({top: 0, behavior: 'smooth'}); setIsMobileMenuOpen(false); }}
              >
                Trang chủ
              </a>
            </li>
            <li>
              <a 
                href="#features" 
                className={activeSection === 'features' ? 'active' : ''}
                onClick={(e) => handleSmoothScroll(e, '#features')}
              >
                Giới thiệu
              </a>
            </li>
            <li className={`dropdown ${isDropdownOpen ? 'active' : ''}`}>
              <a 
                href="#products" 
                onClick={(e) => {
                  if (window.innerWidth <= 768) {
                    e.preventDefault();
                    setIsDropdownOpen(!isDropdownOpen);
                  } else {
                    handleSmoothScroll(e, '#products');
                  }
                }}
              >
                Sản phẩm <span className="arrow">▼</span>
              </a>
              <ul className="dropdown-menu">
                <li><a href="#film-oto" onClick={(e) => handleSmoothScroll(e, '#products')}>Film cách nhiệt Ôtô</a></li>
                <li><a href="#film-nha-kinh" onClick={(e) => handleSmoothScroll(e, '#products')}>Film cách nhiệt nhà kính</a></li>
              </ul>
            </li>
            <li>
              <a 
                href="#news" 
                className={activeSection === 'news' ? 'active' : ''}
                onClick={(e) => handleSmoothScroll(e, '#news')}
              >
                Tin tức
              </a>
            </li>
            <li>
              <a href="#agency" onClick={(e) => handleSmoothScroll(e, '#agency')}>
                Đại lý SolaMax
              </a>
            </li>
            <li>
              <a href="#warranty" className="btn-check-warranty" onClick={(e) => handleSmoothScroll(e, '#warranty')}>
                Check bảo hành
              </a>
            </li>
          </ul>
        </nav>
        <div className="mobile-menu-btn" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          <span style={isMobileMenuOpen ? { transform: 'rotate(45deg) translate(5px, 5px)' } : {}}></span>
          <span style={isMobileMenuOpen ? { opacity: '0' } : {}}></span>
          <span style={isMobileMenuOpen ? { transform: 'rotate(-45deg) translate(7px, -7px)' } : {}}></span>
        </div>
      </div>
    </header>
  );
}
