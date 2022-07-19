import * as React from 'react';
import Head from 'next/head';

type Props = {
    title: string;
    description: string;
}

const Helmet = ({ title, description }: Props) => (
    <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="author" content="Jeffrey Helder" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
    </Head>
);

export default Helmet;