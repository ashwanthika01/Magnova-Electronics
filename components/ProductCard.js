'use client';

import Link from 'next/link';

export default function ProductCard({ p, detailed }) {
  return (
    <Link href={`/products/${p.slug}`} className="pxc" aria-label={p.name}>
      <img src={p.card} alt={p.name} className="pxc-img" />

      <div className="pxc-shade" />

      <div className="pxc-label">
        <h3>{p.name}</h3>
        {detailed && <p>{p.short}</p>}
      </div>

      <style jsx global>{`
        .pxc {
          position: relative;
          display: block;
          width: 100%;
          aspect-ratio: 3 / 4;
          border-radius: 20px;
          overflow: hidden;
          background: #f1f1f1;
          text-decoration: none;
          color: #fff;
          isolation: isolate;
        }

        .pxc .pxc-img {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.7s ease;
        }

        .pxc .pxc-shade {
          position: absolute;
          inset: 0;
          background: rgba(0, 0, 0, 0.55);
          transition: opacity 0.5s ease;
        }

        .pxc .pxc-label {
          position: absolute;
          inset: 0;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 8px;
          padding: 20px;
          text-align: center;
          transition: opacity 0.4s ease, transform 0.4s ease;
        }

        .pxc .pxc-label h3 {
          margin: 0;
          font-size: clamp(20px, 1.8vw, 28px);
          font-weight: 500;
          line-height: 1.2;
          color: #fff;
        }

        .pxc .pxc-label p {
          margin: 0;
          max-width: 260px;
          font-size: 14px;
          line-height: 1.5;
          color: rgba(255, 255, 255, 0.9);
        }

        /* hover: black layer and text vanish, image shows clearly */
        .pxc:hover .pxc-shade,
        .pxc:focus-visible .pxc-shade {
          opacity: 0;
        }

        .pxc:hover .pxc-label,
        .pxc:focus-visible .pxc-label {
          opacity: 0;
          transform: translateY(8px);
        }

        .pxc:hover .pxc-img,
        .pxc:focus-visible .pxc-img {
          transform: scale(1.05);
        }

        @media (max-width: 768px) {
          .pxc {
            border-radius: 16px;
          }
        }
      `}</style>
    </Link>
  );
}