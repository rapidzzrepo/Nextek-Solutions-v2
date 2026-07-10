import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Solutions from './pages/Solutions'
import Intelligence from './pages/Intelligence'
import CaseStudies from './pages/CaseStudies'
import Company from './pages/Company'
import ContactUs from './pages/ContactUs'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/solutions" element={<Solutions />} />
        <Route path="/intelligence" element={<Intelligence />} />
        <Route path="/case-studies" element={<CaseStudies />} />
        <Route path="/company" element={<Company />} />
        <Route path="/contact" element={<ContactUs />} />
      </Route>
    </Routes>
  )
}
