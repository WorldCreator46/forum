import { connectDB } from '@/util/database';
export default async function handler(req, res) {
  const { title, content } = req.body;
  const db = (await connectDB).db('forum');
  if (req.method == 'POST' && title != '' && content != '') {
    try {
      await db.collection('post').insertOne({ title: title, content: content });
      return res.status(201).redirect('/list');
    } catch (error) {
      return res.status(500).redirect('/list');
    }
  }
  return res.status(405).redirect('/list');
}
