import React, { Component } from 'react'
import 'font-awesome/css/font-awesome.min.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default class Modal extends Component {
    state={
        name:"Product new",
        price:"Price",
        id:"ID"
    }
    handleClose=()=>{
        this.props.toggleModal()
    }
    handleChange=(event)=>{
        this.setState({
            [event.target.name]:event.target.value
        })
    }
    handleSubmit=(event)=>{
        event.preventDefault()
        const{name,price,id}=this.state
        this.props.addProduct(name,price,id)
        this.props.toggleModal()
    }
    render() {
        const {name,price,id}=this.state
        return ( <React.Fragment>
            <div className="modal">
                         <div className="content-modal p-2">
                             <button className="close btn btn-primary" onClick={this.handleClose}>
                             <FontAwesomeIcon icon={['fa' , 'times-circle']} /></button>
                             <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                      <label for="exampleInputEmail1"><h3>Product</h3></label>
                        <input type="text" className="form-control" id="exampleInputEmail1" name="name"value={name} onChange={this.handleChange}/>
                        <label for="exampleInputEmail1"><h3>Price</h3></label>
                        <input type="text" className="form-control" id="exampleInputEmail1"  name="price"value={price}  onChange={this.handleChange} />
                        <label for="exampleInputEmail1"><h3>ID</h3></label>
                        <input type="text" className="form-control" id="exampleInputEmail1"  name="id"value={id}  onChange={this.handleChange} />
                    </div>
                    <div className="row-submit">
                    <button type="submit" className="btn  cl-pri" id="submit">ADD</button>
                    </div>
                    </form>
                         </div>
   </div>
                    
        </React.Fragment>
        )
    }
}

