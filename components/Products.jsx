export default function Products() {
  return (
    <section className="products" id="products">
      <div className="container">
        <div className="section-header">
          <h2>Sản Phẩm Nổi Bật</h2>
          <p>Đáp ứng mọi nhu cầu từ xe cá nhân đến công trình kiến trúc</p>
        </div>
        <div className="products-grid">
          <div className="product-card" id="film-oto">
            <div className="product-image">
              <img src="/images/car_film.png" alt="Phim cách nhiệt Ô tô SolaMax" />
            </div>
            <div className="product-info">
              <h3>Film cách nhiệt Ôtô</h3>
              <p>Dòng phim cách nhiệt cao cấp dành cho ô tô. Mang lại không gian riêng tư, sang trọng và tầm nhìn trong suốt vượt trội vào ban đêm.</p>
              <a href="#" className="btn btn-secondary">Xem chi tiết</a>
            </div>
          </div>
          <div className="product-card" id="film-nha-kinh">
            <div className="product-image">
              <img src="/images/house_film.png" alt="Phim cách nhiệt nhà kính SolaMax" />
            </div>
            <div className="product-info">
              <h3>Film cách nhiệt Nhà Kính</h3>
              <p>Giải pháp tối ưu cho chung cư, biệt thự và tòa nhà kính. Tận hưởng ánh sáng tự nhiên mà không lo nắng gắt.</p>
              <a href="#" className="btn btn-secondary">Xem chi tiết</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
