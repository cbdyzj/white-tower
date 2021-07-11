import Layout from '../components/layout/Layout'
import Aside from '../components/layout/Aside'

import t from '../i18n/t'

import topic_list from '../__test_data__/topic_list'
import user_data from '../__test_data__/user_data'
import IndexTopicList from '../components/index/IndexTopicList'

export default function Index(props) {

    const title = `${t.WHITE_TOWER_READING} - ${t.HOME_PAGE}`
    const userData = props.userData
    const topicList = props.topicList

    return (
        <Layout title={title} aside={<Aside userData={userData}/>}>
            <IndexTopicList topicList={topicList}/>
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
