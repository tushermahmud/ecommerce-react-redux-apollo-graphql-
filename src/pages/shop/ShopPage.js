import React from "react";
import {Route} from "react-router-dom";
import CategoryPage from "../category/CategoryPage";
import CollectionOverviewComponent from "../../components/collection-overview/CollectionOverviewComponent";
const ShopPage =({match})=>{
    return (
        <div className="shop-page">
            <Route exact path={`${match.path}`} component={CollectionOverviewComponent}/>
            <Route exact path={`${match.path}/:categoryId`} component={CategoryPage}/>
        </div>
    );
}

export default ShopPage;