import '../styles/globals.css'
import type { AppProps } from 'next/app'
import React from 'react';
import { wrapper } from '../store';
import GlobalStyles from 'src/components/GlobalStyles'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyles />
      <Component {...pageProps} />;
    </>
  )
}

export default wrapper.withRedux(MyApp);
