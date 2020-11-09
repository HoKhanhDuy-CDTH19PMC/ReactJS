import React from 'react'

export default function ProductRow(props) {
    const handleDelete=()=>{
    props.deleteProduct(props.product.id)
    }
    const handleUpdate=()=>{
    props.updateIsEditing(props.product.id)
    }
    console.log("COMPONENT PROPS:", props)
    const {  name, price,id, img }=props.product
    return ( <div className="table-rows">
            <div className="table-cell">{name}</div>
            <div className="table-cell">{price}$</div>
            <div className="table-cell">{id}</div>
            <div className="table-cell"><img src={img}></img></div>
            <div className="table-cell">
                <div className="btn bg-color-primary mr-1" onClick={handleUpdate}>Edit</div>
                <div className="btn btn-danger" onClick={handleDelete}>Delete</div>
            </div>
        </div>
    )
}



