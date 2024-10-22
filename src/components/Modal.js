import React from "react";

const Modal = ({ handleConfirmDelete, handleCloseModal }) => {
    return (
        <div id="modal-container">
            <div id="modal">
                <p>Are you sure you want to delete this task?</p>

                <div id="buttonsWrapper">
                    <button
                        id="cancel"
                        onClick={() => {
                            handleCloseModal();
                        }}
                    >
                        Cancel
                    </button>
                    <button
                        id="delete"
                        onClick={() => {
                            handleConfirmDelete();
                        }}
                    >
                        Confirm
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Modal;