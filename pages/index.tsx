import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Polpetch.me</title>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://polpetch.me">Polpetch.me</a>
        </h1>

        <p className={styles.description}>
          🚧 Under Construction 🚧
        </p>

        <div className={styles.grid}>
          <a href="https://polpetch.me" className={styles.card}>
            <h2>For now on just take a look at this cat &rarr;</h2>
            <p>🐈</p>
          </a>

          <a href="https://polpetch.me" className={styles.card}>
            <h2>And this one for black cat &rarr;</h2>
            <p>🐈‍⬛</p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Crafted by Polpetch
        </a>
      </footer>
    </div>
  )
}

export default Home
