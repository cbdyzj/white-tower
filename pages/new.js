import { withDeviceDetection } from '../utils/ua'
import LayoutMobile from '../components/mobile/layout/Layout'
import Layout from '../components/layout/Layout'

import user_data from '../__test_data/user_data'

const title = '白塔阅读 › 创作新主题'

function NewNonMobile(props) {

    return (
        <Layout title={title}>

        </Layout>
    )

}

function NewMobile(props) {

    return (
        <LayoutMobile title={title}>

        </LayoutMobile>
    )
}

export default function New(props) {

    return props.isMobile ? (<NewMobile {...props}/>) : (<NewNonMobile {...props}/>)
}

export const getServerSideProps = withDeviceDetection(async (ctx) => {

    return {
        props: {
            userData: user_data,
        },
    }
})