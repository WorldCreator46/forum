'use client';
import axios from 'axios';
import { useState } from 'react';

export default function SignInForm() {
  const client = axios.create({
    baseURL: 'http://localhost:3000',
  });

  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const response = await client.post('/api/signin', { id: id, password: password });
      if (response.status === 200) {
        console.log(response.data._id);
      } else {
        alert('로그인에 실패했습니다.');
      }
    } catch (error) {
      alert('로그인에 실패했습니다.');
    }
  }
  const idChange = (e) => {
    setId(e.target.value);
  };
  const passwordChange = (e) => {
    setPassword(e.target.value);
  };
  return (
    <form onSubmit={handleSubmit} method="POST">
      <input id="id" name="id" value={id} onChange={idChange} placeholder="ID를 입력하세요." required />
      <input
        type="password"
        id="password"
        value={password}
        onChange={passwordChange}
        name="password"
        placeholder="비밀번호를 입력하세요."
        required
      />
      <button type="submit">로그인</button>
    </form>
  );
}
