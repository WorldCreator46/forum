export default function handler(req, res) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  let { name, email, id, password, reCheck } = req.body;
  name = name.replace(/[^a-zA-Z\uAC00-\uD7A3\s]/g, '');
  name.trim();
  email.replace(/\s/g, '');
  id.replace(/\s/g, '');
  password.replace(/\s/g, '');
  reCheck.replace(/\s/g, '');
  if (
    req.method === 'POST' &&
    name !== '' &&
    email !== '' &&
    emailRegex.test(email) &&
    id !== '' &&
    password !== '' &&
    reCheck !== '' &&
    password === reCheck
  ) {
    console.log(name, email, id, password, reCheck);
    return res.status(201).redirect('/');
  }
  return res.status(400).redirect('/error/signup');
}
