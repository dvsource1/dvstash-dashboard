'use client'

import Link from 'next/link'

type FooterProps = {}

const Footer: React.FC<FooterProps> = ({}) => {
  return (
    <footer className="flex flex-col border-t-2 border-od_gray/30 text-sm">
      <div className="flex justify-around py-2 text-od_blue/40">
        <Link
          href={'/faq'}
          className="cursor-pointer underline-offset-2 visited:text-od_purple/40 hover:underline">
          FAQ
        </Link>
        <Link
          href={'/privacy-policy'}
          className="cursor-pointer underline-offset-2 visited:text-od_purple/40 hover:underline">
          Privacy Policy
        </Link>
        <Link
          href={'/terms-and-conditions'}
          className="cursor-pointer underline-offset-2 visited:text-od_purple/40 hover:underline">
          Terms & Conditions
        </Link>
      </div>
      <div className="flex justify-around py-2 text-od_blue/40">
        <Link
          href={'/contact'}
          className="cursor-pointer underline-offset-2 visited:text-od_purple/40 hover:underline">
          Contact
        </Link>
        <Link
          href={'/about'}
          className="cursor-pointer underline-offset-2 visited:text-od_purple/40 hover:underline">
          About
        </Link>
      </div>
      {/* copyright */}
    </footer>
  )
}

export default Footer
