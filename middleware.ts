import { getSession, GetSessionParams } from "next-auth/react";

export default async function getServerSideProps(ctx: GetSessionParams | undefined) {
  const session = await getSession(ctx)   

  if (!session) {
    return {
      redirect: {
        destination: '/login',
        permanent: false,
      },
    }
  }
  console.log('aki');
  return {
    props: {
      session: await getSession(ctx)
    }
  }
} 