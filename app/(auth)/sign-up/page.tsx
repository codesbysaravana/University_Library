"use client"
//because this uses complex imports and hooks from react-hook-form and zod, it needs to be a client component
//eg signUpForm and functions

import React from 'react'
import AuthForm from '../../../components/AuthForm'
import { signUpSchema } from '../../../lib/validation'

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
        onSubmit={() => {}}
  />
  )
}

export default page;