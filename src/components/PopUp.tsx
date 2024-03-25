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
        <p>
          <span style={{ fontWeight: "600" }}>NOTE:</span> You can now drag your
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
