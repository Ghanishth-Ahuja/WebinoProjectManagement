import "dotenv/config";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "../../generated/prisma/client.ts";

const connectionString = process.env.DIRECT_URL;

const adapter = new PrismaPg({ connectionString: connectionString });
const prisma = new PrismaClient({ adapter });

export default prisma;
