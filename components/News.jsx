export default function News() {
  return (
    <section className="news" id="news" style={{ backgroundColor: 'var(--bg-secondary)' }}>
      <div className="container">
        <div className="section-header">
          <h2>Tin tức & Thông báo</h2>
          <p>Cập nhật những thông tin mới nhất từ hệ thống Thái Bình Auto</p>
        </div>
        <div className="news-grid">
          <article className="news-card">
            <div className="news-date">Mới nhất</div>
            <h3><a href="#">[THÔNG BÁO] Nâng Cấp Miễn Phí Tính Năng Đóng/Mở Cốp Điện Setcar Trên Màn Hình Zin Tại Hệ Thống Thái Bình Auto</a></h3>
            <p>Kính gửi Quý khách hàng, Trong thời gian qua, hệ thống cốp điện tự động Setcar luôn là một trong những hạng mục nâng cấp tiện ích được ưa chuộng nhất. Nhằm tri ân sự tin tưởng...</p>
            <a href="#" className="read-more">Đọc tiếp &rarr;</a>
          </article>
          <article className="news-card">
            <div className="news-date">Kiến thức độ xe</div>
            <h3><a href="#">Top 5 Loại Phim Cách Nhiệt Ô Tô Mới Nhất Hiện Nay</a></h3>
            <p>Phim cách nhiệt ô tô là tấm phim polyester mỏng được dán lên bề mặt kính. Chúng giúp làm giảm nhiệt lượng mặt trời truyền vào xe...</p>
            <a href="#" className="read-more">Đọc tiếp &rarr;</a>
          </article>
          <article className="news-card">
            <div className="news-date">Dịch vụ</div>
            <h3><a href="#">[Dịch Vụ] Dán Tem Xe Kona Uy Tín Số 1 Hà Nội</a></h3>
            <p>Những chiếc decal tem xe ô tô đang trở lên vô cùng hữu ích trong việc bảo vệ zin xe, mang lại vẻ ngoài nổi bật và khác biệt.</p>
            <a href="#" className="read-more">Đọc tiếp &rarr;</a>
          </article>
        </div>
        <div className="text-center" style={{ marginTop: '40px' }}>
          <a href="#" className="btn btn-outline" style={{ borderColor: 'var(--accent)', color: 'var(--accent)' }}>Xem thêm bài viết</a>
        </div>
      </div>
    </section>
  );
}
