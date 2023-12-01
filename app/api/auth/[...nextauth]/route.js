import { connectToDB } from "@utils/database";
import NewUser from "@models/newuser";
import NextAuth from "next-auth/next";
import GoogleProvider from 'next-auth/providers/google';
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from 'bcryptjs'
import DocUser from "@models/doctorsignup";

const credentialsProvider = CredentialsProvider({
    name: 'credentials',
    credentials: {},

    async authorize(credentials) {
        const { email, password } = credentials;

        console.log(email, password);
        try {
            await connectToDB();
            const user = await NewUser.findOne({ email });

            if (!user) {
                return null;
            }

            const passwordsMatch = await bcrypt.compare(password, user.password);
            console.log(passwordsMatch);

            if (!passwordsMatch) {
                return null;
            }

            return user;
        } catch (error) {
            console.log('Error:', error);
        }
        return user;
    },
});

const googleProvider = GoogleProvider({
    clientId: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_SECRET,
    // Other Google-specific settings here

}

);

const authOptions = {
    providers: [credentialsProvider, googleProvider],

    session: {
        strategy: 'jwt',
    },
    secret: process.env.NEXTAUTH_SECRET,
    pages: {
        signIn: '/login-options/user-login',
    },
    callbacks: {
        async signIn({ user, account }) {
            console.log('name')
            if (account.provider === "google") {
                // console.log(email)
                try {
                    const { name, email } = user;
                    await connectToDB();
                    const userExists = await DocUser.findOne({ email });
                    console.log(userExists)

                    const patientExists =  await NewUser.findOne({email})

                    if (!userExists && !patientExists) {
                        console.log('Exist')

                        const res = await fetch("http://localhost:3000/api/docs", {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json",
                            },
                            body: JSON.stringify({
                                name: name,
                                email: email,
                                usertype: 'Doctor'
                            }),
                        });

                        if (res.ok) {
                            return user;
                        }
                    }

                    if(patientExists && userExists){
                        alert('Email already exist')
                    }
                } catch (error) {
                    console.log(error);
                }
            }

            return user;
        },
    },
}

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
