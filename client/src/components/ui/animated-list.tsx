"use client"

import React, {
  ComponentPropsWithoutRef,
  useEffect,
  useMemo,
  useState,
} from "react"
import { AnimatePresence, motion, MotionProps } from "motion/react"

import { cn } from "@/lib/utils"

export function AnimatedListItem({ children }: { children: React.ReactNode }) {
  const animations: MotionProps = {
    initial: { x: -20, opacity: 0 },
    animate: { x: 0, opacity: 1 },
    exit: { 
      x: 20, 
      opacity: 0,
      transition: { duration: 0.3, ease: "easeInOut" }
    },
    transition: { type: "spring", stiffness: 350, damping: 40 },
  }

  return (
    <motion.div {...animations} layout className="mx-auto w-full">
      {children}
    </motion.div>
  )
}

export interface AnimatedListProps extends ComponentPropsWithoutRef<"div"> {
  children: React.ReactNode
  delay?: number
  maxItems?: number
}

export const AnimatedList = React.memo(
  ({ children, className, delay = 1000, maxItems = 5, ...props }: AnimatedListProps) => {
    const [items, setItems] = useState<React.ReactNode[]>([])
    const childrenArray = useMemo(
      () => React.Children.toArray(children),
      [children]
    )
    const [currentIndex, setCurrentIndex] = useState(0)

    useEffect(() => {
      const timeout = setTimeout(() => {
        const nextItem = childrenArray[currentIndex % childrenArray.length]
        
        setItems((prevItems) => {
          const newItems = [nextItem, ...prevItems]
          return newItems.slice(0, maxItems)
        })
        
        setCurrentIndex((prev) => prev + 1)
      }, delay)

      return () => clearTimeout(timeout)
    }, [currentIndex, delay, childrenArray, maxItems])

    return (
      <div
        className={cn(`flex flex-col items-center gap-4`, className)}
        {...props}
      >
        <AnimatePresence mode="sync">
          {items.map((item, index) => (
            <AnimatedListItem key={`${(item as React.ReactElement).key}-${currentIndex - index}`}>
              {item}
            </AnimatedListItem>
          ))}
        </AnimatePresence>
      </div>
    )
  }
)

AnimatedList.displayName = "AnimatedList"