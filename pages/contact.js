import React from 'react'
import ContactForm from '../components/contact/contact-form'
import Head from 'next/head'

const Contact = () => {
    return (
        <>
            <Head>
                <title>Max&apos;s Blog</title>
                <meta name='description' content="Send me messages" />
            </Head>
            <ContactForm />
        </>

    )
}

export default Contact