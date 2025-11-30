import Container from '@/components/ui/container'
import { FaApple, FaReact } from 'react-icons/fa'
import { IoLogoAndroid } from 'react-icons/io5';
import { RiNextjsFill } from 'react-icons/ri'
import { TbWorldCode } from 'react-icons/tb';
import styles from './style.module.css'
const data = [
    {
        title: "Android Development",
        desc: "Building scalable cross-platform mobile apps using React Native.",
        icon: IoLogoAndroid,
    },
    {
        title: "ios Development",
        desc: "Creating responsive and modern web applications with React.",
        icon: FaApple,
    },
    {
        title: "Web Development",
        desc: "Experience in building high-performance Android mobile apps.",
        icon: TbWorldCode,
    },
    {
        title: "React Native",
        desc: "Building SEO-optimized, server-rendered, and fast websites.",
        icon: FaReact,
    },
    {
        title: "Next.js",
        desc: "Building SEO-optimized, server-rendered, and fast websites.",
        icon: RiNextjsFill,
    },
    {
        title: "React.js",
        desc: "Component-driven UI development with hooks, context, and redux.",
        icon: FaReact,
    },
];
const ServicesSection = () => {
    return (
        <section>
            <Container>
                <div className={'sectionContent'}>
                    <h2>Services</h2>
                    <h3>Lorem ipsum dolor sit amet consectetur adipisicing.</h3>
                </div>
                <div className='spacingTop'>
                    <ul className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                        {data?.map((item, index) => (
                            <li className={styles.experCard} key={`expertiese${index}`}>
                                <article>
                                    <item.icon className="text-5xl text-blue-500" />
                                    <div className={`${styles.sectionContent}`}>
                                        <h4>{item.title}</h4>
                                        <p>{item.desc}</p>
                                    </div>
                                </article>
                            </li>
                        ))}
                    </ul>
                </div>
            </Container>

        </section>
    )
}

export default ServicesSection
