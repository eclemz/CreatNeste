import {
  FaLinkedinIn,
  FaFacebookF,
  FaXTwitter,
  FaInstagram,
} from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";
import { motion } from "framer-motion";

const socialLinks = [
  {
    icon: AiFillInstagram,
    color: "#E1306C",
    name: "Instagram",
    url: "https://www.instagram.com/creatneste?igsh=NnQ3MjhrZmcyd3Nq&utm_source=qr",
  },
  {
    icon: FaLinkedinIn,
    color: "#0077b5",
    name: "LinkedIn",
    url: "https://www.linkedin.com/company/creatneste/",
  },
  {
    icon: FaFacebookF,
    color: "#1DA1F2",
    name: "Facebook",
    url: "https://www.facebook.com/share/1AomVSEjeH/?mibextid=wwXIfr",
  },
  {
    icon: FaXTwitter,
    color: "#000000",
    name: "Twitter",
    url: "https://x.com/creatneste?s=21&t=gup5PZZ-OXVq3pLpCoFP0A",
  },
];

const SocialIcons = () => {
  return (
    <div className="flex self-start">
      <ul className="flex items-center gap-5">
        {socialLinks.map((item, index) => (
          <motion.li
            key={index}
            whileHover={{
              scale: 1.15,
              backgroundColor: "rgba(255,255,255,1)",
              color: item.color,
              borderRadius: "50%",
              transition: { duration: 0.1 },
            }}
            className="flex w-6 h-6 p-[0.33331rem] justify-center items-center rounded-full border-[0.6px] border-[#F0F0F0] text-white"
          >
            <a
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-full h-full text-inherit"
              aria-label={item.name}
            >
              <item.icon className="text-inherit h-[0.83331rem] w-[0.83331rem] shrink-0" />
            </a>
          </motion.li>
        ))}
      </ul>
    </div>
  );
};

export default SocialIcons;
