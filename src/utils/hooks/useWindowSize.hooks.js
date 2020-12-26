import {useState, useEffect} from 'react';


export default function useWindowSize(){
    const getSize = () => {
        return {
            width: window.innerWidth,
            height: window.innerHeight
        }
    }
    
    const [windowSize, setWindowSize]  = useState(getSize);



    useEffect(() => {
        const handleSize = () => {
            setWindowSize(getSize());
        }
        window.addEventListener("resize", handleSize);
        return () =>  window.removeEventListener("resize", handleSize);
    },[]);

    return windowSize
}

