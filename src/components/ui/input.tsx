import * as React from 'react';

import { cn } from '@/lib/utils';

function Input({ className, type, ...props }: React.ComponentProps<'input'>) {
  return (
    <input
      type={type}
      className={cn(
        'file:text-primary focus-visible:outline-secondary placeholder:text-tertiary-muted aria-invalid:border-destructive aria-invalid:focus-visible:outline-none border-secondary flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow transition-[color,box-shadow] file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm',
        className,
      )}
      {...props}
    />
  );
}

export { Input };
