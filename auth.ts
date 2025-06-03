//no adapter use
import NextAuth, { User } from "next-auth"
import { compare } from "bcryptjs";
import CredentialsProvider from "next-auth/providers/credentials";
import { db } from "./database/drizzle"
import { eq } from "drizzle-orm"

export const { handlers, signIn, signOut, auth } = NextAuth({
    session: {
        strategy: "jwt",
    },
  providers: [
    CredentialsProvider({
        //if theres no email / no pass
        async authorize(credentials) {
            if(!credentials?.email || !credentials?.password) {
                return null;
            }

            //if present try and fetch the database
            const user = await db
                .select()
                .from(users)
                .where(eq(users.email, credentials.email.toString()))
                .limit(1);

            if(user.length ===0 ) return null;

            const isPasswordValid = await compare (
                credentials.password.toString(),
                user[0].password
            );

            if (!isPasswordValid) return null;

            return {
                id: user[0].id.toString(),
                email: user[0].email,
                name: user[0].fullName,
            } as User;
            //this is of types User from types.ts {created by auth.js in node modeules
        },
    })
  ],
  //now they used to find the sign in page and calling the jwt func
  pages: {
    signIn: "/sign-in",
  },
  callbacks: {
    async jwt({token, user}) {
        if(user) {
            token.id = user.id;
            token.name = user.name
        }

        return token;
    },

    async session({ session, token }) {
        if(session.user) {
            session.user.id = token.id as string;
            session.user.name = token.name as string;
        }

        return session;
    },

    //to populate the sessions and credentials with the currently logged in user
  }
})