import React, { useEffect, useRef, useState } from 'react';

export default function TestImage({image}){

    const imgRef = useRef(null);

    const [landscape, setLandscape] = useState(false);

    useEffect(() => {
        const img = new Image();
        img.src = imgRef.current.src;

        img.onload = () => {
            if(img.width > img.height){
                setLandscape(true);
            }
            else{
                setLandscape(false);
            }
        }
    })
    return <img src={image} ref={imgRef} className={landscape ? "landscape": "portrait"}/>
}