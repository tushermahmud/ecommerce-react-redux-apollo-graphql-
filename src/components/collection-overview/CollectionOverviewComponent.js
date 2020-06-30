import React from "react";
import {connect} from "react-redux";
import PreviewCollectionCompontent from "../preview-collection/PreviewCollectionComponent";
const CollectionOverviewComponent=({collections})=>{
    return(
        <div className="collections-overview">
            {
                collections.map(collection=>(
                    <PreviewCollectionCompontent key={collection.id} collection={collection}/>
                ))
            }
        </div>
    )};
const mapStateToProps=state=>({
    collections:state.shop.collections
})
export default connect(mapStateToProps)(CollectionOverviewComponent);