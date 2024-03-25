import React from 'react'
import { MdCancel } from 'react-icons/md'
import "./PopStyle.css"

const PopUp:React.FC = () => {
  return (
    <div className="deletealert">
        <div className="deleteoption">
            <div className="undel">
            <MdCancel className='undo'/>

            </div>
            <p>Are you sure you want to delete this product?</p>
            <div className= "deletediv">
                <button>DELETE</button>
            </div>
        </div>
    </div>
  )
}

export default PopUp