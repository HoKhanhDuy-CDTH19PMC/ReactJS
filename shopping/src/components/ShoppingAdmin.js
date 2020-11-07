import React from 'react'
import '../admin.scss'
import SlideBar from './SlideBar'
import Main from './Main'
import Navbar from './Navbar'
import 'font-awesome/css/font-awesome.min.css'
export default class ShoppingAdmin extends React.Component {
    state = {
        sidebar_open: true,
    }
    // pt moi phai dung arrow de co bien this
    toggleSidebar = () => {
        this.setState(
            {
                sidebar_open: !this.state.sidebar_open
            }
        )
    }
    render() {
        return (
            <div>
                <Navbar></Navbar>
                <main className="container-fluid">
                    <div className="row">
                        <div className="col-md-3 bg-primary slide-bar" id="slide-bar" style={{ 'display': this.state.sidebar_open ? 'block' : 'none' }}>
                        </div>
                        <div className={this.state.sidebar_open ? "col-md-9": "col-md-12"}>
                            <SlideBar toggleSidebar={this.toggleSidebar}></SlideBar>
                            <Main></Main>
                        </div>
                    </div>
                </main>
           
            </div>
        )
    }
}

