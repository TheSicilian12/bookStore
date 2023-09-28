import React, { useEffect, useState } from 'react';

import book1 from './Images/bookCovers/book1.jpg';
import book2 from './Images/bookCovers/book2.webp';
import book3 from './Images/bookCovers/book3.jpg';
import book4 from './Images/bookCovers/book4.jpg';
import book5 from './Images/bookCovers/book5.jpg';
import book6 from './Images/bookCovers/book6.jpg';


export default function Carousel() {
    const carousel = [book1, book2, book3, book4, book5, book6];

    const [currentImage, setCurrentImage] = useState(carousel[0]);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % carousel.length);
        }, 5000);

        return () => {
            clearInterval(interval);
        }
    }, [carousel.length])

    useEffect(() => {
        setCurrentImage(carousel[currentIndex]);
    }, [carousel, currentIndex])

    const redirectHandler = () => {

    }

    const goBackImage = () => {
        let minusIndex = currentIndex - 1;
        if (minusIndex < 0) minusIndex = carousel.length - 1;
        setCurrentIndex(minusIndex);
    }

    const goForwardImage = () => {
        let addIndex = currentIndex + 1;
        if (addIndex > carousel.length - 1) addIndex = 0;
        setCurrentIndex(addIndex)
    }

    return (
        <div>
            <div>
                <i className="fa fa-chevron-left fa-lg"
                    onClick={() => goBackImage()}
                ></i>
            </div>

            <div className="flex justify-center w-40 h-64">
                <img
                    alt="book image"
                    className="mainCarousel-image"
                    src={currentImage} />
            </div>


            <div className="">
                <i className="fa fa-chevron-right fa-lg"
                    onClick={() => goForwardImage()}
                ></i>
            </div>
        </div>
    )
}
