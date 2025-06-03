/* import { drizzle } from "drizzle-orm/neon-http";
import { neon } from "@neondatabase/serverless";
import config from "../lib/config";
import { config as loadEnv } from "dotenv";
loadEnv({ path: ".env" });


config({ path: ".env" }); // or .env.local

const sql = neon(config.env.databaseUrl);

export const db = drizzle({ client: sql });
 */

import { config as loadEnv } from "dotenv";
loadEnv({ path: ".env.local" });

import { drizzle } from "drizzle-orm/neon-http";
import { neon } from "@neondatabase/serverless";
import config from "../lib/config";

const sql = neon(config.env.databaseUrl!);
export const db = drizzle({ client: sql });



//created by drizzle by us