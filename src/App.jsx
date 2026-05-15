import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import HeroContent from './components/HeroContent'
import HeroContent2 from './components/HeroContent2'
import HeroContent3 from './components/HeroContent3'
import Ad from './components/Ad'
import Feedback from './components/Feedback'
import Footer from './components/Footer'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import Checkout from './pages/Checkout'

function Home() {
  return (
    <>
      <Header />
      <HeroContent />
      <HeroContent2 />
      <HeroContent3 />
      <Ad />
      <Feedback />
      <Footer />
    </>
  )
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/checkout" element={<Checkout />} />
    </Routes>
  )
}

export default App
