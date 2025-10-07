'use client'
import Image from 'next/image';
import profile from '../../public/window.svg'
import custom from './custom.module.css'
import other from './other.module.css'
import { useState } from "react";
import styles from "./page.module.css";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Roboto } from 'next/font/google';
const roboto =Roboto({
  weight:'100',
  subsets:['latin'],
  display:'swap'
})


export default function Home() {
  const router = useRouter();
  const navigate = (name) => {
    router.push(name)
  }
  console.log(profile)


  return (
    <main className={styles.main}>
      <h1 className={custom.main} >this is my main page</h1>
      <Link href="/login"> go to the login page</Link>
      <Link href="/about"> go to the about page</Link>
      <button onClick={() => navigate("/login")}>Go to login page</button>
      <button onClick={() => navigate("/about")}>Go to about page</button>
      <Link href="/productlist"> go to product list page</Link>
      <Image src={profile} alt=''
      />
      <h3 className={roboto.className}>this is my fonts lines</h3>
      {/* <h1 style={{fontFamily:'roboto',fontWeight:100}}>Fonts with link tag in next js</h1> */}
    </main>
  );
}
// const User = (bypass) => {

//   return (
//     <div>
//       <h2>user name is {bypass.name}</h2>
//     </div>
//   )
// }