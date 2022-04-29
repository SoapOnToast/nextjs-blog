import Link from 'next/link'
import Head from 'next/head'


export default function FirstPost() {
   return (
      <>
      <head>
          <title>
              My first post
          </title>
      </head>
         <h1>My First Post</h1>
         <h2>
            <Link href="/">
               <a>Home</a>
            </Link>
         </h2>
      </>	  
   )
}