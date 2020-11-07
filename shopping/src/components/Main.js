import React from 'react'
import Content_Header from './ContentHeader'
import Empty from './Empty'
import Modal from './Modal'
import ProductRow from './ProductRow'
export default class  Main extends React.Component {
    state={
        open:false,
        products :[
        ]
    }
    
    addProduct=(name,price,id,img)=>{
        const product={
            name,
            price,
            id,
            img
        
        }
      this.setState({
        products:[...this.state.products,product]
      })
    
    }
    toggleModal=()=>{
        this.setState({
            open:!this.state.open
        })

    }
    render(){
        return <>
        <main>
                       <Content_Header addProduct={this.addProduct} toggleModal={this.toggleModal}></Content_Header>
               <div className="table-headers">
                   <div className="table-header"> Name</div>
                   <div className="table-header">Price</div>
                   <div className="table-header">Id</div>
                   <div className="table-header">Image</div>
                   <div className="table-header">Action</div>
               </div>
                {
                    this.state.products.length>0?
                   this.state.products.map((product)=>{
                       return <ProductRow deleteProduct={this.deleteProduct} key={`Product_id_${product.id}`} product={product}/ >
                    }):<Empty/>
               } 
               {
           this.state.open?<Modal toggleModal={this.toggleModal}   addProduct={this.addProduct}/>:""
       }
       </main> 
       
   </>
              
    }

}



