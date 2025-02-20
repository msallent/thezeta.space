'use client';

import { Toaster as Sonner, ToasterProps } from 'sonner';

const Toaster = ({ ...props }: ToasterProps) => {
  return (
    <Sonner
      toastOptions={{
        classNames: {
          toast: '!bg-tertiary !font-primary !text-sm !text-primary !border-secondary',
          description: '!font-secondary !text-primary',
        },
      }}
      {...props}
    />
  );
};

export { Toaster };
