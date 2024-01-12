import { Input } from "@/components/ui/input";

export const Footer = () => {
  return (
    <footer className="w-full bg-slate-900 fixed bottom-0">
      <div className="w-full h-[20rem]">
        <Input type="text" className="w-[40%]" />
      </div>
    </footer>
  );
};
