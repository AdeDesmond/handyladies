import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="w-full ">
      <div className="w-full h-[15rem] bg-slate-800 flex items-center justify-center flex-col">
        <p className="text-xl text-slate-200">Subcribe to our news letter</p>
        <div className="flex flex-col gap-y-2 lg:flex-row items-center gap-x-1">
          <Input
            type="text"
            className="w-[20rem]"
            placeholder="Enter your email"
          />
          <Button
            size="sm"
            className="flex items-center group gap-x-1 hover:scale-105 hover:shadow-lg transition-all duration-150 ease-in-out"
          >
            Submit{" "}
            <Mail className="h-5 w-5 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-1  transition-all duration-200 ease-in-out" />{" "}
          </Button>
        </div>
      </div>
      <div className="w-full h-[6rem] bg-slate-950 flex items-center flex-col justify-center">
        <div className="text-slate-300 flex items-center gap-x-1">
          <p>About</p>
          <p>FAQs</p>
          <p>Careers</p>
          <p>Contact</p>
        </div>
        <div>
          <p className=" flex items-center gap-x-1 text-slate-400">
            @Copywrite፡{new Date().getFullYear()}{" "}
            <span className="text-sm text-muted-foreground">desmond🧡</span>{" "}
          </p>
        </div>
      </div>
    </footer>
  );
};
