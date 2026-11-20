'use client';
import { useState } from 'react';

export default function ProductGallery({ images, alt }) {
  const [i, setI] = useState(0);
  return (
    <div className="gal">
      <div className="main"><img src={images[i]} alt={alt} /></div>
      {images.length > 1 && <div className="th">{images.map((s, k) => <button key={s} className={k === i ? 'on' : ''} onClick={() => setI(k)} aria-label={`View ${k + 1}`}><img src={s} alt="" /></button>)}</div>}
    </div>
  );
}
