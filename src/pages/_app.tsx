import Head from "next/head";
import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";

import { theme, globalStyle as GlobalStyle } from "../styled";
const CustomApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
};

export default CustomApp;
