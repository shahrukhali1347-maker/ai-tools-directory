import { ImageResponse } from 'next/og';
import { SITE_CONFIG } from '@/config/site';

export const runtime = 'edge';
export const alt = 'Best AI Tools - Discover & Compare 2000+ AI Tools';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #7c3aed 0%, #ec4899 50%, #06b6d4 100%)',
          padding: '80px',
          position: 'relative',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '120px',
            height: '120px',
            borderRadius: '28px',
            background: 'rgba(255, 255, 255, 0.15)',
            marginBottom: '32px',
            fontSize: '72px',
          }}
        >
          ✨
        </div>
        <div
          style={{
            fontSize: '84px',
            fontWeight: 800,
            color: 'white',
            textAlign: 'center',
            marginBottom: '24px',
            letterSpacing: '-0.03em',
            lineHeight: 1.05,
          }}
        >
          {SITE_CONFIG.name}
        </div>
        <div
          style={{
            fontSize: '36px',
            color: 'rgba(255, 255, 255, 0.92)',
            textAlign: 'center',
            maxWidth: '960px',
            lineHeight: 1.35,
          }}
        >
          Discover, compare &amp; choose from 2000+ AI tools across 50+ categories
        </div>
        <div
          style={{
            position: 'absolute',
            bottom: '60px',
            left: 0,
            right: 0,
            display: 'flex',
            justifyContent: 'center',
            fontSize: '28px',
            color: 'rgba(255, 255, 255, 0.8)',
            letterSpacing: '0.02em',
          }}
        >
          bestaitools4u.com
        </div>
      </div>
    ),
    size
  );
}
