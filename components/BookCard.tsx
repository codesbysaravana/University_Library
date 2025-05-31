// Importing dependencies and assets
import Omnitrix from "../public/images/omnitrix.jpeg"; // Likely unused here; consider removing if not needed
import React from "react";
import Link from "next/link";
import BookCover from "@/components/BookCover"; // Custom component to render book visuals
import { cn } from "@/lib/utils"; // Utility to conditionally join class names
import Image from "next/image";
import { Button } from "@/components/ui/button";

// BookCard functional component
// Destructuring props according to the Book interface from types.d.ts
const BookCard = ({ id, title, genre, color, cover, isLoanedBook = false }: Book) => 
    // Outer <li> item, conditionally adjusting width for loaned books
    <li className={cn(isLoanedBook && 'xs:w-5 w-full')}>
        {/* Clicking on the book navigates to its detail page */}
        <Link 
            href={`/books/${id}`} 
            className={cn(isLoanedBook && 'w-full flex flex-col items-center')}
        >
            {/* Display the book's visual cover */}
            <BookCover
                coverColor={color}
                coverImage={cover}
            />

            {/* Show title and genre, styled differently if NOT a loaned book */}
            <div className={cn('mt-4', !isLoanedBook && 'xs:max-w-40 max-w-28')}>
                <p className="book-title">{title}</p>
                <p className="book-genre">{genre}</p>
            </div>




            {/* Additional section shown only if it's a loaned book */}
            {isLoanedBook && (
                <div className="mt-3 w-full">
                    <div className="book-loaned">
                        {/* Calendar icon + return time */}
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

                    {/* Receipt download button */}
                    <Button className="book-btn">
                        Download receipt
                    </Button>   
                </div>
            )}
        </Link>
    </li>

export default BookCard;
