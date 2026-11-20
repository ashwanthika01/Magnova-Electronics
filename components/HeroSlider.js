'use client';

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { HERO_SLIDES } from '@/lib/data';
import Icon from './Icon';

export default function HeroSlider() {
  const [i, setI] = useState(0);

  // Track the previous slide so its zoom keeps running while it fades out
  const lastI = useRef(0);
  const prevI = useRef(-5);

  if (lastI.current !== i) {
    prevI.current = lastI.current;
    lastI.current = i;
  }

  // Restarts the timer whenever the slide changes (including dot clicks)
  useEffect(() => {
    const t = setTimeout(
      () => setI((v) => (v + 1) % HERO_SLIDES.length),
      5500
    );

    return () => clearTimeout(t);
  }, [i]);

  return (
    <div className="hx-outer">
      <section className="hx-card" aria-roledescription="carousel">
        {HERO_SLIDES.map((s, k) => (
          <div
            key={k}
            className={`hx-slide ${k === i ? 'on' : ''} ${
              k === prevI.current ? 'prev' : ''
            }`}
            aria-hidden={k !== i}
          >
            <img src={s.img} alt="" className="hx-img" />

            <div className="hx-shade" />

            <div className="hx-content">
              <h2 className="hx-title">
                {s.title}
                <span className="hx-accent">{s.accent}</span>
              </h2>

              <div className="hx-bar" />

              <p className="hx-text">{s.text}</p>
            </div>

            <Link
              href="/products"
              className="hx-cta py-3 px-6"
              tabIndex={k === i ? 0 : -1}
            >
              Explore Products
              <Icon name="right" size={16} className="" />
            </Link>
          </div>
        ))}
      </section>

      <div className="hx-dots">
        {HERO_SLIDES.map((_, k) => (
          <button
            key={k}
            className={k === i ? 'on' : ''}
            onClick={() => setI(k)}
            aria-label={`Slide ${k + 1}`}
          />
        ))}
      </div>

      {/* ===== ZOOM EFFECT (global so keyframes can never be scoped away) ===== */}
      <style jsx global>{`
        @keyframes hxKenBurns {
          0% {
            transform: scale(1) translate3d(0, 0, 0);
            filter: brightness(0.85) saturate(1);
          }
          100% {
            transform: scale(1.3) translate3d(-2%, -1.5%, 0);
            filter: brightness(1) saturate(1.12);
          }
        }

        @keyframes hxRise {
          from {
            opacity: 0;
            transform: translateY(28px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes hxGrow {
          from {
            transform: scaleX(0);
          }
          to {
            transform: scaleX(1);
          }
        }

        .hx-outer .hx-img {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          display: block;
          transform-origin: center center;
          will-change: transform;
          backface-visibility: hidden;
        }

        /* different zoom focus per slide */
        .hx-outer .hx-slide:nth-child(3n + 2) .hx-img {
          transform-origin: 25% 40%;
        }
        .hx-outer .hx-slide:nth-child(3n + 3) .hx-img {
          transform-origin: 75% 60%;
        }

        /* runs for the active slide and keeps going while it fades out */
        .hx-outer .hx-slide.on .hx-img,
        .hx-outer .hx-slide.prev .hx-img {
          animation: hxKenBurns 8s linear forwards;
        }

        /* staggered text entrance on the active slide */
        .hx-outer .hx-slide.on .hx-title {
          animation: hxRise 0.9s cubic-bezier(0.2, 0.7, 0.2, 1) 0.3s both;
        }
        .hx-outer .hx-slide.on .hx-bar {
          transform-origin: left center;
          animation: hxGrow 0.7s ease 0.7s both;
        }
        .hx-outer .hx-slide.on .hx-text {
          animation: hxRise 0.9s cubic-bezier(0.2, 0.7, 0.2, 1) 0.8s both;
        }
        .hx-outer .hx-slide.on .hx-cta {
          animation: hxRise 0.9s cubic-bezier(0.2, 0.7, 0.2, 1) 1.1s backwards;
        }
      `}</style>

      <style jsx>{`
        .hx-outer {
          width: 100%;
          padding: 24px 28px 0;
          background: #fff;
          box-sizing: border-box;
        }

        .hx-card {
          position: relative;
          width: 100%;
          height: clamp(440px, calc(100svh - 220px), 720px);
          border-radius: 24px;
          overflow: hidden;
          background: #111;
        }

        .hx-slide {
          position: absolute;
          inset: 0;
          opacity: 0;
          visibility: hidden;
          transition: opacity 0.8s ease, visibility 0.8s;
        }

        .hx-slide.on {
          opacity: 1;
          visibility: visible;
        }

        .hx-slide.prev {
          visibility: visible;
        }

        .hx-shade {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            90deg,
            rgba(0, 0, 0, 0.65) 0%,
            rgba(0, 0, 0, 0.35) 40%,
            rgba(0, 0, 0, 0) 70%
          );
        }

        .hx-content {
          position: absolute;
          top: 50%;
          left: clamp(24px, 6vw, 96px);
          transform: translateY(-50%);
          max-width: min(600px, 80%);
          color: #fff;
        }

        .hx-title {
          margin: 0;
          font-size: clamp(30px, 4.6vw, 62px);
          font-weight: 700;
          line-height: 1.08;
          letter-spacing: -0.02em;
          color: #fff;
        }

        .hx-accent {
          display: block;
          color: var(--accent, #ffd84d);
        }

        .hx-bar {
          width: 64px;
          height: 4px;
          border-radius: 4px;
          background: var(--accent, #ffd84d);
          margin: 20px 0;
        }

        .hx-text {
          margin: 0;
          font-size: clamp(14px, 1.3vw, 18px);
          line-height: 1.6;
          color: rgba(255, 255, 255, 0.92);
          max-width: 480px;
        }

        :global(.hx-cta) {
          position: absolute;
          left: 0;
          right: 0;
          bottom: 20px;
          margin: 0 auto;
          width: fit-content;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          padding: 15px 34px;
          background: #fff;
          color: #111;
          font-size: 16px;
          font-weight: 600;
          text-decoration: none;
          white-space: nowrap;
          border-radius: 14px;
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.25);
          transition: background 0.2s ease, transform 0.2s ease,
            box-shadow 0.2s ease;
        }

        :global(.hx-cta:hover) {
          background: #f4f4f4;
          transform: translateY(-2px);
          box-shadow: 0 12px 28px rgba(0, 0, 0, 0.3);
        }

        .hx-dots {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 8px;
          padding: 18px 0 16px;
        }

        .hx-dots button {
          width: 10px;
          height: 10px;
          padding: 0;
          border: 0;
          border-radius: 999px;
          background: #111;
          cursor: pointer;
          transition: width 0.3s ease;
        }

        .hx-dots button.on {
          width: 30px;
        }

        @media (max-width: 1024px) {
          .hx-outer {
            padding: 20px 20px 0;
          }

          .hx-card {
            height: clamp(420px, 65svh, 600px);
            border-radius: 20px;
          }

          .hx-content {
            max-width: 75%;
          }
        }

        @media (max-width: 768px) {
          .hx-outer {
            padding: 14px 14px 0;
          }

          .hx-card {
            height: clamp(460px, 78svh, 600px);
            border-radius: 18px;
          }

          .hx-shade {
            background: linear-gradient(
              180deg,
              rgba(0, 0, 0, 0.7) 0%,
              rgba(0, 0, 0, 0.45) 45%,
              rgba(0, 0, 0, 0.1) 100%
            );
          }

          .hx-content {
            top: 28px;
            left: 20px;
            right: 20px;
            max-width: none;
            transform: none;
          }

          .hx-title {
            font-size: clamp(28px, 8.5vw, 38px);
          }

          .hx-bar {
            width: 52px;
            height: 3px;
            margin: 14px 0;
          }

          .hx-text {
            font-size: 14px;
            line-height: 1.55;
            max-width: none;
          }

          :global(.hx-cta) {
            bottom: 20px;
            width: calc(100% - 40px);
            max-width: 320px;
            padding: 14px 24px;
            font-size: 15px;
            border-radius: 12px;
          }

          .hx-dots {
            padding: 14px 0 12px;
          }
        }

        @media (max-width: 380px) {
          .hx-content {
            align-items: center;
            justify-content: center;
          }

          .hx-text {
            font-size: 20px;
          }
        }
      `}</style>
    </div>
  );
}