/* import { drizzle } from "drizzle-orm/neon-http";
import { neon } from "@neondatabase/serverless";
import config from "../lib/config";
import { config as loadEnv } from "dotenv";
loadEnv({ path: ".env" });


config({ path: ".env" }); // or .env.local

const sql = neon(config.env.databaseUrl);

export const db = drizzle({ client: sql });
 */

import config from "@/lib/config";
import { drizzle } from "drizzle-orm/neon-http";
import { neon } from "@neondatabase/serverless";

const sql = neon(config.env.databaseUrl);

export const db = drizzle({ client: sql});

if (process.env.NEON_DATABASE_URL === 'dummy') {
  // mock or skip DB
}



//created by drizzle by us