import React from 'react'
import  '../admin.scss'
import SlideBar from './SlideBar'
function ShoppingAdmin() {
    return (
        <div>
            <navbar>
                <div className="row col-md-12 bg-danger m-0">
                    Navbar
                </div>
            </navbar>
            <main>
            <div class="row m-0">
          <SlideBar></SlideBar>
                    <div className="col-md-9">
                        <div className="main-content">
                                <h3>Products</h3>
                                <button className="btn btn-primary">ADD</button>
                        </div>
                        <div className="table-headers">
                        <div className="table-header">
                            Name
                        </div>
                        <div className="table-header">
                            Prince
                        </div>
                        <div className="table-header">
                            Id
                        </div>
                        <div className="table-header">
                            Image
                        </div>
                        <div className="table-header">
                            Action
                        </div>
                        </div>
                        <div className= "table-rows">
                            <div className="table-cell">Name Product</div>
                            <div className="table-cell">1000&</div>
                            <div className="table-cell">03060195</div>
                             <div className="table-cell">{Image}</div>
                            <div className="table-cell">
                                <div className="btn btn-danger mr-1">Edit</div>
                                <div className="btn btn-danger">Delete</div>
                            </div>
                        </div>
                        <div className= "table-rows">
                            <div className="table-cell">Name Product</div>
                            <div className="table-cell">1000&</div>
                            <div className="table-cell">03060195</div>
                            <div className="table-cell">{Image}</div>
                            <div className="table-cell">
                                <div className="btn btn-danger mr-1">Edit</div>
                                <div className="btn btn-danger">Delete</div>
                            </div>
                        </div>
                        <div className= "table-rows">
                            <div className="table-cell">Name Product</div>
                            <div className="table-cell">1000&</div>
                            <div className="table-cell">03060195</div>
                            <div className="table-cell">{Image}</div>
                            <div className="table-cell">
                                <div className="btn btn-danger mr-1">Edit</div>
                                <div className="btn btn-danger">Delete</div>
                            </div>
                        </div>
                        <div className= "table-rows">
                            <div className="table-cell">Name Product</div>
                            <div className="table-cell">1000&</div>
                            <div className="table-cell">03060195</div>
                            <div className="table-cell">Image</div>
                            <div className="table-cell">
                                <div className="btn btn-danger mr-1">Edit</div>
                                <div className="btn btn-danger">Delete</div>
                            </div>
                        </div>
            
                    </div>  
                   
                </div>
            </main>
        <script>
            

            
        </script>
        </div>
     
    )
}

export default ShoppingAdmin
