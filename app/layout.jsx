import './globals.css';

export const metadata = {
  title: 'Thái Bình Auto - Car Detailing - Chăm Sóc Xe Chuyên Nghiệp',
  description: 'Thái Bình Auto chuyên dán phim cách nhiệt, phủ Ceramic, chăm sóc xe chuyên nghiệp. Hotline: 097.570.8282',
};

export default function RootLayout({ children }) {
  return (
    <html lang="vi">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  );
}
