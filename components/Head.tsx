import * as React from "react";
import Head from "next/head";

type Props = {
  title: string;
  description: string;
};

const Helmet = ({ title, description }: Props) => (
  <Head>
    <title>{title}</title>
    <meta name="description" content={description} />
  </Head>
);

export default Helmet;
