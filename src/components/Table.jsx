import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTrashCan } from "@fortawesome/free-solid-svg-icons";

export default function Table({ data, eliminarPersona }) {
  return (
    <div className="div-table">
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>NOMBRE</th>
            <th>CARACTERISTICAS</th>
            <th className="table-options">OPCIONES</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.nombre}</td>
              <td>{item.caracteristicas}</td>
              <td className="td-options">
                <FontAwesomeIcon className="fa-edit" icon={faPenToSquare} />
                <FontAwesomeIcon
                  className="fa-trash"
                  onClick={() => eliminarPersona(item)}
                  icon={faTrashCan}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
