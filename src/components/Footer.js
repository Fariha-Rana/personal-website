import Link from "next/link";
import { FaXTwitter, FaGithub, FaDiscord } from "react-icons/fa6";
const Footer = () => {
  return (
      <footer className="flex flex-col justify-center items-center p-5 text-neutral-100 font-mono z-50 footer-bg w-screen  max-[290px]:w-[20rem] ">
        <span>&copy; {new Date().getFullYear()} Fariha Rana</span>
        <div className="flex gap-6 mt-2 text-lg">
          <Link href="https://x.com/fariha0712">
            <i>
              <FaXTwitter />
            </i>
          </Link>
          <Link href="https://github.com/Fariha-Rana">
            <i>
              <FaGithub />
            </i>
          </Link>
          <Link href="https://discord.com/channels/@fariha13">
            <i>
              <FaDiscord />
            </i>
          </Link>
        </div>
      </footer>
  );
};

export default Footer;
