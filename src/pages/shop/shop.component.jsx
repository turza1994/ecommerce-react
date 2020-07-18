import React, { Component } from 'react';

import SHOP_DATA from './data'
import CollectionPreview from "../../components/collection-preview/collection-preview.component"

class Shop extends Component{

    constructor(){
        super();
        this.state={
            collections: SHOP_DATA
        }
    }

    render(){
        return(
            <div>
                {
                    this.state.collections.map((cv)=>(
                        <CollectionPreview key={cv.id} collection={cv} />
                    ))
                }
                
            </div>
        )
    }
}

export default Shop