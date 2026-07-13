import { Link } from 'react-router-dom'
import CtaBar from '../components/CtaBar'

const flavors = [
  {
    kicker: 'FOR THE FLOOR',
    title: 'AI for Sales & GTM Teams',
    body: 'Reps and managers build agents against live pipeline: account research, call prep, follow-up, forecast hygiene. Everything runs on your stack before the room empties.',
    specs: [
      ['WHO', 'AEs, SDRs, CS, REVOPS'],
      ['BUILT ON', 'YOUR CRM, ICP DOCS, CALL RECORDINGS'],
    ],
  },
  {
    kicker: 'FOR THE TOP TABLE',
    title: 'AI for the Exec Team',
    body: 'Strategy and alignment for the leadership team: where AI moves your revenue math, what to fund, what to kill, and who owns it. Leaves you with a decision, not a deck.',
    specs: [
      ['WHO', 'CEO, CRO, CFO, EXEC STAFF'],
      ['BUILT ON', 'YOUR NUMBERS, YOUR ROADMAP'],
    ],
  },
]

export default function Workshops() {
  return (
    <>
      {/* SKO seasonal callout */}
      <div className="border-b border-gold/25 bg-gold/[0.08] px-[72px] py-[14px] text-center text-[13px] font-semibold tracking-[0.18em] text-gold">
        NOW BOOKING JANUARY–FEBRUARY SKO EDITIONS &nbsp;·&nbsp;{' '}
        <Link to="/book-a-call" className="border-b border-gold text-cream">
          RESERVE A DATE
        </Link>
      </div>

      {/* Header */}
      <section className="mx-auto max-w-[1440px] px-[72px] pb-[72px] pt-[96px]">
        <div className="mb-[28px] text-[13px] font-semibold tracking-[0.32em] text-gold">
          FOR REVENUE TEAMS · CROs &amp; REVOPS AT PE-BACKED SAAS
        </div>
        <h1 className="mb-[28px] max-w-[940px] text-pretty font-serif text-[64px] font-normal leading-[1.1] text-cream-bright">
          Half a day. Your CRM data. Your team leaves with{' '}
          <em className="text-gold">working AI workflows.</em>
        </h1>
        <p className="m-0 max-w-[640px] text-[18px] leading-[1.6] text-muted">
          Hands-on, built on your CRM data, ICP docs, and call recordings. Not
          training about AI — building with it, on your pipeline.
        </p>
      </section>

      {/* Two flavors */}
      <section className="mx-auto max-w-[1440px] px-[72px] pb-[88px]">
        <div className="mb-[40px] text-[13px] font-semibold tracking-[0.32em] text-gold">
          TWO FLAVORS
        </div>
        <div className="grid grid-cols-1 gap-[32px] md:grid-cols-2">
          {flavors.map(({ kicker, title, body, specs }) => (
            <div
              key={title}
              className="border border-gold/35 bg-gold/[0.03] p-[48px]"
            >
              <div className="mb-[20px] text-[12px] tracking-[0.26em] text-muted">
                {kicker}
              </div>
              <div className="mb-[16px] font-serif text-[34px] text-cream-bright">
                {title}
              </div>
              <p className="mb-[32px] text-[16px] leading-[1.6] text-muted">
                {body}
              </p>
              <div className="border-t border-gold/25 pt-[24px] text-[13px] leading-[2.1] tracking-[0.1em] text-muted">
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

      {/* Formats */}
      <section className="grid grid-cols-1 border-y border-gold/25 sm:grid-cols-3">
        <div className="border-b border-gold/25 px-[48px] py-[44px] sm:border-b-0 sm:border-r">
          <div className="mb-[10px] font-serif text-[26px] text-cream-bright">
            In person
          </div>
          <p className="m-0 text-[15px] leading-[1.6] text-muted">
            On site with your team. Highest energy, fastest builds.
          </p>
        </div>
        <div className="border-b border-gold/25 px-[48px] py-[44px] sm:border-b-0 sm:border-r">
          <div className="mb-[10px] font-serif text-[26px] text-cream-bright">
            Virtual
          </div>
          <p className="m-0 text-[15px] leading-[1.6] text-muted">
            Same build cycle, split across two sessions for distributed teams.
          </p>
        </div>
        <div className="px-[48px] py-[44px]">
          <div className="mb-[10px] flex items-center gap-[12px]">
            <div className="font-serif text-[26px] text-cream-bright">
              SKO edition
            </div>
            <div className="bg-gold px-[10px] py-[4px] text-[10px] font-semibold tracking-[0.2em] text-obsidian">
              JAN–FEB
            </div>
          </div>
          <p className="m-0 text-[15px] leading-[1.6] text-muted">
            The working session your kickoff is missing. Booking now for
            January–February.
          </p>
        </div>
      </section>

      {/* Retainer: default next step */}
      <section className="mx-auto grid max-w-[1440px] grid-cols-1 items-center gap-[96px] px-[72px] py-[88px] lg:grid-cols-[1fr_480px]">
        <div>
          <div className="mb-[28px] text-[13px] font-semibold tracking-[0.32em] text-gold">
            WHAT HAPPENS AFTER
          </div>
          <div className="mb-[20px] text-pretty font-serif text-[40px] leading-[1.18] text-cream-bright">
            The workshop is day one. The reinforcement retainer is the habit.
          </div>
          <p className="m-0 max-w-[560px] text-[17px] leading-[1.65] text-muted">
            Most teams continue into a 60–90 day reinforcement period: office
            hours, workflow reviews, and new builds as your pipeline changes.
            It’s the default next step — because workflows that aren’t
            reinforced become last quarter’s webinar.
          </p>
        </div>
        <div className="border border-gold/50 p-[48px]">
          <div className="mb-[24px] text-[12px] tracking-[0.26em] text-muted">
            PRICING POSTURE
          </div>
          <div className="mb-[20px] font-serif text-[30px] italic leading-[1.3] text-cream-bright">
            Engagements typically start in the five figures.
          </div>
          <p className="m-0 text-[14px] leading-[1.6] text-muted">
            Scoped to your team, data, and format on the first call. If you’re
            shopping for a $3k seminar, this isn’t it.
          </p>
        </div>
      </section>

      {/* CTA */}
      <CtaBar
        title="Bring me your messiest pipeline."
        subtitle="One call to scope the workshop — team, data, format, date."
      />
    </>
  )
}
