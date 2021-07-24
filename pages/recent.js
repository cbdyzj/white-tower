import Layout from '../components/layout/Layout'
import LayoutMobile from '../components/mobile/layout/Layout'
import UserWidget from '../widgets/UserWidget'
import RecentTopicList from '../widgets/RecentTopicList'
import RecentTopicListMobile from '../widgets/mobile/RecentTopicList'
import { withDeviceDetection } from '../utils/ua'

import topic_list from '../__test_data/topic_list'
import user_data from '../__test_data/user_data'

const title = '白塔阅读 › 最近的主题'

function RecentNonMobile(props) {

    const topicList = props.topicList
    const userData = props.userData

    const aside = (
        <>
            <UserWidget userData={userData}/>
        </>
    )

    return (
        <Layout title={title} aside={aside}>
            <RecentTopicList topicList={topicList}/>
        </Layout>
    )
}

function RecentMobile(props) {

    const topicList = props.topicList
    const userData = props.userData

    return (
        <LayoutMobile title={title}>
            <RecentTopicListMobile topicList={topicList}/>
        </LayoutMobile>
    )
}

export default function Recent(props) {

    return props.isMobile ? (<RecentMobile {...props}/>) : (<RecentNonMobile {...props}/>)
}

export const getServerSideProps = withDeviceDetection(async (ctx) => {
    return {
        props: {
            topicList: topic_list,
            userData: user_data,
        },
    }
})
