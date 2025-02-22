import * as React from 'react';

import { cn } from '@/lib/utils';

function Textarea({ className, ...props }: React.ComponentProps<'textarea'>) {
  return (
    <textarea
      className={cn(
        'field-sizing-content flex min-h-16 w-full rounded-md border border-secondary bg-transparent px-3 py-2 text-base shadow transition-[color,box-shadow] placeholder:text-tertiary-muted focus-visible:outline-secondary disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-destructive aria-invalid:focus-visible:outline-none md:text-sm',
        className,
      )}
      {...props}
    />
  );
}

export { Textarea };
