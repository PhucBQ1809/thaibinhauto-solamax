export default function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-col brand-col">
            <a href="#" className="logo footer-logo">THÁI BÌNH<span> AUTO</span></a>
            <p>Nâng cấp thẩm mỹ, công nghệ và bảo vệ xe theo phong cách hiện đại, chính xác và dễ theo dõi.</p>
            <p style={{ marginTop: '20px' }}>Giờ mở cửa: 8:00 – 18:00, Thứ 2 – Thứ 7<br/>Hỗ trợ khách hàng 24/7</p>
          </div>
          <div className="footer-col">
            <h4>Hệ thống Chi nhánh</h4>
            <ul className="contact-info">
              <li>📍 Trụ sở: Thái Bình Auto, Hà Nội</li>
              <li>📍 Chi nhánh Long Biên, Hà Nội</li>
              <li>📍 Chi nhánh Hải Phòng</li>
              <li>📍 Chi nhánh Đà Nẵng</li>
              <li>📍 Chi nhánh Hồ Chí Minh</li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Chính sách & Dịch vụ</h4>
            <ul className="footer-links">
              <li><a href="#gioi-thieu">Giới thiệu</a></li>
              <li><a href="#bao-mat">Privacy policy</a></li>
              <li><a href="#thanh-toan">Hướng dẫn thanh toán</a></li>
              <li><a href="#bao-hanh">Chính sách bảo hành</a></li>
              <li><a href="#van-chuyen">Chính sách vận chuyển</a></li>
              <li><a href="#khieu-nai">Giải quyết khiếu nại</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Liên hệ</h4>
            <ul className="contact-info">
              <li>📞 <a href="tel:0989832889">0989 832 889</a></li>
              <li>✉️ dubaicare.vn@gmail.com (Email demo)</li>
              <li>Zalo / Facebook Messenger</li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2026 Thái Bình Auto - Nâng Tầm Trải Nghiệm Lái. Cảm hứng thiết kế từ Dubai Care.</p>
        </div>
      </div>
    </footer>
  );
}
