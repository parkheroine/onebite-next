import BookItem from '@/components/book-item'
import style from './page.module.css'
import { BookData } from '@/types'

async function AllBooks() {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_SERVER_URL}/book`, { cache: 'force-cache' })

  if (!response.ok) {
    return <div>도서 정보를 불러오지 못했습니다.</div>
  }

  const allBooks: BookData[] = await response.json()

  return (
    <div>
      {allBooks.map((book) => (
        <BookItem key={book.id} {...book} />
      ))}
    </div>
  )
}

async function RecoBooks() {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_SERVER_URL}/book/random`)
  if (!response.ok) {
    return <div>추천 도서 정보를 불러오지 못했습니다.</div>
  }

  const recoBooks: BookData[] = await response.json()
  return (
    <div>
      {recoBooks.map((book) => (
        <BookItem key={book.id} {...book} />
      ))}
    </div>
  )
}

export default function Home() {
  return (
    <div className={style.container}>
      <section>
        <h3>지금 추천하는 도서</h3>
        <RecoBooks />
      </section>
      <section>
        <h3>등록된 모든 도서</h3>
        <AllBooks />
      </section>
    </div>
  )
}
