'use client';

export default function SignInForm() {
  return (
    <form action="/api/signin" method="POST">
      <input id="id" name="id" placeholder="ID를 입력하세요." required />
      <input type="password" id="password" name="password" placeholder="비밀번호를 입력하세요." required />
      <button type="submit">로그인</button>
    </form>
  );
}
