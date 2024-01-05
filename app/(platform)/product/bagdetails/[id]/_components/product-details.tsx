import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Facebook,
  Heart,
  Instagram,
  MessageCircle,
  Minus,
  Plus,
  Twitter,
} from "lucide-react";
import Image from "next/image";

export const ProductsWithDetails = () => {
  return (
    <div className="bg-white w-[1200px] px-[9rem]">
      <div className="flex justify-between items-center pt-10">
        <div className="w-[400px] h-[400px] bg-slate-400 relative ">
          <Image src="/bags/1.png" alt="name" fill className="object-cover" />
        </div>
        <div className="basis-[50%]">
          <h2 className="text-xl font-bold mb-2">Ladies bag</h2>
          <p className="mb-2">
            {" "}
            <span className="text-xs text-muted-foreground">&yen;</span>
            <strong className="text-xl font-semibold">1200</strong>
            <span className="text-xs text-muted-foreground">.00</span>{" "}
          </p>
          <p className="text-muted-foreground text-sm mb-3">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis ad
            provident cum eveniet! Labore, dicta? Officiis, obcaecati dolor
            delectus consequuntur id, at non facilis cumque odio, similique nemo
            excepturi quas.
          </p>

          <div className="flex items-center gap-x-2 mb-3">
            <Button size="sm">Add to cart</Button>
            <div className="flex items-center gap-x-1 mr-3">
              <Button size="sm" variant="outline">
                <Plus className="w-4 h-4" />
              </Button>
              <p className="text-xl font-semibold">{0}</p>
              <Button size="sm" variant="outline">
                <Minus className="w-4 h-4" />
              </Button>
            </div>
            <Button size="sm" variant="outline">
              <Heart className="w-4 h-4" />
            </Button>
          </div>
          <div className="flex flex-col mb-3">
            <p>
              name:
              <span className="text-muted-foreground text-sm">
                Channel
              </span>{" "}
            </p>
            <p>
              material :
              <span className="text-muted-foreground text-sm">Cow leather</span>{" "}
            </p>
            <p>
              product code :
              <span className="text-muted-foreground text-sm">
                #s093-2012903
              </span>{" "}
            </p>
          </div>
          <Separator className="w-full" />
          <div className="flex justify-between items-center mt-2">
            <p>Share:</p>
            <div className="flex items-center gap-x-1 text-muted-foreground">
              <Facebook className="w-4 h-4" />
              <MessageCircle className="w-4 h-4" />
              <Twitter className="w-4 h-4" />
              <Instagram className="w-4 h-4" />
            </div>
          </div>
        </div>
      </div>
      {/* set up a comment and revies serction */}
      <p>comments and reviews</p>
    </div>
  );
};
