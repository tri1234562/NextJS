
import Link from 'next/link';
import Head from 'next/head';
import Router from 'next/router';
import NProgress from 'nprogress'


Router.onRouteChangeStart = url => {
    console.log(url);
    NProgress.start();
}

Router.onRouteChangeComplete = () => NProgress.done();
Router.onRouteChangeError = () => NProgress.done();

const layout = ({ children, title }) => {
    return (
        <div className="root">
        <Head>
            <title> This is A TEST NEXT JS</title>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css" />
        </Head>
            <header>
                <Link href='/'><a> Home </a></Link>
                <Link href='/about'><a> About </a></Link>
                <Link href="/something"><a>SomeThing</a></Link>
                <Link href="/blog"><a>Blog</a></Link>
            </header>
            <hr />


            <div><h1>{title}</h1> {children} </div>
            <hr />
            <footer> &copy; 2018. This is footer of the page </footer>


            <style jsx>{`
                .root{
                    display:flex;
                    justify-content:center;
                    align-items:center;
                    flex-direction:column;
                }
                header{
                    width:100%;
                    display:flex;
                    justify-content:space-around;
                    padding:1em;
                    font-size:1.2rem;
                    background:indigo;
                }
                header a{
                    color:darkgrey;
                    text-decoration:none;
                }
                header a:hover{
                    color:lightgrey;
                    font-weight:bold;
                }
                footer{
                    padding:1em;
                }
            `}
            </style>
            <style global jsx>{`
                body{
                    margin:0;
                    font-size:110%;
                    background:#f0f0f0;
                }
            `}
            </style>

        </div>
    )
}

export default layout;