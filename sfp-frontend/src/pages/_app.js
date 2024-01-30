import React from 'react'
import Head from 'next/head'
import { Provider } from 'react-redux'
import { useStore } from '../store'
import "../assets/styles/v2.css"
import "../assets/styles/Loader.css"
import Script from 'next/script'

const App = ({ Component, pageProps }) => {
    const store = useStore(pageProps.initalReduxState)
    return (
        <>
            <Provider store={ store }>
                <Head>
                    <title>
                        Succession Finance Planning Digital - KCS
                    </title>
                    <meta charset="utf-8" />
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                    <link rel="icon" href="favicon.ico" sizes="any" />
                    <link
                        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css"
                        rel="stylesheet"
                        integrity="sha384-4bw+/aepP/YC94hEpVNVgiZdgIC5+VKNBQNGCHeKRQN+PtmoHDEXuppvnDJzQIu9"
                        crossorigin="anonymous"
                    ></link>
                    <link
                        href='https://fonts.googleapis.com/css?family=Open Sans'
                        rel='stylesheet'
                    >
                    </link>
                    <link
                        rel="stylesheet"
                        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css"
                        integrity="sha512-xh6O/CkQoPOWDdYTDqeRdPCVd1SpvCA9XXcUnZS2FmJNp1coAFzvtCN9BmamE+4aHK8yyUHUSCcJHgXloTyT2A=="
                        crossorigin="anonymous" referrerpolicy="no-referrer"
                    />
                    <link
                        rel="stylesheet"
                        href="https://cdn.jsdelivr.net/npm/bootstrap-select@1.13.14/dist/css/bootstrap-select.min.css"
                    >
                    </link>

                </Head>
                <Component { ...pageProps } />
                <Script
                    src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.bundle.min.js"
                    integrity="sha384-HwwvtgBNo3bZJJLYd8oVXjrBZt8cqVSpeBNS5n7C8IVInixGAoxmnlMuBnhbgrkm"
                    crossorigin="anonymous"
                />
                <Script
                    src="https://cdn.jsdelivr.net/npm/bootstrap-select@1.13.14/dist/js/bootstrap-select.min.js"
                />

            </Provider>
        </>
    )
}

export default App