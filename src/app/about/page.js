import AboutHero from '@/components/about/AboutHero'
import AboutStory from '@/components/about/AboutStory'
import AboutMission from '@/components/about/AboutMission'
import AboutValues from '@/components/about/AboutValues'
import AboutTeam from '@/components/about/AboutTeam'
import AboutTimeline from '@/components/about/AboutTimeline'
import AboutCertifications from '@/components/about/AboutCertifications'
import AboutCTA from '@/components/about/AboutCTA'

export const metadata = {
  title: 'About Us | SunsysTechsol Solutions',
  description: 'Learn about SunsysTechsol Solutions - our story, mission, values, and the expert team behind innovative IT solutions.',
  keywords: ['about us', 'our story', 'our team', 'company values', 'IT experts', 'technology team'],
}

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <AboutStory />
      <AboutMission />
      <AboutValues />
      {/*<AboutTeam />*/}
      <AboutTimeline />
      <AboutCertifications />
      <AboutCTA />
    </>
  )
}