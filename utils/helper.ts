"use client"
import { useEffect, useState } from "react";

export const useTypewriter = (words: string[], speed: number = 120, deleteSpeed: number = 70, pause: number = 1000) => {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const [text, setText] = useState("");

  useEffect(() => {
    const currentWord = words[index];
    if (!deleting) {
      if (subIndex < currentWord.length) {
        setTimeout(() => {
          setSubIndex(prev => prev + 1);
          setText(currentWord.substring(0, subIndex + 1));
        }, speed);
      } else {
        setTimeout(() => setDeleting(true), pause);
      }
    } else {
      if (subIndex > 0) {
        setTimeout(() => {
          setSubIndex(prev => prev - 1);
          setText(currentWord.substring(0, subIndex - 1));
        }, deleteSpeed);
      } else {
        setDeleting(false);
        setIndex((prev) => (prev + 1) % words.length); 
      }
    }
  }, [subIndex, deleting]);

  return text;
};
