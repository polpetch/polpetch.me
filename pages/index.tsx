import type { NextPage } from 'next'
import { useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Sidebar from '../components/sidebar'
import Body from '../components/body'



const Home: NextPage = () => {
   

  return (
    <div>
      <Head>
        <title>polpetch</title>
        <link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🛋️</text></svg>"></link>
      </Head>

      <Sidebar />
      <Body />
    </div>
  )
}

export default Home
