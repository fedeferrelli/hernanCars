import React, {useState} from 'react';
import Listado from '../components/Listado/Listado'

const Otra = () => {
    

    const [filtro, setFiltro] = useState('')
    
    
    return (

        <div className=" bg-neutral-200 min-h-screen py-4 justify-center flex flex-col" >

        <input className="w-11/12 sticky top-0 p-2 m-auto rounded-3xl " placeholder="Buscar"  type="text" id="fname" name="fname"/>

        <Listado
       />
          
        </div>
    )
}

export default Otra
