'use client'

import { useEffect, useState } from 'react'
import type { ICard } from '@/shared/types/card.interface'
import { Card } from '../components/card'

export default function Gallery() {
  const [cards, setCards] = useState<ICard[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('/api/cards')
      .then(res => res.json())
      .then(data => setCards(data))
      .catch(err => console.error('Ошибка загрузки карточек:', err))
      .finally(() => setLoading(false))
  }, [])

  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-4 pt-24">
      {loading ? (
        <p className="text-center col-span-full text-gray-500">Загрузка...</p>
      ) : cards.length === 0 ? (
        <p className="text-center col-span-full text-gray-500">Нет карточек</p>
      ) : (
        cards.map(card => <Card key={card.id} card={card} />)
      )}
    </section>
  )
}
