import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Polpetch.me</title>
        <link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🚀</text></svg>"></link>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title} style={{fontSize: '2rem'}}>
          <a style={{ color: '#FF7D63'}} >Polpetch Prasompetch</a>
          <a href='https://resume.showwcase.com/1998polpetch.pdf' style={{ float: 'right', cursor: 'pointer' }} >&rarr; Resume</a>
        </h1>

        <div style={{  }}>
          <p>test</p>
          <p className={styles.description}>
            (beginner) Web Developer 
          </p>
        </div>

        <div className={styles.grid}>
          <a href="https://github.com/polpetch/milk-domain-name-service" className={styles.card}>
            <h2>.Milk Domain Name services  &rarr;</h2>
            <p>Polygon chain domain name service</p>
          </a>

          <a href="https://polpetch.me" className={styles.card}>
            <h2>And this one for black cat &rarr;</h2>
            <p>🐈‍⬛</p>
          </a>
          <a href="https://polpetch.me" className={styles.card}>
            <h2>And this one for black cat &rarr;</h2>
            <p>🐈‍⬛</p>
         </a>
        </div>
      </main>

      <footer className={styles.footer} style={{ fontSize: '1.2rem' }} >
        <a>Located</a>
        <a style={{ float: 'right' }}>polpetch@icloud.com</a>
        <br></br>
        <a>Pathum Thani, Thailand</a> 
        <a style={{ float: 'right', paddingRight: '46px' }}>+66 8 657 6479</a>
      </footer>
    </div>
  )
}

export default Home
