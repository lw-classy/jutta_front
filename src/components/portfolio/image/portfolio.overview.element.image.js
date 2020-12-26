import { entries } from 'lodash';
import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import {calcCompare} from  '../../../utils/calc/calculators';

export default function PortfolioOverviewElementImage({image}) {
    const [loaded, loadImage] = useState(false);
    const [landscape, checkLandscape] = useState(false);
    
    const [size,setSize] = useState({width: 0, height:0});

    const imageRef = useRef();
    

    useEffect(() => {
        loadImage(true);
        
            console.log(imageRef);
            if(imageRef !== undefined){
              const h = imageRef.current.clientHeight;
              const w = imageRef.current.clientWidth;
              setSize({width: w, height: h});
            }
        
    },[])


        return(
            <div className={`portfolio__overview__element__image__container ${landscape} d-flex`}>
                <div className="portfolio__overview__element__image__edges">
                    <div className="portfolio__overview__element__image__edge"></div>
                    <div className="portfolio__overview__element__image__edge"></div>
                </div>

                <img ref={imageRef} src={image} className="portfolio__overview__element__image"/>

                <div className="portfolio__overview__element__image__edges right">
                    <div className="portfolio__overview__element__image__edge"></div>
                    <div className="portfolio__overview__element__image__edge"></div>
                </div>   
        </div>
        );
        
    }
    