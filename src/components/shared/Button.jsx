import Link from 'next/link'
import { motion } from 'framer-motion'

export default function Button({ 
  children, 
  href, 
  variant = 'primary', 
  className = '',
  onClick,
  type = 'button',
  disabled = false
}) {
  const baseClasses = {
    primary: 'btn-primary',
    secondary: 'btn-secondary',
    accent: 'btn-accent'
  }

  const ButtonComponent = href ? Link : motion.button

  const buttonProps = href ? {
    href,
    className: `${baseClasses[variant]} ${className} inline-block`
  } : {
    whileHover: { scale: 1.02 },
    whileTap: { scale: 0.98 },
    onClick,
    type,
    disabled,
    className: `${baseClasses[variant]} ${className} ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`
  }

  return (
    <ButtonComponent {...buttonProps}>
      {children}
    </ButtonComponent>
  )
}