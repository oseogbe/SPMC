import AboutUs from './components/AboutUs'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Header from './components/Header'
import Hero from './components/Hero'
import OurTeam from './components/OurTeam'
import PalmGallery from './components/PalmGallery'
import Quotes from './components/Quotes'
import Services from './components/Services'

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <main>
        <AboutUs />
        <Quotes />
        <Services />
        <PalmGallery />
        <OurTeam />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
