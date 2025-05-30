import React from 'react';
import Image from "next/image";

// Getting the data from index.ts 
// ---> sampleBooks 
// ---> page.tsx 
// ---> BookOverview 
// ---> destructure everything from sampleBooks[0]
const BookOverview = ({ title, author, genre, rating ,total_copies, available_copies, description, color, cover }: Book) => {

  // Destructuring the props passed to the component AND THE Book COMING FROM THE TYPES.D.ts FILE

    return (
    <section className='book-overview'>
      <div className='flex flex-1 flex-col gap-5'>
        <h1>{title}</h1>

        <div className='book-info'>
            <p>
                By <span className='font-semibold text-light-200'>{author}</span>
            </p>
            <p>
                Category {" "}
                <span className='font-semibold text-light-200'>{genre}</span>
            </p>

            <div className='flex flex-row gap-1 '>
                <Image></Image>
            </div>
        </div>
      </div>
    </section>
  );
}

export default BookOverview;
