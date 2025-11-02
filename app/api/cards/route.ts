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
    console.error('Ошибка API:', error)
    return NextResponse.json({ error: 'Ошибка подключения к базе' }, { status: 500 })
  }
}
