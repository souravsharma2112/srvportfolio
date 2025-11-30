import Image from "next/image";

interface SkillCardProps {
  icon: string;
  name: string;
  progress: number | string;
  size?: number;
}

const SkillCard = ({ icon, name, progress, size = 130 }: SkillCardProps) => {
  return (
    <div className="flex flex-col items-center gap-2">
      <div
        className="relative rounded-full flex items-center justify-center"
        style={{
          width: size,
          height: size,
          background: `conic-gradient(#3b82f6 ${progress}%, #e5e7eb 0)`
        }}
      >
        {/* Inner circle */}
        <div
          className="absolute bg-white rounded-full"
          style={{
            width: size * 0.75,
            height: size * 0.75
          }}
        />

        {/* Icon */}
        <div className="absolute">
          <Image src={icon} alt={name} width={55} height={55} />
        </div>
      </div>

      <p className="text-base font-semibold text-center">{name}</p>
    </div>
  );
};

export default SkillCard;
