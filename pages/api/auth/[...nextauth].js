import { connectDB } from '@/util/database';
import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
export default NextAuth({
  providers: [
    CredentialsProvider({
      id: 'forum-login',
      name: 'Forum Account',
      async authorize(credentials, res) {
        const db = (await connectDB).db('forum');
        const user = await db.collection('user').findOne({ id: credentials.id, password: credentials.password });
        return user;
      },
      credentials: {
        id: { label: '아이디', type: 'text ' },
        password: { label: '비밀번호', type: 'password' },
      },
    }),
  ],
});
