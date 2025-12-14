import { ReactNode } from 'react'

export default function Layout({
  children,
  sidebar,
  feed,
}: {
  children: ReactNode
  sidebar: ReactNode
  feed: ReactNode
}) {
  return (
    <div>
      {sidebar}
      {feed}
      {children}
    </div>
  )
}
