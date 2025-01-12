'use client'

import { motion } from 'motion/react'
import React from 'react'

interface AnimationProps {
  children: React.ReactNode
  delay?: number
  direction?: 'top' | 'bottom' | 'left' | 'right'
  className?: string
}

export function FlipOnReveal({ children, delay = 0 }: AnimationProps) {
  return (
    <motion.div
      variants={{
        hidden: { rotateX: 90, rotateZ: 3, rotateY: -10, opacity: 0 },
        visible: { rotateX: 0, rotateZ: 0, rotateY: 0, opacity: 1 },
      }}
      initial="hidden"
      animate="visible"
      transition={{
        duration: 1,
        ease: [0.5, 1.5, 0.7, 1],
        delay,
      }}
      style={{
        transformOrigin: 'bottom',
        display: 'inline-block',
      }}
    >
      {children}
    </motion.div>
  )
}

export function RevealOnLoad({ children, direction, delay = 0 }: AnimationProps) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: direction === 'top' ? -20 : 20 },
        visible: { opacity: 1, y: 0 },
      }}
      initial="hidden"
      animate="visible"
      transition={{ duration: 0.9, delay, ease: [0.25, 0.8, 0.25, 1] }}
      style={{
        transformOrigin: 'top',
      }}
    >
      {children}
    </motion.div>
  )
}

export function RevealOneByOne({ children, direction = 'top', delay = 0 }: AnimationProps) {
  return (
    <>
      {React.Children.map(children, (child, index) => (
        <motion.div
          initial={{ opacity: 0, y: direction === 'top' ? -20 : 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: delay + index * 0.1 }}
          style={{
            transformOrigin: direction,
          }}
        >
          {child}
        </motion.div>
      ))}
    </>
  )
}

export function FadeOnLoad({ children, delay = 0 }: AnimationProps) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
      }}
      initial="hidden"
      animate="visible"
      transition={{ duration: 0.8, delay, ease: [0.25, 0.8, 0.25, 1] }}
    >
      {children}
    </motion.div>
  )
}

export function RevealOnScroll({
  children,
  delay = 0.3,
  direction = 'top',
  className = '',
}: AnimationProps) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: direction === 'top' ? -20 : 20 },
        visible: { opacity: 1, y: 0 },
      }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 1.1, delay, ease: [0.25, 0.8, 0.25, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
