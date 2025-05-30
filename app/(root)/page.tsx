import React from 'react';
import { Button } from '@/components/ui/button';
import BookOverview from '@/components/BookOverview';
import BookList from '@/components/BookList.tsx';
import { sampleBooks } from '@/constants/index.ts';

const Home = () => {
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
