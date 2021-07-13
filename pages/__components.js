import styled from 'styled-components'
import Head from 'next/head'
import Avatar from '../components2/Avatar'
import Demo from '../components2/Demo'
import Pagination from '../components2/Pagination'
import PaginationLight from '../components2/PaginationLight'
import DarkLink from '../components2/DarkLink'
import TabButton from '../components2/TabButton'

const _ComponentGallery = styled.div`
  min-height: 100vh;
  max-width: 800px;
  margin: 0 auto;
  padding: 1rem;
`

export default function ComponentGallery(props) {
    return (
        <>
            <Head>
                <title>组件</title>
                <meta name="description" content="Component Gallery"/>
                <link rel="icon" href={'/white-tower.svg'}/>
            </Head>
            <_ComponentGallery>
                <h1 className="text-2xl">组件</h1>
                <Demo title="Avatar">
                    <Avatar src={'/white-tower.svg'} size="s"/>
                    <Avatar src={'/white-tower.svg'} size="m"/>
                    <Avatar src={'/white-tower.svg'} size="l"/>
                </Demo>
                <Demo title="TabButton">
                    <TabButton current>读书</TabButton>
                    <TabButton>幻想</TabButton>
                </Demo>
                <Demo title="DarkLink">
                    <div>
                        <DarkLink size="xs">链接-超小</DarkLink>
                        &nbsp;&nbsp;
                        <DarkLink size="s">链接-小</DarkLink>
                        &nbsp;&nbsp;
                        <DarkLink size="m">链接-中</DarkLink>
                        &nbsp;&nbsp;
                        <DarkLink current size="m">链接-中</DarkLink>
                        &nbsp;&nbsp;
                        <DarkLink size="l">链接-大</DarkLink>
                        &nbsp;&nbsp;
                        <DarkLink size="xl">链接-超大</DarkLink>
                    </div>
                </Demo>
                <Demo title="Pagination">
                    <Pagination pageIndex={7} pageTotal={17}/>
                </Demo>
                <Demo title="PaginationLight">
                    <PaginationLight pageIndex={7} pageTotal={17}/>
                </Demo>
            </_ComponentGallery>
        </>
    )
}