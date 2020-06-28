import React,{Component} from "react";
import MenuItems from "../menu-items/MenuItemComponent";
import {connect} from "react-redux";
const DirectoryComponent =({sections})=>{
    return (
        <div className="directory-menu">
            {
                sections.map(({title,imageUrl,id,size,linkUrl})=>(
                    <MenuItems key={id} title={title} imageUrl={imageUrl} size={size} linkUrl={linkUrl}/>
                ))
            }
        </div>
    );
}
const mapStateToProps=state=>({
    sections:state.directory.sections
});
export default connect(mapStateToProps)(DirectoryComponent);