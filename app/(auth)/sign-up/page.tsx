"use client"
//because this uses complex imports and hooks from react-hook-form and zod, it needs to be a client component
//eg signUpForm and functions

import React from 'react'
import AuthForm from '../../../components/AuthForm'
import { signUpSchema } from '../../../lib/validation'
import { signUp } from '@/lib/actions/auth'

const page = () => {
  return (
    <AuthForm
        type="SIGN_UP"
        schema={signUpSchema}
        defaultValues={{ 
            email: '',
            password: '',
            fullName: '',
            universityId: 0,
            universityCard: '',
        }}
        onSubmit={signUp}
  />
  )
}

export default page;


//signUp goes to the auth.ts in actions