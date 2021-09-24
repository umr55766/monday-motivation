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
            <div className={styles.card}>
                <img style={{"width": "100%"}} src={"/mika-baumeister-Y_LgXwQEx2c-unsplash.jpg"} />
                Photo by <a href="https://unsplash.com/@mbaumi?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Mika Baumeister</a> on <a href="https://unsplash.com/s/photos/motivation?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
            </div>
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
