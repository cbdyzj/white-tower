import Layout from '../components/layout/Layout'
import Aside from '../components/layout/Aside'
import IndexTopicList from '../components/index/IndexTopicList'
import NodeNav from '../components/index/NodeNav'
import t from '../i18n/t'

import topic_list from '../__test_data__/topic_list'
import user_data from '../__test_data__/user_data'
import node_nav_list from '../__test_data__/node_nav_list'

export default function Index(props) {

    const title = `${t.WHITE_TOWER_READING} - ${t.HOME_PAGE}`

    const userData = props.userData
    const topicList = props.topicList
    const nodeNavList = props.nodeNavList

    return (
        <Layout title={title} aside={<Aside userData={userData}/>}>
            <IndexTopicList topicList={topicList}/>
            <NodeNav nodeNavList={nodeNavList}/>
        </Layout>
    )
}

export async function getServerSideProps(ctx) {

    return {
        props: {
            topicList: topic_list,
            nodeNavList: node_nav_list,
            userData: user_data,
        },
    }
}
