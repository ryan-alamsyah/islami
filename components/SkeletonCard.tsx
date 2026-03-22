export const SkeletonCard = () => (
  <div className="w-80 h-40 bg-slate-800/50 rounded-3xl animate-pulse border border-white/5">
    <div className="p-5 space-y-3">
      <div className="h-4 bg-slate-700 rounded w-1/2"></div>
      <div className="h-3 bg-slate-700 rounded w-3/4"></div>
      <div className="h-8 bg-slate-700 rounded w-full mt-4"></div>
    </div>
  </div>
);