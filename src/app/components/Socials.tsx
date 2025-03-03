import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";

export default function Socials() {
  return (
    <nav className="absolute top-0 right-0 hidden md:flex flex-col items-end gap-4">
      <ul className="flex flex-row items-center gap-4 mb-14 bg-zinc-800 rounded-bl-xl p-4">
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
    </nav>
  );
}
