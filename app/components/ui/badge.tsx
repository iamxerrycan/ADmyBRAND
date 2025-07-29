import * as React from "react";
import { cn } from "@/lib/utils";

export function Badge({
  className,
  variant = "default",
  ...props
}: React.HTMLAttributes<HTMLDivElement> & {
  variant?: "default" | "secondary" | "outline";
}) {
  return (
    <div
      className={cn(
        "inline-flex items-center rounded-md px-2.5 py-0.5 text-sm font-medium",
        variant === "default" && "bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-100",
        variant === "secondary" && "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-100",
        variant === "outline" && "border border-gray-300 text-gray-800 dark:border-gray-700 dark:text-gray-200",
        className
      )}
      {...props}
    />
  );
}
