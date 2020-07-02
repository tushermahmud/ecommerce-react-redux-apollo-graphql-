import React from "react";
import {Route} from "react-router-dom";
import CategoryPage from "../category/CategoryPage";
import {connect} from "react-redux";
import CollectionOverviewComponent from "../../components/collection-overview/CollectionOverviewComponent";
import {updateCollections} from "../../redux/shop/shopAction";

const mapDispatchToProps=dispatch=>{
    return{
        updateCollections:(collectionsMap)=>dispatch(updateCollections(collectionsMap))
    }
}
class ShopPage extends React.Component{

    render() {
        const {match}=this.props;
        return (
            <div className="shop-page">
                <Route exact path={`${match.path}`} component={CollectionOverviewComponent}/>
                <Route exact path={`${match.path}/:categoryId`} component={CategoryPage}/>
            </div>
        );
    }
}

export default connect(null,mapDispatchToProps)(ShopPage);