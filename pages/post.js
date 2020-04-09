import Layout from '../components/layout'
const Post = (props) => {
    
    return (
        <Layout title={props.url.query.title}>
            this is just a test post to show content of post component
        </Layout>
    )
}

export default Post