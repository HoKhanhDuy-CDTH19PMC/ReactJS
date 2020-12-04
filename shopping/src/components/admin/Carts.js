import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import MaterialTable from 'material-table'
import Axios from 'axios';
import { keys } from '@material-ui/core/styles/createBreakpoints';
export default class carts extends Component {
  constructor()
  {
    super();
    this.state={
      products:[
      ],
      total_item:0,
      total_price:0,
      phone:0

  };


  }
  componentDidMount()
    {
      Axios.get(`https://shopping-api-with-jwt.herokuapp.com/carts/${this.props.match.params.id}`).then(
            (res) => {
              console.log(res)
              this.setState({
               products: res.data.cart,
               total_item:res.data.total_item,
               total_price:res.data.total_price,
               phone:res.data.phone
              });
            }
          );
        //   Axios.delete("https://shopping-api-with-jwt.herokuapp.com/carts/TEST",{
        //     headers:{
        //       token: window.localStorage.getItem("admin_token"),
        //   }
        // }).then((res)=>
        //   {
            
        //   }).catch(()=>{

        //   })

    }
    render() {     
     
      console.log(this.state.products)

        return (
          
            <div style={{ maxWidth: "100%" }}>
            <MaterialTable
            
              columns={[
                { title: "Name", field: "name" },
                { title: "ID", field: "id" },
                { title: "Price", field: "price" },
                { title: "Quantity", field: "quantity" },
              ]}
              data={this.state.products}
              title={`Hóa đơn ID ${this.props.match.params.id} - Total: ${this.state.total_item}
              - Total Price: ${this.state.total_price}
              - Phone: ${this.state.phone}
              `}
            />
          </div>
        )
    }
}

