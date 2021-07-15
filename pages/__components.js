import styled from 'styled-components'
import Head from 'next/head'
import Avatar from '../components/Avatar'
import Demo from '../components/Demo'
import Pagination from '../components/Pagination'
import LightPagination from '../components/LightPagination'
import ContrastButton from '../components/ContrastButton'
import TabButton from '../components/TabButton'
import CountText from '../components/CountText'
import CountLink from '../components/CountLink'
import TextLink from '../components/TextLink'
import LabelLink from '../components/LabelLink'
import NodeLink from '../components/NodeLink'
import TopicReplyForm from '../components/TopicReplyForm'
import TopicCreateForm from '../components/TopicCreateForm'
import UnreadReminder, { NoUnread } from '../components/UnreadReminder'
import TopicTitleInput from '../components/TopicTitleInput'
import TopicContentInput from '../components/TopicContentInput'
import TopicReplyEmpty from '../components/TopicReplyEmpty'

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

                <Demo title="TopicReplyEmpty">
                    <TopicReplyEmpty/>
                </Demo>
                <Demo title="TopicContentInput">
                    <TopicContentInput/>
                </Demo>

                <Demo title="TopicTitleInput">
                    <TopicTitleInput/>
                </Demo>

                <Demo title="UnreadReminder">
                    <UnreadReminder href="#" count={2}/>
                    <NoUnread href="#"/>
                </Demo>

                <Demo title="TopicCreateForm">
                    <TopicCreateForm/>
                </Demo>

                <Demo title="TopicReplyForm">
                    <TopicReplyForm/>
                </Demo>

                <Demo title="NodeLink">
                    <NodeLink href="#">混沌海</NodeLink>
                    <NodeLink href="#">永暗之河</NodeLink>
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
                    <TabButton>文摘</TabButton>
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