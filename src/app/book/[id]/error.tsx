'use client'

import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

export default function Error({ error, reset }: { error: Error; reset: () => void }) {
  const router = useRouter()

  useEffect(() => {
    console.error(error)
  }, [error])
  return (
    <div>
      <h2>에러가 발생했습니다</h2>
      <button
        onClick={() => {
          router.refresh()
          reset()
        }}
      >
        다시 시도하기
      </button>
    </div>
  )
}
