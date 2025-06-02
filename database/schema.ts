//schema declaration for us 


import { varchar, uuid, integer, pgTable, pgEnum, serial, text, timestamp, date } from 'drizzle-orm/pg-core';

//now defining enum the possible answers to the status in users table
//array of three values 
export const STATUS_ENUM = pgEnum("status", [
    'PENDING',
    'APPROVED',
    'REJECTED'
])
export const ROLE_ENUM = pgEnum("role", [
    "USER",
    "ADMIN"
]);
export const BORROW_STATUS_ENUM = pgEnum("borrow_status", [
    "BORROWED",
    "RETURNED"
])


//defining main users table
export const users = pgTable("users", {
    //init uuid for better identifier
    id: uuid('id').notNull().primaryKey().defaultRandom().unique(),
    fullName: varchar("full_name", { length: 255 }).notNull(),
    email: text("email").notNull().unique(), 
    universityId: integer("university_id").notNull(),
    password: text("password").notNull(),
    universityCard: text("university_card").notNull(),
    //using the enum and passing status to it 
    status: STATUS_ENUM("status").default("PENDING"),
    role: ROLE_ENUM("role").default("USER"),
    //to tracking the last activity
    lastActivityDate: date("last_activity_date").notNull().defaultNow(),
    createdAt: timestamp("created_at", {
        withTimezone: true,
    }).defaultNow(),
})

export type InsertUser = typeof users.$inferInsert;
