
import styles from './style.module.css'
const data = {
  projectName: "Electrosteel Casting Product Management Portal",
  techStack: [
    "Next.js",
    "React.js",
    "TypeScript",
    "Tailwind CSS",
    "Node.js",
    "REST API",
  ],
  points: [
    "Developed interactive and responsive UI components for product listing, casting specs, and order tracking using Next.js and TypeScript.",
    "Implemented smooth scrollable tabs with drag-to-scroll and auto-centering for improved user experience.",
    "Built admin-side modules for adding, editing, and managing products with image uploads and dynamic form fields.",
    "Integrated internal REST APIs for product data, specifications, and order updates with proper loading and error handling.",
    "Optimized performance using memoization, dynamic imports, and reduced unnecessary re-renders.",
    "Designed role-based access and secure routing structure to support admin, manager, and viewer workflows.",
  ],
};

const ProjectCard = () => {
  return (
    <div>
    <div className="bg-white/2 backdrop-blur-lg border border-white/10 rounded-2xl p-6 lg:p-10 shadow-lg">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

        {/* Left: Video */}
        <div className="rounded-xl overflow-hidden shadow-md">
          <video
            src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
            controls
            autoPlay
            muted
            loop
            className="w-full h-full object-cover"
          ></video>
        </div>

        {/* Right: Project Details */}
        <div className={`space-y-6 ${styles.projectCard}`}>

          {/* Title + Tech Stack */}
          <div>
            <h2 className="text-2xl lg:text-3xl font-bold mb-4">
              {data.projectName}
            </h2>

            <ul className="flex flex-wrap gap-2">
              {data.techStack.map((item, index) => (
                <li
                  key={index}
                  className="text-sm px-3 py-1 rounded-lg bg-white/10 border border-white/20 backdrop-blur-lg"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Points */}
          <ul className="space-y-3">
            {data.points.map((item, index) => (
              <li
                key={index}
                className="p-4 bg-white/5 border border-white/10 rounded-xl shadow-sm hover:bg-white/10 transition"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

      </div>
    </div>
    </div>
  );
};

export default ProjectCard;
