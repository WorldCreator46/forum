import Link from 'next/link';
import './globals.css';

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

function Navbar() {
  return (
    <div className="Navbar">
      <div className="NavTitle">
        <h1>Forum</h1>
      </div>
      <div className="NavTitle">
        <Link href={`/signin`}>
          <button>로그인</button>
        </Link>
      </div>
    </div>
  );
}
