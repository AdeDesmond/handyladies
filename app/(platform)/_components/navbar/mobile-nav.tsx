import { Button } from "@/components/ui/button";
import { Sheet, SheetContent } from "@/components/ui/sheet";
import { useMobileSidebar } from "@/hooks/use-mobile-nav";
import { Menu } from "lucide-react";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { StoreNav } from "../store-nav";
import { CustomerNav } from "../customer-nav";
import { Logo } from "@/components/logo";

export const MobileSideNav = () => {
  const pathName = usePathname();
  const [mounted, setIsMounted] = useState(false);
  const onOpen = useMobileSidebar((state) => state.onOpen);
  const onClose = useMobileSidebar((state) => state.onClose);
  const isOpen = useMobileSidebar((state) => state.isOpen);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    onClose();
  }, [pathName, onClose]);
  if (!mounted) return null;
  return (
    <>
      <Button variant="ghost" onClick={onOpen} size="sm">
        <Menu className="w-6 h-6" />
      </Button>

      <Sheet open={isOpen} onOpenChange={onClose}>
        <SheetContent side="right" className="flex flex-col items-center p-4">
          <div className="mb-6 pt-4">
            <Logo />
          </div>
          <StoreNav />
          <CustomerNav />
        </SheetContent>
      </Sheet>
    </>
  );
};
