import { NextResponse } from 'next/server'
import mysql from 'mysql2/promise'

export async function GET() {
  const db = await mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'selmashApp'
  })

  const [rows] = await db.execute('SELECT * FROM cards')
  return NextResponse.json(rows)
}
