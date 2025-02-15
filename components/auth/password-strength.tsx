'use client'

import { cn } from '@/lib/utils'

interface PasswordStrengthProps {
  password: string
}

export function PasswordStrength({ password }: PasswordStrengthProps) {
  const strength = calculatePasswordStrength(password)

  return (
    <div className="space-y-2">
      <div className="flex h-2 w-full space-x-1">
        {[1, 2, 3, 4].map((level) => (
          <div
            key={level}
            className={cn(
              'h-full w-1/4 rounded-sm',
              level <= strength.score
                ? strengthColors[strength.score]
                : 'bg-muted'
            )}
          />
        ))}
      </div>
      {password && (
        <p className="text-xs text-muted-foreground">{strength.message}</p>
      )}
    </div>
  )
}

const strengthColors = {
  0: 'bg-red-500',
  1: 'bg-orange-500',
  2: 'bg-yellow-500',
  3: 'bg-green-500',
  4: 'bg-green-700'
}

function calculatePasswordStrength(password: string) {
  if (!password) return { score: 0, message: '' }
  
  let score = 0
  let message = 'Password is too weak'

  // Length check
  if (password.length >= 8) score++
  if (password.length >= 12) score++

  // Character variety checks
  if (/[A-Z]/.test(password)) score++
  if (/[0-9]/.test(password)) score++
  if (/[^A-Za-z0-9]/.test(password)) score++

  // Adjust score based on length and variety
  score = Math.min(4, Math.floor(score * 0.8))

  // Set appropriate message
  switch (score) {
    case 0:
    case 1:
      message = 'Password is too weak'
      break
    case 2:
      message = 'Password is moderate'
      break
    case 3:
      message = 'Password is strong'
      break
    case 4:
      message = 'Password is very strong'
      break
  }

  return { score, message }
} 