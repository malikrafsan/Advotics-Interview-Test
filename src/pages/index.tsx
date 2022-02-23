import type { NextPage } from "next";
import Head from "next/head";
import MainComponent from "../components/home/MainComponent";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Advotics Test</title>
        <meta
          name="description"
          content="Developed for advotics interview test"
        />
        <link
          rel="icon"
          href="https://www.advotics.com/wp-content/uploads/2019/07/advotics-favicon-optimize.png"
          sizes="32x32"
        />
        <link
          rel="icon"
          href="https://www.advotics.com/wp-content/uploads/2019/07/advotics-favicon-optimize.png"
          sizes="192x192"
        />
      </Head>

      <MainComponent />
    </div>
  );
};

export default Home;
