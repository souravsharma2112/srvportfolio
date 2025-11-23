import Container from '@/components/ui/container'
import Image from 'next/image'
import styles from './style.module.css'
import ButtonLink from '@/components/ui/button'
import Link from 'next/link'
import { FaGithub, FaHackerrank, FaInstagram, FaLinkedin, FaWhatsapp } from 'react-icons/fa'
const socialLinks =[
    {name: "Instagram" , item : <FaInstagram size={22}/>},
    {name: "Linkedin" , item : <FaLinkedin size={22}/>},
    {name: "Github" , item : <FaGithub size={22}/>},
    {name: "Whatsapp" , item : <FaWhatsapp size={22}/>},
    {name: "HackerRank" , item : <FaHackerrank size={22}/>},
]
const HeroSection = () => {
    return (
        <section className=''>
            <Container>
                <div className='flex gap-4'>
                    <div className={`flex-1 ${styles.sectionContent}`}>
                        <div className='mb-4'>
                            <span>{`</> React Native`}</span>
                        </div>
                        <div className='flex items-center gap-2'>
                            <h2>{`Hello! I'm`}</h2>
                            <h3>Sourav Kumar,</h3>
                        </div>
                        <h1>Frontend <span>Developer</span></h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure itaque autem eligendi animi quia nisi mollitia obcaecati quae! Accusamus, ipsum Accusamus, ipsum Accusamus, ipsum.</p>
                        <div className={styles.socailLinks}>
                            <ul className='flex items-center gap-3'>
                                {socialLinks?.map((item , index) => (
                                    <li className={styles.socialItems} key={`socailLink${index}`}><Link href={"/"}>
                                        {item?.item}    
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className='flex items-center gap-4'>
                            <ButtonLink goto='/' title='Hire me' className='btnPrimary' />
                            <ButtonLink goto='/' title='Download CV' className='btnFilled' />
                        </div>
                    </div>
                    <div className='flex justify-end'>
                        <div className={styles.bannerContainer}>
                            <Image
                                src="/images/sk.png"
                                height={220}
                                width={290}
                                alt='banner'
                            />
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default HeroSection
