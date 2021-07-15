import Layout from '../../../components_deprecated/layout/Layout'
import NodeCard from '../../../components_deprecated/node/NodeCard'
import Aside from '../../../components_deprecated/layout/Aside'
import NodeTopicList from '../../../components_deprecated/node/NodeTopicList'

import topic_list from '../../../__test_data/topic_list'
import user_data from '../../../__test_data/user_data'
import NewTopicInput from '../../../components_deprecated/node/NewTopicInput'

export default function Index(props) {

    const topicList = props.topicList
    const userData = props.userData
    const nodeName = '读书'

    const title = '白塔阅读 › ' + nodeName

    return (
        <Layout title={title} aside={<Aside userData={userData}/>}>
            <NodeCard nodeName={nodeName}/>
            <NodeTopicList topicList={topicList}/>
            <NewTopicInput/>
        </Layout>
    )
}

export async function getServerSideProps(ctx) {

    const nodeCode = ctx.query.node

    return {
        props: {
            topicList: topic_list,
            userData: user_data,
        },
    }
}