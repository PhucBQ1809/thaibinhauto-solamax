export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-bg" style={{ backgroundImage: "url('/images/hero_bg.png')" }}></div>
      <div className="hero-overlay"></div>
      <div className="container hero-content">
        <h1 className="hero-title">Chăm Sóc Xe<br/><span>Chuyên Nghiệp</span></h1>
        <p className="hero-subtitle">Thái Bình Auto - Car Detailing chuyên dán phim cách nhiệt, phủ Ceramic, chăm sóc và bảo vệ toàn diện cho xế yêu của bạn.</p>
        <a href="tel:0975708282" className="btn btn-primary">Liên hệ ngay: 097.570.8282</a>
      </div>
    </section>
  );
}
