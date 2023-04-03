import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"
import GoogleProvider from "next-auth/providers/google"
import CredentialsProvider from "next-auth/providers/credentials"
import axios from 'axios';

export const authOptions = { 
    providers: [
        GithubProvider({
            clientId: process.env.GITHUB_ID || "GITHUB_ID",
            clientSecret: process.env.GITHUB_SECRET || "GITHUB_SECRET",
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_ID || 'GOOGLE_ID',
            clientSecret: process.env.GOOGLE_SECRET || 'GOOGLE_SECRET',            
        }),
        CredentialsProvider({
            name: 'Email and Password',
            credentials: {
              email: { label: 'Email', type: 'email', placeholder: 'john.doe@example.com' },
              password: { label: 'Password', type: 'password' },
            },
            authorize: async (credentials) => {
              const delay = (amount = 750) => new Promise(resolve => {
                setTimeout(resolve, amount)
              })
              
              try {
                await delay();
                if (credentials?.email === 'admin@admin.com.br' && credentials?.password === 'admin') {
                  const user = {
                      name: 'Admin', 
                      email: credentials?.email,
                      image: 'https://avatars.githubusercontent.com/u/1016365?v=4', 
                    };
                  return user;
                } else {
                  return null;
                }
              } catch (error) {
                return null;
              }
            },
          }),
    ],
    session: {
        jwt: true,
        maxAge: 1 * 24 * 60 * 60, // 30 days        
    },
    secret: process.env.SECRET,   
}

export default NextAuth(authOptions)