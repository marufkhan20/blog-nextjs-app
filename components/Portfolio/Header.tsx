/* eslint-disable @next/next/no-html-link-for-pages */

import { IHeader, ISocial } from "../../types";
import Button from "./Button";

interface IPropType {
  header: IHeader;
  socials: ISocial[];
}

/* eslint-disable @next/next/no-img-element */
const Header = ({ header, socials }: IPropType) => {
  return (
    <div className="bg-primary-bg pt-40">
      <div className="container mx-auto grid lg:grid-cols-2 lg:gap-12 gap-8 items-center px-7 lg:px-0">
        <div>
          {/* <img src="/bg-icon.png" alt="bg icon" className="w-2/3" /> */}
          <img
            className="w-2/3 mx-auto"
            src={`http://localhost:1337${header.attributes.Image.data.attributes.url}`}
            alt="author image"
          />
        </div>
        <div>
          <h2 className="text-3xl xl:text-7xl lg:text-5xl font-semibold">
            {header.attributes.Title}
          </h2>
          <p className="text-lg font-medium text-gray-500 xl:my-16 lg:my-10 my-8">
            {header.attributes.Description}
          </p>
          <div>
            <div className="flex items-center gap-10">
              <Button title="Book a Call" type="gradient" />
              <a
                href="/"
                className="font-bold text-lg underline hover:text-gray-500 transition-all"
              >
                My Works
              </a>
            </div>
          </div>
          <div className="flex items-center gap-5 lg:mt-36 mt-12 pb-5">
            <span className="font-medium text-lg text-gray-600">
              Follow me on:
            </span>
            <a className="p-3 hover:bg-slate-400 transition-all cursor-pointer hover:text-white border border-gray-400 rounded-full">
              <svg
                fill="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
              </svg>
            </a>
            <a className="p-3 hover:bg-slate-400 transition-all cursor-pointer hover:text-white border border-gray-400 rounded-full">
              <svg
                fill="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
              </svg>
            </a>
            <a className="p-3 hover:bg-slate-400 transition-all cursor-pointer hover:text-white border border-gray-400 rounded-full">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
              </svg>
            </a>
            <a className="p-3 hover:bg-slate-400 transition-all cursor-pointer hover:text-white border border-gray-400 rounded-full">
              <svg
                fill="currentColor"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="0"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="none"
                  d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                ></path>
                <circle cx="4" cy="4" r="2" stroke="none"></circle>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
