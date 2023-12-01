import { connectToDB } from "@utils/database";
import NewUser from "@models/newuser";
import NextAuth from "next-auth/next";
import CredentialsProvider  from "next-auth/providers/credentials";
import bcrypt from 'bcryptjs'

const authOptions = {
    providers: [
        // ... other providers here
        CredentialsProvider({
            name: 'credentials',
            credentials: {},

            async authorize(credentials){
                const user = {id: '1'};
                return user;

            },
        }),
    ],
    session: {
        strategy: 'jwt',

    },
    secret: process.env.NEXTAUTH_SECRET,
    pages:{
        signIn: '../../login-options/user-login'
    }
}

const handler = NextAuth(authOptions);

export {handler as GET, handler as POST};