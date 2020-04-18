import { useState, useEffect } from 'react';
import Layout from '../components/layout';
import Link from 'next/link';

const Blog = (props) => {
    const links = ['angular', 'react', 'vuejs'];
    function RenderPostLink (slug, postname) {
        return (<><li><Link as={slug+'-post'} href={`/post?title=${postname}`}><a>{postname} post</a></Link></li></>)
    }
    return(
        <>
        <Layout title='BLOG'>
            <ul>
                {links.map(item => RenderPostLink(item,item))}
            </ul>
        </Layout></>
    )
}
export default Blog
