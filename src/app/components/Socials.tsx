import {
  FaInstagram,
  FaTwitter,
  FaLinkedin,
  FaGithub
} from "react-icons/fa";

const socialLinks = [
  {
    href: "https://github.com/alecb6",
    icon: <FaGithub />,
  },
  { href: "https://www.instagram.com/alecb6/", icon: <FaInstagram /> },
  { href: "https://x.com/alecb2003", icon: <FaTwitter /> },
  {
    href: "https://www.linkedin.com/in/alejandro-cruz-ballestero-347a87349/",
    icon: <FaLinkedin />,
  },
];

export default function Socials() {
  return (
    <nav className="absolute top-0 right-0 hidden md:flex flex-col items-end gap-4">
      <ul className="flex flex-row items-center gap-4 mb-14 bg-zinc-800 rounded-bl-xl p-4">
        {socialLinks.map((link, index) => (
          <li key={index} className="hover:scale-125 transform transition-all">
            <a
              target="_blank"
              href={link.href}
              rel="noopener noreferrer"
              className="text-xl"
            >
              {link.icon}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
