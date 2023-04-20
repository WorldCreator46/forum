export default function write() {
  return (
    <div className="write-box">
      <h1>글작성</h1>
      <form action="/api/write" method="POST">
        <input
          style={{ fontSize: '25px', fontWeight: 'bold', display: 'block' }}
          type="text"
          name="title"
          placeholder="제목을 입력하세요."
          required
        />
        <textarea
          style={{ fontSize: '19px', display: 'block' }}
          name="content"
          rows="20"
          cols="32"
          required
          placeholder="글 내용을 입력하세요."
        ></textarea>
        <button style={{ fontSize: '19px' }} type="submit">
          작성
        </button>
      </form>
    </div>
  );
}
