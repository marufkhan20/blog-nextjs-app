import Link from "next/link";

interface IPropType {
  title: string;
  description: string;
  url: string;
  image: string;
}

const BlogCard = ({ title, description, url, image }: IPropType) => {
  return (
    <div className="grid items-center grid-cols-2 gap-5 py-8 px-10 bg-white">
      <div>
        <h3 className="text-2xl font-bold mb-6">{title}</h3>
        <p className="text-lg font-medium text-gray-500 mb-9">{description}</p>
        <Link href={url}>
          <span className="font-bold text-xl underline hover:text-gray-400 transition-all cursor-pointer">
            Read More
          </span>
        </Link>
      </div>
      <div>
        <img className="w-full h-full" src={image} alt={title} />
      </div>
    </div>
  );
};

export default BlogCard;
