import React from 'react';
import BookOverview from '@/components/BookOverview';
import BookList from '@/components/BookList';
import { sampleBooks } from '@/constants/index';
import { db } from "../../database/drizzle";
import { users } from "../../database/schema"


const Home = async () => {
  //to fetching users from database 
  const result = await db.select().from(users);
  //console logs all users and the null and 2 is used for spacing in console
  console.log(JSON.stringify(result, null, 2));

  return (
      <>
      {/* passing in sampleBooks[0] to BookOverview component */}
        <BookOverview 
          {...sampleBooks[0]}
          // sampleBooks[0] is the first book in the sampleBooks array
        />

        <BookList
          title="Latest Books"
          /* sampleBooks coming from constants */
          books={sampleBooks}
          containerClassName="mt-28"
        />
      </>
  );
}

export default Home;
