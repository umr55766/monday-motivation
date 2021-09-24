import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Monday motivation</title>
        <meta name="description" content="Receive one motivation every monday" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          One tiny motivation every monday!
        </h1>

        <p className={styles.description}>
          Get started by subscribing!
        </p>

        <div className={styles.grid}>
            <img className={styles.card} src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.careerexperts.co.uk%2Fwp-content%2Fuploads%2F2017%2F07%2FMotivational-quotes-for-work-1-min.jpg&f=1&nofb=1" />
        </div>

        <div className={styles.description}>
            <input type="email" placeholder={"Enter email"} />
            <button>Subscribe!</button>
        </div>
      </main>

      <footer className={styles.footer}>
          <a href={"https://twitter.com/umr55766"}>
              <code>
                  This is just a pet project to experience product development end to end!
              </code>
          </a>
      </footer>
    </div>
  )
}
