
import { Fragment } from "react"
import ReactDom from "react-dom"
import "./Modal.css"

const Backdrop=(props)=>{
    return <div className="backdrop" onClick={props.onClose}/>
}

const ModalOverlay=(props)=>{
    return(
        <div className="modal">
        <div className="content">{props.children}</div>
        </div>
    )
}

const portalElement=document.getElementById("modal")

const Modal=(props)=>{
    return(
<Fragment>

{ReactDom.createPortal(<Backdrop onClose={props.onClose}/>,portalElement)}
{ReactDom.createPortal(<ModalOverlay>{props.children}</ModalOverlay>,portalElement)}

</Fragment>

    )
}

export default Modal