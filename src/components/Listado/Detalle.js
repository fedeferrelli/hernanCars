import React from 'react';
//import {FaWhatsapp, FaPhoneAlt } from 'react-icons/fa';
import { useLocation } from 'react-router-dom'


const Detalle = ({plato}) =>{

    //const {marca, año, modelo, image} = plato;

    const location = useLocation()
  const { from } = location.state

  const {marca, año, modelo, descripcion, image} = from;
   
    return(

<>
      <h1>{marca} {modelo} {año} {descripcion}</h1>
      <img src={image} alt="imagen del auto" className=" object-cover w-full h-max-20"/>

      </>
    )
};

export default Detalle;