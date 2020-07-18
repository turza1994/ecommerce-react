import React from 'react';

import "./collection-item.styles.scss"

const CollectionItem = (props)=>{
    return(
        <div className="CollectionItem">
            <div className="background" style={{backgroundImage: `url(${props.item.imageUrl})` }} />
            <span className="productName">{props.item.name}</span>
            <span className="productPrice">{props.item.price}</span>
        </div>
    )
}

export default CollectionItem