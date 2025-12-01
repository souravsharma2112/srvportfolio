import React from 'react'
import ProjectCard from '@/components/common/card/projectCard';
import Container from '@/components/ui/container';

const projects = [
    { title: "Portfolio Website", image: "/projects/p1.jpg" },
    { title: "E-commerce App", image: "/projects/p2.jpg" },
    { title: "Mobile App UI", image: "/projects/p3.jpg" },
    { title: "Dashboard", image: "/projects/p4.jpg" },
    { title: "Agency Landing", image: "/projects/p5.jpg" },
    { title: "Blog CMS", image: "/projects/p6.jpg" },
    { title: "Real Estate Site", image: "/projects/p7.jpg" },
    { title: "Next.js SAAS", image: "/projects/p8.jpg" },
    { title: "Crypto App", image: "/projects/p9.jpg" },
];

const ProjectSection = () => {
    return (
        <section className='spacingY'>
            <Container>
                <div className={'sectionContent'}>
                    <h2>Portfolio</h2>
                    <h3>My Technical Skills.</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {projects?.map((item, index) => (
                        <ProjectCard
                            key={`project-${index}`}
                            title={item.title}
                            image={item.image}
                        />
                    ))}
                </div>
            </Container>
        </section>
    )
}

export default ProjectSection