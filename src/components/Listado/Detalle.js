import React from 'react';
//import {FaWhatsapp, FaPhoneAlt } from 'react-icons/fa';
import { useLocation } from 'react-router-dom'
import {FaWhatsapp, FaPhoneAlt, FaWhatsappSquare, FaPhoneSquareAlt, FaAngleRight, FaAngleLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';


const Detalle = ({plato}) =>{

    //const {marca, año, modelo, image} = plato;

    const location = useLocation()
  const { from } = location.state

  const {marca, año, modelo, descripcion, image} = from;
   
    return(

<div className=" min-h-screen items-center flex flex-col relative">

      <img src={image} alt="imagen del auto" className=" object-cover w-full h-max-20"/>
          <div className="flex items-center justify-around mt-1 w-1/2" > 

          <a href='https://api.whatsapp.com/send?phone=5492915033111&text=Hola,%20Hernán.%20Cómo%20estás?%20Me%20gustaría%20hecerte%20la%20siguiente%20consulta.%0D%0A%0D%0A'>{<FaWhatsappSquare className="text-5xl text-green-800 rounded-xl"/>}</a>


          <a href="tel:+5492262553135">{<FaPhoneSquareAlt className=" text-5xl text-blue-500  rounded-xl"/>}</a>

      </div>
    
      <h1 className="font-sans font-bold text-3xl text-center text-slate-800 mt-5 mb-0 w-full">{marca} {modelo} </h1>
      
      <h2 className=" font-sans text-xl text-center text-slate-700  mb-5 w-full"> {año} </h2>
      
      <h3 className="font-sans px-4 text-lg text-center text-slate-700  mb-5 w-full" > {descripcion}</h3>

      {/* <button>{<FaAngleLeft className=" bg-yellow-500 rounded-full text-4xl text-grey-500 p-2 bottom-10 right-10  absolute"/>}</button> */}
      <Link to="/otra" state={{ from: plato }}>{<FaAngleLeft className=" bg-yellow-500 rounded-full text-4xl text-grey-500 p-2 bottom-20 right-10  absolute"/>}</Link>

      </div>
    )
};

export default Detalle;