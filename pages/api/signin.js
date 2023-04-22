import { connectDB } from '@/util/database';
export default async function handler(req, res) {
  const { id, password } = req.body;
  const db = (await connectDB).db('forum');
  let result = await db.collection('user').findOne({ id: id, password: password });
  if (req.method == 'POST') {
    return res.status(200).json(result);
  }
  return res.status(400).redirect('/');
}
