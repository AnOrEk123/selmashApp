import mysql from 'mysql2/promise'
import { NextResponse } from 'next/server'

export async function GET() {
  try {
    const db = await mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: 'Egoregor4ik',
      database: 'selmashapp'
    })

    const [rows] = await db.execute('SELECT * FROM cards')
    return NextResponse.json(rows)
  } catch (error) {
    console.error('Ошибка API:', error)
    return NextResponse.json({ error: 'Ошибка подключения к базе' }, { status: 500 })
  }
}
