'use client';

import type { CSSProperties } from 'react';
import { EvenzsMark, BRAND } from './EvenzsMark';

interface LogoWordmarkProps {
  dark?: boolean;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
  showTagline?: boolean;
  stacked?: boolean;
  className?: string;
  style?: CSSProperties;
}

const SIZES = {
  xs:  { mark: 30,  word: 22, tag: 7.5, gap: 10, tagGap: 5 },
  sm:  { mark: 40,  word: 30, tag: 8,   gap: 12, tagGap: 6 },
  md:  { mark: 52,  word: 40, tag: 8.5, gap: 14, tagGap: 7 },
  lg:  { mark: 68,  word: 54, tag: 9.5, gap: 18, tagGap: 9 },
  xl:  { mark: 88,  word: 70, tag: 10.5,gap: 22, tagGap: 11 },
  '2xl':{ mark: 112, word: 90, tag: 12,  gap: 28, tagGap: 14 },
};

export function LogoWordmark({
  dark = true,
  size = 'md',
  showTagline = true,
  stacked = false,
  className = '',
  style,
}: LogoWordmarkProps) {
  const s = SIZES[size];
  const wordColor = dark ? '#FFFFFF' : BRAND.navy;
  const tagColor = BRAND.gold;

  if (stacked) {
    return (
      <div
        className={`flex flex-col items-center ${className}`}
        style={style}
      >
        <EvenzsMark size={s.mark} dark={dark} />
        <div style={{ marginTop: s.tagGap }}>
          <span
            style={{
              fontSize: s.word,
              fontWeight: 800,
              color: wordColor,
              letterSpacing: '-0.025em',
              lineHeight: 1,
              fontFamily: 'var(--font-sans, system-ui)',
            }}
          >
            evenz<span style={{ color: BRAND.gold }}>s</span>
          </span>
        </div>
        {showTagline && (
          <div
            style={{
              marginTop: s.tagGap,
              display: 'flex',
              alignItems: 'center',
              gap: s.tagGap * 0.6,
            }}
          >
            <span style={{ display: 'block', width: s.word * 0.28, height: 1, background: tagColor, opacity: 0.7 }} />
            <span style={{ fontSize: s.tag, color: tagColor, letterSpacing: '0.18em', fontWeight: 600, textTransform: 'uppercase' as const }}>
              From Toast to Takeoff
            </span>
            <span style={{ display: 'block', width: s.word * 0.28, height: 1, background: tagColor, opacity: 0.7 }} />
          </div>
        )}
      </div>
    );
  }

  return (
    <div
      className={`flex items-center ${className}`}
      style={style}
    >
      <EvenzsMark size={s.mark} dark={dark} />
      <div style={{ marginLeft: s.gap, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <span
          style={{
            fontSize: s.word,
            fontWeight: 800,
            color: wordColor,
            letterSpacing: '-0.025em',
            lineHeight: 1,
            fontFamily: 'var(--font-sans, system-ui)',
          }}
        >
          evenz<span style={{ color: BRAND.gold }}>s</span>
        </span>
        {showTagline && (
          <div
            style={{
              marginTop: s.tagGap,
              display: 'flex',
              alignItems: 'center',
              gap: s.tagGap * 0.6,
            }}
          >
            <span style={{ display: 'block', width: s.word * 0.28, height: 1, background: tagColor, opacity: 0.7 }} />
            <span style={{ fontSize: s.tag, color: tagColor, letterSpacing: '0.18em', fontWeight: 600, textTransform: 'uppercase' as const }}>
              From Toast to Takeoff
            </span>
            <span style={{ display: 'block', width: s.word * 0.28, height: 1, background: tagColor, opacity: 0.7 }} />
          </div>
        )}
      </div>
    </div>
  );
}
