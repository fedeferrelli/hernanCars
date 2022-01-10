import React from 'react';
//import {FaWhatsapp, FaPhoneAlt } from 'react-icons/fa';
import { useLocation } from 'react-router-dom'
import {FaWhatsapp, FaPhoneAlt, FaWhatsappSquare, FaPhoneSquareAlt, FaArrowLeft, FaAngleLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';


const Detalle = ({plato}) =>{

    //const {marca, año, modelo, image} = plato;

    const location = useLocation()
  const { from } = location.state

  const {marca, año, modelo, descripcion, image} = from;
   
    return(

<div className=" min-h-screen items-center flex flex-col relative bg-neutral-200">

      <img src={image} alt="imagen del auto" className=" object-cover rounded-md mt-4 w-11/12"/>
      
      <div className="flex items-center justify-around w-1/2 mt-5" > 

      <div className="bg-green-800 p-1.5 rounded-full">
         
          <a href='https://api.whatsapp.com/send?phone=5492262574254&text=Hola,%20Hernán.%20Cómo%20estás?%20Me%20gustaría%20hecerte%20la%20siguiente%20consulta.%0D%0A%0D%0A'>{<FaWhatsapp className="text-4xl text-green-100  bg-green-800 rounded-xl p-1"/>}</a>
         </div>


        <div className="bg-orange-500 rounded-full">
          <a href="tel:+5492262574254">{<FaPhoneAlt className=" p-3 text-5xl text-white   rounded-full"/>}</a>
          </div>


      </div>

      <div className="bg-white rounded-md w-11/12 px-3 py-4 mt-5">
    
      <h1 className="font-sans font-bold text-3xl text-center text-slate-800  mb-0 w-full">{marca} {modelo} </h1>
      
      <h2 className=" font-sans text-xl text-center text-slate-700  mb-5 w-full"> {año} </h2>
      
      <h3 className="font-sans px-4 text-lg text-center text-slate-700  mb-5 w-full" > {descripcion}</h3>
      </div>
     
      <Link to="/otra" state={{ from: plato }}>{<FaArrowLeft className=" bg-yellow-500 rounded-full text-5xl text-gray-500 p-4  bottom-15 right-10  absolute"/>}</Link>

      

      </div>
    )
};

export default Detalle;