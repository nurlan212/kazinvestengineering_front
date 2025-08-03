'use client'

import { useContent } from '@/app/_context/ContentContext';
import Button from '../ui/Button/Button';
import { fetchApi } from '@/app/_api/fetchApi';

const SendButton = () => {
  const {content, setContent} = useContent();

  const setLoading = (isLoading) => {
    setContent(prev => {
      return{...prev, isLoading};
    })
  };

  const setText = (text) => {
    setContent(prev => {
      return {...prev, textContent: text};
    });
  }

  const setError = (errorText) => {
    setContent(prev => {
      return {...prev, error: errorText};
    });
  }

  const onClickHandler = async () => {    
    setLoading(true);
    setText('...');

    try{
      const response = await fetchApi.chatPost(content.textContent);
      
      if(response.status !== 200) {
        const responseJson = await response.json();
        throw new Error(responseJson.error.message);
      }

      const data = await response.text();
      setText(data);
    } catch(error) {
      setError(error.message || 'Упс, что то пошло не так...');
      setText('');
    } finally {
      setLoading(false);
    }
  }

  return(
    <Button title={'Отправить'} onClick={onClickHandler}/>
  )
}

export default SendButton;