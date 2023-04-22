'use clinet';
import Link from 'next/link';

export default function Navbar() {
  return (
    <div className="Navbar">
      <div className="NavTitle">
        <Link href={`/`}>
          <h1>Forum</h1>
        </Link>
      </div>
      <Member />
    </div>
  );
}

function Member() {
  return (
    <div className="NavTitle">
      <Link href={`/signup`}>
        <button>회원가입</button>
      </Link>
      <Link href={`/signin`}>
        <button>로그인</button>
      </Link>
    </div>
  );
}

function NonMember() {
  return (
    <div className="NavTitle">
      <Link href={`/signup`}>
        <button>회원가입</button>
      </Link>
      <Link href={`/signin`}>
        <button>로그인</button>
      </Link>
    </div>
  );
}
