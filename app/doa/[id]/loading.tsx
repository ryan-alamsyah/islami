export default function Loading() {
  return (
    <div className="p-4 max-w-2xl mx-auto space-y-6 animate-pulse">
      {/* Skeleton Judul */}
      <div className="h-8 bg-gray-200 dark:bg-gray-700 rounded-md w-3/4 mx-auto"></div>
      
      {/* Skeleton Teks Arab */}
      <div className="space-y-3">
        <div className="h-10 bg-gray-200 dark:bg-gray-700 rounded-lg w-full"></div>
        <div className="h-10 bg-gray-200 dark:bg-gray-700 rounded-lg w-5/6 ml-auto"></div>
      </div>

      {/* Skeleton Terjemahan */}
      <div className="space-y-2">
        <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-full"></div>
        <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-full"></div>
        <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-1/2"></div>
      </div>
    </div>
  );
}