"use client"
import Container from '@/components/ui/container'
import Image from 'next/image'
import styles from './style.module.css'
import ButtonLink from '@/components/ui/button'
import Link from 'next/link'
import { FaGithub, FaHackerrank, FaInstagram, FaLinkedin, FaWhatsapp } from 'react-icons/fa'
import { useTypewriter } from '@/utils/helper'
const socialLinks =[
    {name: "Instagram" , item : <FaInstagram size={22}/>},
    {name: "Linkedin" , item : <FaLinkedin size={22}/>},
    {name: "Github" , item : <FaGithub size={22}/>},
    {name: "Whatsapp" , item : <FaWhatsapp size={22}/>},
    {name: "HackerRank" , item : <FaHackerrank size={22}/>},
]
const HeroSection = () => {
    const text = useTypewriter(["React Native", "Next.js","Typescript","React"]);
    return (
        <section className={styles.heroSection}>
            <Container>
                <div className='flex gap-4 flex-col lg:flex-row'>
                    <div className={`flex-1 ${styles.sectionContent} sectionContent`}>
                        <div className='mb-4'>
                            <span>{`</> ${text}`}</span>
                            <span className="animate-pulse">|</span>
                        </div>
                        <div className='flex items-center gap-2'>
                            <h2>{`Hello! I'm`}</h2>
                            <h3>Sourav Kumar,</h3>
                        </div>
                        <h1>Frontend <span>Developer</span></h1>
                        <p className='mt-4'>Passionate Frontend Developer specializing in Next.js and React Native with 1+ years of hands-on experience building production-ready web and mobile applications.</p>
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
                    <div className='flex justify-center lg:justify-end'>
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
