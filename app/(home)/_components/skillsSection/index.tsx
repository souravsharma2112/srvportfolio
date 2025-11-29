import SkillCard from '@/components/common/card/skillCard'
import Container from '@/components/ui/container'
import React from 'react'

const data = [
    {
        icon : "/icons/html.webp",
        label : "HTML",
        progress : "80"
    },
    {
        icon : "/icons/css.webp",
        label : "CSS",
        progress : 80
    },
    {
        icon : "/icons/js.webp",
        label : "Javascript",
        progress : 80
    },
    {
        icon : "/icons/ts.webp",
        label : "Typescript",
      progress : 80
    },
    {
        icon : "/icons/nextjs.png",
        label : "Next Js",
        progress : 80
    },
    {
        icon : "/icons/react.png",
        label : "React",
        progress : 80
    },
    {
        icon : "/icons/redux.webp",
        label : "Redux",
        progress : 80
    },
     {
        icon : "/icons/form.png",
        label : "React Hook Form",
      progress : 80
    },
]

const SkillSection = () => {
    return (
        <section>
            <Container>
                <div className={'sectionContent'}>
                    <h2>Skills</h2>
                    <h3>My Technical Skills.</h3>
                </div>
                <div className="grid grid-cols-6 gap-3">
                    {data?.map((item,index) => (
                        <SkillCard
                        key={`skill${index}`}
                        name={item?.label ?? ''}
                        icon={item?.icon ?? ''}
                        progress={item.progress ?? 0}
              
                        />
                    ))}
                </div>
            </Container>
        </section>
    )
}

export default SkillSection