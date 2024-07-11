import '../styles/gantt.scss';
export const Modal = ({isOpen, onClose}) => {

    return(
        isOpen ? 
                <div className="modal" onClick={onClose}>
                    <div className='content'>
                        <h1>Modal</h1>
                        <p>Modal content</p>
                    </div>
                </div> 
        : <></>
        
    )
}