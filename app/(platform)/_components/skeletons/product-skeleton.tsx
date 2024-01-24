import { Skeleton } from "@/components/ui/skeleton";

export const ProductSkeleton = () => {
  return (
    <div className="max-w-[1500px] min-h-screen grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 place-items-center">
      <div className="w-[400px] h-[400px]">
        <Skeleton className="w-full h-full" />
      </div>
      <div className="w-[400px] h-[400px]">
        <Skeleton className="w-full h-full" />
      </div>
      <div className="w-[400px] h-[400px]">
        <Skeleton className="w-full h-full" />
      </div>
    </div>
  );
};

export const ProductSkeletons = () => {
  return (
    <>
      <ProductSkeleton />
      <ProductSkeleton />
      <ProductSkeleton />
    </>
  );
};
