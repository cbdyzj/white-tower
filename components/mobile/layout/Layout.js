import Head from 'next/head'
import t from '../../../i18n/t'
import Nav from './Nav'
import Main from './Main'
import Footer from './Footer'

export default function Layout(props) {
    return (
        <>
            <Head>
                <title>{props.title}</title>
                <meta name="description" content={t.WHITE_TOWER_DESCRIPTION}/>
                <link rel="icon" href={'/white-tower.svg'}/>
            </Head>
            <Nav/>
            <Main>{props.children}</Main>
            <Footer/>
        </>
    )
}