import Container from '@/components/ui/container'
import Image from 'next/image'
import styles from './style.module.css'
import { FaLocationDot } from 'react-icons/fa6'
import { BsCalendarDateFill } from 'react-icons/bs'
import ProjectTabs from '@/components/ui/projectTabs'
import ProjectCard from '@/components/common/projectCard'

const WorkSection = () => {
    return (
        <section className='spacingY'>
            <Container>
                <div className='sectionContent'>
                    <h2>Work Experience</h2>
                    <h3>Lorem ipsum dolor sit amet consectetur adipisicing.</h3>
                </div>

                <article>
                    <div className='flex gap-4 items-center'>
                        <div className={styles.companyLogo}>
                            <Image src={"/images/c1.jpg"} height={80} width={80} alt='simpreative' />
                        </div>
                        <div className='flex-1 sectionContent'>
                            <h4>Simpreative Consultancy Business Solutions Private Limited</h4>
                            <div className='flex items-center justify-between mt-3'>
                                <div className='flex gap-2 items-center'>
                                    <FaLocationDot size={18} className="text-[var(--accent-color)]" />
                                    <p>Kolkata, India</p>
                                </div>
                                <div className='flex items-center gap-4'>
                                    <div className='flex gap-2 items-center'>
                                        <BsCalendarDateFill size={18} className="text-[var(--accent-color)]" />
                                        <p>March 2025 - Current</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='sectionContent'>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam rem labore nam modi et ipsa sequi, sed adipisci. Illo beatae quisquam velit iusto sed eius pariatur quidem eveniet explicabo illum. Quo culpa, deleniti corrupti pariatur, labore quas tempore voluptatibus laboriosam, earum perferendis neque a libero?</p>
                    </div>
                    <div className='my-8'>
                        <h5>Projects</h5>
                        <ProjectTabs />
                        <ProjectCard/>
                    </div>
                </article>
            </Container>
        </section>
    )
}

export default WorkSection
