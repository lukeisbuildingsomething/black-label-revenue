import { useState } from 'react'

const hatch =
  'repeating-linear-gradient(45deg, rgba(201,162,39,0.04), rgba(201,162,39,0.04) 8px, transparent 8px, transparent 16px)'

const steps = [
  ['01', 'Pick a time on the calendar — or use the form if that’s easier.'],
  [
    '02',
    'One qualifier question routes the conversation — portfolio program or workshop.',
  ],
  ['03', 'I reply personally within one business day.'],
]

const routeNotes = {
  pe: 'Routed to portfolio programs — we’ll talk cohort shape and portco selection.',
  co: 'Routed to workshops — we’ll talk team, data, and format.',
  none: 'The qualifier routes the conversation so the first call is useful, not exploratory.',
}

type Who = 'pe' | 'co' | null

export default function BookACall() {
  const [who, setWho] = useState<Who>(null)
  const [sent, setSent] = useState(false)

  const toggleClass = (active: boolean) =>
    `text-[11px] font-semibold tracking-[0.16em] px-[20px] py-[14px] cursor-pointer border transition-colors ${
      active
        ? 'border-gold bg-gold text-obsidian'
        : 'border-gold/40 text-muted hover:border-gold'
    }`

  return (
    <div className="mx-auto grid w-full max-w-[1440px] grid-cols-1 items-start gap-[96px] px-[72px] py-[96px] lg:grid-cols-[1fr_560px]">
      {/* Left: pitch */}
      <div>
        <div className="mb-[28px] text-[13px] font-semibold tracking-[0.32em] text-gold">
          BOOK A CALL
        </div>
        <h1 className="mb-[28px] text-pretty font-serif text-[58px] font-normal leading-[1.14] text-cream-bright">
          Thirty minutes.{' '}
          <em className="text-gold">You’ll leave with a plan either way.</em>
        </h1>
        <p className="mb-[48px] max-w-[520px] text-[18px] leading-[1.65] text-muted">
          Tell me where your team is with AI and I’ll tell you what I’d build
          first — whether or not we work together.
        </p>
        <div className="flex max-w-[480px] flex-col gap-[20px]">
          {steps.map(([num, text]) => (
            <div key={num} className="flex items-baseline gap-[20px]">
              <div className="min-w-[28px] font-serif text-[22px] text-gold">
                {num}
              </div>
              <div className="text-[15px] leading-[1.6] text-muted">{text}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Right: calendar + form */}
      <div className="flex flex-col gap-[32px]">
        <div
          className="flex h-[340px] items-center justify-center border border-gold/40"
          style={{ background: hatch }}
        >
          <div className="font-mono text-[12px] tracking-[0.1em] text-muted-dark">
            calendly embed
          </div>
        </div>

        <div className="border border-gold/25 bg-gold/[0.03] p-[40px]">
          <div className="mb-[28px] text-[12px] tracking-[0.26em] text-muted">
            PREFER EMAIL? TWO FIELDS.
          </div>
          <div className="flex flex-col gap-[20px]">
            <input
              type="text"
              placeholder="Name"
              className="w-full border-0 border-b border-gold/40 bg-transparent py-[12px] font-sans text-[16px] text-cream placeholder:text-muted-dark focus:outline-none"
            />
            <input
              type="email"
              placeholder="Work email"
              className="w-full border-0 border-b border-gold/40 bg-transparent py-[12px] font-sans text-[16px] text-cream placeholder:text-muted-dark focus:outline-none"
            />
            <div>
              <div className="mb-[14px] mt-[12px] text-[12px] tracking-[0.2em] text-muted">
                YOU ARE A…
              </div>
              <div className="flex gap-[12px]">
                <button
                  type="button"
                  onClick={() => setWho('pe')}
                  className={toggleClass(who === 'pe')}
                >
                  PE FIRM / HOLDCO
                </button>
                <button
                  type="button"
                  onClick={() => setWho('co')}
                  className={toggleClass(who === 'co')}
                >
                  SINGLE COMPANY
                </button>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setSent(true)}
              className="mt-[12px] cursor-pointer border-0 bg-gold px-[40px] py-[18px] text-[13px] font-semibold tracking-[0.18em] text-obsidian transition-opacity hover:opacity-85"
            >
              {sent ? 'SENT — TALK SOON' : 'SEND'}
            </button>
            <div className="text-[13px] leading-[1.5] text-muted-dark">
              {routeNotes[who ?? 'none']}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
