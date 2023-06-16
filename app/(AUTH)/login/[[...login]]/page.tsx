'use client'

import Button from '@/components/Button'
import { SignIn, useClerk, useUser } from '@clerk/nextjs'
import { ArrowRightOnRectangleIcon } from '@heroicons/react/24/outline'
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
      <Button onClick={() => signOut()} icon={ArrowRightOnRectangleIcon}>
        Logout
      </Button>
    </div>
  ) : (
    <SignIn signUpUrl="/sign-up" />
  )
}

export default Page
