'use client'

import Button from '@/components/Button'
import { SignUp, useClerk, useUser } from '@clerk/nextjs'
import {
  ArrowLongLeftIcon,
  ArrowRightOnRectangleIcon,
} from '@heroicons/react/24/outline'
import Link from 'next/link'

type PageProps = {}

const Page: React.FC<PageProps> = ({}) => {
  const { isLoaded, isSignedIn, user } = useUser()
  const { signOut } = useClerk()

  return isLoaded && isSignedIn ? (
    <div className="flex flex-col items-center gap-2 text-center text-od_gray">
      <p>
        You are already logged in as{' '}
        <Link className="hover:underline" href="/profile">
          @{user.username}
        </Link>
      </p>
      <div className="flex gap-2">
        <Button href="/" onClick={() => signOut()} icon={ArrowLongLeftIcon}>
          Home
        </Button>
        <Button onClick={() => signOut()} icon={ArrowRightOnRectangleIcon}>
          Logout
        </Button>
      </div>
    </div>
  ) : (
    <SignUp signInUrl="/sign-in" />
  )
}

export default Page
