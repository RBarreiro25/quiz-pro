import Header from 'components/Header/header';
import TopSection from 'components/TopSection/topSection';
import React from 'react';
import styles from './Home.module.css'
import BottomSection from 'components/BottomSection/bottomSection';

export default function Home() {
  return (
    <main className={styles.main}>
      <Header />
      <TopSection />
      <BottomSection />
    </main>
  )
}
