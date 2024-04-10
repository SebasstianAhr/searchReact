import React, { useState } from "react";
import Table from "./components/Table";
import Search from "./components/Search";
import Modal from "./components/Modal";

export default function App() {
  // **Estado**4
  const [filter, setFilter] = useState(""); // Almacena el valor del filtro (estado inicial vacío)
  const [pageSize, setPageSize] = useState(5); // Almacena el tamaño de la página (estado inicial 5)
  const [currentPage, setCurrentPage] = useState(1); // Almacena la página actual (estado inicial 1)

  const [personas, setPersonas] = useState([
    {
      id: "1",
      nombre: "Refrigerador",
      caracteristicas: "Mantiene los alimentos frescos",
    },
    {
      id: "2",
      nombre: "Lavadora",
      caracteristicas: "Lava la ropa de manera eficiente",
    },
    {
      id: "3",
      nombre: "Secadora",
      caracteristicas: "Seca la ropa rápidamente",
    },
    {
      id: "4",
      nombre: "Microondas",
      caracteristicas: "Cocina los alimentos en pocos minutos",
    },
    {
      id: "5",
      nombre: "Licuadora",
      caracteristicas: "Prepara deliciosos batidos y smoothies",
    },
    {
      id: "6",
      nombre: "Plancha",
      caracteristicas: "Alisa la ropa con facilidad",
    },
    {
      id: "7",
      nombre: "Aspiradora",
      caracteristicas: "Elimina el polvo y la suciedad del hogar",
    },
    {
      id: "8",
      nombre: "Batidora",
      caracteristicas: "Mezcla ingredientes para cocinar",
    },
    {
      id: "9",
      nombre: "Tostadora",
      caracteristicas: "Tuesta el pan de manera uniforme",
    },
    {
      id: "10",
      nombre: "Cafetera",
      caracteristicas: "Prepara café caliente en minutos",
    },
    {
      id: "11",
      nombre: "Secador de pelo",
      caracteristicas: "Seca el cabello rápidamente",
    },
    {
      id: "12",
      nombre: "Plancha de pelo",
      caracteristicas: "Alisa el cabello de forma eficiente",
    },
    {
      id: "13",
      nombre: "Cepillo de dientes eléctrico",
      caracteristicas: "Limpia los dientes de forma automática",
    },
    {
      id: "14",
      nombre: "Aspiradora de mano",
      caracteristicas: "Ideal para limpiar áreas pequeñas",
    },
    {
      id: "15",
      nombre: "Cortadora de cabello",
      caracteristicas: "Corta el cabello de manera precisa",
    },
    {
      id: "16",
      nombre: "Exprimidor de jugo",
      caracteristicas: "Extrae el jugo de frutas y verduras",
    },
    {
      id: "17",
      nombre: "Horno eléctrico",
      caracteristicas: "Cocina alimentos al horno de forma eficaz",
    },
    {
      id: "18",
      nombre: "Máquina de afeitar eléctrica",
      caracteristicas: "Afeita la barba de forma suave",
    },
    {
      id: "19",
      nombre: "Limpiador facial",
      caracteristicas: "Limpia la piel profundamente",
    },
    {
      id: "20",
      nombre: "Dispensador de jabón automático",
      caracteristicas: "Dispensa jabón de manera automática",
    },
  ]);

  const handleFilter = (inputValue) => {
    // Función que actualiza el estado `filter` con el valor introducido en el campo de búsqueda
    setFilter(inputValue);
  };

  const handlePageSizeChange = (event) => {
    // Función que actualiza el estado `pageSize` con el valor seleccionado en el selector de tamaño de página
    setPageSize(parseInt(event.target.value));
    // Restablece la página actual a 1 cuando se cambia el tamaño de la página
    setCurrentPage(1);
  };

  const startIndex = (currentPage - 1) * pageSize; // Calcula el índice de inicio de la página actual
  const endIndex = Math.min(startIndex + pageSize, personas.length); // Calcula el índice de fin de la página actual

  // Filtra los datos según el valor del filtro
  const filteredData = personas.filter(
    (dato) =>
      dato.id.includes(filter) ||
      dato.nombre.includes(filter) ||
      dato.caracteristicas.includes(filter)
  );

  // Obtiene la sublista de datos que se va a mostrar en la página actual
  const paginatedData = filteredData.slice(startIndex, endIndex);

  const eliminar = (producto) => {
    const newData = [...paginatedData];
    const index = newData.indexOf(producto);
    newData.splice(index, 1);
    setPersonas(newData);
  };

  //modal de Agregar
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="main">
      <Modal isOpen={isModalOpen} closeModal={() => setIsModalOpen(false)} />
      <div className="div-search-select">
        <select
          className="select"
          value={pageSize}
          onChange={handlePageSizeChange}
        >
          <option value={5}>5</option>
          <option value={10}>10</option>
          <option value={15}>15</option>
          <option value={20}>20</option>
        </select>
        <button onClick={() => setIsModalOpen(true)} className="button-agregar">
          Agregar
        </button>
        <Search handleFilter={handleFilter} />
      </div>
      <Table data={paginatedData} eliminarPersona={eliminar} />
      <div className="div-mostrar">
        <p className="mostrar">
          Mostrando {startIndex + 1} - {filteredData.length} de {endIndex}{" "}
          registros
        </p>
      </div>
    </div>
  );
}
