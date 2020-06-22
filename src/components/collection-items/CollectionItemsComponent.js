import React from "react";

const CollectionItemsComponent=(props)=>(
    <div className="collection-item">
        <div className="image" style={{
            backgroundImage:`url(${props.item.imageUrl})`
        }}/>
        <div className="collection-footer">
            <div className="name">{props.item.name}</div>
            <div className="price">{props.item.price}</div>
        </div>
    </div>
)
export default CollectionItemsComponent;