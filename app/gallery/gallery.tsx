'use client'

import { useEffect, useState } from 'react'
import type { ICard } from '@/shared/types/card.interface'
import { Card } from '../components/card'

export default function Gallery() {
  const [cards, setCards] = useState<ICard[]>([])
  const [filteredCards, setFilteredCards] = useState<ICard[]>([])
  const [loading, setLoading] = useState(true)
  const [searchQuery, setSearchQuery] = useState('')
  const [showModal, setShowModal] = useState(false)

  const [newCard, setNewCard] = useState({
    img: '',
    heading: '',
    description: ''
  })

  useEffect(() => {
    fetch('/api/cards')
      .then(res => res.json())
      .then(data => {
        setCards(data)
        setFilteredCards(data)
      })
      .catch(err => console.error('Ошибка загрузки карточек:', err))
      .finally(() => setLoading(false))
  }, [])

  const handleSearch = (value: string) => {
    setSearchQuery(value)
    const filtered = cards.filter(card =>
      card.heading.toLowerCase().includes(value.toLowerCase())
    )
    setFilteredCards(filtered)
  }

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return

    const reader = new FileReader()
    reader.onload = event => {
      setNewCard({ ...newCard, img: event.target?.result as string })
    }
    reader.readAsDataURL(file)
  }

  const handleAddCard = () => {
    if (!newCard.heading.trim()) {
      alert('Введите название карточки')
      return
    }

    const createdCard: ICard = {
      id: Date.now().toString(),
      author: '',
      heading: newCard.heading,
      description: newCard.description,
      img: newCard.img || '/img/placeholder.png'
    }

    const updated = [...cards, createdCard]
    setCards(updated)
    setFilteredCards(updated)
    setShowModal(false)
    setNewCard({ img: '', heading: '', description: '' })
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-24 p-6">
      {/*Добавить поле для видео, инструкций*/}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
        <input
          type="text"
          placeholder="Поиск..."
          value={searchQuery}
          onChange={e => handleSearch(e.target.value)}
          className="w-full sm:w-1/2 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500"
        />
        <button
          onClick={() => setShowModal(true)}
          className="px-6 py-2 bg-red-600 text-white font-medium rounded-lg shadow hover:bg-red-700 transition"
        >
          + Добавить карточку
        </button>
      </div>

      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {loading ? (
          <p className="text-center col-span-full text-gray-500 text-lg animate-pulse">
            Загрузка карточек...
          </p>
        ) : filteredCards.length === 0 ? (
          <p className="text-center col-span-full text-gray-500 text-lg">
            Нет карточек
          </p>
        ) : (
          filteredCards.map(card => <Card key={card.id} card={card} />)
        )}
      </section>

      {showModal && (
        <div className="fixed inset-0 bg-gray-900/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-6 w-[90%] max-w-md shadow-lg relative">
            <h2 className="text-xl font-semibold mb-4 text-center">Добавить карточку</h2>

            {/* Загрузка изображения */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-600 mb-2">
                Изображение:
              </label>
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="block w-full text-sm text-gray-600 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none"
              />

              {newCard.img && (
                <div className="mt-4 flex justify-center">
                  <img
                    src={newCard.img}
                    alt="Preview"
                    className="w-40 h-40 object-contain rounded-md border"
                  />
                </div>
              )}
            </div>
            <label className="block mb-2 text-sm font-medium text-gray-600">
              Название:
            </label>
            <input
              type="text"
              value={newCard.heading}
              onChange={e => setNewCard({ ...newCard, heading: e.target.value })}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 mb-4 focus:ring-2 focus:ring-red-500 outline-none"
            />
            <label className="block mb-2 text-sm font-medium text-gray-600">
              Описание:
            </label>
            <textarea
              value={newCard.description}
              onChange={e => setNewCard({ ...newCard, description: e.target.value })}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 mb-6 resize-none focus:ring-2 focus:ring-red-500 outline-none"
              rows={3}
            />
            <div className="flex justify-end gap-3">
              <button
                onClick={() => setShowModal(false)}
                className="px-4 py-2 bg-gray-300 rounded-lg hover:bg-gray-400 transition"
              >
                Отмена
              </button>
              <button
                onClick={handleAddCard}
                className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition"
              >
                Добавить
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
