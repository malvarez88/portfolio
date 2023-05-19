import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const WordAnimation = ({ word }) => {
  const letters = word.split('');
  const nameRef = useRef(null);

  useEffect(() => {
    gsap.to(nameRef.current.children, {
      y: 0,
      stagger: 0.05,
      delay: 1,
      duration: 0.1,
    });
  }, []);

  return (
    <div ref={nameRef} className='name__container'>
      {letters.map((letter, index) => (
        <span className="name" key={index}>
          {letter}
        </span>
      ))}
    </div>
  );
};

export default WordAnimation;

