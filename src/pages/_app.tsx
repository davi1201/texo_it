import { AppProps } from 'next/app';
import Head from 'next/head';
import { ColorSchemeProvider, ColorScheme, MantineProvider } from '@mantine/core';
import { getSession, GetSessionParams, SessionProvider } from 'next-auth/react';
import Layout from '../layout/layout';
import { useRouter } from 'next/router';
import { useState } from 'react';
// @ts-ignore
import { Notifications } from '@mantine/notifications';



export default function App(props: AppProps) {
  const { Component, pageProps } = props;
  const router = useRouter();
  const [colorScheme, setColorScheme] = useState<ColorScheme>('dark');
  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));
  
  return (
    <>
      <Head>
        <title>Filmes</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Head>

      <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
        <MantineProvider
          withGlobalStyles
          withNormalizeCSS
          theme={{ colorScheme }}
        >        
          <Notifications />

          <SessionProvider session={pageProps.session}>
            {  router.pathname !== '/login' ? 
              <Layout>
                <Component {...pageProps} />
              </Layout>
              :
              <Component {...pageProps} />
            }
          </SessionProvider>
        </MantineProvider>
    </ColorSchemeProvider>
    </>
  );
}