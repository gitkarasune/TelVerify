"use client"

import type React from "react"
import { useCallback, useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X } from "lucide-react"

interface CustomModalProps {
  isOpen: boolean
  onClose: () => void
  title: string
  children: React.ReactNode
  showCloseButton?: boolean
  preventOutsideClick?: boolean
  size?: "sm" | "md" | "lg" | "xl"
}

export function CustomModal({
  isOpen,
  onClose,
  title,
  children,
  showCloseButton = true,
  preventOutsideClick = false,
  size = "md",
}: CustomModalProps) {
  const [isClosing, setIsClosing] = useState(false)

  const handleClose = useCallback(() => {
    if (preventOutsideClick) return
    setIsClosing(true)
    // Delay actual close to allow exit animation
    setTimeout(() => {
      onClose()
      setIsClosing(false)
    }, 300)
  }, [preventOutsideClick, onClose])

  // Handle escape key press
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && !preventOutsideClick) {
        handleClose()
      }
    }

    if (isOpen) {
      document.addEventListener("keydown", handleEscape)
      document.body.style.overflow = "hidden"
    }

    return () => {
      document.removeEventListener("keydown", handleEscape)
      document.body.style.overflow = "unset"
    }
  }, [isOpen, preventOutsideClick, handleClose])


  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget && !preventOutsideClick) {
      handleClose()
    }
  }

  const sizeClasses = {
    sm: "max-w-md",
    md: "max-w-lg",
    lg: "max-w-7xl",
    xl: "max-w-4xl",
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          onClick={handleBackdropClick}
        >
          {/* Backdrop with blur effect */}
          <motion.div
            initial={{ backdropFilter: "blur(0px)" }}
            animate={{ backdropFilter: "blur(8px)" }}
            exit={{ backdropFilter: "blur(0px)" }}
            className="absolute inset-0 bg-black/50 dark:bg-black/70"
          />

          {/* Animated big border background */}
          <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 dark:from-cyan-500/20 dark:to-blue-500/20 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-purple-500/10 to-pink-500/10 dark:from-purple-500/20 dark:to-pink-500/20 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-indigo-500/5 to-cyan-500/5 dark:from-indigo-500/10 dark:to-cyan-500/10 rounded-full blur-3xl" />

          {/* Modal container */}
          <motion.div
            initial={{
              y: "100vh",
              scale: 0.8,
              opacity: 0,
            }}
            animate={{
              y: 0,
              scale: 1,
              opacity: 1,
            }}
            exit={
              isClosing
                ? {
                  x: Math.random() > 0.5 ? "100vw" : "-100vw",
                  opacity: 0,
                  transition: { duration: 0.3, ease: "easeInOut" },
                }
                : {
                  y: "100vh",
                  scale: 0.8,
                  opacity: 0,
                }
            }
            transition={{
              type: "spring",
              damping: 25,
              stiffness: 300,
              duration: 0.5,
            }}
            className={`relative w-full ${sizeClasses[size]} mx-2 bg-white dark:bg-gradient-to-br dark:from-slate-900 dark:via-black dark:to-slate-900 text-black dark:text-white rounded-2xl shadow-2xl border border-gray-200 dark:border-white/10 overflow-hidden max-h-[90vh] overflow-y-auto`}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-white/10">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white">{title}</h2>
              {showCloseButton && !preventOutsideClick && (
                <button
                  onClick={handleClose}
                  className="h-8 w-8 text-gray-500 dark:text-gray-200"
                >
                  <X className="h-6 w-6" />
                </button>
              )}
            </div>

            {/* Content */}
            <div className="p-6 relative">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-600/20 blur-3xl dark:blur-3xl pointer-events-none" />
              {children}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
