/* eslint-disable @next/next/no-img-element */
interface IPropType {
  title: string;
  description: string;
  image: string;
}

const SpecialitiesCard = ({ title, description, image }: IPropType) => {
  return (
    <div className="bg-primary-bg py-10 px-12">
      <div className="border border-gray-300 rounded-full p-5 flex items-center justify-center w-20 mb-9">
        <img className="w-full" src={`/icons/${image}.png`} alt="light icon" />
      </div>
      <h3 className="text-3xl font-bold mb-6 ">{title}</h3>
      <p className="text-lg font-medium text-gray-500">{description}</p>
    </div>
  );
};

export default SpecialitiesCard;
