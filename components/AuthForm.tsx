"use client"

import React from 'react'
import { zodResolver } from "@hookform/resolvers/zod"
import { DefaultValues, SubmitHandler, useForm, UseFormReturn, FieldValues, Path } from "react-hook-form"
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
import { useRouter } from "next/navigation"
import { FIELD_NAMES, FIELD_TYPES } from "@/constants"

interface Props<T extends FieldValues> {
  schema: ZodType<T>;
  defaultValues: T;
  onSubmit: (data: T) => Promise<{ success: boolean; error?: string }>;
  type: "SIGN_IN" | "SIGN_UP";
}

const AuthForm = <T extends FieldValues>({
  type,
  schema,
  defaultValues,
  onSubmit,
}: Props<T>) => {
  const router = useRouter();

  const isSignIn = type === "SIGN_IN";

  const form: UseFormReturn<T> = useForm({
    resolver: zodResolver(schema),
    defaultValues: defaultValues as DefaultValues<T>,
  });

  const handleSubmit: SubmitHandler<T> = async (data) => {
    // TODO: Add submit logic here
  };

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
                            render={({ field: fieldProps }) => (
                                <FormItem>
                                    <FormLabel className='capitalize'>
                                        {FIELD_NAMES[fieldProps.name as keyof typeof FIELD_NAMES]}
                                    </FormLabel>
                                    
                                    <FormControl>
                                        <Input placeholder="Enter value" {...fieldProps} />
                                    </FormControl>
                                    
                                    <FormDescription>
                                        This is your public display name.
                                    </FormDescription>
                                    
                                    <FormMessage />
                                
                                </FormItem>
                            )}
                        />
                    ))}

                    <Button type="submit">Submit</Button>
                </form>
            </Form>

            <p className='text-center text-base font-medium'>
                {isSignIn ? "New to BookDom?" : "Already have an account?"}

                <Link 
                    href={isSignIn ? "/sign-up" : "/sign-in"}
                    className='font-bold text-primary'
                >
                    {isSignIn ? "Create a account" : "Sign in"}
                </Link>

            </p>

    </div>
  )
}

export default AuthForm