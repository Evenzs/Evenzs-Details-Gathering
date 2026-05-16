'use client';

import type { CSSProperties } from 'react';

export const BRAND = {
  navy: '#0B1220',
  navyDeep: '#121B2B',
  obsidian: '#0F131A',
  gold: '#D4AF37',
  goldLight: '#F0D870',
  goldMid: '#C9A230',
  goldDark: '#8B6914',
  goldGlass: 'rgba(212,175,55,0.18)',
  ivory: '#F7F3E9',
  platinum: '#9CA3AF',
} as const;

// ── Champagne Flute ──────────────────────────────────────────────────────────
function Flute({
  id, x, y, scale = 1, rotate = 0, gold, goldLight, goldDark,
}: {
  id: string; x: number; y: number; scale?: number; rotate?: number;
  gold: string; goldLight: string; goldDark: string;
}) {
  const rw = 44;
  const sw = 5.0;
  const fw = 40;
  const bh = 64;
  const sh = 26;
  const fh = 4.5;

  const lx1 = 1.5, ly1 = bh * 0.35;
  const lx2 = (rw - sw) / 2 - 1, ly2 = bh * 0.78;
  const rx1 = rw - 1.5, ry1 = bh * 0.35;
  const rx2 = (rw + sw) / 2 + 1, ry2 = bh * 0.78;

  const bowl = `M 0 2 C ${lx1} ${ly1} ${lx2} ${ly2} ${(rw - sw) / 2} ${bh} L ${(rw + sw) / 2} ${bh} C ${rx2} ${ry2} ${rx1} ${ry1} ${rw} 2 Z`;
  const rim = `M 0 2 C 0 6.5 ${rw} 6.5 ${rw} 2 C ${rw} -2.5 0 -2.5 0 2 Z`;

  const stemX = (rw - sw) / 2;
  const stemTop = bh;
  const stemBot = bh + sh;

  const footX = (rw - fw) / 2;
  const footY = stemBot;
  const foot = `M ${footX} ${footY} C ${footX} ${footY + fh * 0.6} ${rw / 2 - fw / 2} ${footY + fh} ${rw / 2} ${footY + fh} C ${rw / 2 + fw / 2} ${footY + fh} ${rw - footX} ${footY + fh * 0.6} ${rw - footX} ${footY} Z`;

  const liqTop = bh * 0.26;
  const liqBot = bh * 0.98;
  const liqLeftAt = (yy: number) => (rw - sw) / 2 * (yy / bh) + 1.5 * (1 - yy / bh);
  const liqRightAt = (yy: number) => rw - liqLeftAt(yy);
  const liqL1 = liqLeftAt(liqTop);
  const liqR1 = liqRightAt(liqTop);
  const liqL2 = liqLeftAt(liqBot);
  const liqR2 = liqRightAt(liqBot);

  const liquid = `M ${liqL1} ${liqTop} C ${liqL1 * 0.7} ${liqTop + (liqBot - liqTop) * 0.35} ${liqL2 * 0.9} ${liqTop + (liqBot - liqTop) * 0.7} ${liqL2} ${liqBot} L ${liqR2} ${liqBot} C ${liqR2 + (rw - liqR2) * 0.1} ${liqTop + (liqBot - liqTop) * 0.7} ${liqR1 + (rw - liqR1) * 0.3} ${liqTop + (liqBot - liqTop) * 0.35} ${liqR1} ${liqTop} Z`;

  const pivX = (rw / 2) * scale;
  const pivY = (bh + sh + fh) * scale;
  const tfm = rotate
    ? `translate(${x} ${y}) rotate(${rotate} ${pivX} ${pivY}) scale(${scale})`
    : `translate(${x} ${y}) scale(${scale})`;

  return (
    <g transform={tfm}>
      <defs>
        <linearGradient id={`${id}fg`} x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor={goldDark} stopOpacity="0.9" />
          <stop offset="30%" stopColor={gold} />
          <stop offset="60%" stopColor={goldLight} stopOpacity="0.95" />
          <stop offset="100%" stopColor={goldDark} stopOpacity="0.85" />
        </linearGradient>
        <linearGradient id={`${id}liq`} x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor={goldLight} stopOpacity="0.6" />
          <stop offset="100%" stopColor={gold} stopOpacity="0.88" />
        </linearGradient>
      </defs>
      {/* Bowl */}
      <path d={bowl} fill={`url(#${id}fg)`} />
      {/* Liquid */}
      <path d={liquid} fill={`url(#${id}liq)`} opacity="0.82" />
      {/* Meniscus */}
      <ellipse cx={rw / 2} cy={liqTop} rx={(liqR1 - liqL1) / 2} ry="1.2" fill={goldLight} opacity="0.5" />
      {/* Bowl outline */}
      <path d={bowl} fill="none" stroke={gold} strokeWidth="0.8" opacity="0.6" />
      {/* Rim */}
      <path d={rim} fill={gold} opacity="0.7" />
      {/* Specular highlight */}
      <line x1="5" y1="8" x2="8" y2={bh * 0.7} stroke={goldLight} strokeWidth="2" strokeLinecap="round" opacity="0.55" />
      <line x1="7" y1="10" x2="9" y2={bh * 0.55} stroke={goldLight} strokeWidth="1" strokeLinecap="round" opacity="0.35" />
      {/* Stem */}
      <rect x={stemX} y={stemTop} width={sw} height={sh} fill={gold} opacity="0.75" rx="1" />
      {/* Base foot */}
      <path d={foot} fill={gold} opacity="0.7" />
      {/* Base glint */}
      <line x1={rw / 2 - 6} y1={stemBot + fh * 0.3} x2={rw / 2 + 6} y2={stemBot + fh * 0.3} stroke={goldLight} strokeWidth="1" opacity="0.4" strokeLinecap="round" />
    </g>
  );
}

