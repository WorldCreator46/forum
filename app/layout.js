import './globals.css';
import Navbar from './navbar';

export const metadata = {
  title: 'Forum',
  description: '',
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
