import React, { Component } from 'react'
import CollectionItem from '../collection-item/collection-item.component'
import './collection-preview.styles.scss'

export class CollectionPreview extends Component {
    render() {
        let title = this.props.collection.title
        let items = this.props.collection.items
        return (
            <div className="CollectionPreview">
                <h1>{title}</h1>
                <div className="items">
                    {
                        items.map(item=>(
                            <CollectionItem key={item.id} item={ item } />
                        ))
                        .filter((cv, i) => i<4 )
                    }
                </div>
                
            </div>
        )
    }
}

export default CollectionPreview
