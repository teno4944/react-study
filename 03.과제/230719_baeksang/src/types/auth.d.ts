import NextAuth, { DefaultJWT, DefaultSession } from 'next-auth';

declare module 'next-auth' {
  interface User {
    id?: string;
    id_token?: string;
    email?: string;
    name?: string;
    image?: string;
  }
  interface Session {
    expires?: Date | string;
    provider?: string;
    user?: User & DefaultSession['user'];
  }
  interface CustomJWT {
    provider?: string;
    id?: string;
    id_token?: string;
    name?: string | null;
    email?: string | null;
    picture?: string | null;
    sub?: string;
  }
}
