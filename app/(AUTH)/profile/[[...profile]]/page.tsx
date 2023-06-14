'use client'

import { UserProfile } from '@clerk/nextjs'

type PageProps = {}

const Page: React.FC<PageProps> = ({}) => {
  return <UserProfile path="/profile" routing="path" />
}

export default Page
