import Image from "next/image";
import styles from "./styles.module.css";

interface ProjectCardProps {
  title: string;
  image: string;
}

const ProjectCard = ({ title, image }: ProjectCardProps) => {
  return (
    <div className={styles.card}>
      {/* Background Image */}
      <Image
        src={image}
        alt={title}
        fill
        className={styles.image}
      />

      {/* Overlay */}
      <div className={styles.overlay}></div>

      {/* Project Name */}
      <div className={styles.titleBox}>
        <p className={styles.title}>{title}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
