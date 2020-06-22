import React from "react";
import CollectionItemsComponent from "../collection-items/CollectionItemsComponent";
const PreviewCollectionCompontent=(props)=>{
    return(
        <div className='collection-preview'>
            <h1 className='title'>{props.collection.title.toUpperCase()}</h1>
            <div className='preview'>
              {props.collection.items
                  .filter((item,index)=>index<4)
                  .map(item=>(
                      <CollectionItemsComponent key={item.id} item={item}/>
                  )
              )}
          </div>
      </div>
    );
}
export default PreviewCollectionCompontent;