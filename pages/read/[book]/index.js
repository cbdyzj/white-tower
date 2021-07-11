import Layout from '../../../components/layout/Layout'

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
    const { book } = ctx.query
    return {
        props: {
            bookId: book,
        },
    }
}