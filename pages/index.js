import Head from "next/head";
import Image from "next/image";

import Dashboard from "../components/Dashboard";

import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Dashboard />
      <footer className={styles.footer}>
        <a
          href="https://github.com/duhoang00/tinder-clone"
          target="_blank"
          rel="noopener noreferrer"
        >
          Developed by Du Hoang
        </a>
      </footer>
    </>
  );
}
