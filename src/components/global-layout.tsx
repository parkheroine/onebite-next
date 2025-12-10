import { PropsWithChildren } from 'react'
import Link from 'next/link'
import style from './global-layout.module.css'

export default function GlobalLayout({ children }: PropsWithChildren) {
  return (
    <div className={style.container}>
      <header className={style.header}>
        <Link href={'/'}>📚 ONE BITE BOOKS</Link>
      </header>
      <main className={style.main}>{children}</main>
      <footer className={style.footer}>제작 @heroine</footer>
    </div>
  )
}
