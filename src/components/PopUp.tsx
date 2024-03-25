import React from "react";
// import { MdCancel } from "react-icons/md";
import "./PopStyle.css";

interface Props {
  setOk: React.Dispatch<React.SetStateAction<boolean>>;
}

const PopUp: React.FC<Props> = ({ setOk }) => {
  return (
    <div className="deletealert">
      <div className="deleteoption">
        <div className="undel">{/* <MdCancel className='undo'/> */}</div>
        <p className="new__feature--text">
          <span style={{ fontWeight: "600", fontSize:"20px" }}>NOTE:</span> You can now drag your
          tasks from active to completed and vice versa.
        </p>
        <div className="deletediv">
          <button onClick={() => setOk(false)}>OK</button>
        </div>
      </div>
    </div>
  );
};

export default PopUp;
