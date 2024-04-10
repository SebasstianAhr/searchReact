import React from "react";

const Modal = ({ isOpen, closeModal }) => {
  if (!isOpen) return null;
  return (
    <div className="modal-agregar">
      <div className="modal-agregar-form">
        <form className="form-agregar-modal">
          <div className="modal-agregar-lab-inp">
            <label>Id:</label>
            <input type="number" />
          </div>
          <div className="modal-agregar-lab-inp">
            <label>Nombre:</label>
            <input name="nombre" type="text" />
          </div>
          <div className="modal-agregar-lab-inp">
            <label>Caracteristicas:</label>
            <input ame="caracteristicas" type="text" />
          </div>
          <div className="div-buttons-agregar">
            <button className="button-modal-agregar button-modal-agregar-aceptar">
              Aceptar
            </button>
            <button
              className="button-modal-agregar button-modal-agregar-cancelar"
              onClick={closeModal}
            >
              Cancelar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Modal;
