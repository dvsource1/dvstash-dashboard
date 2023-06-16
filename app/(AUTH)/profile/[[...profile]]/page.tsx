'use client'

import { UserProfile } from '@clerk/nextjs'

type PageProps = {}

const Page: React.FC<PageProps> = ({}) => {
  return (
    <div className="h-full overflow-auto">
      <UserProfile path="/profile" routing="path" />
    </div>
  )
}

export default Page
