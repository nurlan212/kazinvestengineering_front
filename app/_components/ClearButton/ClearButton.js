'use client'

import { useContent } from '@/app/_context/ContentContext';
import Button from '../ui/Button/Button';
import { setText } from '@/app/_utils/setContentData';

const ClearButton = () => {
  const {content, setContent} = useContent();

  const onClickHandler = () => {    
    setContent(prev => {
      return {...prev, textContent: ''}
    });
  }

  return(
    <Button title={'Очистить'} onClickHandler={onClickHandler}/>
  )
}

export default ClearButton;