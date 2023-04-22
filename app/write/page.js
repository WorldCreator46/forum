export default async function Write() {
  return (
    <div className="p-20">
      <h1>글작성</h1>
      <form action="/api/write" method="POST">
        <input name="title" placeholder="글제목" required />
        <input name="content" placeholder="글내용" required />
        <button type="submit">전송</button>
      </form>
    </div>
  );
}
