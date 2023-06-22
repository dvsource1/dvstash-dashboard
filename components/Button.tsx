'use client'

import { useRouter } from 'next/navigation'

type ButtonProps = {
  onClick?: () => void
  children?: React.ReactNode
  href?: string
  icon?: any
}

const Button: React.FC<ButtonProps> = ({
  children,
  icon: Icon,
  href,
  onClick,
}) => {
  const router = useRouter()

  return (
    <button
      className="border-GRAY flex h-10 w-20 min-w-max items-center justify-center gap-2 border-2 px-4 text-OD_GRAY hover:border-OD_YELLOW hover:text-OD_YELLOW/60"
      onClick={() => (href ? router.push(href) : onClick?.())}>
      {Icon && (
        <div className="flex items-center">
          <Icon className="h-6 w-6" />
        </div>
      )}
      {children && <div className="flex-1">{children}</div>}
    </button>
  )
}

export default Button
