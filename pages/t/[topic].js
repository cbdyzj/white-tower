import Layout from '../../components/Layout/Layout'
import Aside from '../../components/Layout/Aside'
import TopicContent from '../../components/TopicContent'
import TopicReplyInput from '../../components/TopicReplyInput'
import TopicReply from '../../components/TopicReply'

import topic_1 from '../../__test_data__/topic_1'
import user_data from '../../__test_data__/user_data'

export default function Topic(props) {

    const topic = props.topic
    const userData = props.userData

    return (
        <Layout aside={<Aside userData={userData}/>}>
            <TopicContent topic={topic}/>
            <TopicReply topic={topic}/>
            <TopicReplyInput/>
        </Layout>
    )
}

export async function getServerSideProps(ctx) {
    const { topic } = ctx.query
    const topicId = topic

    return {
        props: {
            topic: topic_1,
            userData: user_data,
        },
    }
}