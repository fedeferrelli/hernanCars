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

<div className="bg-neutral-200 min-h-screen pb-4">
      
      <img src={image} alt="imagen del auto" className=" object-cover w-full h-max-20"/>
      <h1 className="font-sans font-bold text-3xl text-center text-slate-800 mt-5 mb-0 w-full">{marca} {modelo} </h1>
      
      <h2 className=" font-sans text-xl text-center text-slate-700  mb-5 w-full"> {año} </h2>
      
      <h3 className="font-sans px-4 text-lg text-center text-slate-700  mb-5 w-full" > {descripcion}</h3>


      <div className=" flex items-center justify-around mt-20  " > 

        <a href='https://api.whatsapp.com/send?phone=5492915033111&text=Hola,%20Hernán.%20Cómo%20estás?%20Me%20gustaría%20hecerte%20la%20siguiente%20consulta.%0D%0A%0D%0A'>{<FaWhatsappSquare className="text-8xl text-green-800 rounded-xl drop-shadow-[0_0px_5px_rgba(0,0,0,0.7)] bg-neutral-400"/>}</a>


        <a href="tel:+5492262553135">{<FaPhoneSquareAlt className="drop-shadow-[0_5px_10px_rgba(0,0,0,1)]  text-4xl text-blue-500  rounded-xl ml-3"/>}</a>

</div>

      </div>
    )
};

export default Detalle;