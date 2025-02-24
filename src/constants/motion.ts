import type { MotionProps } from 'motion/react';

import { child, delay, stagger } from './variants';

const defaultProps: MotionProps = {
  initial: 'hidden',
  whileInView: 'visible',
  viewport: {
    amount: 0.8,
    once: true,
  },
};

export const motion = {
  child: {
    variants: child,
  },
  delay: {
    variants: delay,
    ...defaultProps,
  },
  stagger: {
    variants: stagger,
    ...defaultProps,
  },
  standalone: {
    variants: child,
    ...defaultProps,
    viewport: {
      amount: 0.5,
      once: true,
    },
  },
};