// ── Bubble Trail ─────────────────────────────────────────────────────────────
function BubbleTrail({ x, y, gold, goldLight }: { x: number; y: number; gold: string; goldLight: string }) {
  const bubbles: [number, number, number, number][] = [
    [0, 0, 3.2, 0.92], [-6, -9, 2.4, 0.80], [7, -7, 2.0, 0.74],
    [-12, -18, 1.7, 0.65], [4, -20, 1.4, 0.60], [13, -14, 1.2, 0.52],
    [-8, -30, 1.0, 0.45], [10, -28, 0.9, 0.42], [-16, -26, 0.8, 0.38],
    [18, -22, 0.7, 0.35], [-4, -38, 0.7, 0.30], [8, -40, 0.6, 0.26],
    [-14, -36, 0.55, 0.22], [16, -34, 0.5, 0.20], [0, -44, 0.5, 0.18],
  ];

  return (
    <g transform={`translate(${x} ${y})`}>
      {bubbles.map(([bx, by, r, op], i) => (
        <g key={i} opacity={op}>
          <circle cx={bx} cy={by} r={r} fill="none" stroke={gold} strokeWidth="0.5" />
          <circle cx={bx} cy={by} r={r * 0.6} fill={goldLight} opacity="0.15" />
          {r > 1.2 && (
            <circle cx={bx - r * 0.3} cy={by - r * 0.3} r={r * 0.22} fill={goldLight} opacity="0.7" />
          )}
        </g>
      ))}
    </g>
  );
}

