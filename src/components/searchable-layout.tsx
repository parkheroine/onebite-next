import { useRouter } from 'next/router'
import { PropsWithChildren, useEffect, useState } from 'react'
import style from './searchable-layout.module.css'

export default function SearchableLayout({ children }: PropsWithChildren) {
  const router = useRouter()
  const [search, setSearch] = useState('')

  const q = router.query.q as string | undefined

  const onChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value)
  }

  const onSubmit = () => {
    if (search.trim() === '' || q === search) return
    router.push(`/search?q=${search}`)
  }

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      onSubmit()
    }
  }

  useEffect(() => {
    setSearch(q || '')
  }, [q])

  return (
    <div>
      <div className={style.searchbar_container}>
        <input value={search} placeholder="검색어를 입력하세요..." onKeyDown={onKeyDown} onChange={onChangeSearch} />
        <button onClick={onSubmit}>검색</button>
      </div>
      <div>{children}</div>
    </div>
  )
}
