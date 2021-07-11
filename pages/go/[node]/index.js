import Layout from '../../../components/layout/Layout'
import NodeCard from '../../../components/node/NodeCard'
import Aside from '../../../components/layout/Aside'
import NodeTopicList from '../../../components/node/NodeTopicList'

import topic_list from '../../../__test_data__/topic_list'
import user_data from '../../../__test_data__/user_data'

export default function Index(props) {

    const node = props.node
    const topicList = props.topicList
    const userData = props.userData
    const nodeName = '分享发现'

    const title = '白塔阅读 › ' + nodeName

    return (
        <Layout title={title} aside={<Aside userData={userData}/>}>
            <NodeCard nodeName={nodeName}/>
            <NodeTopicList topicList={topicList}/>
        </Layout>
    )
}

export async function getServerSideProps(ctx) {
    const { node } = ctx.query
    return {
        props: {
            node,
            topicList: topic_list,
            userData: user_data,
        },
    }
}