'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import Icon from './Icon';
import { PRODUCTS } from '@/lib/data';

export default function ProfileCarousel() {
  const imgs = [PRODUCTS[4], PRODUCTS[1], PRODUCTS[2], PRODUCTS[3], PRODUCTS[0]].map((p) => p.card);
  const n = imgs.length;
  const half = Math.floor(n / 2);

  const [s, setS] = useState(0);
  const [paused, setPaused] = useState(false);

  const next = () => setS((v) => (v + 1) % n);
  const prev = () => setS((v) => (v + n - 1) % n);

  // Auto-advance every 3s, pauses while hovering. Restarts on any manual change.
  useEffect(() => {
    if (paused) return;
    const t = setTimeout(() => setS((v) => (v + 1) % n), 3000);
    return () => clearTimeout(t);
  }, [s, paused, n]);

  return (
    <div
      className="pcx"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="pcx-left">
        <div className="pcx-stage">
          {imgs.map((src, k) => {
            // offset from the centre slot: -half ... +half
            const off = ((k - s + n + half) % n) - half;
            const abs = Math.abs(off);
            const visible = abs <= 1;
            const active = off === 0;

            return (
              <div
                key={k}
                className={`pcx-item ${active ? 'active' : ''}`}
                style={{
                  transform: `translateX(calc(var(--gap) * ${off})) scale(${
                    active ? 1.18 : visible ? 0.74 : 0.4
                  })`,
                  opacity: active ? 1 : visible ? 0.55 : 0,
                  zIndex: active ? 3 : visible ? 2 : 1,
                  pointerEvents: visible ? 'auto' : 'none',
                }}
                onClick={() => setS(k)}
                aria-hidden={!visible}
              >
                <div className="pcx-float" style={{ animationDelay: `${k * -0.8}s` }}>
                  {active && <span className="pcx-ring" />}
                  <div className="pcx-circ">
                    <img src={src} alt="Magnetic component" draggable={false} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="pcx-controls">
          <button className="pcx-arrow" onClick={prev} aria-label="Previous">
            <Icon name="left" size={22} className="" />
          </button>

          <div className="pcx-dots">
            {imgs.map((_, k) => (
              <button
                key={k}
                className={k === s ? 'on' : ''}
                onClick={() => setS(k)}
                aria-label={`Go to image ${k + 1}`}
              />
            ))}
          </div>

          <button className="pcx-arrow" onClick={next} aria-label="Next">
            <Icon name="right" size={22} className="" />
          </button>
        </div>
      </div>

      <div className="pcx-txt">
        <h3>
          Our <span>Profile</span>
        </h3>
        <div className="pcx-bar" />
        <p>
          Magnova is a trusted manufacturer of high-quality magnetic components for industrial,
          renewable and power electronics applications.
        </p>
        <Link href="/profile" className="pcx-btn">
          Know More <Icon name="right" size={16} className="" />
        </Link>
      </div>

      <style jsx global>{`
        @keyframes pcxFloat {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes pcxSpin {
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes pcxPulse {
          0%,
          100% {
            box-shadow: 0 0 0 0 rgba(255, 216, 77, 0.35),
              0 20px 50px rgba(0, 0, 0, 0.45);
          }
          50% {
            box-shadow: 0 0 0 16px rgba(255, 216, 77, 0),
              0 20px 50px rgba(0, 0, 0, 0.45);
          }
        }
      `}</style>

      <style jsx>{`
        .pcx {
          --size: 200px;
          --gap: 200px;
          position: relative;
          display: grid;
          grid-template-columns: 1.2fr 1fr;
          align-items: center;
          gap: 40px;
          width: 100%;
          padding: 56px clamp(24px, 6vw, 96px);
          border: 0;
          border-radius: 0;
          background: transparent;
          color: #2e1a0e;
          overflow: hidden;
          box-sizing: border-box;
        }

        .pcx-left {
          position: relative;
          z-index: 2;
        }

        .pcx-stage {
          position: relative;
          height: 320px;
        }

        .pcx-item {
          position: absolute;
          top: 50%;
          left: 50%;
          width: var(--size);
          height: var(--size);
          margin: calc(var(--size) / -2) 0 0 calc(var(--size) / -2);
          cursor: pointer;
          transition: transform 0.9s cubic-bezier(0.65, 0, 0.35, 1),
            opacity 0.9s ease;
          will-change: transform, opacity;
        }

        .pcx-float {
          position: relative;
          width: 100%;
          height: 100%;
          animation: pcxFloat 5s ease-in-out infinite;
        }

        .pcx-circ {
          width: 100%;
          height: 100%;
          border-radius: 50%;
          overflow: hidden;
          border: 4px solid rgba(255, 255, 255, 0.85);
          background: #fff;
          box-shadow: 0 16px 40px rgba(0, 0, 0, 0.4);
          transition: border-color 0.6s ease;
        }

        .pcx-item.active .pcx-circ {
          border-color: var(--accent, #ffd84d);
          animation: pcxPulse 2.4s ease-out infinite;
        }

        .pcx-circ img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.9s ease;
        }

        .pcx-item.active .pcx-circ img {
          transform: scale(1.08);
        }

        .pcx-ring {
          position: absolute;
          inset: -14px;
          border-radius: 50%;
          border: 2px dashed var(--accent, #ffd84d);
          opacity: 0.7;
          animation: pcxSpin 14s linear infinite;
          pointer-events: none;
        }

        .pcx-controls {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 18px;
          margin-top: 18px;
        }

        .pcx-arrow {
          width: 46px;
          height: 46px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          border: 1px solid rgba(46, 26, 14, 0.35);
          background: rgba(46, 26, 14, 0.06);
          color: #2e1a0e;
          cursor: pointer;
          transition: background 0.25s ease, color 0.25s ease,
            transform 0.25s ease;
        }

        .pcx-arrow:hover {
          background: var(--accent, #ffd84d);
          color: #111;
          transform: scale(1.1);
        }

        .pcx-dots {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .pcx-dots button {
          width: 9px;
          height: 9px;
          padding: 0;
          border: 0;
          border-radius: 999px;
          background: rgba(46, 26, 14, 0.25);
          cursor: pointer;
          transition: width 0.4s ease, background 0.4s ease;
        }

        .pcx-dots button.on {
          width: 28px;
          background: var(--accent, #ffd84d);
        }

        .pcx-txt {
          position: relative;
          z-index: 2;
        }

        .pcx-txt h3 {
          margin: 0;
          font-size: clamp(32px, 4vw, 52px);
          font-weight: 700;
          line-height: 1.08;
          letter-spacing: -0.02em;
          color: #2e1a0e;
        }

        .pcx-txt h3 span {
          color: #d97706;
        }

        .pcx-bar {
          width: 64px;
          height: 4px;
          border-radius: 4px;
          background: var(--accent, #ffd84d);
          margin: 18px 0;
        }

        .pcx-txt p {
          margin: 0 0 26px;
          font-size: clamp(15px, 1.3vw, 18px);
          line-height: 1.7;
          color: rgba(46, 26, 14, 0.8);
          max-width: 480px;
        }

        :global(.pcx-btn) {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 14px 28px;
          border-radius: 14px;
          background: #2e1a0e;
          color: #fff;
          font-size: 16px;
          font-weight: 600;
          text-decoration: none;
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
          transition: background 0.25s ease, color 0.25s ease,
            transform 0.25s ease, box-shadow 0.25s ease;
        }

        :global(.pcx-btn:hover) {
          background: var(--accent, #ffd84d);
          color: #111;
          transform: translateY(-3px);
          box-shadow: 0 14px 30px rgba(0, 0, 0, 0.3);
        }

        @media (max-width: 1100px) {
          .pcx {
            --size: 160px;
            --gap: 160px;
            padding: 44px 32px;
            gap: 24px;
          }

          .pcx-stage {
            height: 270px;
          }
        }

        @media (max-width: 860px) {
          .pcx {
            grid-template-columns: 1fr;
            text-align: center;
            padding: 40px 20px;
          }

          .pcx-txt p {
            margin-left: auto;
            margin-right: auto;
          }

          .pcx-bar {
            margin-left: auto;
            margin-right: auto;
          }
        }

        @media (max-width: 480px) {
          .pcx {
            --size: 128px;
            --gap: 118px;
          }

          .pcx-stage {
            height: 230px;
          }

          .pcx-arrow {
            width: 40px;
            height: 40px;
          }
        }
      `}</style>
    </div>
  );
}