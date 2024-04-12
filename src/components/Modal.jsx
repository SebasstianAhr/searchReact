import React, { useState } from "react";

const Modal = ({ isOpen, closeModal, agregarProducto }) => {
  const [formData, setFormData] = useState({
    id: "",
    nombre: "",
    caracteristicas: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    agregarProducto(formData);
    setFormData({
      id: "",
      nombre: "",
      caracteristicas: "",
    });
    closeModal();
  };

  if (!isOpen) return null;
  return (
    <div className="modal-agregar">
      <div className="modal-agregar-form">
        <form className="form-agregar-modal" onSubmit={handleSubmit}>
          <div className="modal-agregar-lab-inp">
            <label>Id:</label>
            <input
              type="number"
              name="id"
              value={formData.id}
              onChange={handleInputChange}
            />
          </div>
          <div className="modal-agregar-lab-inp">
            <label>Nombre:</label>
            <input
              name="nombre"
              type="text"
              value={formData.nombre}
              onChange={handleInputChange}
            />
          </div>
          <div className="modal-agregar-lab-inp">
            <label>Caracteristicas:</label>
            <input
              name="caracteristicas"
              type="text"
              value={formData.caracteristicas}
              onChange={handleInputChange}
            />
          </div>
          <div className="div-buttons-agregar">
            <button
              type="submit"
              className="button-modal-agregar button-modal-agregar-aceptar"
            >
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
