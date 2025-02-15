import Tokens from 'csrf'
import { cookies } from 'next/headers'

const tokens = new Tokens()

export async function GET() {
  try {
    const cookieStore = await cookies()
    const secret = await tokens.secret()
    const token = await tokens.create(secret)
    
    cookieStore.set('csrf_secret', secret, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      path: '/'
    })

    return Response.json({ csrfToken: token })
  } catch (error) {
    return Response.json({ error: 'Internal server error' }, { status: 500 })
  }
} 