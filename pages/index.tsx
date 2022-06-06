import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import JournalIcon from "../public/journal-icon";
import WavesIcon from "../public/waves";
import WateringIcon from "../public/watering-icon";
import PlayingCard from "../public/playing-card";
import Link from "next/link";

const Home: NextPage = () => {
  const iconSize = "100px";
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
            <JournalIcon size={iconSize} />
          </span>
          <span className={styles.iconWrapper}>
            <WavesIcon size={iconSize} />
          </span>
          <span className={styles.iconWrapper}>
            <WateringIcon size={iconSize} />
          </span>
          <Link href="/connection-game">
            <span className={styles.iconWrapper}>
              <PlayingCard size={iconSize} />
            </span>
          </Link>
        </section>
      </main>
    </>
  );
};

export default Home;
