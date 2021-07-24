import { createGlobalStyle } from 'styled-components'
import '../styles/globals.css'
import '../styles/variables.css'
import '../styles/utilities.css'
import '../styles/text.css'
import '../styles/color.css'

const GlobalStyle = createGlobalStyle`

  body > div#__next {
    background-color: #dedede;
  }
`

export default function WhiteTowerApp({ Component, pageProps }) {

    return (
        <>
            <GlobalStyle/>
            <Component {...pageProps} />
        </>
    )
}
