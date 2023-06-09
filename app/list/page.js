import { connectDB } from '@/util/database';
import Link from 'next/link';
export default async function List() {
  const db = (await connectDB).db('forum');
  let result = await db.collection('post').find().toArray();
  return (
    <div className="list-bg">
      {result.map((post) => (
        <Link href={`/post/${post._id}`} key={post._id}>
          <div className="list-item">
            <h4>{post.title}</h4>
            <p>{post.content}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}
