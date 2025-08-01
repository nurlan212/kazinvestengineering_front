import TextSection from "./_components/TextSection/TextSection";
import { ContentProvider } from "./_context/ContentContext";
import styles from "./page.module.css";

export default function Home() {
  return (
    <ContentProvider>
      <div className={styles.page}>
        <TextSection />      
      </div>
    </ContentProvider>    
  );
}
