import React, { useEffect, useRef, useState } from 'react';

export default function PortfolioOverviewElementTitle(){  
    return(
        <div className="portfolio__overview__element__title">
            <div className="portfolio__overview__element__title__firstline d-flex justify-content-between">
                <span>Matteo - Originals</span>
                <span>2017</span>
            </div>
            <div className="portfolio__overview__element__title__secondline">
                <span>Art</span>
                <span>Collection</span>
                <span>Portrait</span>
            </div>
        </div>
    );
}