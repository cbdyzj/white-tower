import Layout from '../../../components_deprecated/layout/Layout'
import Aside from '../../../components_deprecated/layout/Aside'
import TopicContent from '../../../components_deprecated/topic/TopicContent'
import ReplyTopicInput from '../../../components_deprecated/topic/ReplyTopicInput'
import TopicReply from '../../../components_deprecated/topic/TopicReply'

import topic_1 from '../../../__test_data/topic_1'
import user_data from '../../../__test_data/user_data'

export default function Index(props) {

    const topic = props.topic
    const userData = props.userData

    const title = topic.title + ' - 白塔阅读'

    return (
        <Layout title={title} aside={<Aside userData={userData}/>}>
            <TopicContent topic={topic}/>
            <TopicReply topic={topic}/>
            <ReplyTopicInput/>
        </Layout>
    )
}

export async function getServerSideProps(ctx) {

    const topicId = ctx.query.topic

    return {
        props: {
            topic: topic_1,
            userData: user_data,
        },
    }
}