import React, { useEffect, useState } from 'react';
import TestImage from '../image/test.image';

import test1 from '../../../assets/_JSF1767.JPG';
import test2 from '../../../assets/_JSF1803.JPG';
import test3 from '../../../assets/_JSF1804.JPG';
import test4 from '../../../assets/_JSF1830.JPG';
import test5 from '../../../assets/_JSF1932.JPG';





export default function DetailPortfolio(){

   // const [images, setImage] = useState([null]);

    return(
        <main className="portfolio-detail-container">
            <div className="portfolio-detail-wrapper container-fluid">
        <div className="row">
            <div className="col-md-10 offset-md-1">
                <div className="container-fluid">
                    <div className="portfolio-detail-header">
                        <div className="portfolio-detail-header-divider"></div>
                        <div className="portfolio-detail-header-headline">
                                <div className="portfolio-detail-header-title">
                                    <h2>Matteo</h2>
                                </div>
                            <div className="portfolio-detail-header-background-image">
                                <img src={test1}/>
                            </div>
                        </div>
                        <div className="portfolio-detail-header-subbar d-flex align-items-center justify-content-between">
                            <div className="portfolio-detail-header-categories">Fotografie Portfolio</div>
                            <div className="portfolio-detial-header-year">2020</div>
                        </div>
                    </div>  
        </div>
            </div>
        </div>
        
    </div>
    <div className="container-fluid portfolio-detail-description">
        <div className="row">
            <div className="offset-md-4 col-md-7 portfolio-detail-description-text">
                <p>A comprehensive redevelopment of this former shopping centre, which will be transformed from a vacant building to a vibrant skills hub, 
                    at this important gateway to Worksop town centre, supporting a sense of place.
                </p>
            </div>
        </div>
    </div>
    <div className="container-fluid portfolio-grid-wrapper">
        <div className="row">
            <div className="offset-md-1 col-md-10">
            <div className="portfolio-grid">
                   <TestImage image={test1}/>
                <TestImage image={test2}/>
               <TestImage image={test3}/>
              <TestImage image={test4}/>
              <TestImage image={test5}/>
               
           </div>
            </div>
        </div>
    </div>

    </main>
    
    );
}