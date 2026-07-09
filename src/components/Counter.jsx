'use client';

import React, { useEffect, useState, useRef } from 'react';

export default function Counter({ value, duration = 2 }) {
  const [count, setCount] = useState(0);
  const countRef = useRef(null);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasStarted(true);
        }
      },
      { threshold: 0.1 }
    );

    if (countRef.current) {
      observer.observe(countRef.current);
    }

    return () => {
      if (countRef.current) {
        observer.unobserve(countRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!hasStarted) return;

    // Parse the target number
    const target = parseInt(value.replace(/[^0-9]/g, ''), 10);
    const suffix = value.replace(/[0-9]/g, '');
    
    let start = 0;
    const end = target;
    if (start === end) return;

    const totalMiliseconds = duration * 1000;
    const startTime = performance.now();

    const animateCount = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / totalMiliseconds, 1);
      
      // Easing function outQuad
      const easeProgress = progress * (2 - progress);
      
      const currentCount = Math.floor(easeProgress * (end - start) + start);
      setCount(currentCount);

      if (progress < 1) {
        requestAnimationFrame(animateCount);
      } else {
        setCount(end);
      }
    };

    requestAnimationFrame(animateCount);
  }, [hasStarted, value, duration]);

  // Formatter to add K, M, etc., or keep original formatting style
  const formatCount = (num) => {
    const suffix = value.replace(/[0-9]/g, '');
    return `${num}${suffix}`;
  };

  return (
    <span ref={countRef} className="tabular-nums">
      {formatCount(count)}
    </span>
  );
}
