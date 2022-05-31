import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import JournalIcon from "../public/journal-icon";
import WavesIcon from "../public/waves";
import WateringIcon from "../public/watering-icon";

const Home: NextPage = () => {
  return (
    <>
      <div className={styles.container}>
        <Head>
          <title>Create Next App</title>
          <meta name="description" content="My Dashboard" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
      </div>
      <main className={styles.main}>
        <section className={styles.iconContainer}>
          <span className={styles.iconWrapper}>
            <JournalIcon />
          </span>
          <span className={styles.iconWrapper}>
            <WavesIcon />
          </span>
          <span className={styles.iconWrapper}>
            <WateringIcon />
          </span>
        </section>
      </main>
    </>
  );
};

export default Home;
