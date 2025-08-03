'use client'

import { useState, useRef, useEffect } from 'react';
import Button from '../ui/Button/Button';
import { useContent } from '@/app/_context/ContentContext';

const style = {
  backgroundImage: "url('/mic.svg')",
  backgroundPosition: "5px center",
  backgroundRepeat: "no-repeat",
  paddingLeft: "25px"
}

const MicButton = () => {
  const [isRecording, setIsRecording] = useState(false);
  
  const recognitionRef = useRef(null);
  const {content, setContent} = useContent();

  const onPointerDownHandler = () => {
    if (!recognitionRef.current) return;
    setIsRecording(true);
    setContent(prev => {
      return {...prev, textContent: ''}
    });
    recognitionRef.current.start();
  }

  const onPointerUpHandler = () => {
    if (!recognitionRef.current) return;
    setIsRecording(false);
    recognitionRef.current.stop();
  }

  useEffect(() => {
    if (typeof window !== 'undefined') {
      var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
      
      if (SpeechRecognition) {
        const recognition = new SpeechRecognition();
        recognition.lang = 'ru-RU';
        recognition.interimResults = false;
        recognition.continuous = true;

        recognition.onresult = (event) => {
          const result = event.results[event.results.length - 1][0].transcript;
          setContent(prev => {
            return {...prev, textContent: prev.textContent + ' ' + result}
          });
        };

        recognition.onerror = (event) => {
          console.log('Speech recognition error', event.error);
          setContent(prev => {
            return {...prev, error: event.error}
          })
          setIsRecording(false);
        };

        recognition.onend = () => {
          if(isRecording) recognition.start();
          setIsRecording(false);
        };

        recognitionRef.current = recognition;
      } else {
        alert('Web Speech API не поддерживается в этом браузере.');
      }
    }
  }, []);

  return(
    <>
      <Button 
        title={isRecording ? "Говорите" : "Начать"}
        style={style} 
        onPointerDown={onPointerDownHandler}
        onPointerUp={onPointerUpHandler}
      />
    </>
    
  )
}

export default MicButton;