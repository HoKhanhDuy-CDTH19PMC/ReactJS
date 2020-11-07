import React from 'react'
import 'font-awesome/css/font-awesome.min.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function ContentHeader(props) {
    const handleClick = () => {
        props.toggleModal();
    }
        return (
            <React.Fragment>
            <div className="main-content">
                     <h3 className="name">Products</h3>
                     <button className="btn btn-add" onClick={handleClick}>
                     <FontAwesomeIcon icon={['fa' , 'plus']}/>  Product
                     </button>
          </div>
     </React.Fragment>
        )
    }    



