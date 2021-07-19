import Layout from '../components/layout/Layout'
import LayoutMobile from '../components/mobile/layout/Layout'
import UserWidget from '../widgets/UserWidget'
import IndexTopicList from '../widgets/IndexTopicList'
import IndexTopicListMobile from '../widgets/mobile/IndexTopicList'
import { detectMobileDevice } from '../utils/ua'

import t from '../i18n/t'

import topic_list from '../__test_data/topic_list'
import user_data from '../__test_data/user_data'
import node_nav_list from '../__test_data/node_nav_list'
import NodeNav from '../widgets/NodeNav'

const title = `${t.WHITE_TOWER_READING} - ${t.HOME_PAGE}`

function IndexNonMobile(props) {

    const userData = props.userData
    const topicList = props.topicList
    const nodeNavList = props.nodeNavList

    const main = (
        <>
            <IndexTopicList topicList={topicList}/>
            <NodeNav style={{ marginTop: '20px' }} nodeNavList={nodeNavList}/>
        </>
    )
    const aside = (
        <>
            <UserWidget userData={userData}/>
        </>
    )

    return (
        <Layout title={title} main={main} aside={aside}/>
    )
}

function IndexMobile(props) {

    const topicList = props.topicList
    const nodeNavList = props.nodeNavList

    const main = (
        <>
            <IndexTopicListMobile topicList={topicList}/>
            <NodeNav style={{ marginTop: '5px' }} nodeNavList={nodeNavList} showArrow/>
        </>
    )

    return (
        <LayoutMobile title={title} main={main}/>
    )
}

export default function Index(props) {
    if (props.isMobile) {
        return (<IndexMobile {...props}/>)
    }
    return (<IndexNonMobile {...props}/>)
}

export async function getServerSideProps(ctx) {

    const ua = ctx.req.headers['user-agent']
    const isMobile = detectMobileDevice(ua)

    return {
        props: {
            topicList: topic_list,
            nodeNavList: node_nav_list,
            userData: user_data,
            isMobile,
        },
    }
}
