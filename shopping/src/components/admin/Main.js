import React from 'react'
import Content_Header from './ContentHeader'
import Empty from './Empty'
import Modal from './Modal'
import ProductRow from './ProductRow'
import axios from 'axios'
export default class  Main extends React.Component {
    state={
        open:false,
        products :[
            // {
            //     id:'bcsd2j',
            //     name:"ABC 1",
            //     price:20,
            //     img:""
            // },
            // {
            //     id:'8sdsb2',
            //     name:"ABC 2",
            //     price:20,
            //     img:""
            // },  {
            //     id:'sdhsod',
            //     name:"ABC 3",
            //     price:20,
            //     img:""
            // },
        ], isEditing:undefined //index
    }
    componentDidMount()
    {
        console.log("DID MOUNT")
        axios.get("https://shopping-api-with-jwt.herokuapp.com/products").then(res=>{
            console.log(res)
            this.setState({
                products:res.data
            })
        })
    }
    addProduct=(name,price,id,image)=>{
        const product={
            name,
            price,
            id,
            image
        }
      this.setState({
        products:[...this.state.products,product]
      })
    
    }
    updateProduct=(name,price,id)=>{
        const new_products=[...this.state.products];
        new_products[this.state.isEditing]={
            ...new_products[this.state.isEditing],
            name,
            price,
            id
        }
        this.setState({
            products:new_products
        })
    }
    deleteProduct=(id)=>{
        const update_product=[...this.state.products].filter((product)=>{
            return product.id!==id
        })
        this.setState({
            products:update_product
        })
    }
     updateIsEditing=(id)=>{
        const product_index=this.state.products.findIndex((product)=>
        {
              return  product.id===id
        })
        this.setState({
            isEditing:product_index
        })
        this.toggleModal()

     }
    toggleModal=()=>{
        this.setState({
            open:!this.state.open
        })

    }
   
   
    clearIsEditing=()=>{
        this.setState({
            isEditing:undefined
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
                       return <ProductRow updateIsEditing={this.updateIsEditing} deleteProduct={this.deleteProduct} key={`Product_id_${product.id}`} product={product}/ >
                    }):<Empty/>
               } 
               {
           this.state.open?<Modal 
           updateProduct={this.updateProduct}
           clearIsEditing={this.clearIsEditing} 
           editingProduct={this.state.products[this.state.isEditing]}
            toggleModal={this.toggleModal} 
              addProduct={this.addProduct}/>:""
       }
       </main> 
       
   </>
              
    }

}



