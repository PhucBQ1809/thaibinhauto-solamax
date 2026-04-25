export default function News() {
  return (
    <section className="news" id="news">
      <div className="container">
        <div className="section-header">
          <h2>Tin Tức & Kiến Thức</h2>
          <p>Cập nhật thông tin mới nhất về công nghệ phim cách nhiệt</p>
        </div>
        <div className="news-grid">
          <article className="news-card">
            <div className="news-date">14/04/2026</div>
            <h3><a href="#">Dán phim cách nhiệt ô tô có ảnh hưởng đến sóng GPS, điện thoại không?</a></h3>
            <p>Nhiều người băn khoăn liệu phim cách nhiệt có làm yếu sóng GPS. Cùng SolaMax tìm hiểu sự thật về vấn đề này.</p>
            <a href="#" className="read-more">Đọc tiếp &rarr;</a>
          </article>
          <article className="news-card">
            <div className="news-date">14/04/2026</div>
            <h3><a href="#">Giá dán kính lái ô tô bao nhiêu? Có nên chọn loại cao cấp?</a></h3>
            <p>Kính lái là khu vực hấp thụ nhiệt lớn nhất. Phân tích chi tiết để bạn có lựa chọn phim cách nhiệt đúng đắn.</p>
            <a href="#" className="read-more">Đọc tiếp &rarr;</a>
          </article>
          <article className="news-card">
            <div className="news-date">03/04/2026</div>
            <h3><a href="#">Dán Cách Nhiệt Nhà Kính Chung Cư – Giải Pháp Chống Nóng Hiệu Quả</a></h3>
            <p>Mùa hè oi bức, căn hộ nhiều kính trở nên ngột ngạt. Khám phá giải pháp cách nhiệt tối ưu cho chung cư.</p>
            <a href="#" className="read-more">Đọc tiếp &rarr;</a>
          </article>
        </div>
        <div className="text-center" style={{ marginTop: '40px' }}>
          <a href="#" className="btn btn-outline">Xem thêm bài viết</a>
        </div>
      </div>
    </section>
  );
}
