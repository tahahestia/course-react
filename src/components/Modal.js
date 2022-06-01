import ReactDOM from "react-dom";
import "./Modal.css";

const Modal = ({ children, handleClose, open }) => {
  return ReactDOM.createPortal(
    <div className="modal-block">
      <div className=" modal-backdrop">
        <div className="modal" style={{ border: "2px solid", borderColor: open ? "red" : "green" }}>
          {children}
          <div>
            <button className="close" onClick={handleClose}>close</button>
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
};

export default Modal;
