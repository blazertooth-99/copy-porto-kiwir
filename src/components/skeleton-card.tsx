import { cn } from "@/lib/utils"

interface SkeletonCardProps {
  className?: string
}

export default function SkeletonCard({ className }: SkeletonCardProps) {
  return (
    <div className={cn("rounded-lg border p-4", className)}>
      {/* Image placeholder */}
      <div className="w-full h-48 bg-gray-200 dark:bg-gray-800 rounded-md animate-pulse mb-4" />

      {/* Title placeholder */}
      <div className="h-6 bg-gray-200 dark:bg-gray-800 rounded-md animate-pulse mb-2 w-3/4" />

      {/* Content placeholder */}
      <div className="space-y-2">
        <div className="h-4 bg-gray-200 dark:bg-gray-800 rounded-md animate-pulse w-full" />
        <div className="h-4 bg-gray-200 dark:bg-gray-800 rounded-md animate-pulse w-5/6" />
        <div className="h-4 bg-gray-200 dark:bg-gray-800 rounded-md animate-pulse w-4/6" />
      </div>
    </div>
  )
}