// ── Premium Jet ──────────────────────────────────────────────────────────────
function PremiumJet({
  id, cx, cy, heading = -42, ws = 34, gold, goldLight, goldDark,
}: {
  id: string; cx: number; cy: number;
  heading?: number; ws?: number;
  gold: string; goldLight: string; goldDark: string;
}) {
  const s = ws / 100;

  const fuse = `M ${0 * s} ${2.2 * s} C ${8 * s} ${3.5 * s} ${30 * s} ${5 * s} ${60 * s} ${5.5 * s} C ${90 * s} ${5.5 * s} ${118 * s} ${5 * s} ${132 * s} ${2.5 * s} C ${137 * s} ${1.2 * s} ${140 * s} 0 ${140 * s} 0 C ${140 * s} 0 ${137 * s} ${-1.2 * s} ${132 * s} ${-2.5 * s} C ${118 * s} ${-5 * s} ${90 * s} ${-5.5 * s} ${60 * s} ${-5.5 * s} C ${30 * s} ${-5 * s} ${8 * s} ${-3.5 * s} ${0 * s} ${-2.2 * s} Z`;
  const hump = `M ${40 * s} ${-5.5 * s} C ${48 * s} ${-8.5 * s} ${72 * s} ${-9 * s} ${92 * s} ${-6 * s} C ${72 * s} ${-5.8 * s} ${48 * s} ${-5.6 * s} ${40 * s} ${-5.5 * s} Z`;
  const wingU = `M ${80 * s} ${-5.2 * s} C ${74 * s} ${-8 * s} ${58 * s} ${-22 * s} ${44 * s} ${-36 * s} C ${42 * s} ${-40 * s} ${42 * s} ${-48 * s} ${46 * s} ${-50 * s} C ${50 * s} ${-52 * s} ${54 * s} ${-50 * s} ${54 * s} ${-48 * s} C ${60 * s} ${-38 * s} ${72 * s} ${-22 * s} ${82 * s} ${-5.2 * s} Z`;
  const wingD = `M ${80 * s} ${5.2 * s} C ${74 * s} ${8 * s} ${58 * s} ${22 * s} ${44 * s} ${36 * s} C ${42 * s} ${40 * s} ${42 * s} ${48 * s} ${46 * s} ${50 * s} C ${50 * s} ${52 * s} ${54 * s} ${50 * s} ${54 * s} ${48 * s} C ${60 * s} ${38 * s} ${72 * s} ${22 * s} ${82 * s} ${5.2 * s} Z`;
  const stabU = `M ${20 * s} ${-4.5 * s} C ${15 * s} ${-7 * s} ${6 * s} ${-16 * s} ${2 * s} ${-22 * s} C ${1 * s} ${-24 * s} ${2 * s} ${-25 * s} ${4 * s} ${-24.5 * s} C ${8 * s} ${-20 * s} ${16 * s} ${-10 * s} ${22 * s} ${-4.5 * s} Z`;
  const stabD = `M ${20 * s} ${4.5 * s} C ${15 * s} ${7 * s} ${6 * s} ${16 * s} ${2 * s} ${22 * s} C ${1 * s} ${24 * s} ${2 * s} ${25 * s} ${4 * s} ${24.5 * s} C ${8 * s} ${20 * s} ${16 * s} ${10 * s} ${22 * s} ${4.5 * s} Z`;
  const fin = `M ${12 * s} ${-4 * s} C ${14 * s} ${-7 * s} ${18 * s} ${-18 * s} ${22 * s} ${-22 * s} C ${25 * s} ${-24 * s} ${27 * s} ${-23 * s} ${26 * s} ${-20 * s} C ${24 * s} ${-16 * s} ${20 * s} ${-9 * s} ${16 * s} ${-4 * s} Z`;

  const engines = [
    { ex: 60, ey: -22, er: 6, el: 14 },
    { ex: 48, ey: -36, er: 4.5, el: 11 },
    { ex: 60, ey: 22, er: 6, el: 14 },
    { ex: 48, ey: 36, er: 4.5, el: 11 },
  ];

  const windows = [42, 52, 62, 72, 82, 92, 102, 112, 122];

  return (
    <g transform={`translate(${cx} ${cy}) rotate(${heading})`}>
      <defs>
        <linearGradient id={`${id}jf`} x1="0%" y1="-100%" x2="0%" y2="100%">
          <stop offset="0%" stopColor={goldLight} stopOpacity="0.9" />
          <stop offset="50%" stopColor={gold} />
          <stop offset="100%" stopColor={goldDark} stopOpacity="0.8" />
        </linearGradient>
      </defs>
      <path d={wingU} fill={`url(#${id}jf)`} opacity="0.9" />
      <path d={wingD} fill={`url(#${id}jf)`} opacity="0.9" />
      <path d={wingU} fill="none" stroke={goldLight} strokeWidth={0.6 * s * 2} opacity="0.4" />
      <path d={wingD} fill="none" stroke={goldLight} strokeWidth={0.6 * s * 2} opacity="0.4" />
      <path d={stabU} fill={gold} opacity="0.85" />
      <path d={stabD} fill={gold} opacity="0.85" />
      <path d={fin} fill={gold} opacity="0.9" />
      {engines.map(({ ex, ey, er, el }, i) => (
        <g key={i}>
          <ellipse cx={ex * s} cy={ey * s} rx={el * s * 0.5} ry={er * s} fill={goldDark} opacity="0.9" />
          <ellipse cx={ex * s} cy={ey * s} rx={er * s * 0.5} ry={er * s * 0.7} fill="none" stroke={gold} strokeWidth={0.5 * s * 2} opacity="0.6" />
        </g>
      ))}
      <path d={fuse} fill={`url(#${id}jf)`} />
      <path d={hump} fill={goldLight} opacity="0.4" />
      <path d={`M ${128 * s} ${-2 * s} C ${135 * s} ${-1 * s} ${139 * s} 0 ${140 * s} 0`} fill="none" stroke={goldLight} strokeWidth={s * 2} opacity="0.5" strokeLinecap="round" />
      <ellipse cx={126 * s} cy={0} rx={8 * s} ry={4 * s} fill={goldDark} opacity="0.6" />
      {windows.map((wx, i) => (
        <rect key={i} x={(wx - 2.5) * s} y={-2.5 * s} width={5 * s} height={3.5 * s} rx={1 * s} fill={goldLight} opacity="0.3" />
      ))}
    </g>
  );
}

