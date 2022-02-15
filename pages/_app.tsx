import '../styles/globals.css'
import type { AppProps } from 'next/app'
import React, { FC } from 'react'
//import { wrapper } from '../store';
import { wrapper } from 'src/redux'
import GlobalStyles from 'src/components/GlobalStyles'

const WrappedApp: FC<AppProps> = ({ Component, pageProps }) => (
  <>
    <GlobalStyles />
    <Component {...pageProps} />
  </>
)
export default wrapper.withRedux(WrappedApp)

// function MyApp({ Component, pageProps }: AppProps) {
//   return (
//     <>
//       <GlobalStyles />
//       <Component {...pageProps} />;
//     </>
//   )
// }

// export default wrapper.withRedux(MyApp);
