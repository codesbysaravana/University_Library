/* In Next.js 13+ (App Router), placing "use client" at the top of a file tells Next.js that this component must be rendered on the client (browser) instead of the server. You need it whenever you:

Use React hooks (e.g., useState, useEffect, or form‐libraries like React Hook Form that rely on client‐only behavior).

Depend on browser‐only APIs (e.g., window, localStorage).

Need interactivity (event handlers, form submission, etc.).

Without "use client", the component is treated as a server component (no hooks or client‐side state allowed). */

"use client"

import React from 'react'
import { zodResolver } from "@hookform/resolvers/zod"
import { DefaultValues, SubmitHandler, useForm, UseFormReturn, FieldValues } from "react-hook-form"
import { z, ZodType } from "zod"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import Link from "next/link"

// Importing necessary components and types from React Hook Form and Zod for form handling and validation
//they are then from Shadcn UI library




interface Props<T extends FieldValues> {
    schema: ZodType<T>;
    defaultValues: T;
    onSubmit: (data: T) => Promise<{success: boolean; error?: string }>;
    type: "SIGN_IN" | "SIGN_UP";
}
    /* Now this Props Type is of <T> type, which means it can be any type, and we can use it to define the type of the schema, defaultValues, and onSubmit function. */
    {/* <T> means we dont know whats coming..just take all */}

const AuthForm = <T extends FieldValues>({
    type,
    schema,
    defaultValues,
    onSubmit, 
}: Props<T>) => {

    const isSignIn = type === "SIGN_IN";

    const form: UseFormReturn<T> = useForm({
        resolver: zodResolver(schema),
        defaultValues: defaultValues as DefaultValues<T>,
    });

    const handleSubmit: SubmitHandler<T> = async (data) => {

    }

  return (
    <div className='flex flex-col gap-4'>
        <h1 className="text-2xl font-semibold text-white">
            {isSignIn ? "Welcome Back to BookDom" : "Create your new library account"}
        </h1>

        <p className='text-light-100'>
            {isSignIn ? 
                "Access the vast collection of resources and stay updated" 
                : "Please complete the form below to create your account"}
        </p>
            <Form {...form}>
                <form 
                    onSubmit={form.handleSubmit(handleSubmit)}
                    className="space-y-6 w-full"
                >
                    



                    {Object.keys(defaultValues).map((field) => (
                        <FormField
                            key={field}
                            control={form.control}
                            name={field as Path<T>}
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className='capitalize'>
                                        {/* FIELD_NAMES{field.name}  */}{/* This is a placeholder, replaces with actual field names in schema */}
                                        {FIELD_NAMES{field.name as keyof typeof FIELD_NAMES}}
                                    </FormLabel>
                                    
                                    <FormControl>
                                        <Input placeholder="shadcn" {...field} />
                                    </FormControl>
                                    
                                    <FormDescription>
                                        This is your public display name.
                                    </FormDescription>
                                    
                                    <FormMessage />
                                
                                </FormItem>
                    )}
                    /> //all inside FormField as inputs to it 
                    ))}

                    {/* Initially when i created this ...it was not working because i was using the field name as "username" but the defaultValues were not having that key, so it was not rendering anything, thus i had to use Object.keys(defaultValues) to get the keys of the defaultValues object and then render the form fields dynamically based on that. */}

                    {/* and this main is reusability of this component, it can be used for both sign in and sign up forms
                     */}
                

                    {/* renders the componenets based on the fields of on (auth) page, sign in or sign up */}



                    
                    <Button type="submit">Submit</Button>
                </form>
            </Form>

            <p className='text-center text-base font-medium'>
                {isSignIn ? "New to BookDom?" : "Already have an account?"}

                <Link 
                    href={isSignIn ? "/sign-up" : "/sign-in"}
                    className='font-bold text-primary'
                >
                    {isSignIn? "Create a account" : "Sign in"}
                </Link>

            </p>

    </div>
  )
}

export default AuthForm

/* this component is common for the sign in and sign up pages

the props
type ---> sign in or sign up
schema ---> the validation schema for the form
defaultValues ---> the default values for the form
onSubmit ---> the function to call when the form is submitted */


/* schema coming over from 
validation ----> signInSchema or signUpSchema ----> AuthForm.tsx -----> useForm */


//even the return statement is genneric came from shadCn !!!!!



