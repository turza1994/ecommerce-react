import React from 'react';

import "./collection-item.styles.scss"

const CollectionItem = ()=>{
    return(
        <div className="CollectionItem">
            <div className="background" style={{backgroundImage: "url('https://i.ibb.co/ZYW3VTp/brown-brim.png')" }} />
            <span className="productName">product name</span>
            <span className="productPrice">product price</span>
        </div>
    )
}

export default CollectionItem