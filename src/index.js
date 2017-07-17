import React from 'react';
import ReactDOM from 'react-dom';
import { Button, Modal } from 'react-bootstrap';

const modalStyle = {
    position: 'fixed',
    zIndex: 1040,
    top: 0, bottom: 0, left: 0, right: 0
};

const backdropStyle = {
    ...modalStyle,
    zIndex: 'auto',
    backgroundColor: '#000',
    opacity: 0.5
};

class ModalExample extends React.Component {
    constructor() {
        super();
        this.state = {
            showModal: false,
        };
    }

    close = () => {
        this.setState({ showModal: false });
    };

    open = () => {
        this.setState({ showModal: true });
    };

    render() {

        return (
            <div className='modal-example'>
                <Button onClick={this.open}>
                    Open Modal
                </Button>
                <p>Click to get the full Modal experience!</p>

                <Modal
                    style={modalStyle}
                    backdropStyle={backdropStyle}
                    show={this.state.showModal}
                    onHide={this.close}
                >
                    <div>
                        <h4>Text in a modal</h4>
                    </div>
                </Modal>
            </div>
        );
    };
};

ReactDOM.render(<ModalExample />, document.getElementById('root'));
