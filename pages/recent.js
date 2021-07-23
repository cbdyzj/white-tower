import Layout from '../components/layout/Layout'
import UserWidget from '../widgets/UserWidget'
import { withDeviceDetection } from '../utils/ua'

import topic_list from '../__test_data/topic_list'
import user_data from '../__test_data/user_data'

export default function Recent(props) {

    const title = '白塔阅读 › 最近的主题'

    const topicList = props.topicList
    const userData = props.userData

    const aside = (
        <>
            <UserWidget userData={userData}/>
        </>
    )

    return (
        <Layout title={title} aside={aside}>
            Recent
        </Layout>
    )
}

export const getServerSideProps = withDeviceDetection(async (ctx) => {
    return {
        props: {
            topicList: topic_list,
            userData: user_data,
        },
    }
})
