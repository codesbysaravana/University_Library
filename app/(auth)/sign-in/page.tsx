"use client"
//because this uses complex imports and hooks from react-hook-form and zod, it needs to be a client component
//eg signUpForm and functions

import AuthForm from '../../../components/AuthForm'
import React from 'react'
import { signInSchema } from '../../../lib/validation'

const page = () => {
  <AuthForm
    type="SIGN_IN"
    schema={signInSchema}
    defaultValues={{ 
        email: '',
        password: ''
    }}
    onSubmit={() => {}}
  />
}

export default page