import './globals.css';

export const metadata = {
  title: 'OAK GALLERIE — Contemporary Furniture',
  description: 'Contemporary furniture shaped by craftsmanship, materials and timeless design.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
