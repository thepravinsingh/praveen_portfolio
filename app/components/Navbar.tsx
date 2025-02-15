import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className="flex justify-between items-center py-2">
      <div className="w-[45px] h-[45px] relative rounded-full">
        <Image
          src="https://img.freepik.com/premium-vector/ps-monogram-logo-design-letter-text-name-symbol-monochrome-logotype-alphabet-character-simple-logo_955145-2462.jpg"
          alt="Image Logo"
          width={500}
          height={500}
          className="object-fill rounded-full"
        />
      </div>

      <div className=" flex gap-5">
        <Link href="">Home</Link>
        <Link href="">Experience</Link>
        <Link href="">Project</Link>
        <Link href="">Blogs</Link>
      </div>
    </div>
  );
}
