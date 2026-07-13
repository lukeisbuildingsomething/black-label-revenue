import { Link, NavLink, Outlet } from 'react-router-dom'

const navLinks = [
  { label: 'HOME', to: '/' },
  { label: 'PORTFOLIO PROGRAMS', to: '/portfolio-programs' },
  { label: 'WORKSHOPS', to: '/workshops' },
  { label: 'ABOUT', to: '/about' },
]

const footerLinks = [
  { label: 'PORTFOLIO PROGRAMS', to: '/portfolio-programs' },
  { label: 'WORKSHOPS', to: '/workshops' },
  { label: 'ABOUT', to: '/about' },
  { label: 'BOOK A CALL', to: '/book-a-call', gold: true },
]

function Nav() {
  return (
    <nav className="flex items-center justify-between border-b border-gold/25 px-[72px] py-[28px]">
      <Link to="/" className="flex flex-col gap-[2px]">
        <div className="font-serif text-[19px] tracking-[0.28em] text-cream">
          BLACK LABEL
        </div>
        <div className="text-[10px] font-semibold tracking-[0.52em] text-gold">
          REVENUE
        </div>
      </Link>
      <div className="flex items-center gap-[40px]">
        {navLinks.map(({ label, to }) => (
          <NavLink
            key={to}
            to={to}
            end={to === '/'}
            className={({ isActive }) =>
              `text-[12px] font-medium tracking-[0.18em] transition-opacity hover:opacity-85 ${
                isActive
                  ? 'border-b border-gold pb-[4px] text-cream'
                  : 'text-muted'
              }`
            }
          >
            {label}
          </NavLink>
        ))}
        <Link
          to="/book-a-call"
          className="bg-gold px-[24px] py-[12px] text-[12px] font-semibold tracking-[0.18em] text-obsidian transition-opacity hover:opacity-85"
        >
          BOOK A CALL
        </Link>
      </div>
    </nav>
  )
}

function Footer() {
  return (
    <footer className="flex items-center justify-between border-t border-gold/25 px-[72px] py-[32px]">
      <div className="text-[12px] tracking-[0.28em] text-muted-dark">
        BLACK LABEL REVENUE
      </div>
      <div className="flex gap-[32px]">
        {footerLinks.map(({ label, to, gold }) => (
          <Link
            key={to}
            to={to}
            className={`text-[12px] tracking-[0.14em] transition-opacity hover:opacity-85 ${
              gold ? 'text-gold' : 'text-muted-dark'
            }`}
          >
            {label}
          </Link>
        ))}
      </div>
    </footer>
  )
}

export default function Layout() {
  return (
    <div className="flex min-h-screen flex-col bg-obsidian font-sans text-cream">
      <Nav />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
