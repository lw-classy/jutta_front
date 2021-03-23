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
                <div className="container-fluid portfolio-detail-description">
                    <div className="row">
                        <div className="col-md-7 portfolio-detail-decription-text">
                        A comprehensive redevelopment of this former shopping centre, which will be transformed from a vacant building to a vibrant skills hub, at this important gateway to Worksop town centre, supporting a sense of place.
                        </div>
                    </div>
                </div>
                <div className="portfolio-grid">
                    <TestImage image={test1}/>
                    <TestImage image={test2}/>
               <div className="landscape">
               <h3>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
               </h3>
               </div>
               <TestImage image={test3}/>
               <TestImage image={test4}/>
               <TestImage image={test5}/>
               
            </div>
        </div>
            </div>
        </div>
        
    </div>
    );
}