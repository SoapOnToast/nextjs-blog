import Link from 'next/link'
import styles from '../styles/home.module.css'

function HomePage() {
   return (
      <>
      <head>
        <title>
          Home page
        </title>
      </head>
      <div>
      <h1 className={styles.title}>Homepage</h1>
      <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate quas illo quo, sit nulla exercitationem molestias facere dolorem. Voluptatum minima ullam eius consequatur. Nostrum blanditiis, id voluptatibus optio dolor deserunt.</p>
      <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate quas illo quo, sit nulla exercitationem molestias facere dolorem. Voluptatum minima ullam eius consequatur. Nostrum blanditiis, id voluptatibus optio dolor deserunt.</p>
      <Link href="/page1">
        <a className={styles.btn}>See Page 1</a>
      </Link>
      </div>
      </>	    
   )
}
export default HomePage
