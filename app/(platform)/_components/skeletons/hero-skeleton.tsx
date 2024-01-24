import { Skeleton } from "@/components/ui/skeleton";

export const HeroSkeleton = () => {
  return (
    <div className="max-w-[1200px] min-h-[60vh]">
      <Skeleton className="h-full w-full" />
    </div>
  );
};
