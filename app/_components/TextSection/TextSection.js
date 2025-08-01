'use client'

import { setError } from '@/app/_utils/setContentData';
import ClearButton from '../ClearButton/ClearButton';
import SendButton from '../SendButton/SendButton';
import TextInput from '../TextInput/TextInput';
import Button from '../ui/Button/Button';
import styles from './TextSection.module.css';
import { useContent } from '@/app/_context/ContentContext';


const TextSection = () => {
  const {content, setContent} = useContent();

  if(content.isLoading) {
    return(
      <section className={styles.textSection}>
        <div>Loading...</div>
      </section>
    );
  }

  if(content.error) {
    return(
      <section className={styles.textSection}>
        <div style={{color: 'red'}}>{content.error}</div>
        <Button title={'Ok'} onClickHandler={() => {
          setContent(prev => {
            return {...prev, error: ''}
          })
        }} />
      </section>
    )
  }

  return(
    <section className={styles.textSection}>
      <TextInput />
        <div className={styles.buttons}>
            <ClearButton />
            <SendButton />    
        </div>     
    </section>
  )
}

export default TextSection;