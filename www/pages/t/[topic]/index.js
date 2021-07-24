import Layout from '../../../components/layout/Layout'
import LayoutMobile from '../../../components/mobile/layout/Layout'
import UserWidget from '../../../widgets/UserWidget'
import TopicReplyList from '../../../widgets/TopicReplyList'
import TopicReplyListMobile from '../../../widgets/mobile/TopicReplyList'
import TopicContentMobile from '../../../widgets/mobile/TopicContent'
import TopicReplyForm from '../../../components/TopicReplyForm'
import TopicReplyFormMobile from '../../../components/mobile/TopicReplyForm'
import TextLink from '../../../components/TextLink'
import TopicContent from '../../../widgets/TopicContent'
import { withDeviceDetection } from '../../../utils/ua'

import topic_1 from '../../../__test_data/topic_1'
import user_data from '../../../__test_data/user_data'

function TopicNonMobile(props) {
    const topic = props.topic
    const userData = props.userData

    const title = topic.title + ' - 白塔阅读'

    const aside = (
        <>
            <UserWidget userData={userData}/>
        </>
    )

    return (
        <Layout title={title} aside={aside}>
            <TopicContent topic={topic}/>
            <TopicReplyList style={{ marginTop: '20px' }} topic={topic}/>
            <TopicReplyForm style={{ marginTop: '20px' }}/>
            <div style={{
                marginTop: '20px', padding: 'var(--widget-padding)',
                borderRadius: '2px', backgroundColor: '#fff',
            }}>
                <TextLink className="text-sm">报告这个主题</TextLink>
            </div>
        </Layout>
    )
}

function TopicMobile(props) {
    const topic = props.topic

    const title = topic.title + ' - 白塔阅读'

    return (
        <LayoutMobile title={title}>
            <TopicContentMobile topic={topic}/>
            <TopicReplyListMobile topic={topic} style={{ marginTop: '5px' }}/>
            <TopicReplyFormMobile style={{ marginTop: '5px' }}/>
            <div style={{
                marginTop: '5px', padding: 'var(--widget-padding-sm)',
                borderRadius: '2px', backgroundColor: '#fff',
            }}>
                <TextLink className="text-sm">报告这个主题</TextLink>
            </div>
        </LayoutMobile>
    )
}

export default function Topic(props) {


    return props.isMobile ? (<TopicMobile {...props}/>) : (<TopicNonMobile {...props}/>)
}

export const getServerSideProps = withDeviceDetection(async (ctx) => {
    const topicId = ctx.query.topic

    return {
        props: {
            topic: topic_1,
            userData: user_data,
        },
    }
})
