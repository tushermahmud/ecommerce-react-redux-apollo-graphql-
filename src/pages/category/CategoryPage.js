import React from "react";
import {connect} from "react-redux";
import CollectionItemsComponent from "../../components/collection-items/CollectionItemsComponent";

class CategoryPage extends React.Component {
    state={
        items:[],
    }

    render() {
        let items=null;
        const {match,collections}=this.props;
        const categoryCollections=collections.filter
        (categoryCollection=> categoryCollection.routeName===match.params.categoryId);
        if(categoryCollections[0]!=null){
            items=categoryCollections[0].items;
        }
        return(
            <div className="collection-page">
                <h2 className="title">{categoryCollections[0]?categoryCollections[0].title.toUpperCase():""}</h2>
                <div className="items">
                    {items?items.map(item=><CollectionItemsComponent key={item.id} item={item}/>):""}
                </div>
            </div>
        );

    }
}
const mapStateToProps=state=>({
    collections:state.shop.collections
});

export default connect(mapStateToProps)(CategoryPage);