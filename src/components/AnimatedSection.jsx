import React from 'react';
import { motion } from 'framer-motion';

/**
 * AnimatedSection - Animate children on scroll into view.
 * Uses framer-motion's whileInView for efficient scroll animations.
 */
const AnimatedSection = ({
  children,
  delay = 0,
  direction = 'up',
  className = '',
  style = {},
  once = true,
  amount = 0.2,
  ...rest
}) => {
  const directionMap = {
    up: { y: 30, x: 0 },
    down: { y: -30, x: 0 },
    left: { x: 40, y: 0 },
    right: { x: -40, y: 0 },
    none: { x: 0, y: 0 },
  };

  const offset = directionMap[direction] || directionMap.up;

  return (
    <motion.div
      initial={{ opacity: 0, ...offset }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once, amount }}
      transition={{
        duration: 0.6,
        delay,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      className={className}
      style={style}
      {...rest}
    >
      {children}
    </motion.div>
  );
};

/**
 * StaggerContainer - Stagger animate children sequentially
 */
export const StaggerContainer = ({
  children,
  staggerDelay = 0.1,
  className = '',
  style = {},
  ...rest
}) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: staggerDelay,
          },
        },
      }}
      className={className}
      style={style}
      {...rest}
    >
      {children}
    </motion.div>
  );
};

export const StaggerItem = ({
  children,
  className = '',
  style = {},
  ...rest
}) => {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 25 },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.5,
            ease: [0.25, 0.1, 0.25, 1],
          },
        },
      }}
      className={className}
      style={style}
      {...rest}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedSection;
