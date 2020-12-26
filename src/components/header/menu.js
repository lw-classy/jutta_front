import React, { useState } from 'react';

export default function Menu(props){
  
    console.log(props);

    if(props.menu.menuOpen){
        return(
            <div className="d-flex menu__container"></div> 
        );
    }
    else{
        return(
            <div className="d-flex"></div> 
        );
    }
        
 

    
    
}