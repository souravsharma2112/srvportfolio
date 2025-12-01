import React from 'react'
import ProjectCard from '@/components/common/card/projectCard';
import Container from '@/components/ui/container';
import { projects } from './m.data';

const ProjectSection = () => {
    return (
        <section className='spacingY'>
            <Container>
                <div className={'sectionContent'}>
                    <h2>Portfolio</h2>
                    <h3>My Technical Skills.</h3>
                </div>
               <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-16">
                    {projects?.map((project, index) => (
                        <ProjectCard
                            key={`project-${index}`}
                            project={project}
                        />
                    ))}
                </div>
            </Container>
        </section>
    )
}

export default ProjectSection