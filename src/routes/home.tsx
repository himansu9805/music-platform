import { taglines } from '@/consts/consts';

import '@/App.css';
import '@/styles/animations.css';
import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';

export default function Home() {
  const [tagline, setTagline] = useState('Tune into Your Beat, Beyond Borders');
  useEffect(() => {
    setTagline(taglines[Math.floor(Math.random() * taglines.length)]);
  }, []);

  return (
    <div className='grid row-span-1 grid-cols-1 md:grid-cols-2 place-items-center my-8'>
      <div className='col-span-1 place-items-center h-full'>
        <h1 className='text-4xl md:text-8xl font-bold text-start font-singularity-serif'>{tagline}</h1>
        <p className='text-left font-singularity-sans mt-2'>
          Step into a global soundscape where every beat knows no borders, connecting you to music from every corner of the world—local favorites, global chartbusters—tailored to your tastes, uniting us all through sound.
        </p>
        <div className='mt-4 text-start'>
          <Button size={'lg'}><span className='text-lg font-instrument-sans'>Step into Music</span></Button>
        </div>
      </div>
      <div className='col-span-1 place-items-center h-full'>
      </div>
    </div>
  );
}