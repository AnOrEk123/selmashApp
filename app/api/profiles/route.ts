  import mysql from 'mysql2/promise'
  import { NextResponse } from 'next/server'

  const db = mysql.createPool({
    host: 'localhost',
    user: 'client',
    password: '12345',
    database: 'selmashapp',
  })

  export async function GET() {
    try {
      const [rows] = await db.query('SELECT * FROM profiles')
      return NextResponse.json(rows)
    } catch (error) {
      console.error('Ошибка при получении профиля:', error)
      return NextResponse.json({ error: 'Ошибка подключения к базе' }, { status: 500 })
    }
  }
