'use client'

import { useContent } from '@/app/_context/ContentContext';
import Button from '../ui/Button/Button';

const ClearButton = () => {
  const {content, setContent} = useContent();

  const onClickHandler = () => {    
    setContent(prev => {
      return {...prev, textContent: ''}
    });
  }

  return(
    <Button title={'Очистить'} onClick={onClickHandler}/>
  )
}

export default ClearButton;