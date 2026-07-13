import { Link } from 'react-router-dom'
import headshot from '../assets/headshot.jpeg'
import CtaBar from '../components/CtaBar'

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="mx-auto grid max-w-[1440px] grid-cols-1 items-center gap-[96px] px-[72px] pb-[88px] pt-[96px] lg:grid-cols-[1fr_420px]">
        <div>
          <div className="mb-[28px] text-[13px] font-semibold tracking-[0.32em] text-gold">
            LUKE REIMER · GTM OPERATOR
          </div>
          <h1 className="mb-[32px] text-pretty font-serif text-[58px] font-normal leading-[1.14] text-cream-bright">
            I&rsquo;ve built GTM across 100+ vertical SaaS companies.{' '}
            <em className="text-gold">
              Now I help revenue teams actually use AI.
            </em>
          </h1>
          <p className="mb-[40px] max-w-[560px] text-[18px] leading-[1.6] text-muted">
            Working agents and workflows shipped inside your CRM &mdash; not
            certificates, not webinars.
          </p>
          <div className="flex items-center gap-[24px]">
            <Link
              to="/book-a-call"
              className="inline-block bg-gold px-[40px] py-[18px] text-[13px] font-semibold tracking-[0.18em] text-obsidian transition-opacity hover:opacity-85"
            >
              BOOK A CALL
            </Link>
            <div className="text-[13px] tracking-[0.06em] text-muted-dark">
              One conversation. No deck required.
            </div>
          </div>
        </div>
        <div className="relative h-[480px] w-[420px]">
          <div className="absolute bottom-[-16px] left-[16px] right-[-16px] top-[16px] border border-gold/50" />
          <img
            src={headshot}
            alt="Luke Reimer"
            className="relative block h-[480px] w-[420px] object-cover"
            style={{ filter: 'grayscale(100%) sepia(14%) contrast(1.05)' }}
          />
        </div>
      </section>

      {/* Proof bar */}
      <section className="grid grid-cols-1 border-y border-gold/25 sm:grid-cols-3">
        <div className="border-b border-gold/25 px-[48px] py-[36px] sm:border-b-0 sm:border-r">
          <div className="font-serif text-[40px] text-cream-bright">20 years</div>
          <div className="mt-[6px] text-[12px] tracking-[0.22em] text-muted">
            B2B SAAS GO-TO-MARKET
          </div>
        </div>
        <div className="border-b border-gold/25 px-[48px] py-[36px] sm:border-b-0 sm:border-r">
          <div className="font-serif text-[40px] text-cream-bright">
            ~100 portcos
          </div>
          <div className="mt-[6px] text-[12px] tracking-[0.22em] text-muted">
            HQ-LEVEL GTM, VERTICAL SAAS
          </div>
        </div>
        <div className="px-[48px] py-[36px]">
          <div className="font-serif text-[40px] text-cream-bright">
            Agent-based
          </div>
          <div className="mt-[6px] text-[12px] tracking-[0.22em] text-muted">
            GTM SYSTEMS, BUILT &amp; SHIPPED
          </div>
        </div>
      </section>

      {/* Dual path */}
      <section className="mx-auto max-w-[1440px] px-[72px] py-[88px]">
        <div className="mb-[40px] text-[13px] font-semibold tracking-[0.32em] text-gold">
          TWO WAYS IN
        </div>
        <div className="grid grid-cols-1 gap-[32px] md:grid-cols-2">
          <Link
            to="/portfolio-programs"
            className="block border border-gold/35 bg-gold/[0.03] p-[48px] transition-colors hover:border-gold"
          >
            <div className="mb-[20px] text-[12px] tracking-[0.26em] text-muted">
              FOR PE FIRMS &amp; HOLDCOS
            </div>
            <div className="mb-[16px] font-serif text-[34px] text-cream-bright">
              Portfolio Programs
            </div>
            <p className="mb-[28px] text-[16px] leading-[1.6] text-muted">
              AI GTM cohorts across 4&ndash;6 portcos, summit sessions, and a
              fractional operating-partner seat. Designed per portfolio.
            </p>
            <div className="text-[13px] font-semibold tracking-[0.16em] text-gold">
              EXPLORE PROGRAMS &rarr;
            </div>
          </Link>
          <Link
            to="/workshops"
            className="block border border-gold/35 bg-gold/[0.03] p-[48px] transition-colors hover:border-gold"
          >
            <div className="mb-[20px] text-[12px] tracking-[0.26em] text-muted">
              FOR REVENUE TEAMS
            </div>
            <div className="mb-[16px] font-serif text-[34px] text-cream-bright">
              Workshops
            </div>
            <p className="mb-[28px] text-[16px] leading-[1.6] text-muted">
              Half-day, hands-on, built on your CRM data and call recordings.
              Your team leaves with working AI workflows.
            </p>
            <div className="text-[13px] font-semibold tracking-[0.16em] text-gold">
              EXPLORE WORKSHOPS &rarr;
            </div>
          </Link>
        </div>
      </section>

      {/* Wedge */}
      <section className="px-[72px] pb-[96px] pt-[32px] text-center">
        <div className="mx-auto mb-[48px] h-px w-[64px] bg-gold" />
        <div className="mx-auto max-w-[900px] text-pretty font-serif text-[46px] italic leading-[1.25] text-cream-bright">
          &ldquo;Your engineers got AI cohorts. Your sellers got a webinar.&rdquo;
        </div>
        <div className="mt-[36px] text-[14px] tracking-[0.2em] text-muted">
          ONLY <span className="font-semibold text-gold">7%</span> OF GTM TEAMS
          REPORT CLEAR AI ROI. THAT GAP IS THE WORK.
        </div>
      </section>

      {/* CTA */}
      <CtaBar
        title="Ready when you are."
        subtitle="PE/holdco or single company — it starts with one call."
      />
    </>
  )
}
