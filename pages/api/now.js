export default function handler(req, res) {
  return res.status(200).json(new Date().toLocaleString('ko-KR', { timeZone: 'Asia/Seoul' }));
}
