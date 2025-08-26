
import React, { useState, useEffect } from 'react';

const bootMessages = [
  { text: '[ 0.000000] Initializing kernel ...' },
  { text: '[ 0.153291] Loading, please wait...' },
  { text: '[ 0.284567] Mounting virtual filesystems...', status: 'OK' },
  { text: '[ 0.498723] Starting device-mapper...', status: 'DONE' },
  { text: '[ 1.102934] Activating swap...' },
  { text: '[ 1.345678] Checking filesystems: fsck from util-linux 2.39.3' },
  { text: '[ 1.876543] Starting user session manager...', status: 'OK' },
  { text: '[ 2.019845] Authenticating user: guest...' },
  { text: '[ 2.548392] Mounting /dev/portfolio...' },
  { text: '[ 3.123456] Welcome to' },
  { text: 'NathanC16 Portfolio v2.0', highlight: true },
  { text: '[ 3.200000] Loading profile ...', status: 'OK' },
  { text: '[ 3.400000] Initializing modules ...' },
  { text: '[ 3.600000] Starting terminal interface ...' },
];

const Preloader = ({ onFinished }) => {
  const [lines, setLines] = useState([]);
  const [isFadingOut, setIsFadingOut] = useState(false);

  useEffect(() => {
    const timeouts = [];
    
    bootMessages.forEach((msg, index) => {
      timeouts.push(
        setTimeout(() => {
          setLines((prev) => [...prev, msg]);
        }, index * 120) 
      );
    });

    const totalAnimationTime = bootMessages.length * 120;

    timeouts.push(
      setTimeout(() => {
        setIsFadingOut(true);
        timeouts.push(
          setTimeout(() => {
            onFinished();
          }, 500)
        );
      }, totalAnimationTime + 500)
    );

    return () => {
      timeouts.forEach(clearTimeout);
    };
  }, [onFinished]);

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-[#0D0208] transition-opacity duration-500 ${
        isFadingOut ? 'opacity-0' : 'opacity-100'
      }`}
    >
      <div className="w-full max-w-4xl p-4 font-mono text-sm">
        {lines.map((line, i) => (
          <div key={i} className="flex justify-between items-center">
            <p className={line.highlight ? 'text-[#ff00c1]' : 'text-[#00ff41]'}>{line.text}</p>
            {line.status && <p className="text-[#00ff41]">[ {line.status} ]</p>}
          </div>
        ))}
        {!isFadingOut && <span className="h-4 w-2 bg-[#00ff41] animate-blink" aria-hidden="true"></span>}
      </div>
    </div>
  );
};

export default Preloader;
