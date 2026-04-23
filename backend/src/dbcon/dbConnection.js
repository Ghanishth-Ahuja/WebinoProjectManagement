import { Pool } from 'pg';
import { PrismaPg } from '@prisma/adapter-pg';
// import { PrismaClient } from '@prisma/client';
import { PrismaClient } from '../generated/client/index.js';
// import { PrismaClient } from '../../generated/prisma/client.ts';
// Grab the pooled port 6543 connection for your API traffic
// Fallback to local DATABASE_URL for local development
const connectionString = process.env.POOLED_URL || process.env.DATABASE_URL;

const pool = new Pool({ connectionString });
const adapter = new PrismaPg(pool);

// Prisma 7 requires the adapter object!
const prisma = new PrismaClient({ adapter });

export default prisma;