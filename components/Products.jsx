export default function Products() {
  return (
    <section className="products" id="products">
      <div className="container">
        <div className="section-header">
          <h2>Dịch Vụ Nổi Bật</h2>
          <p>Đáp ứng mọi nhu cầu chăm sóc và bảo vệ xe của bạn</p>
        </div>
        <div className="products-grid">
          <div className="product-card" id="film-oto">
            <div className="product-image">
              <img src="/images/car_film.png" alt="Dán phim cách nhiệt ô tô - Thái Bình Auto" />
            </div>
            <div className="product-info">
              <h3>Dán phim cách nhiệt Ôtô</h3>
              <p>Dòng phim cách nhiệt cao cấp dành cho ô tô. Mang lại không gian riêng tư, sang trọng và tầm nhìn trong suốt vượt trội vào ban đêm.</p>
              <a href="tel:0975708282" className="btn btn-secondary">Liên hệ báo giá</a>
            </div>
          </div>
          <div className="product-card" id="film-nha-kinh">
            <div className="product-image">
              <img src="/images/house_film.png" alt="Phủ Ceramic Coating - Thái Bình Auto" />
            </div>
            <div className="product-info">
              <h3>Phủ Ceramic / Coating</h3>
              <p>Bảo vệ lớp sơn xe với công nghệ phủ Ceramic tiên tiến. Chống trầy xước, chống nước, giữ bóng xe như mới.</p>
              <a href="tel:0975708282" className="btn btn-secondary">Liên hệ báo giá</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
