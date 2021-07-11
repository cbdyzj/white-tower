import Layout from '../../components/Layout/Layout'
import NodeCard from '../../components/NodeCard'
import Aside from '../../components/Layout/Aside'
import NodeTopicList from '../../components/NodeTopicList'

import topic_list from '../../__test_data__/topic_list'
import user_data from '../../__test_data__/user_data'

export default function Node(props) {

    const node = props.node
    const topicList = props.topicList
    const userData = props.userData
    const nodeName = '分享发现'

    return (
        <Layout aside={<Aside userData={userData}/>}>
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