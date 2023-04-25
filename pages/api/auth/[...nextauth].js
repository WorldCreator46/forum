import NextAuth from 'next-auth';

export const authOptions = {
  providers: [
    providers.Credentials({
      id: 'id-password-credential',
      name: 'Credentials',
      type: 'credentials',
      credentials: {
        id: { label: 'Id', type: 'text' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentialsm, req) {
        return credentialsm;
      },
    }),
  ],
  pages: {
    signIn: '/login',
  },
};

export default NextAuth(authOptions);
