import ReactDom from "react-dom";
import { ReactNode } from "react";

interface childrenProps {
  children: ReactNode;
}

const ModalPortal = ({ children }: childrenProps) => {
  const modalRoot = document.getElementById("modal-root");
  return ReactDom.createPortal(children, modalRoot);
};

export default ModalPortal;
