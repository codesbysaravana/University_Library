import React from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import BookCoverSvg from "@/components/BookCoverSvg";

type BookCoverVariant = 'extraSmall' | 'small' | 'medium' | 'regular' | 'wide';


const variantStyles: Record<BookCoverVariant, string> = {
    extraSmall: "book-cover_extra_small",
    small: "book-cover_small",
    medium: "book-cover_medium",
    regular: "book-cover_regular",
    wide: "book-cover_wide",
}

interface Props {
    className?: string;
    variant?: BookCoverVariant;
    coverColor: string;
    coverImage: string;
}

//the question mark after variant means that the variant is optional also

// className : is optional and goes to the parent component

// variant : goes to variantStyles and selects extraSmall small medium regular or wide

const BookCover = ({
                className,
                variant = "regular",
                coverColor = "#012B48",
                coverImage = "https://placehold.co/400x600.png"
}: Props) => {
  return (
    <div 
        className={cn(
            "relative transition-all duration-300",
            variantStyles[variant],
            className,
            )}>

            <BookCoverSvg coverColor={coverColor}/>

        <div 
            className='absolute z-10' 
            style={{ left:'12%', width: "87.5%", height: '88%' }}
            >
                <Image 
                    src={coverImage} alt="Book cover" 
                    fill 
                    className="rounded-sm object-fill" 
                />
        </div>
    </div>
  )
}

export default BookCover
/* 
The destructures of this component should be as Props! */

//giving fefault values to the props!


//REMEBER THE DEFAULT coverImage needs to be added to the next.config.ts file in the images remotePatterns array!!!!!!!!!!
