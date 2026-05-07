import { Pool } from 'pg';
import { PrismaPg } from '@prisma/adapter-pg';
import { PrismaClient } from '@prisma/client';
// import { PrismaClient } from '../../generated/prisma/client';
import { IS_PRODUCTION_ENVIRONMENT } from '../constants.js';
import "dotenv/config";
const connectionString = IS_PRODUCTION_ENVIRONMENT ? process.env.DATABASE_URL : process.env.POOLED_URL;
let prisma;
if (IS_PRODUCTION_ENVIRONMENT) {
    const adapter = new PrismaPg({ connectionString: connectionString });
    prisma = new PrismaClient({ adapter });
} else {
    const pool = new Pool({ connectionString });
    const adapter = new PrismaPg(pool);
    prisma = new PrismaClient({ adapter });
}


export default prisma;

// import "dotenv/config";
// import { PrismaPg } from "@prisma/adapter-pg";
// import { PrismaClient } from "../../generated/prisma/client.js";

// const connectionString = process.env.DATABASE_URL;

// const adapter = new PrismaPg({ connectionString: connectionString });
// const prisma = new PrismaClient({ adapter });

// export default prisma;