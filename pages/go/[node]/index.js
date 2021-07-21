import Layout from '../../../components/layout/Layout'
import LayoutMobile from '../../../components/mobile/layout/Layout'
import NodeCard from '../../../widgets/NodeCard'
import NodeTopicList from '../../../widgets/NodeTopicList'
import UserWidget from '../../../widgets/UserWidget'
import TopicCreateForm from '../../../widgets/TopicCreateForm'
import TopicListItemMobile from '../../../components/mobile/TopicListItem'
import PaginationMobile from '../../../components/mobile/Pagination'
import { detectMobileDevice } from '../../../utils/ua'

import topic_list from '../../../__test_data/topic_list'
import user_data from '../../../__test_data/user_data'

const title = '白塔阅读 › 读书'

function NodeNonMobile(props) {

    const userData = props.userData
    const topicList = props.topicList

    const main = (
        <>
            <NodeCard/>
            <NodeTopicList style={{ marginTop: '20px' }} topicList={topicList}/>
            <TopicCreateForm style={{ marginTop: '20px' }}/>
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

function NodeMobile(props) {

    const userData = props.userData
    const topicList = props.topicList

    const main = (
        <>
            <NodeCard/>
            <div style={{ borderRadius: '2px', marginTop: '5px' }} className="bg-white shadow">
                {topicList.map(it => (
                    <TopicListItemMobile key={it.topicId} className="top-border" item={it}/>
                ))}
                <PaginationMobile className="top-border" pageIndex={7} pageTotal={20}/>
            </div>
        </>
    )

    return (
        <LayoutMobile title={title} main={main}/>
    )
}

export default function Node(props) {

    const topicList = props.topicList
    const userData = props.userData

    if (props.isMobile) {
        return (<NodeMobile {...props}/>)
    }
    return (<NodeNonMobile {...props}/>)
}

export async function getServerSideProps(ctx) {

    const ua = ctx.req.headers['user-agent']
    const isMobile = detectMobileDevice(ua)

    const nodeCode = ctx.query.node

    return {
        props: {
            topicList: topic_list,
            userData: user_data,
            isMobile,
        },
    }
}