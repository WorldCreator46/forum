'use client';

export default function SignUpForm() {
  return (
    <form action="/api/signup" method="POST">
      <input id="name" pattern="[a-zA-Z가-힣\s]+" name="name" placeholder="이름을 입력하세요." required />
      <input id="email" name="email" placeholder="Email을 입력하세요." required />
      <input id="id" name="id" placeholder="사용할 ID를 입력하세요." required />
      <input type="password" id="password" name="password" placeholder="사용할 비밀번호를 입력하세요." required />
      <input type="password" id="reCheck" name="reCheck" placeholder="비밀번호를 다시 한 번 입력하세요." required />
      <button type="submit">회원가입</button>
    </form>
  );
}
