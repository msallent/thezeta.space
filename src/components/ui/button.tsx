import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

const buttonVariants = cva(
  "cursor-pointer ring-primary/10 outline-primary/50 focus-visible:outline-secondary inline-flex items-center justify-center gap-2 rounded-md text-sm font-semibold whitespace-nowrap shadow-xs transition-[color,box-shadow] focus-visible:outline-2 focus-visible:outline-offset-2 disabled:pointer-events-none disabled:opacity-50 aria-invalid:focus-visible:ring-0 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        default: 'text-primary bg-tertiary shadow-sm hover:bg-secondary',
        destructive: 'bg-destructive text-secondary shadow-xs hover:bg-destructive/90',
        outline:
          'border border-secondary bg-transparent shadow-xs hover:bg-secondary hover:text-primary',
        secondary: 'bg-secondary text-primary shadow-xs hover:bg-secondary/80',
        ghost: 'hover:bg-secondary hover:text-primary',
        link: 'text-primary underline-offset-4 hover:underline',
      },
      size: {
        default: 'px-3.5 py-2.5 has-[>svg]:px-3',
        sm: 'h-8 rounded-md px-3 has-[>svg]:px-2.5',
        lg: 'h-10 rounded-md px-6 has-[>svg]:px-4',
        icon: 'size-9',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
);

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<'button'> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : 'button';

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
