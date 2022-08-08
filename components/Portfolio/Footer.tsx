const Footer = () => {
  return (
    <div className="container mx-auto">
      <div className="py-16 border-b-2">
        <div className="flex items-center justify-between px-5 lg:px-0">
          <div>
            <a href="/">
              <span className="text-xl font-bold ">Maruf</span>
            </a>
          </div>
          <div>
            <ul className="flex items-center justify-between gap-6 lg:gap-10">
              <li>
                <a href="#">Projects</a>
              </li>
              <li>
                <a href="#">Journey</a>
              </li>
              <li>
                <a href="#">Service</a>
              </li>
              <li>
                <a href="#">Blogs</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between text-center py-8 px-5 lg:px-0">
        <span className="text-gray-500">
          &copy;mdMaruf 2022. All right reserved.
        </span>
        <ul className="flex items-center gap-5">
          <li className="border-r-2 pr-5">
            <a className="text-gray-500" href="#">
              Privacy Policy
            </a>
          </li>
          <li>
            <a className="text-gray-500" href="#">
              Term of Conditions
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
