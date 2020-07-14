import React from 'react';
import { withRouter } from 'react-router-dom';

import './menu-item.styles.scss'

const MenuItem = ({title, imageUrl, size, history})=>{
    return(
        <div className={`MenuItem ${size}`} onClick={()=>(history.push(`/${title}`))}>

            <div className="background-image" style={{ backgroundImage: `url(${imageUrl})` }} >

            </div>

            <div className="content">
                <h1>{title}</h1>
                <span>shop now</span>
            </div>
            
        </div>
    );
}

export default withRouter(MenuItem);