import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import About from './pages/About'
import PortfolioPrograms from './pages/PortfolioPrograms'
import Workshops from './pages/Workshops'
import BookACall from './pages/BookACall'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio-programs" element={<PortfolioPrograms />} />
        <Route path="/workshops" element={<Workshops />} />
        <Route path="/about" element={<About />} />
        <Route path="/book-a-call" element={<BookACall />} />
        <Route path="*" element={<Home />} />
      </Route>
    </Routes>
  )
}
