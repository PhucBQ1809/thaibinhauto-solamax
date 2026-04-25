export default function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-col brand-col">
            <a href="#" className="logo footer-logo">THÁI BÌNH<span> AUTO</span></a>
            <p>Car Detailing - Chăm Sóc Xe Chuyên Nghiệp. Dán phim cách nhiệt, phủ Ceramic, chăm sóc nội thất xe hàng đầu.</p>
          </div>
          <div className="footer-col">
            <h4>Thông tin liên hệ</h4>
            <ul className="contact-info">
              <li>📍 <a href="https://www.google.com/maps/place/Th%C3%A1i+B%C3%ACnh+Auto+-+Car+Detailing+-+Ch%C4%83m+S%C3%B3c+Xe+Chuy%C3%AAn+Nghi%E1%BB%87p/@20.9640825,105.8311695,17z" target="_blank" rel="noopener noreferrer">Thái Bình Auto, Hà Nội</a></li>
              <li>📞 <a href="tel:0975708282">097.570.8282</a></li>
              <li>✉️ contact@thaibinhauto.vn</li>
              <li>🌐 thaibinhauto.vn</li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Dịch vụ</h4>
            <ul className="footer-links">
              <li><a href="#products">Dán phim cách nhiệt</a></li>
              <li><a href="#products">Phủ Ceramic / Coating</a></li>
              <li><a href="#products">Chăm sóc nội thất</a></li>
              <li><a href="#products">Đánh bóng sơn xe</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Giờ mở cửa</h4>
            <ul className="hours-info">
              <li>Thứ 2 - Thứ 6: 8:00 - 18:00</li>
              <li>Thứ 7: 8:00 - 16:00</li>
              <li>Chủ nhật: Liên hệ trước</li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2026 Thái Bình Auto - Car Detailing. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
