import Head from 'next/head'
import Footer from './Footer'
import Nav from './Nav'
import Main from './Main'
import t from '../../i18n/t'

export default function Layout(props) {

    return (
        <>
            <Head>
                <title>{props.title}</title>
                <meta name="description" content={t.WHITE_TOWER_DESCRIPTION}/>
                <link rel="icon" href={'/white-tower.svg'}/>
            </Head>
            <Nav/>
            <Main aside={props.aside}>
                {props.children}
            </Main>
            <Footer/>
        </>
    )
}