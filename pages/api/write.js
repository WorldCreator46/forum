import { connectDB } from '@/util/database';
export default async function handler(req, res) {
  const { title, content } = req.body;
  const db = (await connectDB).db('forum');
  if (req.method == 'POST') {
    try {
      await db.collection('post').insertOne({ title: title, content: content });
      return res.status(201).json({ message: '게시글이 성공적으로 작성되었습니다.' });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: '서버 에러가 발생했습니다.' });
    }
  } else {
    return res.status(405).json({ error: 'POST 메소드만 허용됩니다.' });
  }
}
