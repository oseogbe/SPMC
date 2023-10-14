"use client"

import ScrollToTop from 'react-scroll-to-top'
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
        <ScrollToTop smooth top={1000} color='#3C8E48' className='!rounded-full lg:!w-16 lg:!h-16 flex justify-center items-center !bg-[#E7F1E9] !right-5 lg:!right-8 !bottom-14' />
      </main>
    </div>
  )
}
