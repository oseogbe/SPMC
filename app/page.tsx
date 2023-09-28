import AboutUs from './components/AboutUs'
import Header from './components/Header'
import Hero from './components/Hero'
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
      </main>
    </div>
  )
}
