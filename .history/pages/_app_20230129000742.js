import { PropTypes } from 'prop-types'
import Head from 'next/head'
import { ThemeProvider } from '@mui/material/styles'
import { CssBaseline } from '@mui/material'
import { CacheProvider } from '@emotion/react'
import createEmotionCache from '../src/createEmotionCache'
import { ToastyProvider } from '../src/contexts/Toasty'
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
      <ThemeProvider theme={theme}>
        <
        <CssBaseline />
        <Component {...pageProps} />
    </ThemeProvider>
    </CacheProvider>
)
}

MyApp.propTypes = {
    Component: PropTypes.func.isRequired,
    pageProps: PropTypes.object.isRequired,
}