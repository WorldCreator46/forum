import { connectDB } from '@/util/database';
export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(400).redirect('/error/signin');
  }
  try {
    const { id, password } = req.body;
    const db = (await connectDB).db('forum');
    const result = await db.collection('user').findOne({ id: id, password: password });
    if (result !== null) {
      return res.status(200).json({ _id: result._id });
    } else {
      return res.status(400).json({ error: 'not found' });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}
