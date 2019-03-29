

import Document, { Main, Head, NextScript } from 'next/document';

class MyDocument extends Document {
    render() {
        return (
            <html lang="en" >
                <Head>
                    <meta name="desciption" content="Just a test, every will be fine" />
                    <meta name="viewport" content="width=device-width" />
                    <meta name="robots" content="noindex, nofollow" />
                    <meta charSet="utf-8" />
                    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css" />
                    <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet"></link>
                    <link href="https://fonts.googleapis.com/css?family=Germania+One" rel="stylesheet"></link>
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
                <style global jsx>{`
                body{
                    font-family: 'Roboto', sans-serif;
                }
            `}</style>
            </html>
        )
    }
}

export default MyDocument;