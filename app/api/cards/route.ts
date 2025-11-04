  import mysql from 'mysql2/promise'
  import { NextResponse } from 'next/server'

  const db = mysql.createPool({
    host: '192.168.0.101',
    user: 'client',
    password: '12345',
    database: 'selmashapp',
  })

  export async function GET() {
    try {
      const [rows] = await db.query('SELECT * FROM cards')
      return NextResponse.json(rows)
    } catch (error) {
      console.error('Ошибка при получении карточек:', error)
      return NextResponse.json({ error: 'Ошибка подключения к базе' }, { status: 500 })
    }
  }

  export async function POST(req: Request) {
    try {
      const body = await req.json()
      const { heading, description, image } = body

      if (!heading) {
        return NextResponse.json({ error: 'Название обязательно' }, { status: 400 })
      }

      const [result] = await db.query(
        'INSERT INTO cards (heading, description, image) VALUES (?, ?, ?)',
        [heading, description, image]
      )

      return NextResponse.json({
        id: (result as any).insertId,
        heading,
        description,
        image,
      })
    } catch (error) {
      console.error('Ошибка при добавлении карточки:', error)
      return NextResponse.json({ error: 'Ошибка при добавлении карточки' }, { status: 500 })
    }
  }
