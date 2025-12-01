import { FaGithub } from "react-icons/fa";
import ButtonLink from "@/components/ui/button";

interface ProjectType {
  title: string;
  description: string;
  image: string;
  category: string;
  tech: string[];
  liveUrl?: string;
  githubUrl?: string;
}

interface Props {
  project: ProjectType;
}

const ProjectCard = ({ project }: Props) => {
  return (
    <div className="group overflow-hidden card-hover animate-slide-up bg-card border border-border rounded-xl flex flex-col">
      
      {/* Image Section */}
      <div className="relative overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
        />

        {/* Hover Buttons */}
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="absolute bottom-4 left-4 right-4 flex gap-2">
            <ButtonLink
              goto={project.liveUrl || "/"}
              title="Preview"
              className="btnPrimary w-full text-center"
            />

            <a
              href={project.githubUrl || "/"}
              target="_blank"
              className="px-3 py-2 border border-white/40 rounded-lg bg-white/10 hover:bg-white/20 transition"
            >
              <FaGithub className="h-4 w-4" />
            </a>
          </div>
        </div>

        {/* Category Badge */}
        <span className="badge badge-primary absolute top-4 left-4">
          {project.category}
        </span>
      </div>

      {/* Card Content */}
      <div className="p-6 flex flex-col flex-grow">
        
        <div className="flex-grow">
          <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
            {project.title}
          </h3>

          <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
            {project.description}
          </p>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tech.slice(0, 4).map((tech, i) => (
              <span key={i} className="badge badge-secondary">
                {tech}
              </span>
            ))}

            {project.tech.length > 4 && (
              <span className="badge badge-secondary">
                +{project.tech.length - 4}
              </span>
            )}
          </div>
        </div>

        {/* Bottom Buttons — Always at the bottom */}
        <div className="mt-auto">
          <div className="flex w-full gap-2">
            <ButtonLink
              goto={project.liveUrl || "/"}
              title="Live Demo"
              className="btnFilled w-full text-center"
            />

            <a
              href={project.githubUrl || "/"}
              target="_blank"
              className="btnFilled w-max flex items-center justify-center gap-1 px-4 rounded-md border border-white/20 !bg-transparent hover:bg-white/10"
            >
              <FaGithub />
            </a>
          </div>
        </div>
      </div>

    </div>
  );
};

export default ProjectCard;
