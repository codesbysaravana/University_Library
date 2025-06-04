import { University } from 'lucide-react';
import { z } from 'zod';
// This file contains validation schemas using Zod for various forms in the application.

/* using zod from components -----> ui -----> form {all of shadcn} */

export const signUpSchema = z.object({
    fullName: z.string().min(3),
    email: z.string().email(),
    universityId: z.coerce.number(),
    universityCard: z.string().nonempty("University card is required"),
    password: z.string().min(8),
});

export const signInSchema = z.object({
    email: z.string().email(),
    password: z.string().min(8),
})


/* defining schema for 
(auth)
    sign in 
        page
    sign Up 
        page

 */

        