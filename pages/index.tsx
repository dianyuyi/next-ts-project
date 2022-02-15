import React from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import tw from 'twin.macro'
import Button from '../src/components/Button'
import Link from 'next/link'

const testStyles = {
  // Move long class sets out of jsx to keep it scannable
  container: ({ hasBackground }) => [
    tw`flex flex-col items-center justify-center h-screen`,
    hasBackground && tw`bg-gradient-to-b from-gray-50 to-gray-200`,
  ],
}

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div css={testStyles.container({ hasBackground: true })}>
        <div tw="flex flex-col justify-center h-10 gap-y-5">
          <p>Test</p>
          {/* <p>Test2</p> */}
        </div>
        <Button variant="primary">Submit</Button>
        <Link href="/user">
          <a>Go to User Page</a>
        </Link>
        <Link href="/item">
          <a>Go to Item Page</a>
        </Link>
      </div>
    </div>
  )
}

export default Home
