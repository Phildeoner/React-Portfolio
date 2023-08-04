import { Footer } from "flowbite-react";
import {
  BsFacebook,
  BsGithub,
  BsInstagram,
  BsTwitter,
  BsLinkedin,
} from "react-icons/bs";
import { shaq } from "../assets";

export default function Footers() {
  return (
    <Footer container className="bg-gray-00 px-8 sm:px-[65px] border-t">
      <div className="w-full">
        <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
          <div className="flex justify-center items-center gap-3 mb-10 sm:mb-0">
            <img
              alt="Logo"
              className="w-12 rounded-full text-gray-100  -ml-[70px] sm:-ml-0"
              name="Phildeoner"
              src={shaq}
            />
            <p className="text-[35px] font-semi-bold">Phildeoner</p>
          </div>
          <div className="flex gap-8 sm:mt-4  sm:gap-6">
            <div>
              <Footer.Title title="contact" />
              <Footer.LinkGroup col>
                <Footer.Link>
                  <div className="flex items-center gap-2 text-gray-400">
                    <svg
                      className="w-6 h-6 text-gray-400 dark:text-white"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 17 21">
                      <g
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2">
                        <path d="M8 12a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
                        <path d="M13.8 12.938h-.01a7 7 0 1 0-11.465.144h-.016l.141.17c.1.128.2.252.3.372L8 20l5.13-6.248c.193-.209.373-.429.54-.66l.13-.154Z" />
                      </g>
                    </svg>
                    Bayan Dutse, Narayi, Kaduna State, Nigeria.
                  </div>
                </Footer.Link>
                <Footer.Link>
                  <div className="flex items-center gap-2 text-gray-400">
                    <svg
                      className="w-6 h-6 text-gray-400 dark:text-white"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 20 16">
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="m19 2-8.4 7.05a1 1 0 0 1-1.2 0L1 2m18 0a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1m18 0v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2"
                      />
                    </svg>
                    phildeoner@gmail.com
                  </div>
                </Footer.Link>
                <Footer.Link>
                  <div className="flex items-center gap-2 text-gray-400">
                    <svg
                      className="w-6 h-6 text-gray-400 dark:text-white"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 18 18">
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="m16.344 12.168-1.4-1.4a1.98 1.98 0 0 0-2.8 0l-.7.7a1.98 1.98 0 0 1-2.8 0l-2.1-2.1a1.98 1.98 0 0 1 0-2.8l.7-.7a1.981 1.981 0 0 0 0-2.8l-1.4-1.4a1.828 1.828 0 0 0-2.8 0C-.638 5.323 1.1 9.542 4.78 13.22c3.68 3.678 7.9 5.418 11.564 1.752a1.828 1.828 0 0 0 0-2.804Z"
                      />
                    </svg>
                    +234 (81) 03439155
                  </div>
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider />
        <div className="w-full flex items-center justify-between">
          <Footer.Copyright by="Phildeoner™" year={2023} />
          <div className="flex space-x-6  sm:justify-center">
            <Footer.Icon href="https://github.com/Phildeoner" icon={BsGithub} />
            <Footer.Icon
              href="https://www.linkedin.com/in/yakubu-bobai-ephraim/"
              icon={BsLinkedin}
            />
            <Footer.Icon
              href="https://twitter.com/Phildeone?t=unuPgueZnf3fNfP5JqnRpg&s=09"
              icon={BsTwitter}
            />
            <Footer.Icon
              href="https://www.facebook.com/philip.bobai"
              icon={BsFacebook}
            />
          </div>
        </div>
      </div>
    </Footer>
  );
}
