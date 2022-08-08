import Link from "next/link";

/* eslint-disable @next/next/no-html-link-for-pages */
const Navigation = () => {
  return (
    <div className="fixed top-0 left-0 right-0 w-full py-12 header_navigation">
      <div className="container mx-auto">
        <div className="flex items-center justify-between px-5 lg:px-0">
          <div>
            <Link href="/">
              <span className="text-xl font-bold cursor-pointer">Maruf</span>
            </Link>
          </div>
          <div>
            <ul className="flex items-center justify-between gap-6 lg:gap-10">
              <li>
                <Link href="#specialities">Service</Link>
              </li>
              <li>
                <Link href="#projects">Projects</Link>
              </li>
              <li>
                <Link href="#journey">Journey</Link>
              </li>
              <li>
                <Link href="#blogs">Blogs</Link>
              </li>
              <li>
                <Link href="#contact">Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
