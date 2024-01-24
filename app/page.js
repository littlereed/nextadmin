'use client';

import { useRouter } from "next/navigation";
import styles from './page.module.css';

export default function Homepage() {
  
  const router = useRouter()
  return (
    <div className={styles.page}>

      <h1>Homepage</h1>
      <button 
        className={styles.button}
        onClick={() => router.push('/dashboard')}
      >
        Enter Dashboard Page
      </button>
    </div>
    
  )
};
