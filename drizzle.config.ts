//step 5 in drizzle orm setup
/* Setup Drizzle config file
Drizzle config - a configuration file that is used by Drizzle Kit and contains all the information about your database connection, migration folder and schema files.

Create a drizzle.config.ts file in the root of your project and add the following content: */

import { config } from 'dotenv';
import { defineConfig } from "drizzle-kit";

config({ path: '.env.local' });

export default defineConfig({
    //root to the schema
  schema: "./database/schema.ts",
  out: "./migrations",
  dialect: "postgresql",
  dbCredentials: {
    url: process.env.DATABASE_URL!,
  },
});

//schema ------> database schema srtucture
//out -----> the out of our database soon well see it

//output --down
/* 
csara@saravana MINGW64 ~/Downloads/projects-2/university-library (main)
$ npx drizzle-kit generate
No config path provided, using default 'drizzle.config.ts'
Reading config file 'C:\Users\csara\Downloads\projects-2\university-library\drizzle.config.ts'
1 tables
users 10 columns 0 indexes 0 fks

[✓] Your SQL migration file ➜ migrations\0000_chilly_anthem.sql 🚀

csara@saravana MINGW64 ~/Downloads/projects-2/university-library (main) */



//GENERATE AND MIGRATE VERY IMP DATABASE TOPICS LOOK THEM UP!




//running npx drizzle-kit generate -----> generates a new migrations folder and creates a database


//for migrations
/* $ npx drizzle-kit migrate
No config path provided, using default 'drizzle.config.ts'
Reading config file 'C:\Users\csara\Downloads\projects-2\university-library\drizzle.config.ts'
Using '@neondatabase/serverless' driver for database querying
 Warning  '@neondatabase/serverless' can only connect to remote Neon/Vercel Postgres/Supabase instances through a websocket */