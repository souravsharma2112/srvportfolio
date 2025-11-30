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
    <section>
      <Container>
        <div className={`sectionContent`}>
          <h2>About <span>Me</span></h2>
          <h3>Lorem ipsum dolor sit amet consectetur adipisicing.</h3>
        </div>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
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
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti eaque eum unde consequuntur quos dolor itaque? Reprehenderit unde obcaecati officia quas temporibus aperiam atque ipsa porro ratione ex accusantium accusamus tempore laborum nulla soluta iste, facilis libero illum nesciunt perferendis exercitationem excepturi! Perspiciatis itaque error ducimus magni eligendi ratione ipsum amet, debitis recusandae aut, commodi fuga consequuntur perferendis animi aspernatur doloribus veniam ipsa fugit autem! Quam dolor numquam minima commodi earum consequuntur nam, quasi ducimus nulla at excepturi aut repellendus voluptas voluptatibus modi reprehenderit tenetur sint quidem velit nobis vitae eaque!</p>
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
