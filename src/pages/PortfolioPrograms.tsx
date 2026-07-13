import CtaBar from '../components/CtaBar'

const problems = [
  {
    title: 'Pilot purgatory',
    body: 'Every portco has an AI experiment running. Almost none have one in production revenue workflows.',
  },
  {
    title: 'Exit-multiple pressure',
    body: 'Buyers now price AI maturity into the multiple. “We have a policy” doesn’t survive diligence.',
  },
  {
    title: 'Engineering-first programs',
    body: 'Your AI cohorts trained developers. The GTM half of the P&L got a lunch-and-learn.',
  },
]

const programs = [
  {
    numeral: 'I',
    title: 'AI GTM Cohort',
    body: '4–6 portcos per cohort. Half-day kickoff, then a 6-week build cycle on each company’s own CRM data, ICP docs, and call recordings. Teams ship working agents and workflows — and the pattern spreads across the portfolio.',
    specs: [
      ['FORMAT', 'KICKOFF + 6-WEEK BUILD'],
      ['SCALE', '4–6 PORTCOS'],
      ['OUTPUT', 'AGENTS IN PRODUCTION'],
    ],
  },
  {
    numeral: 'II',
    title: 'Portfolio Summit Sessions',
    body: 'Keynote or working session for operating-partner forums and portfolio events. What’s actually working in AI-driven GTM across ~100 vertical SaaS companies — and what to stop funding.',
    specs: [
      ['FORMAT', 'KEYNOTE / WORKSHOP'],
      ['SCALE', 'WHOLE PORTFOLIO'],
      ['OUTPUT', 'A SHARED PLAYBOOK'],
    ],
  },
  {
    numeral: 'III',
    title: 'Fractional AI GTM Operating Partner',
    body: 'Monthly retainer. One seat that covers the portfolio: cohort follow-through, portco office hours, diligence support, and a standing view of where AI is moving revenue — and where it’s theater.',
    specs: [
      ['FORMAT', 'MONTHLY RETAINER'],
      ['SCALE', 'ONE SEAT, ALL PORTCOS'],
      ['OUTPUT', 'COMPOUNDING CAPABILITY'],
    ],
  },
]

const steps = [
  {
    step: 'STEP ONE',
    title: 'Pick the portcos',
    body: 'We select 4–6 companies where revenue motion and data are ready. One call with each CRO.',
  },
  {
    step: 'STEP TWO',
    title: 'Build on their data',
    body: 'Half-day kickoff, then six weeks of hands-on builds using each team’s CRM, ICP docs, and calls.',
  },
  {
    step: 'STEP THREE',
    title: 'Ship, then spread',
    body: 'Working agents and workflows in production — not certificates — with a playbook the next cohort inherits.',
  },
]

export default function PortfolioPrograms() {
  return (
    <>
      {/* Header */}
      <section className="mx-auto max-w-[1440px] px-[72px] pb-[72px] pt-[96px]">
        <div className="mb-[28px] text-[13px] font-semibold tracking-[0.32em] text-gold">
          FOR PE FIRMS &amp; HOLDCOS
        </div>
        <h1 className="mb-[28px] max-w-[900px] text-pretty font-serif text-[64px] font-normal leading-[1.1] text-cream-bright">
          AI programs for the half of the portfolio your engineers can’t reach.
        </h1>
        <p className="m-0 max-w-[640px] text-[18px] leading-[1.6] text-muted">
          For heads of AI, operating partners, and value-creation teams who need
          GTM results across the portfolio — not another pilot.
        </p>
      </section>

      {/* Problem */}
      <section className="grid grid-cols-1 border-y border-gold/25 sm:grid-cols-3">
        {problems.map(({ title, body }, i) => (
          <div
            key={title}
            className={`px-[48px] py-[44px] ${
              i < problems.length - 1
                ? 'border-b border-gold/25 sm:border-b-0 sm:border-r'
                : ''
            }`}
          >
            <div className="mb-[12px] font-serif text-[26px] text-cream-bright">
              {title}
            </div>
            <p className="m-0 text-[15px] leading-[1.6] text-muted">{body}</p>
          </div>
        ))}
      </section>

      {/* Offer ladder */}
      <section className="mx-auto max-w-[1440px] px-[72px] py-[88px]">
        <div className="mb-[40px] text-[13px] font-semibold tracking-[0.32em] text-gold">
          THE PROGRAMS
        </div>
        <div className="flex flex-col">
          {programs.map(({ numeral, title, body, specs }, i) => (
            <div
              key={numeral}
              className={`grid grid-cols-1 items-start gap-[48px] border-t border-gold/25 py-[48px] lg:grid-cols-[120px_1fr_380px] ${
                i === programs.length - 1 ? 'border-b' : ''
              }`}
            >
              <div className="font-serif text-[44px] text-gold">{numeral}</div>
              <div>
                <div className="mb-[14px] font-serif text-[34px] text-cream-bright">
                  {title}
                </div>
                <p className="m-0 max-w-[560px] text-[16px] leading-[1.65] text-muted">
                  {body}
                </p>
              </div>
              <div className="border-l border-gold/35 pl-[32px] text-[13px] leading-[2.1] tracking-[0.1em] text-muted">
                {specs.map(([k, v]) => (
                  <div key={k}>
                    <span className="text-gold">{k}</span> &nbsp;{v}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section className="mx-auto max-w-[1440px] px-[72px] pb-[96px] pt-[24px]">
        <div className="mb-[40px] text-[13px] font-semibold tracking-[0.32em] text-gold">
          HOW IT WORKS
        </div>
        <div className="grid grid-cols-1 gap-[32px] md:grid-cols-3">
          {steps.map(({ step, title, body }) => (
            <div key={step}>
              <div className="mb-[16px] text-[12px] tracking-[0.26em] text-muted-dark">
                {step}
              </div>
              <div className="mb-[12px] font-serif text-[26px] text-cream-bright">
                {title}
              </div>
              <p className="m-0 text-[15px] leading-[1.6] text-muted">{body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <CtaBar
        title="Designed per portfolio."
        subtitle="No rate card — scope follows your portfolio’s shape. Start with a call."
      />
    </>
  )
}
