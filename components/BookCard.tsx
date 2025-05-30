
import Omnitrix from "../public/images/omnitrix.jpeg";
import React from "react";
import Link from "next/link";
import BookCover from "@/components/BookCover";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { Button } from "@/components/ui/button";
/* implementing the book cover compoenent for the actual books to appear as images in the book card */

//making sure these props are of those in the type Book as mentioned in the types.d.ts file in the Book interfacec
const BookCard = ({ id, title, genre, color, cover, isLoanedBook = false }: Book) => 
    <li className={cn( isLoanedBook && 'xs:w-5 w-full')}>
        <Link 
            href={`/books/${id}`} 
            className={cn(isLoanedBook && 'w-full flex flex-col items-center')}
        >
            <BookCover
                coverColor={color}
                coverImage={cover}
            />

            <div className={cn('mt-4', !isLoanedBook && 'xs:max-w-40 max-w-28')}>
                <p className="book-title">{title}</p>
                <p className="book-genre">{genre}</p>
            </div>

            {isLoanedBook && (
                <div className="mt-3 w-full">
                    <div className="book-loaned">
                        <Image 
                            src="/icons/calender.svg" 
                            alt="calender"
                            width={18}
                            height={18}
                            className="object-contain"
                        />
                        <p className="text-light-100">
                        11 days left to return 
                    </p>
                    </div>

                    <Button className="book-btn">

                    </Button>
                </div>
            )}
        </Link>
    </li>


/* each book card will link to the individual book page */


export default BookCard


//this componenet is using a immidiate return without the curly braces!!!!