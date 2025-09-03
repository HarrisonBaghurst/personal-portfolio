import * as React from "react"

import { cn } from "@/lib/utils"

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        "placeholder:text-grey paragraph-large border-input focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive flex field-sizing-content min-h-32 2xl:min-h-64 w-full rounded-md transition-[color,box-shadow] outline-none disabled:cursor-not-allowed disabled:opacity-50 text-foreground",
        "px-2 py-2 2xl:px-4 2xl:py-4",
        className
      )}
      {...props}
    />
  )
}

export { Textarea }
