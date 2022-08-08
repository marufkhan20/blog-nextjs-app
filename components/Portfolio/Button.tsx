import Link from "next/link";

interface IPropType {
  type?: string;
  title: string;
  link?: string;
}

const Button = ({ type, title, link }: IPropType) => {
  return (
    <Link href={link ? link : "/"}>
      <span
        className={
          type
            ? "bg-gradient-to-r from-port-primary to-port-primary-second py-6 px-10 font-bold text-white text-lg hover:from-port-primary hover:to-port-primary-second transition-all cursor-pointer"
            : "bg-white py-6 px-10 font-bold text-gray-900 text-lg transition-all cursor-pointer"
        }
      >
        {title}
      </span>
    </Link>
  );
};

export default Button;
