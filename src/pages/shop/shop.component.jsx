import React, { Component } from 'react';

import CollectionItem from "../../components/collection-item/collection-item.component"

class Shop extends Component{
    render(){
        return(
            <div>
                <h1>Hello from shop page</h1>
                <CollectionItem />
            </div>
        )
    }
}

export default Shop