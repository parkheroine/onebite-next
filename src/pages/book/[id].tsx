import { GetStaticPropsContext, InferGetStaticPropsType } from 'next'
import style from './[id].module.css'
import fetchOneBook from '@/lib/fetch-one-book'
import { useRouter } from 'next/router'

export const getStaticPaths = async () => {
  return {
    paths: [{ params: { id: '1' } }, { params: { id: '2' } }, { params: { id: '3' } }],
    fallback: true,
  }
}

export const getStaticProps = async (context: GetStaticPropsContext) => {
  const id = context.params!.id
  const book = await fetchOneBook(Number(id))

  if (!book) {
    return {
      notFound: true,
    }
  }
  return {
    props: { book },
  }
}

export default function Page({ book }: InferGetStaticPropsType<typeof getStaticProps>) {
  const router = useRouter()
  if (router.isFallback) {
    return '로딩 중...'
  }
  if (!book) {
    return '해당 도서가 없습니다'
  }
  const { title, subTitle, description, author, publisher, coverImgUrl } = book
  return (
    <div className={style.container}>
      <div className={style.cover_img_container} style={{ backgroundImage: `url(${coverImgUrl})` }}>
        <img src={coverImgUrl} />
      </div>

      <div className={style.title}>{title}</div>
      <div className={style.subTitle}>{subTitle}</div>
      <div className={style.author}>
        {author} | {publisher}
      </div>
      <div className={style.description}>{description}</div>
    </div>
  )
}
