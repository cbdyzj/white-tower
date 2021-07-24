import Layout from '../components/layout/Layout'
import LayoutMobile from '../components/mobile/layout/Layout'
import UserWidget from '../widgets/UserWidget'
import IndexTopicList from '../widgets/IndexTopicList'
import IndexTopicListMobile from '../widgets/mobile/IndexTopicList'
import NodeNav from '../widgets/NodeNav'
import { withDeviceDetection } from '../utils/ua'

import t from '../i18n/t'

import topic_list from '../__test_data/topic_list'
import user_data from '../__test_data/user_data'
import node_nav_list from '../__test_data/node_nav_list'

const title = `${t.WHITE_TOWER_READING} - ${t.HOME_PAGE}`

function IndexNonMobile(props) {

    const userData = props.userData
    const topicList = props.topicList
    const nodeNavList = props.nodeNavList

    const aside = (
        <>
            <UserWidget userData={userData}/>
        </>
    )

    return (
        <Layout title={title} aside={aside}>
            <IndexTopicList topicList={topicList}/>
            <NodeNav style={{ marginTop: '20px' }} nodeNavList={nodeNavList}/>
        </Layout>
    )
}

function IndexMobile(props) {

    const topicList = props.topicList
    const nodeNavList = props.nodeNavList

    return (
        <LayoutMobile title={title}>
            <IndexTopicListMobile topicList={topicList}/>
            <NodeNav style={{ marginTop: '5px' }} nodeNavList={nodeNavList} showArrow/>
        </LayoutMobile>
    )
}

export default function Index(props) {

    return props.isMobile ? (<IndexMobile {...props}/>) : (<IndexNonMobile {...props}/>)
}

export const getServerSideProps = withDeviceDetection(async (ctx) => {
    return {
        props: {
            topicList: topic_list,
            nodeNavList: node_nav_list,
            userData: user_data,
        },
    }
})

