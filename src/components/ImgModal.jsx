import * as React from 'react';
import { Modal } from 'react-bootstrap';
import './ImgModal.css';

const ImgModal = (props) => {
    return (
        <Modal
            {...props}
            centered
        >
            <Modal.Body>
                <img className="ImageSize" alt={props.image.description} src={props.image.urls.regular} />
            </Modal.Body>
        </Modal>
    );
};

export default ImgModal;