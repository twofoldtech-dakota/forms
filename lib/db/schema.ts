import type { AdapterAccount } from '@auth/core/adapters'
import { createId } from '@paralleldrive/cuid2'
import { pgTable, text, timestamp, varchar } from 'drizzle-orm/pg-core'

export const users = pgTable('users', {
  id: text('id').notNull().primaryKey().$defaultFn(() => createId()),
  name: text('name'),
  email: text('email').notNull().unique(),
  emailVerified: timestamp('emailVerified', { mode: 'date' }),
  image: text('image'),
  password: text('password'),
  createdAt: timestamp('created_at').defaultNow().notNull()
})

export const accounts = pgTable('accounts', {
  id: text('id').notNull().primaryKey().$defaultFn(() => createId()),
  userId: text('userId')
    .notNull()
    .references(() => users.id, { onDelete: 'cascade' }),
  type: text('type').$type<AdapterAccount['type']>().notNull(),
  provider: text('provider').notNull(),
  providerAccountId: text('providerAccountId').notNull(),
  refresh_token: text('refresh_token'),
  access_token: text('access_token'),
  expires_at: timestamp('expires_at', { mode: 'date' }),
  token_type: text('token_type'),
  scope: text('scope'),
  id_token: text('id_token'),
  session_state: text('session_state')
})

export const sessions = pgTable('sessions', {
  id: text('id').notNull().primaryKey().$defaultFn(() => createId()),
  userId: text('userId')
    .notNull()
    .references(() => users.id, { onDelete: 'cascade' }),
  sessionToken: text('sessionToken').notNull().unique(),
  expires: timestamp('expires', { mode: 'date' }).notNull()
})

export const verificationTokens = pgTable('verification_tokens', {
  identifier: text('identifier').notNull(),
  token: text('token').notNull(),
  expires: timestamp('expires', { mode: 'date' }).notNull()
}) 