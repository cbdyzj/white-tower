import styled from 'styled-components'
import Head from 'next/head'
import Avatar from '../components/Avatar'
import Demo from '../components/Demo'
import Pagination from '../components/Pagination'
import PaginationMobile from '../components/mobile/Pagination'
import ContrastButton from '../components/ContrastButton'
import TabButton from '../components/TabButton'
import CountText from '../components/CountText'
import CountLink from '../components/CountLink'
import TextLink from '../components/TextLink'
import LabelLink from '../components/LabelLink'
import NodeLink from '../components/NodeLink'
import TopicReplyForm from '../components/TopicReplyForm'
import TopicReplyFormMobile from '../components/mobile/TopicReplyForm'
import TopicListItemMobile from '../components/mobile/TopicListItem'
import TopicListItem from '../components/TopicListItem'
import TopicCreateForm from '../components/TopicCreateForm'
import UnreadReminder, { NoUnread } from '../components/UnreadReminder'
import TopicTitleInput from '../components/TopicTitleInput'
import TopicContentInput from '../components/TopicContentInput'
import TopicReplyEmpty from '../components/TopicReplyEmpty'
import { detectMobileDevice } from '../utils/ua'
import TopicReplyListItemMobile from '../components/mobile/TopicReplyListItem'

import topic_list from '../__test_data/topic_list'
import topic_1 from '../__test_data/topic_1'

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

                <Demo title="TopicReplyListItem" platform="Mobile">
                    <div className="w-full">
                        <TopicReplyListItemMobile index={1} item={topic_1.replyList[0]}/>
                        <TopicReplyListItemMobile className="top-border" index={2} item={topic_1.replyList[1]}/>
                        <TopicReplyListItemMobile className="top-border" index={3} item={topic_1.replyList[2]}/>
                        <TopicReplyListItemMobile className="top-border" index={4} item={topic_1.replyList[3]}/>
                    </div>
                </Demo>

                <Demo title="TopicListItem">
                    <div className="w-full">
                        <TopicListItem showNodeLabel item={topic_list[0]}/>
                        <TopicListItem className="top-border" item={topic_list[1]}/>
                    </div>
                </Demo>

                <Demo title="TopicListItem" platform="Mobile">
                    <div className="w-full">
                        <TopicListItemMobile showNodeLabel item={topic_list[0]}/>
                        <TopicListItemMobile className="top-border" item={topic_list[1]}/>
                    </div>
                </Demo>

                <Demo title="TopicReplyForm" platform="Mobile">
                    <TopicReplyFormMobile/>
                </Demo>

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
                    <Avatar src={'/white-tower.svg'} size="xs"/>
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
                <Demo title="Pagination" platform="Mobile">
                    <PaginationMobile pageIndex={7} pageTotal={17}/>
                </Demo>
            </_ComponentGallery>
        </>
    )
}

export async function getServerSideProps(ctx) {
    const ua = ctx.req.headers['user-agent']
    const isMobile = detectMobileDevice(ua)

    return {
        props: {},
    }
}