import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between py-6">
      <Link href="/">
        <div className="flex items-center cursor-pointer">
          <Image src="/logo.png" alt="logo" height={40} width={45} />
          <span className="font-bold ml-2 text-primary">Maruf Blog</span>
        </div>
      </Link>

      <ul className="flex items-center">
        <li className="mx-3 font-bold text-gray-600">
          <Link href="#">Products</Link>
        </li>
        <li className="mx-3 font-bold text-gray-600">
          <Link href="/">Portfolio</Link>
        </li>
        <li className="mx-3 font-bold text-gray-600">
          <Link href="#">Docs</Link>
        </li>
        <li className="mx-3 font-bold text-gray-600">
          <Link href="#">Company</Link>
        </li>
      </ul>

      <ul className="flex items-center">
        <li className="font-bold text-gray-500 mr-6">
          <a href="#" className="hover:text-gray-400 transition-all">
            Log In
          </a>
        </li>
        <li className="font-bold text-white">
          <a
            href="#"
            className="bg-primary py-2 px-4 rounded-sm hover:bg-primary-dark transition-all"
          >
            Sign up
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
