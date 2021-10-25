import { createPortal } from "react-dom";
import {Background, Wrapper} from "./Modal-styles";

const Backdrop = (props) => {
    return(
        <Background onClick={props.onClose}></Background>
    )
};

const ModalOverlay = (props) => {
    return(
        <Wrapper>{props.children}</Wrapper>
    )
};

const portalElement = document.getElementById('overlays');

const Modal = (props) => {
    return (
        <>
            {createPortal(<Backdrop onClose={props.onClose} />, portalElement)}
            {createPortal(<ModalOverlay>{props.children}</ModalOverlay>, portalElement)}
        </>
    )
};

export default Modal;