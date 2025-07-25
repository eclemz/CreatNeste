import { FaLinkedinIn, FaXTwitter, FaInstagram } from 'react-icons/fa6';
import { FiFacebook } from "react-icons/fi";
import { motion } from 'framer-motion';

const socialLinks = [
  { icon: FaInstagram , color: '#E1306C', name: 'Instagram' },
  { icon: FaLinkedinIn , color: '#0077b5', name: 'LinkedIn' },
  { icon: FiFacebook , color: '#1DA1F2', name: 'Facebook' },
  { icon: FaXTwitter , color: '#000000', name: 'Twitter' },
];

const SocialIcons = () => {
  return (
    <div className="flex self-start">
      <ul className='flex items-center gap-5'>
        {socialLinks.map((item, index) => (
          <motion.li
            key={index}
            whileHover={{
              scale: 1.15,
              backgroundColor: 'rgba(255,255,255,1)',
              color: item.color,
              borderRadius: '50%',
              transition: { duration: 0.1 },
            }}
            className='flex w-6 h-6 p-[0.33331rem] justify-center items-center rounded-full border-[0.6px] border-[#F0F0F0] text-white'
          >
            <item.icon className="text-inherit h-[0.83331rem] w-[0.83331rem] shrink-0"/>
          </motion.li>
        ))}
      </ul>
    </div>
  );
};

export default SocialIcons;
