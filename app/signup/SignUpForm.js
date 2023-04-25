'use client';

export default function SignUpForm() {
  return (
    <form action="/api/signup" method="POST">
      <input
        id="name"
        pattern="^[a-zA-Z가-힣\s_-]{2,}$"
        name="name"
        placeholder="이름을 입력하세요."
        reuired
        title="최소 2자 이상이며 영문 대소문자, 한글, 띄어쓰기를 제외한 글자는 사용할 수 없습니다."
        required
      />
      <input
        id="email"
        name="email"
        placeholder="Email을 입력하세요."
        required
        pattern="^[a-zA-Z0-9가-힣._%+-]+@[a-zA-Z0-9가-힣.-]+\.[a-zA-Z가-힣]{2,}$"
        title="이메일 형식에 맞게 작성해야합니다."
      />
      <input
        id="id"
        name="id"
        placeholder="사용할 ID를 입력하세요."
        required
        pattern="^[a-zA-Z0-9_-]{4,}$"
        title="최소 4자 이상이며 숫자, 영문 대소문자, 언더스코어, 하이픈을 제외한 다른 언어는 사용할 수 없습니다."
      />
      <input
        type="password"
        id="password"
        name="password"
        placeholder="사용할 비밀번호를 입력하세요."
        required
        pattern="^(?=.*\d)(?=.*[a-zA-Z])[0-9a-zA-Z!@#$%^&*]{8,}$"
        title="최소 8자 이상이며 숫자, 영문 대소문자, 특수문자 중 2가지 이상을 조합하여야 합니다."
      />
      <input
        type="password"
        id="reCheck"
        name="reCheck"
        placeholder="비밀번호를 다시 한 번 입력하세요."
        required
        pattern="^(?=.*\d)(?=.*[a-zA-Z])[0-9a-zA-Z!@#$%^&*]{8,}$"
        title="최소 8자 이상이며 숫자, 영문 대소문자, 특수문자 중 2가지 이상을 조합하여야 합니다."
      />
      <button type="submit">회원가입</button>
    </form>
  );
}
