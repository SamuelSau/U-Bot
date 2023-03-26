import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { useState, useEffect } from 'react';
import { Menu, Container, Dropdown } from 'semantic-ui-react';
import Link from 'next/link';


import dynamic from 'next/dynamic';
//import VoiceRecorder from '@/components/VoiceRecorder'
const DynamicVoiceRecorder = dynamic(() => import('@/components/RecordingComponent'), { ssr: false });
export default function Home() {
  return (
    <>
      <Head>;
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Menu fixed="top" inverted>
  <Container>
  <Menu.Item as="a" header href="https://nextjs.org">
  <h1 className={styles.title}>Welcome to U-BOT!</h1>
</Menu.Item>

    <Menu.Item>
      <p>Please select your voice</p>
    </Menu.Item>
    <Menu.Item>
      <Dropdown
        placeholder="Select a name"
        selection
        options={[
          { key: 'bella', value: 'Bella', text: 'Bella' },
          { key: 'arnold', value: 'Arnold', text: 'Arnold' },
        ]}
      />
    </Menu.Item>
  </Container>
</Menu>

        <h1>Voice Recorder</h1>
        <DynamicVoiceRecorder />
        
      </main>
    </>
  )
}
