export default function SignIn({ params }) {
  const codes = { signup: '회원가입에 실패했습니다.', signin: '로그인에 실패하셨습니다.' };
  const error = codes[params.code] || '오류가 발생했습니다.';
  return (
    <div className="error">
      <h1>{error}</h1>
    </div>
  );
}
