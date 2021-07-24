import Layout from '../../../components/layout/Layout'
import LayoutMobile from '../../../components/mobile/layout/Layout'
import NodeCard from '../../../widgets/NodeCard'
import NodeCardMobile from '../../../widgets/mobile/NodeCard'
import NodeTopicList from '../../../widgets/NodeTopicList'
import UserWidget from '../../../widgets/UserWidget'
import TopicCreateForm from '../../../widgets/TopicCreateForm'
import TopicListItemMobile from '../../../components/mobile/TopicListItem'
import PaginationMobile from '../../../components/mobile/Pagination'
import { withDeviceDetection } from '../../../utils/ua'

import topic_list from '../../../__test_data/topic_list'
import user_data from '../../../__test_data/user_data'
import node_nav_list from '../../../__test_data/node_nav_list'

const title = '白塔阅读 › 读书'

function NodeNonMobile(props) {

    const userData = props.userData
    const topicList = props.topicList

    const aside = (
        <>
            <UserWidget userData={userData}/>
        </>
    )

    return (
        <Layout title={title} aside={aside}>
            <NodeCard/>
            <NodeTopicList style={{ marginTop: '20px' }} topicList={topicList}/>
            <TopicCreateForm style={{ marginTop: '20px' }}/>
        </Layout>
    )
}

function NodeMobile(props) {

    const topicList = props.topicList

    return (
        <LayoutMobile title={title}>
            <NodeCardMobile/>
            <div style={{ borderRadius: '2px', marginTop: '5px' }} className="bg-white shadow">
                {topicList.map(it => (
                    <TopicListItemMobile key={it.topicId} className="top-border" item={it}/>
                ))}
                <PaginationMobile className="top-border" pageIndex={7} pageTotal={20}/>
            </div>
        </LayoutMobile>
    )
}

export default function Node(props) {

    return props.isMobile ? (<NodeMobile {...props}/>) : (<NodeNonMobile {...props}/>)
}

export const getServerSideProps = withDeviceDetection(async (ctx) => {

    const nodeCode = ctx.query.node

    return {
        props: {
            topicList: topic_list,
            userData: user_data,
        },
    }
})
