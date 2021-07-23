import styled from 'styled-components'
import Head from 'next/head'
import Nav from './Nav'
import Footer from './Footer'
import t from '../../i18n/t'

const _Body = styled.div`
  display: flex;
  min-height: calc(100vh - 48px - 100px);
  max-width: 1080px;
  margin: 0 auto;
  padding: 20px;

  & > main {
    flex: auto;
  }

  & > aside {
    flex: none;
    width: 270px;
    margin-left: 20px;
  }

  @media (max-width: 980px) {
    & > aside {
      display: none;
    }
  }
`

export default function Layout(props) {
    return (
        <>
            <Head>
                <title>{props.title}</title>
                <meta name="description" content={t.WHITE_TOWER_DESCRIPTION}/>
                <link rel="icon" href={'/white-tower.svg'}/>
            </Head>
            <Nav/>
            <_Body>
                <main>{props.children}</main>
                {props.aside && <aside>{props.aside}</aside>}
            </_Body>
            <Footer/>
        </>
    )
}