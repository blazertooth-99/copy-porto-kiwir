export default function Loading() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white/80 dark:bg-gray-950/80 z-50">
      <div className="flex flex-col items-center">
        <div className="relative h-16 w-16">
          {/* Outer circle */}
          <div className="absolute inset-0 rounded-full border-4 border-gray-200 dark:border-gray-800"></div>

          {/* Spinner */}
          <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-primary animate-spin"></div>
        </div>
        <p className="mt-4 text-sm text-gray-500 dark:text-gray-400 animate-pulse">Loading...</p>
      </div>
    </div>
  )
}
