import { PropTypes } from 'prop-types'
import Head from 'next/head'
import { Provider } from 'next-auth/client'
import { ThemeProvider } from '@mui/material/styles'
import { CssBaseline } from '@mui/material'
import { CacheProvider } from '@emotion/react'
import createEmotionCache from '../src/createEmotionCache'
import { ToastyProvider } from '../src/contexts/Toasty'
import CheckAuth from '../'
import theme from '../src/theme'

const clientSideEmotionCache = createEmotionCache()

export default function MyApp (props) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <title>Second-Hand</title>
        <meta name="viewport" content="minimun-scale-1, initial-scale-1, width-device-width" />
      </Head>
      <Provider session={pageProps.session}>
        <ThemeProvider theme={theme}>
          <ToastyProvider>
            <CssBaseline />
            {
              Component.requireAuth
              ? 'Verify if user is logged'
              : <Component {...pageProps} />
            }
          </ToastyProvider>
        </ThemeProvider>
      </Provider>
    </CacheProvider>
)
}

MyApp.propTypes = {
    Component: PropTypes.func.isRequired,
    pageProps: PropTypes.object.isRequired,
}