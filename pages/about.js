
import REACT, { useState, useEffect } from 'react';
import Link from 'next/link'
import fetch from 'isomorphic-unfetch'
import Layout from '../components/layout';
import ErrorPage from './_error';

const about = (props) => {
    const [errorCode, setStatus] = useState();
    const [data, setData] = useState([]);
    const [url, setUrl] = useState('https://api.github.com/users/tri1234562');

    const fetchData = async (urlFetch) => {
        let res = await fetch(urlFetch);
        setStatus(res.status)
        let data = await res.json();
        setData(data);
    }
    
    useEffect(() => {
        fetchData(url);
    }, [url])
    return (
        errorCode !== 200 
        ? <ErrorPage errorCode={errorCode} /> 
        : <Layout title="ABOUT"> 
            <Link href='/' > Name: </Link>
            { data.name ? data.name : 'No Name'}
            <div><img width='70px' height='70px' src={data.avatar_url} alt='Images wrong' /></div>
        </Layout>)
}

export default about;