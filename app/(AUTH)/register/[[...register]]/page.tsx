'use client'

import Button from '@/components/Button'
import { SignUp, useClerk, useUser } from '@clerk/nextjs'
import { ArrowRightOnRectangleIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'

type PageProps = {}

const Page: React.FC<PageProps> = ({}) => {
  const { isLoaded, isSignedIn, user } = useUser()
  const { signOut } = useClerk()

  return (
    <div className="flex h-full flex-col items-center justify-center">
      {isLoaded && isSignedIn ? (
        <div className="gap-2 text-center text-od_gray">
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
        <SignUp signInUrl="/sign-in" />
      )}
    </div>
  )
}

export default Page
