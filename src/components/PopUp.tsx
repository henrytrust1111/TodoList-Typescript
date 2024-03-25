import React from 'react'
import { MdCancel } from 'react-icons/md'
import "./PopStyle.css"


interface Props{
    setOk:React.Dispatch<React.SetStateAction<boolean>>
}

const PopUp:React.FC<Props>  = ({setOk}) => {
  return (
    <div className="deletealert">
        <div className="deleteoption">
            <div className="undel">
            {/* <MdCancel className='undo'/> */}
            </div>
            <p>Are you sure you want to delete this product?</p>
            <div className= "deletediv">
                <button onClick={()=>setOk(false)}>OK</button>
            </div>
        </div>
    </div>
  )
}

export default PopUp