import Layout from '../components/layout/Layout'

import topic_list from '../__test_data__/topic_list'
import user_data from '../__test_data__/user_data'
import Aside from '../components/layout/Aside'
import RecentTopicList from '../components/recent/RecentTopicList'

export default function Recent(props) {

    const title = '白塔阅读 › 最近的主题'

    const topicList = props.topicList
    const userData = props.userData

    return (
        <Layout title={title} aside={<Aside userData={userData}/>}>
            <RecentTopicList topicList={topicList}/>
        </Layout>
    )
}

export async function getServerSideProps(ctx) {

    return {
        props: {
            topicList: topic_list,
            userData: user_data,
        },
    }
}