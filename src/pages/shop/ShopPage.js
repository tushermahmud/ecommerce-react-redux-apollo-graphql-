import React from "react";
import SHOP_DATA from "./shop.data";
import PreviewCollectionCompontent from "../../components/preview-collection/PreviewCollectionComponent";
class ShopPage extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            collections:SHOP_DATA
        }
    }
    render() {
        const {collections}=this.state;
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
export default ShopPage;