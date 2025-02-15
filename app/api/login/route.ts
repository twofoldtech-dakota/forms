import { signIn } from '@/auth'
import { generateToken } from 'csrf'
import { AuthError } from 'next-auth'
import { cookies } from 'next/headers'

const tokens = new generateToken()

export async function POST(request: Request) {
  try {
    const cookieStore = cookies()
    const body = await request.json()
    const csrfToken = request.headers.get('x-csrf-token')
    const secret = cookieStore.get('csrf_secret')?.value

    if (!secret || !csrfToken || !tokens.verify(secret, csrfToken)) {
      return Response.json({ error: 'Invalid CSRF token' }, { status: 403 })
    }

    const result = await signIn('credentials', {
      ...body,
      redirect: false
    })

    if (result?.error) {
      return Response.json({ error: result.error }, { status: 401 })
    }

    return Response.json({ success: true })
  } catch (error) {
    if (error instanceof AuthError) {
      return Response.json({ error: error.message }, { status: 401 })
    }
    return Response.json({ error: 'Internal server error' }, { status: 500 })
  }
} 