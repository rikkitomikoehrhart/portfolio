import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar';
// import Footer from './components/layout/Footer'
// import Home from './pages/Home'
// import Resume from './pages/Resume'
// import Portfolio from './pages/Portfolio'
// import ProjectDetail from './pages/ProjectDetail'
// import Contact from './pages/Contact'

export default function App() {
  return (
    <Navbar />

    // <BrowserRouter>
    //   <Navbar />
    //   {/* <main>
    //     <Routes>
    //       <Route path="/"            element={<Home />} />
    //       <Route path="/resume"      element={<Resume />} />
    //       <Route path="/portfolio"   element={<Portfolio />} />
    //       <Route path="/portfolio/:id" element={<ProjectDetail />} />
    //       <Route path="/contact"     element={<Contact />} />
    //     </Routes>
    //   </main> */}
    //   <Footer />
    // </BrowserRouter>
  )
}