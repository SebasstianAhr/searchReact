import React, { useState } from "react";
import Table from "./components/Table";
import Search from "./components/Search";

export default function App() {
  // **Estado**
  const [filter, setFilter] = useState(""); // Almacena el valor del filtro (estado inicial vacío)
  const [pageSize, setPageSize] = useState(5); // Almacena el tamaño de la página (estado inicial 5)
  const [currentPage, setCurrentPage] = useState(1); // Almacena la página actual (estado inicial 1)

  const data = [
    { id: "1", nombre: "sebasstian", descripcion: "persona1" },
    { id: "2", nombre: "nicol", descripcion: "persona2" },
    { id: "3", nombre: "valentina", descripcion: "persona3" },
    { id: "4", nombre: "karen", descripcion: "persona4" },
    { id: "5", nombre: "jessica", descripcion: "persona5" },
    { id: "6", nombre: "lucas", descripcion: "persona6" },
    { id: "7", nombre: "martin", descripcion: "persona7" },
    { id: "8", nombre: "andrea", descripcion: "persona8" },
    { id: "9", nombre: "felipe", descripcion: "persona9" },
    { id: "10", nombre: "santiago", descripcion: "persona10" },
    { id: "11", nombre: "ana", descripcion: "persona11" },
    { id: "12", nombre: "carlos", descripcion: "persona12" },
    { id: "13", nombre: "maria", descripcion: "persona13" },
    { id: "14", nombre: "juan", descripcion: "persona14" },
    { id: "15", nombre: "daniela", descripcion: "persona15" },
    { id: "16", nombre: "luis", descripcion: "persona16" },
    { id: "17", nombre: "laura", descripcion: "persona17" },
    { id: "18", nombre: "roberto", descripcion: "persona18" },
    { id: "19", nombre: "patricia", descripcion: "persona19" },
    { id: "20", nombre: "oscar", descripcion: "persona20" },
  ];

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
  const endIndex = Math.min(startIndex + pageSize, data.length); // Calcula el índice de fin de la página actual

  // Filtra los datos según el valor del filtro
  const filteredData = data.filter(
    (dato) =>
      dato.id.includes(filter) ||
      dato.nombre.includes(filter) ||
      dato.descripcion.includes(filter)
  );

  // Obtiene la sublista de datos que se va a mostrar en la página actual
  const paginatedData = filteredData.slice(startIndex, endIndex);

  return (
    <div className="main">
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
        <Search handleFilter={handleFilter} />
      </div>
      <Table data={paginatedData} />
      <div className="div-mostrar">
        <p className="mostrar">
          Mostrando {startIndex + 1} - {endIndex} de {filteredData.length} registros
        </p>
      </div>
    </div>
  );
}
