import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { RiArrowUpDoubleLine } from "react-icons/ri";

export default function Footer() {
  return (
    <div>
      <div className="animate-bouncing repeat-infinite">
        <i className="relative top-8 left-[43%] text-xl">
          <RiArrowUpDoubleLine />
        </i>
      </div>
      <ul className="flex flex-row items-center gap-4 mb-14 hover:mb-12 bg-zinc-800 rounded-full p-4 hover:translate-y-0 translate-y-10 transition-all">
        <li>
          <FaFacebookSquare className="text-xl" />
        </li>
        <li>
          <FaInstagram className="text-xl" />
        </li>
        <li>
          <FaSquareXTwitter className="text-xl" />
        </li>
        <li>
          <FaLinkedin className="text-xl" />
        </li>
      </ul>
    </div>
  );
}
