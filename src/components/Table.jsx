import React from 'react'

export default function Table({data}) {
  return (
    <div className='div-table'>
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>NOMBRE</th>
                    <th>DESCRIPCION</th>
                </tr>
            </thead>
            <tbody>
                {data.map((item)=>(
                  <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.nombre}</td>
                    <td>{item.descripcion}</td>
                  </tr>
                ))}
            </tbody>
        </table>
    </div>
  )
}