import * as React from 'react';

import { cn } from '@/lib/utils';

function Textarea({ className, ...props }: React.ComponentProps<'textarea'>) {
  return (
    <textarea
      className={cn(
        'border-secondary focus-visible:outline-secondary placeholder:text-tertiary-muted aria-invalid:border-destructive aria-invalid:focus-visible:outline-none field-sizing-content flex min-h-16 w-full rounded-md border bg-transparent px-3 py-2 text-base shadow transition-[color,box-shadow] disabled:cursor-not-allowed disabled:opacity-50 md:text-sm',
        className,
      )}
      {...props}
    />
  );
}

export { Textarea };
