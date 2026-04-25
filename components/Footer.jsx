export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-col brand-col">
            <a href="#" className="logo footer-logo">SolaMax<span>.</span></a>
            <p>SolaMax Việt Nam - Thương hiệu phim cách nhiệt cao cấp hàng đầu, giải pháp bảo vệ toàn diện cho xe và ngôi nhà của bạn.</p>
          </div>
          <div className="footer-col">
            <h4>Thông tin liên hệ</h4>
            <ul className="contact-info">
              <li>📍 Tòa nhà SolaMax, Quận 1, TP. Hồ Chí Minh</li>
              <li>📞 1900 6868</li>
              <li>✉️ contact@solamax.vn</li>
              <li>🌐 solamax.vn</li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Liên kết nhanh</h4>
            <ul className="footer-links">
              <li><a href="#">Về chúng tôi</a></li>
              <li><a href="#products">Sản phẩm</a></li>
              <li><a href="#agency">Đại lý SolaMax</a></li>
              <li><a href="#warranty">Kiểm tra bảo hành</a></li>
              <li><a href="#news">Tin tức</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Giờ mở cửa</h4>
            <ul className="hours-info">
              <li>Thứ 2 - Thứ 6: 8:00 - 18:00</li>
              <li>Thứ 7: 8:00 - 16:00</li>
              <li>Chủ nhật: Đóng cửa</li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2026 SolaMax Việt Nam. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
