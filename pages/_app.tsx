import React from 'react'
import '../styles/globals.css'
import '@fortawesome/fontawesome-svg-core/styles.css'
import { config } from '@fortawesome/fontawesome-svg-core'
// Tell Font Awesome to skip adding the CSS automatically
// since it's already imported above
config.autoAddCss = false

interface Props {
  Component: any
  pageProps: any
}

const MyApp: React.FunctionComponent<Props> = ({ Component, pageProps }) => {
  return <Component {...pageProps} />
}

export default MyApp
