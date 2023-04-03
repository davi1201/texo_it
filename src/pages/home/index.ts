import { getSession, GetSessionParams } from 'next-auth/react';
export { default } from './home'

export async function getServerSideProps(ctx: GetSessionParams | undefined) {
    const session = await getSession(ctx);  
    if (!session) {
      return {
        redirect: {
          destination: '/login',
          permanent: false,
        },
      }
    }
    
    return {
      props: {
        session: await getSession(ctx)
      }
    }
} 

