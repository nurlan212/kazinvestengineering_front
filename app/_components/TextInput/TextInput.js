'use client'

import React from 'react';
import styles from './TextInput.module.css';
import { useContent } from '@/app/_context/ContentContext';

const TextInput = () => {
  const {content, setContent} = useContent();

  const onChangeHandler = (e) => {
    setContent(prev => {
      return {...prev, textContent: e.target.value};
    });
  }

  return (
    <textarea className={styles.textInput} placeholder='Введите свой вопрос' onChange={onChangeHandler} value={content.textContent} />
  )
}

export default TextInput;