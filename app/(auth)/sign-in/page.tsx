"use client"
//because this uses complex imports and hooks from react-hook-form and zod, it needs to be a client component
//eg signUpForm and functions

import AuthForm from '../../../components/AuthForm'
import React from 'react'
import { signInSchema } from '../../../lib/validation'

const page = () => {

  return (
    <AuthForm
    type="SIGN_IN"
    schema={signInSchema}
    defaultValues={{ 
        email: '',
        password: ''
    }}
    onSubmit={() => {}}
  />

  )
  
}

export default page




/*
completly know the code

class Solution(object):
    def productExceptSelf(self, nums):
        n = len(nums)
        res = [1] * n

        prefix = suffix = 1

        for i in range(n):
            res[i] *= prefix
            prefix *= nums[i]

        for i in range(n - 1, -1, -1):
            res[i] *= suffix
            suffix *= nums[i]

        return res
 */