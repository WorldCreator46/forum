export default function handler(req, res) {
  if (req.method == 'POST') {
    return res.status(200).json('처리완료');
  }
  return res.status(200).re;
}
