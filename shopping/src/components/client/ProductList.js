import Axios from 'axios'
import React from 'react'
import Product from './Product'
import{Spinner} from 'reactstrap'
export default class ProductList extends React.Component {
    state={
        products:[],
        loading:false
    }
    componentDidMount()
    {
        this.setState({
            loading:true
        })
        Axios.get("https://shopping-api-with-jwt.herokuapp.com/products").then(res=>{
            this.setState({
                products:res.data,
                loading:false
            })
            }).catch(err=>{
                console.log(err)
        })
    }
    render() {
        return (
            <>
            {
                this.state.loading && <Spinner color="primary" ></Spinner>
            }
                {this.state.products.map((product, index) => {
                    return <Product key={`$product_${index}`} name={product.name} price={product.price} image={product.image}></Product>
                })}
            </>
        )
    }
}


