import Layout from '../../../components_deprecated/layout/Layout'

export default function Index(props) {

    const bookId = props.bookId

    return (
        <Layout>
            <div style={{ padding: '1rem', minHeight: '80vh' }}>
                Book: {bookId}
            </div>
        </Layout>
    )
}

export async function getServerSideProps(ctx) {

    const bookId = ctx.query.book

    return {
        props: {
            bookId,
        },
    }
}