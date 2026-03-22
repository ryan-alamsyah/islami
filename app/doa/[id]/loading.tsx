import { SkeletonCard } from "@/components/SkeletonCard";

export default function Loading() {
  return (
    <div className="flex flex-col items-center gap-8 py-10 w-full animate-pulse">
      {/* Skeleton untuk Search Bar */}
      <div className="w-full max-w-md h-12 bg-slate-800/50 rounded-full mx-auto" />
      
      {/* Skeleton untuk Grid Cards */}
      <div className="flex flex-wrap gap-6 justify-center w-full">
        {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
          <SkeletonCard key={i} />
        ))}
      </div>
    </div>
  );
}