import type { ReactElement, ReactNode } from 'react';
import type { NextPage } from 'next';
import type { AppProps } from 'next/app';

import * as React from 'react';
import Head from 'next/head';
import { CacheProvider, EmotionCache } from '@emotion/react';
import { ThemeProvider, CssBaseline } from '@mui/material';

// Inter font
import '@fontsource/inter/300.css';
import '@fontsource/inter/400.css';
import '@fontsource/inter/500.css';
import '@fontsource/inter/700.css';

import createEmotionCache from '../utils/createEmotionCache';
import theme from '../theme';

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

export type AppPropsWithLayout = AppProps & {
  emotionCache?: EmotionCache;
  Component: NextPageWithLayout;
};

const clientSideEmotionCache = createEmotionCache();

const MyApp: React.FunctionComponent<AppPropsWithLayout> = (props) => {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {getLayout(<Component {...pageProps} />)}
      </ThemeProvider>
    </CacheProvider>
  );
};

export default MyApp;
