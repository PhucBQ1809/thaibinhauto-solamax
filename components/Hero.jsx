export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-bg" style={{ backgroundImage: "url('/images/hero_bg.png')" }}></div>
      <div className="hero-overlay"></div>
      <div className="container hero-content">
        <h1 className="hero-title">Độ Xe Ô Tô<br/><span>Cùng Chuyên Gia</span></h1>
        <p className="hero-subtitle">Nâng cấp thẩm mỹ, công nghệ và bảo vệ xe theo phong cách hiện đại, chính xác và chuyên nghiệp nhất tại Thái Bình Auto.</p>
        <a href="tel:0989832889" className="btn btn-primary">Liên hệ tư vấn ngay</a>
      </div>
    </section>
  );
}