// ── Celestial Star ───────────────────────────────────────────────────────────
function CelestialStar({ cx, cy, r = 4.5, gold, goldLight }: { cx: number; cy: number; r?: number; gold: string; goldLight: string }) {
  const id = `star${Math.round(cx)}${Math.round(cy)}`;
  const pts: [number, number][] = [];
  for (let i = 0; i < 8; i++) {
    const angle = (i * Math.PI) / 4 - Math.PI / 2;
    const radius = i % 2 === 0 ? r : r * 0.38;
    pts.push([cx + Math.cos(angle) * radius, cy + Math.sin(angle) * radius]);
  }
  const d = pts.map((p, i) => `${i === 0 ? 'M' : 'L'} ${p[0].toFixed(2)} ${p[1].toFixed(2)}`).join(' ') + ' Z';

  return (
    <g>
      <defs>
        <radialGradient id={`${id}g`} cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor={goldLight} stopOpacity="0.35" />
          <stop offset="100%" stopColor={gold} stopOpacity="0" />
        </radialGradient>
      </defs>
      <circle cx={cx} cy={cy} r={r * 2.2} fill={`url(#${id}g)`} />
      <circle cx={cx} cy={cy} r={r * 1.3} fill={gold} opacity="0.15" />
      <path d={d} fill={gold} />
      <circle cx={cx} cy={cy} r={r * 0.3} fill={goldLight} opacity="0.9" />
      <line x1={cx} y1={cy - r * 1.6} x2={cx} y2={cy + r * 1.6} stroke={goldLight} strokeWidth="0.7" opacity="0.4" strokeLinecap="round" />
      <line x1={cx - r * 1.6} y1={cy} x2={cx + r * 1.6} y2={cy} stroke={goldLight} strokeWidth="0.7" opacity="0.4" strokeLinecap="round" />
    </g>
  );
}

// ── EvenzsMark ───────────────────────────────────────────────────────────────
interface MarkProps {
  size?: number;
  dark?: boolean;
  animated?: boolean;
  className?: string;
  style?: CSSProperties;
}

