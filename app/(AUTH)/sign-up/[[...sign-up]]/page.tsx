'use client'

import { SignUp } from '@clerk/nextjs'

type PageProps = {}

const Page: React.FC<PageProps> = ({}) => {
  return <SignUp signInUrl="/sign-in" />
}

export default Page
