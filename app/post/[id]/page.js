import { connectDB } from '@/util/database';
import { ObjectId } from 'mongodb';

export default async function Details({ params }) {
  const db = (await connectDB).db('forum');
  let result = null;
  try {
    result = await db.collection('post').findOne({ _id: new ObjectId(params.id) });
  } catch {
    result = null;
  }
  return (
    <div>
      {result ? (
        <>
          <h1>상세페이지</h1>
          <h1>{result.title}</h1>
          <p>{result.content}</p>
        </>
      ) : (
        <>
          <h1>존재하지 않는 포스트입니다.</h1>
        </>
      )}
    </div>
  );
}