export function EvenzsMark({ size = 80, dark = true, className = '', style }: MarkProps) {
  const uid = `em${dark ? 'd' : 'l'}${Math.round(size)}`;
  const G = {
    gold: dark ? BRAND.gold : BRAND.goldMid,
    goldLight: dark ? BRAND.goldLight : BRAND.gold,
    goldDark: dark ? BRAND.goldDark : BRAND.goldDark,
  };

  // Arc: center (70,72), radius 58, from (20,102) to (115,24)
  const arcPath = 'M 20 102 A 58 58 0 1 1 115 24';

  return (
    <svg
      viewBox="0 0 140 140"
      width={size}
      height={size}
      className={className}
      style={style}
      aria-label="Evenzs mark"
    >
      {/* Arc */}
      <path
        d={arcPath}
        fill="none"
        stroke={G.gold}
        strokeWidth="2.2"
        strokeLinecap="round"
        opacity="0.85"
      />

      {/* Star at arc terminus */}
      <CelestialStar cx={115} cy={24} r={4.5} gold={G.gold} goldLight={G.goldLight} />

      {/* Left flute — leans right */}
      <Flute id={`${uid}fl`} x={14} y={34} scale={0.72} rotate={7} gold={G.gold} goldLight={G.goldLight} goldDark={G.goldDark} />

      {/* Right flute — leans left */}
      <Flute id={`${uid}fr`} x={65} y={34} scale={0.72} rotate={-7} gold={G.gold} goldLight={G.goldLight} goldDark={G.goldDark} />

      {/* Bubble trail rising between glasses */}
      <BubbleTrail x={68} y={72} gold={G.gold} goldLight={G.goldLight} />

      {/* Jet at arc terminus */}
      <PremiumJet id={`${uid}j`} cx={115} cy={24} heading={-42} ws={34} gold={G.gold} goldLight={G.goldLight} goldDark={G.goldDark} />
    </svg>
  );
}

// ── App Icon ─────────────────────────────────────────────────────────────────
export function EvenzsAppIcon({
  size = 64,
  variant = 'dark',
  className = '',
  style,
}: {
  size?: number;
  variant?: 'dark' | 'gold' | 'light' | 'circle' | 'platinum';
  className?: string;
  style?: CSSProperties;
}) {
  const uid = `ai${variant}${Math.round(size)}`;
  const isGold = variant === 'gold';
  const isLight = variant === 'light';
  const isPlatinum = variant === 'platinum';
  const isCircle = variant === 'circle';

  const bgA = isGold ? '#D4AF37' : isLight ? '#F7F3E9' : isPlatinum ? '#B8BFC8' : '#121B2B';
  const bgB = isGold ? '#8B6914' : isLight ? '#EDE5D0' : isPlatinum ? '#6B7280' : '#0B1220';
  const gold = isGold ? '#0B1220' : BRAND.gold;
  const goldLight = isGold ? '#121B2B' : BRAND.goldLight;
  const goldDark = isGold ? '#040810' : BRAND.goldDark;
  const rx = isCircle ? 70 : 24;

  return (
    <svg viewBox="0 0 140 140" width={size} height={size} className={className} style={style} aria-label="Evenzs app icon">
      <defs>
        <linearGradient id={`${uid}bg`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={bgA} />
          <stop offset="100%" stopColor={bgB} />
        </linearGradient>
      </defs>
      <rect x="0" y="0" width="140" height="140" rx={rx} fill={`url(#${uid}bg)`} />
      <EvenzsMark size={size} dark={!isGold && !isLight && !isPlatinum} style={{ position: 'absolute' }} />
    </svg>
  );
}

// ── Favicon ───────────────────────────────────────────────────────────────────
export function EvenzsFavicon({ size = 32, className = '', style }: { size?: number; className?: string; style?: CSSProperties }) {
  const uid = `fv${Math.round(size)}`;
  // At small sizes render the mark directly on dark bg
  return (
    <svg viewBox="0 0 140 140" width={size} height={size} className={className} style={style} aria-label="Evenzs favicon">
      <defs>
        <linearGradient id={`${uid}bg`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#121B2B" />
          <stop offset="100%" stopColor="#0B1220" />
        </linearGradient>
      </defs>
      <rect x="0" y="0" width="140" height="140" rx="28" fill={`url(#${uid}bg)`} />
      {/* Simplified mark for small sizes — arc + star + minimal flutes */}
      <path d="M 20 102 A 58 58 0 1 1 115 24" fill="none" stroke={BRAND.gold} strokeWidth="5" strokeLinecap="round" opacity="0.9" />
      <circle cx="115" cy="24" r="6" fill={BRAND.gold} opacity="0.9" />
      <Flute id={`${uid}fl`} x={14} y={34} scale={0.72} rotate={7} gold={BRAND.gold} goldLight={BRAND.goldLight} goldDark={BRAND.goldDark} />
      <Flute id={`${uid}fr`} x={65} y={34} scale={0.72} rotate={-7} gold={BRAND.gold} goldLight={BRAND.goldLight} goldDark={BRAND.goldDark} />
    </svg>
  );
}
