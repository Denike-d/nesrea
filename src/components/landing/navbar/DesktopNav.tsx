import Link from "next/link";
import Image from "next/image";
import logo from "../../../../public/images/logo.png";
import PrimaryButton from "../uikits/PrimaryButton";

export default function DesktopNavbar() {
  return (
    <div className="flex justify-center mx-auto max-h-screen bg-[#D5E6DD]">
      <nav className="hidden md:flex space-x-8 items-center text-black">
        <Link href="/">
          <Image
            src={logo}
            className="w-[95px] h-[53px] mr-12 mt-2"
            alt="logo"
          />
        </Link>
        <ul className="flex gap-6">
          <li>
            <Link href="#home" className="">
              Home
            </Link>
          </li>
          <li>
            <Link href="/" className="hover:text-[#10793F] text-sm">
              Services
            </Link>
          </li>
          <li>
            <Link href="/" className="hover:text-[#10793F] text-sm">
              Documents
            </Link>
          </li>
          <li>
            <Link href="/" className="hover:text-[#10793F] text-sm">
              Clearance
            </Link>
          </li>
          <li>
            <Link href="/" className="hover:text-[#10793F] text-sm">
              Contact
            </Link>
          </li>
        </ul>
        <PrimaryButton title="Verify Certificate" />
      </nav>
    </div>
  );
}
