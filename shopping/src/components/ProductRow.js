import React from 'react'

export default function ProductRow(props) {
    const handleDelete=()=>{
    props.deleteProduct(props.product.id)
    }
    console.log("COMPONENT PROPS:", props)
    const {  name, prince,id, img }=props.product
    return ( <div className="table-rows">
            <div className="table-cell">{name}</div>
            <div className="table-cell">{prince}$</div>
            <div className="table-cell">{id}</div>
            <div className="table-cell"><img src={img}></img></div>
            <div className="table-cell">
                <div className="btn bg-color-primary mr-1">Edit</div>
                <div className="btn btn-danger" onClick={handleDelete}>Delete</div>
            </div>
        </div>
    )
}



