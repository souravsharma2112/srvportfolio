import {
  AboutSection,
  ContactSection,
  HeroSection,
  ProjectSection,
  ServicesSection,
  SkillSection,
  WorkSection
} from './_components'

const page = () => {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <WorkSection />
      <SkillSection />
      <ProjectSection />
      <ContactSection />
    </main>
  )
}

export default page
