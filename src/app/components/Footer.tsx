import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { RiArrowUpDoubleLine } from "react-icons/ri";

export default function Footer() {
  return (
    <footer>
      <div className="animate-bouncing repeat-infinite">
        <i className="relative top-8 left-[43%] text-xl">
          <RiArrowUpDoubleLine />
        </i>
      </div>
      <ul className="flex flex-row items-center gap-4 mb-14 hover:mb-12 bg-zinc-800 rounded-full p-4 hover:translate-y-0 translate-y-10 transition-all">
        <li className="hover:scale-125 transform transition-all">
          <a
            target="_blank"
            href="https://www.facebook.com/profile.php?id=100012511845240"
            rel="noopener noreferrer"
          >
            <FaFacebookSquare className="text-xl" />
          </a>
        </li>
        <li className="hover:scale-125 transform transition-all">
          <a
            target="_blank"
            href="https://www.instagram.com/alecb6/"
            rel="noopener noreferrer"
          >
            <FaInstagram className="text-xl" />
          </a>
        </li>
        <li className="hover:scale-125 transform transition-all">
          <a
            target="_blank"
            href="https://x.com/alecb2003"
            rel="noopener noreferrer"
          >
            <FaSquareXTwitter className="text-xl"></FaSquareXTwitter>
          </a>
        </li>
        <li className="hover:scale-125 transform transition-all">
          <a
            target="_blank"
            href="https://www.linkedin.com/in/alejandro-cruz-ballestero-347a87349/"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="text-xl"></FaLinkedin>
          </a>
        </li>
      </ul>
    </footer>
  );
}
