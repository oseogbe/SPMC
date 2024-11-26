import AboutUs from '../components/AboutUs'
import Contact from '../components/Contact'
import Hero from '../components/Hero'
import OurTeam from '../components/OurTeam'
import PalmGallery from '../components/PalmGallery'
import Quotes from '../components/Quotes'
import Services from '../components/Services'
import Socials from '../components/Socials'
import ToTop from '../components/ToTop'

import { fetchPalmTrees } from '../lib/actions'

export default async function Home() {
  const palmTrees = (await fetchPalmTrees()).slice(0, 8)

  return (
    <div>
      <Hero />
      <main>
        <AboutUs />
        <Quotes />
        <Services />
        <PalmGallery palmTrees={palmTrees} />
        <OurTeam />
        <Contact />
        <Socials />
        <ToTop />
      </main>
    </div>
  )
}
