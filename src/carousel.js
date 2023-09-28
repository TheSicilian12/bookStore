import React, { useEffect, useState } from 'react';

import book1 from './Images/bookCovers/book1.jpg';
import book2 from './Images/bookCovers/book2.webp';
import book3 from './Images/bookCovers/book3.jpg';
import book4 from './Images/bookCovers/book4.jpg';
import book5 from './Images/bookCovers/book5.jpg';
import book6 from './Images/bookCovers/book6.jpg';


export default function Carousel() {
    const carousel = [book1, book2, book3, book4, book5, book6];

    const [image1, setImage1] = useState(carousel[0]);
    const [image1Index, setImage1Index] = useState(0);
    const [image2, setImage2] = useState(carousel[1]);
    const [image2Index, setImage2Index] = useState(1);
    const [image3, setImage3] = useState(carousel[2]);
    const [image3Index, setImage3Index] = useState(2);

    useEffect(() => {
        const interval = setInterval(() => {
            setImage1Index((prevIndex) => (prevIndex + 1) % carousel.length);
            setImage2Index((prevIndex) => (prevIndex + 1) % carousel.length);
            setImage3Index((prevIndex) => (prevIndex + 1) % carousel.length);
        }, 5000);

        return () => {
            clearInterval(interval);
        }
    }, [carousel.length])

    useEffect(() => {
        setImage1(carousel[image1Index]);
        setImage2(carousel[image2Index]);
        setImage3(carousel[image3Index]);
    }, [carousel, image1Index, image2Index, image3Index])

    const redirectHandler = () => {

    }

    const minusIndex = (index) => {
        let reducedIndex = index - 1;
        if (reducedIndex < 0) reducedIndex = carousel.length - 1;
        console.log("reducedIndex: ", reducedIndex)
        return reducedIndex

    }

    const addIndex = (index) => {
        let addedIndex = index + 1;
        if (addedIndex > carousel.length - 1) addedIndex = 0;
        return addedIndex
    }

    const goBackImage = () => {
        setImage1Index(minusIndex(image1Index));
        setImage2Index(minusIndex(image2Index));
        setImage3Index(minusIndex(image3Index));
    }

    const goForwardImage = () => {
        setImage1Index(addIndex(image1Index));
        setImage2Index(addIndex(image2Index));
        setImage3Index(addIndex(image3Index));
    }

    return (
        <div className="flex w-screen justify-around border-solid border-2">
            <div>
                <i className="fa fa-chevron-left fa-lg"
                    onClick={() => goBackImage()}
                ></i>
            </div>

            <div className="flex flex-row justify-center content-center">
                <img
                    alt="book image"
                    className="mainCarousel-image w-40 h-64"
                    src={image1} />

                <img
                    alt="book image"
                    className="mainCarousel-image w-40 h-64"
                    src={image2} />

                <img
                    alt="book image"
                    className="mainCarousel-image w-40 h-64"
                    src={image3} />
            </div>


            <div className="">
                <i className="fa fa-chevron-right fa-lg"
                    onClick={() => goForwardImage()}
                ></i>
            </div>
        </div>
    )
}