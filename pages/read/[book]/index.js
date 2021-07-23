import Layout from '../../../components/layout/Layout'

export default function Index(props) {

    const bookId = props.bookId

    const main = (
        <div>
            Book: {bookId}
        </div>
    )

    return (
        <Layout title={'白塔阅读 - 书籍'} main={main}/>
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