import Link from "next/link";
import {
  FaInstagram,
  FaDribbble,
  FaGithub,
  FaBehance,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import Logo from "@/components/ui/logo";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "About me", href: "/about" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Contact me", href: "/contact" },
];

const socialLinks = [
  { icon: <FaInstagram />, href: "https://instagram.com" },
  // { icon: <FaDribbble />, href: "https://dribbble.com" },
  { icon: <FaGithub />, href: "https://github.com" },
  // { icon: <FaBehance />, href: "https://behance.net" },
];

const contactLinks = [
  {
    icon: <MdEmail className="text-lg" />,
    label: "souravsharma2102@gmail.com",
    href: "mailto:souravsharma2102@gmail.com",
  },
  {
    icon: <FaPhoneAlt className="text-lg" />,
    label: "+91 9471553299",
    href: "tel:+919471553299",
  },
];

export default function Footer() {
  return (
    <footer className="w-full bg-[#1e293b] text-gray-300 py-12 px-4 md:px-8 lg:px-16">
      <div className="max-w-4xl mx-auto flex flex-col items-center gap-8">

        {/* Logo */}
        <Logo name="Sourav Sharma"/>

        {/* Navigation */}
        <ul className="flex flex-wrap justify-center gap-6 text-sm">
          {navLinks.map((item, i) => (
            <li key={i}>
              <Link href={item.href} className="hover:text-white">
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Social Icons */}
        <div className="flex gap-5 text-lg">
          {socialLinks.map((item, i) => (
            <Link key={i} href={item.href} target="_blank"
              className="hover:text-white">
              {item.icon}
            </Link>
          ))}
        </div>

        {/* Contact */}
        <div className="flex flex-col md:flex-row gap-4 md:gap-12 items-center text-sm">
          {contactLinks.map((item, i) => (
            <Link key={i}
              href={item.href}
              className="flex items-center gap-2 hover:text-white"
            >
              {item.icon}
              <span>{item.label}</span>
            </Link>
          ))}
        </div>

        {/* Divider */}
        <div className="w-full h-[1px] bg-gray-700" />

        {/* Credit */}
        <p className="text-xs text-gray-400 text-center">
          &copy; 2025 <strong>Sourav Sharma</strong> • Frontend Developer • All rights reserved.
        </p>
      </div>
    </footer>
  );
}
