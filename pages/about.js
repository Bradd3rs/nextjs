import React from "react";
import Link from "next/link";
import Header from "../components/header";
import Layout from '../components/Layout';

function AboutPage({ isServer }) {

  return (
    <Layout>
      <Header />
      <section>
        <p>
          This is another page of the SSR example, you accessed it{" "}
          <strong>{isServer ? "server" : "client"} side</strong>.
        </p>
        <p>
          You can reload to see how the page change.
        </p>
        <Link href="/">
          <a>Go to Home</a>
        </Link>
      </section>
    </Layout>
  );
}

AboutPage.getInitialProps = async () => {
  const isServer = typeof window === "undefined";
  return { isServer };
}

export default AboutPage;