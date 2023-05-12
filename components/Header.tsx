import Image from "next/image";
import Link from "next/link";

function Header() {
  return (
    <header className="flex items-center justify-between space-x-2 font-bold px-10 py-5">
      <div className="flex text-center space-x-2">
        <Link href="/">
        <Image
          src="/qijin-xu-octo-unsplash.jpg"
          className="rounded-full"
          width={50}
          height={50}
          alt="logo"
        /></Link>{" "}
        surreal octo
      </div>
      <div>
        <Link href="/" className="px-5 py-3 text-sm md:text-base bg-gray-900 text-[#F7AB0A] flex items-center rounded-full text-center">sign up and dream about the sea</Link>
      </div>
    </header>
  );
}

export default Header;
