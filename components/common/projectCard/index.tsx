import styles from './style.module.css'
const data = {
    projectName: "Electrosteel Casting Product Management Portal",
    techStack: [
        "Next.js",
        "React.js",
        "TypeScript",
        "Tailwind CSS",
        "Node.js",
        "REST API"
    ],
    points: [
        "Developed interactive and responsive UI components for product listing, casting specs, and order tracking using Next.js and TypeScript.",
        "Implemented smooth scrollable tabs with drag-to-scroll and auto-centering for improved user experience.",
        "Built admin-side modules for adding, editing, and managing products with image uploads and dynamic form fields.",
        "Integrated internal REST APIs for product data, specifications, and order updates with proper loading and error handling.",
        "Optimized performance using memoization, dynamic imports, and reduced unnecessary re-renders.",
        "Designed role-based access and secure routing structure to support admin, manager, and viewer workflows."
    ]
}
const ProjectCard = () => {
    return (
        <div className={styles.projectCard}>
            <video src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" controls autoPlay muted loop></video>
            <div className='grid grid-cols-2 place-items-center gap-4 h-full'>
                <div>
                    <div className='p-[32px] border rounded-md'>
                        <div className={styles.videoContainer}>
                            <video src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" controls autoPlay muted loop></video>
                        </div>
                    </div>
                </div>
                <div className={styles.mainContent}>
                    <div className={`${styles.cardContent}`}>
                        <div className="sectionContent">
                            <h6>{data?.projectName}</h6>
                            <ul className='flex flex-wrap items-center gap-2'>
                                {data?.techStack?.map((item, index) => (
                                    <li className='w-max' key={`techstack${index}`}>{item}</li>
                                ))}
                            </ul>
                            <ul>
                                {data?.points?.map((item, index) => (
                                    <li key={`techstack${index}`}>{item}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectCard
