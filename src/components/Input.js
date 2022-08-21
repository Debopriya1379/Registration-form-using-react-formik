import React from 'react'
import '../App.css'

export default function Input({type,id,label,Formik,Value,sp}) {      

    return (
        <div className="InputComp">
           {!sp && <label htmlFor="city">{label} {(id === "name" || id === "age" || id==="sex" || id==="address" || id==="govtId" || id==="idType") ? <span className='required'>*</span> : ""} :</label>} 
            <input 
                type={type}
                id={id}
                name={id}
                placeholder={"Enter " + label}
                onChange={Formik.handleChange}
                value={Value}
            />
        </div>
    )
}
