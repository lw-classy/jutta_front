import React, { useEffect, useRef, useState } from 'react'
import ElementOverviewPortfolio from './portfolio.overview.element';
import useWindowSize from '../../../utils/hooks/useWindowSize.hooks';


export default function PortfolioOverviewSlideshow(){
    //: Grab actual window size 
    const size = useWindowSize();

    //: Reference to the container which is going to be manipulated
    const container = useRef();
    const innerContainer = useRef();
    var width;
    

    //: Scroll container on touchmove or mousewheel
    //: Set data state
    const data = {
        current:0,
        ease: 0.4
    }

    //: Scrolling function
    const scrollXVirtual = (deltaY) => {
       const width = innerContainer.current.getBoundingClientRect().width;
        if(width > 0){
            //: Check if scroll left == 0;
            if(data.current < 0){
                data.current = 0;
            }
            //: Check if scroll right == 0;
            if(data.current > width - window.innerWidth){     
                data.current = width - window.innerWidth;
            }

            //: Default behaviour
            else {
                data.current = data.current += deltaY * data.ease;
            }
        }
        else{return}

        setTransform(-data.current);
  
    }

    //: set the Transformation function
    const setTransform = (current) => {
        innerContainer.current.style.transform = `translate3d(${current}px, 0,0)`;
    }


    //: Scrolling
    useEffect(() => {        
        document.addEventListener('mousewheel', event => { 
            scrollXVirtual(event.deltaY);
        });

        return () => document.removeEventListener('mousewheel', scrollXVirtual);
    }, [size]);


    return(
        <div ref={container} className="portfolio__overview__slider__container">
            <div ref={innerContainer} className="portfolio__overview__slider__innerContainer">
                <ElementOverviewPortfolio image="https://source.unsplash.com/random"/>
                <ElementOverviewPortfolio image="https://source.unsplash.com/random"/>
                <ElementOverviewPortfolio image="https://source.unsplash.com/random"/>
                <ElementOverviewPortfolio image="https://source.unsplash.com/random"/>
                <ElementOverviewPortfolio image="https://source.unsplash.com/random"/>
                <ElementOverviewPortfolio image="https://source.unsplash.com/random"/>
                <ElementOverviewPortfolio image="https://source.unsplash.com/random"/>
                <ElementOverviewPortfolio image="https://source.unsplash.com/random"/>
                <ElementOverviewPortfolio image="https://source.unsplash.com/random"/>
                <ElementOverviewPortfolio image="https://source.unsplash.com/random"/>
                <ElementOverviewPortfolio image="https://source.unsplash.com/random"/>
                <ElementOverviewPortfolio image="https://source.unsplash.com/random"/>
            </div>
        </div>
    );
    
}