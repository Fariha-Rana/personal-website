import Link from "next/link";
import { FaXTwitter, FaGithub, FaDiscord } from "react-icons/fa6";
const Footer = () => {
  return (
    <footer className="flex flex-col justify-center items-center p-5 text-neutral-300 font-mono mt-12  w-full ">
      <span>&copy; {new Date().getFullYear()} Fariha Rana</span>
      <div className="flex gap-6 mt-2 text-lg">
        <Link href="https://x.com/fariha0712" target="_blank" rel="noopener noreferrer">
          <i>
            <FaXTwitter />
          </i>
        </Link>
        <Link href="https://github.com/Fariha-Rana" target="_blank" rel="noopener noreferrer">
          <i>
            <FaGithub />
          </i>
        </Link>
        <Link href="https://discord.com/channels/@fariha13" target="_blank" rel="noopener noreferrer">
          <i>
            <FaDiscord />
          </i>
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
