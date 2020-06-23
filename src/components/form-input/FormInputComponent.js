import React from "react";
const FormInput=({label,...otherProps})=>{
    return(
        <div className="group">
            <input className="form-input" onChange={otherProps.handleChange}/>
            {
                label?(<label className={`${otherProps.value.length?'shrink':""}form-input-label`}>
                    {label}
                </label>):null
            }
        </div>
    )
}
export default FormInput;