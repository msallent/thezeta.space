'use client';

import * as React from 'react';
import * as SwitchPrimitives from '@radix-ui/react-switch';

import { cn } from '@/lib/utils';

function Switch({ className, ...props }: React.ComponentProps<typeof SwitchPrimitives.Root>) {
  return (
    <SwitchPrimitives.Root
      className={cn(
        'peer relative inline-flex h-5 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent bg-secondary shadow-sm transition-colors focus-visible:outline-offset-2 focus-visible:outline-secondary disabled:cursor-not-allowed disabled:opacity-50',
        className,
      )}
      {...props}
    >
      <span
        className={cn(
          'absolute left-[0.3125rem] text-[13px] text-primary transition-transform',
          props.checked ? 'translate-x-0' : 'translate-x-3.5',
        )}
      >
        {props.checked ? 'ES' : 'EN'}
      </span>
      <SwitchPrimitives.Thumb
        className={cn(
          'pointer-events-none block h-4 w-4 rounded-full bg-primary shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-6 data-[state=unchecked]:translate-x-0',
        )}
      />
    </SwitchPrimitives.Root>
  );
}

export { Switch };
