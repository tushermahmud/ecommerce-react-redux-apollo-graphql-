import React from "react";
import {connect} from "react-redux";
import PreviewCollectionCompontent from "../../components/preview-collection/PreviewCollectionComponent";
class ShopPage extends React.Component{
    render() {
        const {collections}=this.props;
        return (
            <div className="shop-page">
                {
                    collections.map(collection=>(
                        <PreviewCollectionCompontent key={collection.id} collection={collection}/>
                    ))
                }
            </div>
        );
    }
}
const mapStateToProps=state=>({
   collections:state.shop.collections
});
export default connect(mapStateToProps)(ShopPage);