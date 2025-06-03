'use server';
//only renders on server

import { db } from "../../database/drizzle";
import { users } from "../../database/schema"

//signUP gets paramters of pnly type Authredentials...creted in types.d.ts
const signUp = async (params: AuthCredentials) => {
    const { fullName, email, universityId, password, universityCard } = params;

    //checking if user exists already
    const esistingUser = await db
        .select()
        .from(users)
        .where(eq(users.email, email))
        //checking if email is there in database
};