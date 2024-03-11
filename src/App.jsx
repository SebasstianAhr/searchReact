import React, { useState } from "react";
import Table from "./components/Table";
import Search from "./components/Search";

export default function App() {
  const [filter, setFilter] = useState("");

  const data = [
    { id: "10", nombre: "sebasstian", descripcion: "persona1" },
    { id: "11", nombre: "nicol", descripcion: "persona2" },
    { id: "12", nombre: "valentina", descripcion: "persona3" },
    { id: "13", nombre: "karen", descripcion: "persona4" },
    { id: "14", nombre: "jessica", descripcion: "persona5" },
  ];

  const handleFilter = (inputValue) => setFilter(inputValue);

  const filterData = data.filter(
    (dato) =>
      dato.id.includes(filter) ||
      dato.nombre.includes(filter) ||
      dato.descripcion.includes(filter)
  );
  return (
    <div className="main">
      <Search handleFilter={handleFilter} />
      <Table data={filterData} />
    </div>
  );
}
