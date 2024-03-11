import React, { useState } from "react";
import Table from "./components/Table"

export default function App() {
  const [filter, setFilter] = useState("");

  const data = [
    { id: "10", nombre: "sebasstian", descripcion: "hola" },
    { id: "11", nombre: "nicol", descripcion: "hola" },
    { id: "12", nombre: "valentina", descripcion: "hola" },
    { id: "13", nombre: "karen", descripcion: "hola" },
    { id: "14", nombre: "jessica", descripcion: "hola" },
  ];

  const handleFilter = (inputValue) => setFilter(inputValue);

  const filterData = data.filter(
    (dato) =>
      dato.id.includes(filter) ||
      dato.nombre.includes(filter) ||
      dato.descripcion.includes(filter)
  );
  return (
    <div>
      <Table data={filterData}/>
    </div>
  )
}
