import React, { useEffect, useRef, useState } from 'react';
import PortfolioOverviewElementImage from '../image/portfolio.overview.element.image';
import PortfolioOverviewElementTitle from './portfolio.overview.element.title';




export default function ElementOverviewPortfolio({image}){
        return(
            <div className="portfolio__overview__element">
                <PortfolioOverviewElementImage image={image}/>
                <PortfolioOverviewElementTitle/>
            </div>
        );
    
 
            
}
