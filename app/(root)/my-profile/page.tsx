import React from 'react'
import { Button } from "../../../components/ui/button";
import { signOut } from "@/auth"
import { sampleBooks } from '@/constants';
import BookList from '@/components/BookList';


//need to keep tihs page server render
//for logout functionality
const page = () => {
  return (
    <>
        <form action={async () => {
            'use server';

            await signOut();
        }}
        className='mb-10'
        >
            <Button>Logout</Button>
        </form>


        {/* //show the books the current user has borrowed */}
        <BookList title="Borrowed Books" books={sampleBooks} />
    </>
  )
}

export default page