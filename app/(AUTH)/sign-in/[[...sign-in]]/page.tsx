'use client'

import { SignIn } from '@clerk/nextjs'

type PageProps = {}

const Page: React.FC<PageProps> = ({}) => {
  return <SignIn signUpUrl="/sign-up" />
}

export default Page
