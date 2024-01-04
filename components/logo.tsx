import Image from "next/image";
import Link from "next/link";

export const Logo = () => {
  return (
    <div className="w-16  cursor-pointer">
      <Link href="/" className="flex items-center flex-col">
        <Image
          src={"/logo.svg"}
          alt="logo"
          height={50}
          width={50}
          className="object-cover "
        />
        <p className="text-slate-200 text-center text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-amber-800 to-yellow-500">
          Handyladies
        </p>
      </Link>
    </div>
  );
};
