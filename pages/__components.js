import styled from 'styled-components'
import Head from 'next/head'
import Avatar from '../components2/Avatar'
import Demo from '../components2/Demo'
import Pagination from '../components2/Pagination'
import PaginationLight from '../components2/PaginationLight'
import LinkButton from '../components2/LinkButton'

const _ComponentGallery = styled.div`
  min-height: 100vh;
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
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
                <h1 className="text-2xl">组件集</h1>
                <Demo title="Avatar">
                    <Avatar src={'/white-tower.svg'} size="s"/>
                    <Avatar src={'/white-tower.svg'} size="m"/>
                    <Avatar src={'/white-tower.svg'} size="l"/>
                </Demo>
                <Demo title="LinkButton">
                    <LinkButton size="xs">链接-超小</LinkButton>
                    <LinkButton size="s">按钮-小</LinkButton>
                    <LinkButton size="m">按钮-中</LinkButton>
                    <LinkButton size="l">按钮-大</LinkButton>
                    <LinkButton size="xl">按钮-超大</LinkButton>
                </Demo>
                <Demo title="Pagination">
                    <Pagination pageIndex={7} pageTotal={120}/>
                </Demo>
                <Demo title="PaginationLight">
                    <PaginationLight pageIndex={2} total={17}/>
                </Demo>
            </_ComponentGallery>
        </>
    )
}