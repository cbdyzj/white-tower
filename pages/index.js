import Head from 'next/head'
import styled from 'styled-components'

const TitleContainer = styled.div`
  position: relative;
  text-align: center;
  top: 25vh;
  font-weight: 600;
  letter-spacing: -0.5px;
  font-size: 72px;

  & > span {
    font-size: 72px;
    background: linear-gradient(90deg, #f87171, #4ade80, #60a5fa);
    -webkit-background-clip: text;
    //noinspection CssInvalidPropertyValue
    background-clip: text;
    color: transparent;
  }
`

export default function Index(props) {
    return (
        <>
            <Head>
                <title>White Tower</title>
                <meta name="description" content="White Tower" />
                <link rel="icon" href={'/white-tower.svg'} />
            </Head>
            <TitleContainer>
                <span>White Tower</span>
            </TitleContainer>
            <footer>
            </footer>
        </>
    )
}
