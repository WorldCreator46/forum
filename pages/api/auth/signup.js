import { connectDB } from '@/util/database';
export default async function handler(req, res) {
  const db = (await connectDB).db('forum');
  const namePattern = /^[a-zA-Z가-힣\s_-]{2,}$/;
  const emailPattern = /^[a-zA-Z0-9가-힣._%+-]+@[a-zA-Z0-9가-힣.-]+\.[a-zA-Z가-힣]{2,}$/;
  const idPattern = /^[a-zA-Z0-9_-]{4,}$/;
  const passwordPattern = /^(?=.*\d)(?=.*[a-zA-Z])[0-9a-zA-Z!@#$%^&*]{8,}$/;

  let { name, email, id, password, reCheck } = req.body;
  name = name.replace(/[^a-zA-Z\uAC00-\uD7A3\s]/g, '');
  name.trim();
  email.replace(/\s/g, '');
  id.replace(/\s/g, '');
  password.replace(/\s/g, '');
  reCheck.replace(/\s/g, '');

  let result = null;
  try {
    result = await db.collection('user').findOne({ id: id });
  } catch {
    result = null;
  }

  if (
    req.method === 'POST' &&
    name !== '' &&
    namePattern.test(name) &&
    email !== '' &&
    emailPattern.test(email) &&
    id !== '' &&
    idPattern.test(id) &&
    password !== '' &&
    passwordPattern.test(password) &&
    reCheck !== '' &&
    passwordPattern.test(reCheck) &&
    password === reCheck &&
    result === null
  ) {
    try {
      await db.collection('user').insertOne({ name: name, email: email, id: id, password: password });
      return res.status(201).redirect('/signin');
    } catch (error) {
      return res.status(400).redirect('/error/signup');
    }
  }
  return res.status(400).redirect('/error/signup');
}
