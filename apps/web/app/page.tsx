// apps/web/app/page.tsx
import styles from "./page.module.css";
import {HomePage} from "./features/home/homePage";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <HomePage />
      </main>
    </div>
  );
}