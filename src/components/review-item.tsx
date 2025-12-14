import { ReviewData } from '@/types'
import style from './review-item.module.css'
import ReviewItemDeleteButton from './review-item-delete-button'

export default function ReviewItem({ id: reviewId, content, author, createdAt, bookId }: ReviewData) {
  return (
    <div className={style.container}>
      <div className={style.author}>{author}</div>
      <div className={style.content}>{content}</div>
      <div className={style.bottom_container}>
        <div>{new Date(createdAt).toLocaleString()}</div>
        <div className={style.delete_btn}>
          <ReviewItemDeleteButton bookId={bookId} reviewId={reviewId} />
        </div>
      </div>
    </div>
  )
}
