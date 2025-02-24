import { type Variants } from 'motion/react';

export const child: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

export const delay: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: (index) => ({
    y: 0,
    opacity: 1,
    transition: {
      delay: index * 0.05,
      duration: 0.5,
    },
  }),
};

export const stagger: Variants = {
  hidden: {},
  visible: {
    transition: {
      duration: 0.5,
      staggerChildren: 0.05,
    },
  },
};
