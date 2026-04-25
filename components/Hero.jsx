export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-bg" style={{ backgroundImage: "url('/images/hero_bg.png')" }}></div>
      <div className="hero-overlay"></div>
      <div className="container hero-content">
        <h1 className="hero-title">Đỉnh Cao Cách Nhiệt,<br/><span>Bảo Vệ Toàn Diện</span></h1>
        <p className="hero-subtitle">Công nghệ phim cách nhiệt tiên tiến nhất từ SolaMax giúp loại bỏ 99% tia UV và giảm bức xạ nhiệt tối đa cho xe và ngôi nhà của bạn.</p>
        <a href="#products" className="btn btn-primary">Khám phá sản phẩm</a>
      </div>
    </section>
  );
}
