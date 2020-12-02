import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import MaterialTable from 'material-table'
import Axios from 'axios';
export default class carts extends Component {
    state={
        products:[],
    };
    componentDidMount()
    {
        Axios.get("https://shopping-api-with-jwt.herokuapp.com/carts").then(
            (res) => {
              this.setState({
                products: res.data[1].products,
              });
            }
          );
    }
    render() {
        return (
            <div style={{ maxWidth: "100%" }}>
            <MaterialTable
              columns={[
                { title: "Name", field: "name" },
                { title: "Price", field: "price" },
              ]}
              data={this.state.products}
              title="Demo Title"
            />
          </div>
        )
    }
}

