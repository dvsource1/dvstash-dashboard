'use client'

import { useRouter } from 'next/navigation'

type ButtonProps = {
  onClick?: () => {}
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
      className="flex h-10 w-20 min-w-max items-center justify-center gap-2 border-2 border-od_gray px-4 text-od_gray hover:border-od_yellow hover:text-od_yellow/60"
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
