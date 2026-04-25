import './globals.css';

export const metadata = {
  title: 'SolaMax - Giải pháp phim cách nhiệt cao cấp',
  description: 'SolaMax cung cấp phim cách nhiệt ô tô và nhà kính cao cấp, giảm nhiệt, chống tia UV, bảo vệ tối ưu.',
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
