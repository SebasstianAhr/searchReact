import React,{useState} from 'react'

export default function Search({handleFilter}) {
    const [search, setSearch] = useState('')

    const handleChange =(e)=>{
        const inputValue = e.target.value;
        setSearch(inputValue)
        handleFilter(inputValue)
    }
  return (
    <div className='div-search'>
        <input placeholder='Search' onChange={handleChange} value={search} type="text" />
    </div>
  )
}
