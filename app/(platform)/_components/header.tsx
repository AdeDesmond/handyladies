import { Logo } from "@/components/logo";
import { CustomerNav } from "./customer-nav";
import { StoreNav } from "./store-nav";

export const Header = () => {
  return (
    <header className="w-full h-[6rem] bg-black bg-opacity-90 px-10 flex items-center justify-around z-100">
      <CustomerNav />
      <Logo />
      <StoreNav />
    </header>
  );
};
