import type { AppProps } from 'next/app';
import Head from 'next/head';
import { ThemeContextProvider } from 'contexts/ThemeContext';
import { DrawerContextProvider } from 'contexts/DrawerContext';
import '../themes/reset.css';

function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeContextProvider>
      <Head>
        <title>Material UI</title>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
        />
      </Head>
      <DrawerContextProvider>
        <Component {...pageProps} />
      </DrawerContextProvider>
    </ThemeContextProvider>
  );
}

export default App;
