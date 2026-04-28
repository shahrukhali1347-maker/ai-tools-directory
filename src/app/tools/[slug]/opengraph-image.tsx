import { ImageResponse } from 'next/og';
import { getToolBySlug, aiTools } from '@/data/tools';
import { getCategoryBySlug } from '@/data/categories';

export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export const alt = 'Tool review on Best AI Tools';

export async function generateStaticParams() {
  return aiTools.map((tool) => ({ slug: tool.slug }));
}

export default async function ToolOpengraphImage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const tool = getToolBySlug(slug);

  if (!tool) {
    // Fallback to default OG image content
    return new ImageResponse(
      (
        <div
          style={{
            width: '100%',
            height: '100%',
            background: 'linear-gradient(135deg, #7c3aed 0%, #ec4899 50%, #06b6d4 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            fontSize: 64,
            fontWeight: 800,
          }}
        >
          Best AI Tools
        </div>
      ),
      size
    );
  }

  const category = getCategoryBySlug(tool.category);
  const minPrice = Math.min(...tool.pricing.plans.map((p) => p.price));
  const priceText =
    minPrice === 0 && tool.pricing.free
      ? 'Free'
      : minPrice === 0
      ? 'Free tier'
      : `From $${minPrice}/${tool.pricing.plans[0].interval}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          background: 'linear-gradient(135deg, #1a0b2e 0%, #2d1b4e 50%, #0f172a 100%)',
          padding: '64px',
          position: 'relative',
        }}
      >
        {/* Subtle grid background */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background:
              'radial-gradient(circle at 80% 20%, rgba(124, 58, 237, 0.4) 0%, transparent 50%), radial-gradient(circle at 20% 80%, rgba(236, 72, 153, 0.3) 0%, transparent 50%)',
            display: 'flex',
          }}
        />

        {/* Top bar with brand */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '16px',
            zIndex: 1,
          }}
        >
          <div
            style={{
              width: '48px',
              height: '48px',
              borderRadius: '12px',
              background: 'linear-gradient(135deg, #7c3aed, #ec4899)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '28px',
            }}
          >
            ✨
          </div>
          <div
            style={{
              color: 'rgba(255, 255, 255, 0.8)',
              fontSize: '24px',
              fontWeight: 600,
              letterSpacing: '0.02em',
            }}
          >
            Best AI Tools
          </div>
        </div>

        {/* Main content */}
        <div
          style={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            zIndex: 1,
            marginTop: '40px',
          }}
        >
          {category && (
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                color: '#a78bfa',
                fontSize: '20px',
                fontWeight: 600,
                marginBottom: '16px',
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
              }}
            >
              {category.name}
            </div>
          )}
          <div
            style={{
              fontSize: '88px',
              fontWeight: 800,
              color: 'white',
              lineHeight: 1.05,
              letterSpacing: '-0.03em',
              marginBottom: '24px',
            }}
          >
            {tool.name}
          </div>
          <div
            style={{
              fontSize: '32px',
              color: 'rgba(255, 255, 255, 0.85)',
              lineHeight: 1.3,
              maxWidth: '900px',
            }}
          >
            {tool.tagline.length > 90 ? tool.tagline.slice(0, 90) + '…' : tool.tagline}
          </div>
        </div>

        {/* Bottom bar with key info pills */}
        <div
          style={{
            display: 'flex',
            gap: '12px',
            zIndex: 1,
            flexWrap: 'wrap',
          }}
        >
          <div
            style={{
              padding: '12px 24px',
              background: 'rgba(255, 255, 255, 0.12)',
              backdropFilter: 'blur(10px)',
              borderRadius: '999px',
              color: 'white',
              fontSize: '22px',
              fontWeight: 600,
              border: '1px solid rgba(255, 255, 255, 0.2)',
            }}
          >
            {priceText}
          </div>
          <div
            style={{
              padding: '12px 24px',
              background: 'rgba(255, 255, 255, 0.12)',
              backdropFilter: 'blur(10px)',
              borderRadius: '999px',
              color: 'white',
              fontSize: '22px',
              fontWeight: 600,
              border: '1px solid rgba(255, 255, 255, 0.2)',
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
            }}
          >
            ⭐ {tool.rating.average.toFixed(1)}
          </div>
          {tool.featured && (
            <div
              style={{
                padding: '12px 24px',
                background: 'linear-gradient(135deg, #f59e0b, #ec4899)',
                borderRadius: '999px',
                color: 'white',
                fontSize: '22px',
                fontWeight: 700,
                letterSpacing: '0.02em',
              }}
            >
              EDITOR&apos;S PICK
            </div>
          )}
        </div>
      </div>
    ),
    size
  );
}
