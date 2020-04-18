import Layout from '../components/layout'
import { withRouter } from 'next/router'
const Post = (props) => {
    const { router } = props
    return (
        <Layout title={router.query.title}>
            this is just a test post to show content of post component
        </Layout>
    )
}

export default withRouter(Post)