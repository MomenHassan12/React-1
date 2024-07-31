import React, { useState, useRef } from "react";
import style from "./Portfolio.module.css";

export default function Portfolio() {
    const [items, setItems] = useState(
        ["poert1.png", "port2.png", "port3.png", "poert1.png", "port2.png", "port3.png"]
    )
    const [selectedImage, setSelectedImage] = useState(null);
    const [showImageShow, setShowImageShow] = useState(false);

    const overlayRef = useRef(null);

    const handleClick = (imageSrc) => {
        setSelectedImage(imageSrc);
        setShowImageShow(true);
    };

    const handleClose = () => {
        setShowImageShow(false);
        setSelectedImage(null);
    };

    const handleOverlayClick = (event) => {
        if (event.target === overlayRef.current) {
            handleClose();
        }
    };

    return (
        <>
            <div className="w-[80%] mx-auto">
                <div className="container mb-9">
                    <div className="flex flex-col justify-center items-center">
                        <h1 className={style.portHeading}>PORTFOLIO COMPONENT</h1>
                        <div className="home-star flex items-center my-4">
                            <div className={style.line}></div>
                            <i className="fa-solid text-[#2c3e50] fa-star px-5"></i>
                            <div className={style.line}></div>
                        </div>
                    </div>
                    <div className="portfolio-items flex flex-wrap gap-10">
                        {items.map((image, index) => (
                            <div className='lg:w-[30%] md:w-[47%] sm:w-[100%]' key={index}>
                                <div className={style.item} onClick={() => handleClick(`src/assets/imgs/${image}`)}>
                                    <img src={`src/assets/imgs/${image}`} alt={`port${index + 1}`} className="w-full rounded-md" />
                                    <div className={style.itemCover}>
                                        <i className="fa-6x fa-solid fa-plus"></i>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            {showImageShow && (
                <div
                    ref={overlayRef}
                    className="fixed left-0 w-full top-0 h-full bg-blue-500 bg-opacity-25 flex justify-center items-center"
                    onClick={handleOverlayClick}
                >
                    <div className="relative w-[40%]" onClick={(e) => e.stopPropagation()}>
                        <img
                            src={selectedImage}
                            alt="Fullscreen view"
                            className="max-w-full max-h-full object-contain rounded-md"
                        />
                    </div>
                </div>
            )}
        </>
    );
}
