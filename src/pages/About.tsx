import { Link } from 'react-router-dom'
import headshot from '../assets/headshot.jpeg'
import CtaBar from '../components/CtaBar'

const chapters = [
  {
    label: 'THE OPERATOR',
    title: 'Twenty years carrying a number.',
    body: 'I’ve built and run go-to-market in B2B SaaS for two decades — pipeline, pricing, positioning, sales teams. I know what a Tuesday looks like for a rep, because I’ve had a few thousand of them.',
  },
  {
    label: 'THE PATTERN-FINDER',
    title: 'Then a hundred companies at once.',
    body: 'Working HQ-level across ~100 vertical SaaS companies changes what you can see. The same GTM problems repeat with small variations — and so do the fixes. Portfolio scale turned instinct into pattern.',
  },
  {
    label: 'THE BUILDER',
    title: 'Now I build the AI half of GTM.',
    body: 'Today I build agent-based GTM systems with revenue teams — on their CRM data, their ICP docs, their call recordings. Engineers got real AI programs; sellers got webinars. I exist to close that gap.',
  },
]

const hatch =
  'repeating-linear-gradient(45deg, rgba(201,162,39,0.04), rgba(201,162,39,0.04) 8px, transparent 8px, transparent 16px)'

export default function About() {
  return (
    <>
      {/* Hero */}
      <section className="mx-auto grid max-w-[1440px] grid-cols-1 items-center gap-[96px] px-[72px] pb-[88px] pt-[96px] lg:grid-cols-[420px_1fr]">
        <div className="relative h-[480px] w-[420px]">
          <div className="absolute bottom-[-16px] left-[16px] right-[-16px] top-[16px] border border-gold/50" />
          <img
            src={headshot}
            alt="Luke Reimer"
            className="relative block h-[480px] w-[420px] object-cover"
            style={{ filter: 'grayscale(100%) sepia(14%) contrast(1.05)' }}
          />
        </div>
        <div>
          <div className="mb-[28px] text-[13px] font-semibold tracking-[0.32em] text-gold">
            ABOUT · LUKE REIMER
          </div>
          <h1 className="mb-[28px] text-pretty font-serif text-[58px] font-normal leading-[1.14] text-cream-bright">
            You’re not buying a framework.{' '}
            <em className="text-gold">
              You’re buying twenty years of pattern recognition.
            </em>
          </h1>
          <p className="m-0 max-w-[560px] text-[18px] leading-[1.6] text-muted">
            I’ve spent my career inside B2B SaaS revenue teams — first running
            them, then fixing them at portfolio scale, now rebuilding them
            around AI.
          </p>
        </div>
      </section>

      {/* Narrative: three chapters */}
      <section className="border-t border-gold/25">
        <div className="mx-auto max-w-[1440px] px-[72px] py-[88px]">
          <div className="flex max-w-[820px] flex-col gap-[72px]">
            {chapters.map(({ label, title, body }) => (
              <div
                key={label}
                className="grid grid-cols-1 gap-[16px] sm:grid-cols-[180px_1fr] sm:gap-[48px]"
              >
                <div className="pt-[8px] text-[12px] font-semibold tracking-[0.26em] text-gold">
                  {label}
                </div>
                <div>
                  <div className="mb-[16px] font-serif text-[30px] text-cream-bright">
                    {title}
                  </div>
                  <p className="m-0 text-[17px] leading-[1.7] text-muted">
                    {body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Speaking strip */}
      <section className="border-y border-gold/25">
        <div className="mx-auto max-w-[1440px] px-[72px] py-[64px]">
          <div className="mb-[40px] flex flex-wrap items-baseline justify-between gap-4">
            <div className="text-[13px] font-semibold tracking-[0.32em] text-gold">
              SPEAKING &amp; APPEARANCES
            </div>
            <div className="text-[13px] text-muted-dark">
              Keynotes, OP forums, portfolio summits, podcasts
            </div>
          </div>
          <div className="grid grid-cols-1 gap-[32px] sm:grid-cols-3">
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className="flex h-[180px] items-center justify-center border border-gold/30"
                style={{ background: hatch }}
              >
                <div className="font-mono text-[12px] tracking-[0.1em] text-muted-dark">
                  event photo / logo
                </div>
              </div>
            ))}
          </div>
          <div className="mt-[20px] text-[13px] text-muted-dark">
            Booking keynotes and portfolio-summit sessions for 2026–27.{' '}
            <Link to="/book-a-call" className="text-gold">
              Inquire →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CtaBar
        title="If this sounds like your gap, let’s talk."
        subtitle="You’ll get me on the call — there’s no team to hand you off to."
        bordered={false}
      />
    </>
  )
}
