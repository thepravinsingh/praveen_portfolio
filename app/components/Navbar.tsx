import Image from "next/image";

export default function Navbar() {
  return (
    <div>
      <div>
        <Image src="https://img.freepik.com/premium-vector/ps-monogram-logo-design-letter-text-name-symbol-monochrome-logotype-alphabet-character-simple-logo_955145-2462.jpg" alt="Image Logo" width={100} height={100} />
      </div>

      <div>
        <ul>
          <li>Home</li>
          <li>Experience</li>
          <li>Project</li>
          <li>Contact</li>
        </ul>
      </div>
    </div>
  );
}
