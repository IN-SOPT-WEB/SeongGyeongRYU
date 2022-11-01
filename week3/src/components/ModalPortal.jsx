import ReactDom from "react-dom";

const ModalPortal = (children) => {
  const modalRoot = document.querySelector(".modal-root");
  return ReactDom.createPortal(children, modalRoot);
};

export default ModalPortal;
