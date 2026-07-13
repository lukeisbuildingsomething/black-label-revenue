import { Link } from 'react-router-dom'

type CtaBarProps = {
  title: string
  subtitle: string
  bordered?: boolean
}

export default function CtaBar({ title, subtitle, bordered = true }: CtaBarProps) {
  return (
    <section
      className={`mx-auto flex max-w-[1440px] flex-col items-start gap-6 p-[72px] md:flex-row md:items-center md:justify-between ${
        bordered ? 'border-t border-gold/25' : ''
      }`}
    >
      <div>
        <div className="mb-[8px] font-serif text-[32px] text-cream-bright">
          {title}
        </div>
        <div className="text-[15px] text-muted">{subtitle}</div>
      </div>
      <Link
        to="/book-a-call"
        className="inline-block shrink-0 bg-gold px-[40px] py-[18px] text-[13px] font-semibold tracking-[0.18em] text-obsidian transition-opacity hover:opacity-85"
      >
        BOOK A CALL
      </Link>
    </section>
  )
}
