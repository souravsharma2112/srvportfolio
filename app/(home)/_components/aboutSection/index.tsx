import Container from '@/components/ui/container'
import styles from './style.module.css'
import Image from 'next/image'
import ButtonLink from '@/components/ui/button'
const statsData = [
  {title : "Months Experinece" , stats : '09+'},
  {title : "Presonal Project" , stats: '25+'},
  {title : "Company Project" , stats : '11+'},
  {title : "Companies Worked" , stats : '01+'},
]
const AboutSection = () => {
  return (
    <section className='spacingY'>
      <Container>
        <div className={`sectionContent`}>
          <h2>About <span>Me</span></h2>
          <h3>Always learning. Always building. Always improving.</h3>
        </div>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 spacingTop'>
          <div className={`order-2 lg:order-1 grid grid-cols-2 lg:block ${styles.aboutBanner}`}>
            <Image
              src={"/images/aboutsrv.png"}
              height={200}
              width={200}
              className='object-fit object-center'
              alt='about'
            />
             <div className={`${styles.statsContainer} grid place-items-center justify-center lg:hidden`}>
              <ul className='grid grid-cols-2'>
                {statsData?.map((items , index) => (
                  <li key={`stats${index}`}>
                    <span>{items?.stats}</span>
                    <h4>{items?.title}</h4>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className={`${styles.sectionContent} sectionContent order-1 lg:order-2 flex flex-col justify-center`}>
            <p>I am a passionate Frontend Developer specializing in Next.js and React Native, with 1+ years of hands-on experience delivering production-ready web and mobile applications. Over time, I have built more than 20+ web apps and 10+ mobile apps, spanning diverse domains such as CMS platforms, Job Portals, Resume Builders, Ed-Tech dashboards, and OTT applications.<br/>
I have strong expertise in implementing end-to-end authentication, including JWT-based auth, OAuth social logins, and middleware-protected routes for secure user access. I’ve also integrated popular payment gateways like Razorpay and Stripe to support smooth and reliable transactions across platforms.<br/>
I enjoy creating fast, scalable, and intuitive user experiences—always focused on clean code, modern design patterns, and performance optimization. My goal is to build impactful digital products that deliver real value to users while continuously improving my skills as a developer.</p>
            <div className='mt-8'>
              <ButtonLink goto='/' title='Download CV' className='btn btnPrimary' />
            </div>
            <div className={`hidden lg:block ${styles.statsContainer}`}>
              <ul className='grid grid-cols-2 sm:grid-cols-4'>
                {statsData?.map((items , index) => (
                  <li key={`stats${index}`}>
                    <span>{items?.stats}</span>
                    <h4>{items?.title}</h4>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default AboutSection
