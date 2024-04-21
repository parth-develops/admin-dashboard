import { authConfig } from "@/app/authconfig"
import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import { connectToDB } from "./lib/utils"
import { Users } from "./lib/models"
import bcrypt from "bcrypt";

const login = async (credentials) => {
    try {
        connectToDB();
        const user = await Users.findOne({username:credentials.username});

        if (!user) throw new Error("Wrong crednetials");

        const isPasswordCorrect = await bcrypt.compare(credentials.password, user.password);
        
        if (!isPasswordCorrect) throw new Error("Wrong crednetials");

        return user;
    } catch (error) {
        throw new Error(error);
    }
}

export const { signIn, signOut, auth } = NextAuth({
    ...authConfig,

    providers: [
        CredentialsProvider({
            async authorize(credentials) {
                try {
                    const user = await login(credentials);
                    
                    return user;
                } catch (error) {
                    return null
                }
            }
        })
    ],
})