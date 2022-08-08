interface IPropType {
  title: string;
  description: string;
}

const SectionTitle = ({ title, description }: IPropType) => {
  return (
    <div className="text-center px-5 lg:px-0">
      <h2 className="text-4xl md:text-6xl font-bold mb-5 lg:mb-8">{title}</h2>
      <p className="font-medium text-lg lg:w-1/3 text-gray-600 mx-auto">
        {description}
      </p>
    </div>
  );
};

export default SectionTitle;
