import React, { Fragment, useEffect } from 'react';
import {HashRouter, Switch, Route} from 'react-router-dom';

import Header from './components/header/header';
import OverviewPortfolioSlideshow from './components/portfolio/overview/portfolio.overview.slideshow';

function App(){
  return(
    <Fragment>
    <Header></Header>
    <OverviewPortfolioSlideshow/>
    </Fragment>
  );
}


export default App;