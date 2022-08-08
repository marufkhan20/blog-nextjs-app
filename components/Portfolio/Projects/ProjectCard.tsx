interface IPropType {
  title: string;
  description: string;
  url: string;
  image: string;
}

const ProjectCard = ({ title, description, url, image }: IPropType) => {
  return (
    <div className="flex items-center justify-between py-8 px-10 bg-white">
      <div>
        <h3 className="text-3xl font-bold mb-6">{title}</h3>
        <p className="text-lg font-medium text-gray-500 mb-9 w-3/4">
          {description}
        </p>
        <a
          href={url}
          className="font-bold text-xl underline hover:text-gray-400 transition-all"
        >
          Case Study
        </a>
      </div>
      <div>
        <img
          className="w-full h-full"
          src={`/projects/${image}.png`}
          alt={title}
        />
      </div>
    </div>
  );
};

export default ProjectCard;
