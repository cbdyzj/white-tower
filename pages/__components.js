import styled from 'styled-components'
import Head from 'next/head'
import Avatar from '../components2/Avatar'
import Demo from '../components2/Demo'
import Pagination from '../components2/Pagination'
import LightPagination from '../components2/LightPagination'
import ContrastButton from '../components2/ContrastButton'
import TabButton from '../components2/TabButton'
import CountText from '../components2/CountText'
import CountLink from '../components2/CountLink'
import TextLink from '../components2/TextLink'
import LabelLink from '../components2/LabelLink'
import LightLink from '../components2/LightLink'
import NodeLink from '../components2/NodeLink'
import TopicReplyForm from '../components2/TopicReplyForm'

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

                <Demo title="TopicReplyForm">
                    <TopicReplyForm/>
                </Demo>

                <Demo title="NodeLink">
                    <NodeLink href="#">混沌海</NodeLink>
                    <NodeLink href="#">永暗之河</NodeLink>
                </Demo>

                <Demo title="LightLink">
                    <LightLink href="#">0 条未读提醒</LightLink>
                </Demo>
                <Demo title="LabelLink">
                    <LabelLink href="#">诡秘之主</LabelLink>
                </Demo>
                <Demo title="TextLink">
                    <div className="w-full">
                        <TextLink href="#" className="text-xs">佛尔思.沃尔是一名学徒途径的非凡者。她是一名塔罗会成员，代号“魔术师”</TextLink>
                    </div>
                    <div className="w-full">
                        <TextLink href="#" className="text-sm">佛尔思.沃尔是一名学徒途径的非凡者。她是一名塔罗会成员，代号“魔术师”</TextLink>
                    </div>
                    <div className="w-full">
                        <TextLink href="#" className="text-base">佛尔思.沃尔是一名学徒途径的非凡者。她是一名塔罗会成员，代号“魔术师”</TextLink>
                    </div>
                    <div className="w-full">
                        <TextLink href="#" className="text-base" typical>佛尔思.沃尔是一名学徒途径的非凡者。她是一名塔罗会成员，代号“魔术师”</TextLink>
                    </div>
                </Demo>
                <Demo title="CountLink">
                    <CountLink href="#">17</CountLink>
                </Demo>
                <Demo title="CountText">
                    <CountText>7</CountText>
                </Demo>
                <Demo title="Avatar">
                    <Avatar src={'/white-tower.svg'} size="s"/>
                    <Avatar src={'/white-tower.svg'} size="m"/>
                    <Avatar src={'/white-tower.svg'} size="l"/>
                </Demo>
                <Demo title="TabButton">
                    <TabButton current>读书</TabButton>
                    <TabButton>幻想</TabButton>
                </Demo>
                <Demo title="ContrastButton">
                    <ContrastButton className="text-xs">按钮-超小</ContrastButton>
                    <ContrastButton className="text-sm">按钮-小</ContrastButton>
                    <ContrastButton className="text-base">按钮-中</ContrastButton>
                    <ContrastButton className="text-base" current>按钮-中</ContrastButton>
                    <ContrastButton className="font-medium text-sm w-full">回复</ContrastButton>
                </Demo>
                <Demo title="Pagination">
                    <Pagination pageIndex={7} pageTotal={17}/>
                </Demo>
                <Demo title="LightPagination">
                    <LightPagination pageIndex={7} pageTotal={17}/>
                </Demo>
            </_ComponentGallery>
        </>
    )
}