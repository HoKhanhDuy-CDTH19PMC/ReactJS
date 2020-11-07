import React from 'react'
import 'font-awesome/css/font-awesome.min.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function SlideBar(props) {
    return ( <div  className= " content-admin">
            <button className="btn p-0 m-0"onClick={props.toggleSidebar} >
                <FontAwesomeIcon icon={['fas' , 'align-justify']} />
                </button>
            <h3 className="mt-1">Admin</h3>
   </div>
    )
}

