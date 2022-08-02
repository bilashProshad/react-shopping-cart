import ReactDOM from "react-dom";
import classes from "./Modal.module.css";

const ModalOverlay = ({ children, className, ...rest }) => {
  return (
    <div className={`${classes.modal} ${className}`} {...rest}>
      {children}
    </div>
  );
};

const Backdrop = ({ onHideCart }) => {
  return <div className={classes.backdrop} onClick={onHideCart} />;
};

const Modal = ({ children, className, onHideCart, ...rest }) => {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop onHideCart={onHideCart} />,
        document.getElementById("overlays")
      )}

      {ReactDOM.createPortal(
        <ModalOverlay className={className} {...rest}>
          {children}
        </ModalOverlay>,
        document.getElementById("overlays")
      )}
    </>
  );
};

export default Modal;
