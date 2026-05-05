"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40); // Top bar is about 40px
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <div className="top-bar">
        <div className="container top-bar-inner">
          <div className="top-bar-left">
            <span>Chào mừng đến với hệ thống chăm sóc xe chuyên nghiệp</span>
          </div>
          <div className="top-bar-right">
            <a href="tel:0989832889">☎️ Hotline 0989 832 889</a>
          </div>
        </div>
      </div>
      
      <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
        <div className="container header-inner">
          <Link href="/" className="logo">
            THÁI BÌNH<span> AUTO</span>
          </Link>

          <div className="header-search">
            <input type="text" placeholder="Tìm kiếm dịch vụ, sản phẩm..." />
            <button aria-label="Search">🔍</button>
          </div>

          <nav className={`nav ${isMobileMenuOpen ? 'active' : ''}`}>
            <ul className="nav-list">
              <li>
                <Link href="/">Trang chủ</Link>
              </li>
              <li className="dropdown">
                <Link href="#den-xe">Độ đèn xe <span className="arrow">▼</span></Link>
                <ul className="dropdown-menu">
                  <li><Link href="#do-den-o-to">Độ đèn Led/Laser</Link></li>
                  <li><Link href="#den-bi-gam">Đèn bi gầm ô tô</Link></li>
                </ul>
              </li>
              <li>
                <Link href="#am-thanh">Hệ thống âm thanh</Link>
              </li>
              <li>
                <Link href="#phim-cach-nhiet">Phim cách nhiệt</Link>
              </li>
              <li className="dropdown">
                <Link href="#nang-cap-option">Nâng cấp option <span className="arrow">▼</span></Link>
                <ul className="dropdown-menu">
                  <li><Link href="#man-hinh-android">Màn hình Android</Link></li>
                  <li><Link href="#android-box">Android box</Link></li>
                  <li><Link href="#cop-dien">Cốp điện</Link></li>
                  <li><Link href="#camera-360">Camera 360</Link></li>
                </ul>
              </li>
              <li className="dropdown">
                <Link href="#tham-my-xe">Thẩm mỹ xe <span className="arrow">▼</span></Link>
                <ul className="dropdown-menu">
                  <li><Link href="#boc-da">Bọc da nội thất</Link></li>
                  <li><Link href="#tham-san">Thảm sàn</Link></li>
                  <li><Link href="#dan-ppf">Dán PPF</Link></li>
                  <li><Link href="#wrap">Wrap đổi màu xe</Link></li>
                </ul>
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
    </>
  );
}
