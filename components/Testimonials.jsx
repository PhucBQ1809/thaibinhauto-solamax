export default function Testimonials() {
  return (
    <section className="testimonials">
      <div className="container">
        <div className="section-header">
          <h2>Khách Hàng Nói Gì Về Chúng Tôi</h2>
        </div>
        <div className="testimonials-grid">
          <div className="testimonial-card">
            <div className="quote-icon">&ldquo;</div>
            <p>Tôi rất hài lòng với dịch vụ dán phim cách nhiệt tại Thái Bình Auto. Kỹ thuật viên làm việc rất tỉ mỉ, cẩn thận. Xe mát hẳn, không còn bị nóng như trước nữa.</p>
            <div className="author">- Anh Hoàng, Khách hàng dán phim Ô tô</div>
          </div>
          <div className="testimonial-card">
            <div className="quote-icon">&ldquo;</div>
            <p>Phủ Ceramic tại Thái Bình Auto thực sự xuất sắc! Xe đã qua 2 năm sử dụng mà sơn vẫn bóng loáng như mới. Dịch vụ tư vấn rất tận tình, chuyên nghiệp.</p>
            <div className="author">- Chị Lan, Khách hàng phủ Ceramic</div>
          </div>
        </div>
      </div>
    </section>
  );
}
