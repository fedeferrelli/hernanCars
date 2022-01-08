import React from 'react';
import {FaWhatsapp, FaPhoneAlt, FaWhatsappSquare, FaPhoneSquareAlt, FaAngleRight } from 'react-icons/fa';
import { Button } from '../ButtonElement';
import { Link } from 'react-router-dom';


const PlatoMenu = ({plato}) =>{

    const {marca, año, modelo, image} = plato;

   
    return(


         <div className="w-full px-2 mb-4 ">
            
            <div className="px-2   bg-white  shadow-md  rounded-lg flex justify-center items-center " >
               
                <div className="flex justify-between items-center h-28 w-full">

                   
                    <div className="w-4/12 h-full  flex justify-center items-center " > 
                    
                        <img src={image} alt="imagen del auto" className=" object-cover rounded-lg w-full h-20 "/>

                    </div>

                   
                   
                    <div className="w-7/12 lg:w-7/12 xl:w-9/12 md:w-3/4 sm:w-2/3  bg-white flex-col  ">

                        <div className="pl-2 flex-col justify-between items-center w-full py-0 px-1 ">

                            <div className=" flex flex-col mb-3">

                                <p className="font-bold text-xl text text-slate-800 mb-0 w-full font-sans ">
                                    {marca} {modelo}   
                                </p>
                                    
                                <p className=" font-sans text-md text text-slate-700 mt-0 mb-0 w-full ">
                               {año}   
                                </p>

                            </div>
                           
                            <div className=" flex items-center" > 

                                    <a href='https://api.whatsapp.com/send?phone=5492915033111&text=Hola,%20Hernán.%20Cómo%20estás?%20Me%20gustaría%20hecerte%20la%20siguiente%20consulta.%0D%0A%0D%0A'>{<FaWhatsappSquare className="text-xl text-green-400 rounded-xl"/>}</a>


                                    <a href="tel:+5492262553135">{<FaPhoneSquareAlt className="text-xl text-blue-400 rounded-xl ml-3"/>}</a>
 
                            </div>

                        </div>
                  
                    </div>

                    <div className="w-1/12 lg:w-7/12 xl:w-9/12 md:w-3/4 sm:w-2/3">

                         <Link to="/detalle" state={{ from: plato }}>{<FaAngleRight className="text-2xl text-slate-400 bold rounded-xl"/>}</Link>

                   </div>



                </div>
            
            </div>
           
        </div>

    )
};

export default PlatoMenu;