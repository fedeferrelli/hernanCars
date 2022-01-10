import React, {useState} from 'react';
import Listado from '../components/Listado/Listado'

const Otra = () => {
    

    const [filtro, setFiltro] = useState('')

    function handleChange(event) {
        setFiltro(event.target.value)
      }
    
    return (

        <div className=" bg-neutral-200 min-h-screen py-4 text-center justify-start flex-col" >

        <input className="w-11/12 sticky top-1 border border-neutral-300 italic p-2 px-3 m-auto rounded-3xl " placeholder="Buscar"  type="text" id="buscar" name="buscar"
        onChange={handleChange}
        />

        <Listado
        filtro={filtro}
       />
          
        </div>
    )
}

export default Otra
