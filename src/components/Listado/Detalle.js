import React from 'react';
//import {FaWhatsapp, FaPhoneAlt } from 'react-icons/fa';
import { useLocation } from 'react-router-dom'
import {FaWhatsapp, FaPhoneAlt, FaWhatsappSquare, FaPhoneSquareAlt, FaAngleRight } from 'react-icons/fa';


const Detalle = ({plato}) =>{

    //const {marca, año, modelo, image} = plato;

    const location = useLocation()
  const { from } = location.state

  const {marca, año, modelo, descripcion, image} = from;
   
    return(

<>
      
      <img src={image} alt="imagen del auto" className=" object-cover w-full h-max-20"/>
      <h1 className="font-bold text-3xl text-center text-slate-800 mt-5 mb-0 w-full">{marca} {modelo} </h1>
      
      <h2 className="text-xl text-center text-slate-700  mb-5 w-full"> {año} </h2>
      
      <h3 className="text-lg text-center text-slate-700  mb-5 w-full" > {descripcion}</h3>


      <div className=" flex items-center justify-center" > 

        <a href='https://api.whatsapp.com/send?phone=5492915033111&text=Hola,%20Hernán.%20Cómo%20estás?%20Me%20gustaría%20hecerte%20la%20siguiente%20consulta.%0D%0A%0D%0A'>{<FaWhatsappSquare className="text-4xl text-green-800 rounded-xl"/>}</a>


        <a href="tel:+5492262553135">{<FaPhoneSquareAlt className="text-4xl text-gray-400 rounded-xl ml-3"/>}</a>

</div>

      </>
    )
};

export default Detalle;