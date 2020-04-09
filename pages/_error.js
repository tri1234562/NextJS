import React from 'react';
import Layout from '../components/layout'

const ErrorPage = (props) => (
    <Layout title='ERROR'>
        {props.errorCode 
        ? `Have errors when fetch data. Status code is: ${props.errorCode}` 
        : "Sorry, Can not find your page."}
    </Layout>
)
export default ErrorPage

