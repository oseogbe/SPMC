import AboutUs from './components/AboutUs'
import Contact from './components/Contact'
import Hero from './components/Hero'
import OurTeam from './components/OurTeam'
import PalmGallery from './components/PalmGallery'
import Quotes from './components/Quotes'
import Services from './components/Services'
import Socials from './components/Socials'

export default function Home() {
  return (
    <div>
      <Hero />
      <main>
        <AboutUs />
        <Quotes />
        <Services />
        <PalmGallery />
        <OurTeam />
        <Contact />
        <Socials />
      </main>
    </div>
  )
}
