import { env } from '@/lib/env'
import { drizzle } from 'drizzle-orm/postgres-js'
import postgres from 'postgres'
import * as schema from './schema'; // Remove the 'db/' from the path

const connectionString = env.DATABASE_URL

const client = postgres(connectionString)
export const db = drizzle(client, { schema }) 