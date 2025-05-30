import React from 'react'
import BookCard from './BookCard';

interface Props {
    title: string,
    books: Book[];
    containerClassName?: string;
}
//books is an array of Book type cominng from global types.d.ts Book[] interface

//entire books id,title, etc are coming from the page.tsx

const BookList = ({ title, books, containerClassName }: Props) => {
  return (
    <section className={containerClassName}>
        <h2 className='font-bebas-neue text-4xl text-light-100'>
            {title}
        </h2>

        <ul className='book-list'>
            {books.map((book) => (
                <BookCard
                    key={book.title}
                    {...book}
                />
            ))}
        </ul>
    </section>
  )
}

export default BookList;

//Followed to BookCard.tsx to create Books component
