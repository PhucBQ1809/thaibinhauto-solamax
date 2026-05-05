export default function Products() {
  const promoProducts = [
    { id: 1, title: 'Màn hình đôi Vision Pro hãng SetCar cho VF3', desc: 'Sản phẩm công nghệ hiện đại cho xế hộp của bạn.', img: '/images/car_film.png' },
    { id: 2, title: 'SetCar Ai360 – Camera 360 cho VF3', desc: 'Quan sát toàn cảnh, lái xe an toàn.', img: '/images/house_film.png' },
    { id: 3, title: 'Thảm lót sàn VF3 cao cấp Setcar', desc: 'Bảo vệ toàn diện, siêu bền.', img: '/images/car_film.png' },
    { id: 4, title: 'Cảm Biến Áp Suất Lốp Kết Nối USB ICAR ADI5', desc: 'Công nghệ cảnh báo áp suất thông minh.', img: '/images/house_film.png' },
  ];

  const interiorProducts = [
    { id: 5, title: 'Màn hình Android', desc: 'Giải trí đỉnh cao trên xe', img: '/images/house_film.png' },
    { id: 6, title: 'Cốp điện', desc: 'Tiện nghi sang trọng', img: '/images/car_film.png' },
    { id: 7, title: 'Hệ thống âm thanh', desc: 'Nâng cấp loa sub và amply', img: '/images/house_film.png' },
    { id: 8, title: 'Bọc da nội thất', desc: 'Thay áo mới cho xế yêu', img: '/images/car_film.png' },
  ];

  const exteriorProducts = [
    { id: 9, title: 'Nâng cấp đèn', desc: 'Bi led, Bi Laser siêu sáng', img: '/images/car_film.png' },
    { id: 10, title: 'Cảm biến va chạm', desc: 'Hỗ trợ đỗ xe an toàn', img: '/images/house_film.png' },
    { id: 11, title: 'Wrap đổi màu', desc: 'Đổi mới diện mạo cá tính', img: '/images/car_film.png' },
    { id: 12, title: 'PPF Bảo Vệ Nội Thất Xe', desc: 'Chống xước tuyệt đối', img: '/images/house_film.png' },
  ];

  return (
    <>
      <section className="products" id="khuyen-mai">
        <div className="container">
          <div className="section-header">
            <h2>Sản phẩm khuyến mại</h2>
            <p>Các gói nâng cấp công nghệ, tiện ích và bảo vệ xe đang có ưu đãi tại Thái Bình Auto.</p>
          </div>
          <div className="products-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}>
            {promoProducts.map(p => (
              <div className="product-card" key={p.id}>
                <div className="product-image" style={{ height: '200px' }}>
                  <img src={p.img} alt={p.title} />
                </div>
                <div className="product-info" style={{ padding: '20px' }}>
                  <h3 style={{ fontSize: '1.2rem' }}>{p.title}</h3>
                  <p style={{ marginBottom: '15px' }}>{p.desc}</p>
                  <a href="tel:0989832889" className="btn btn-secondary" style={{ padding: '0.5rem 1rem', fontSize: '0.9rem' }}>Chi tiết</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="products" style={{ backgroundColor: 'var(--bg-secondary)' }} id="noi-that">
        <div className="container">
          <div className="section-header">
            <h2>Nâng cấp nội thất ô tô</h2>
            <p>Tối ưu trải nghiệm lái xe với các giải pháp công nghệ, hiển thị, âm thanh và tiện nghi trong khoang nội thất.</p>
          </div>
          <div className="products-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}>
            {interiorProducts.map(p => (
              <div className="product-card" key={p.id}>
                <div className="product-image" style={{ height: '200px' }}>
                  <img src={p.img} alt={p.title} />
                </div>
                <div className="product-info" style={{ padding: '20px' }}>
                  <h3 style={{ fontSize: '1.2rem' }}>{p.title}</h3>
                  <p style={{ marginBottom: '15px' }}>{p.desc}</p>
                  <a href="tel:0989832889" className="btn btn-secondary" style={{ padding: '0.5rem 1rem', fontSize: '0.9rem' }}>Chi tiết</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="products" id="ngoai-that">
        <div className="container">
          <div className="section-header">
            <h2>Nâng cấp ngoại thất ô tô</h2>
            <p>Đồng bộ diện mạo, ánh sáng và các chi tiết ngoại thất để chiếc xe nổi bật, an toàn và đúng cá tính hơn.</p>
          </div>
          <div className="products-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}>
            {exteriorProducts.map(p => (
              <div className="product-card" key={p.id}>
                <div className="product-image" style={{ height: '200px' }}>
                  <img src={p.img} alt={p.title} />
                </div>
                <div className="product-info" style={{ padding: '20px' }}>
                  <h3 style={{ fontSize: '1.2rem' }}>{p.title}</h3>
                  <p style={{ marginBottom: '15px' }}>{p.desc}</p>
                  <a href="tel:0989832889" className="btn btn-secondary" style={{ padding: '0.5rem 1rem', fontSize: '0.9rem' }}>Chi tiết</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
