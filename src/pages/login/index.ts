import { GetServerSideProps } from 'next';
import { getSession, useSession } from 'next-auth/react';

export { default } from './login';

export const getServerSideProps: GetServerSideProps = async (ctx) => {
    const session = await getSession(ctx);  
    
    if (session) {
        return {
            redirect: {
                destination: '/',
                permanent: false,
            },
        }
    }
  
    return {
      props: {
        session,
      },
    }
  }