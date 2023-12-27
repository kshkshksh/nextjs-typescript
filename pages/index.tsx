import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import homeStyles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Kim&#039;s blog </title>
      </Head>
      <section className="{homeStyles.headingMd">
        <p>[Kim Seunghun Introduction]</p>
        <p>
          (This is a website)
        </p>
      </section>
      <section className="{`${homeStyles.headingMd} ${homeStyle.padding1px}">
        <h2 className={homeStyles.headingLg}>blog</h2>
        <ul className={homeStyles.list}>

        </ul>
      </section>


    </div>
  );
};

export default Home;
