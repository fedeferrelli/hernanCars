import React from 'react';
import {FaWhatsapp, FaPhoneAlt, FaWhatsappSquare, FaPhoneSquareAlt, FaAngleRight } from 'react-icons/fa';
import { Button } from '../ButtonElement';
import { Link } from 'react-router-dom';


const PlatoMenu = ({plato}) =>{

    const {marca, año, modelo, image} = plato;

   
    return(


         <div className="w-full px-3 mb-4 ">
            <div className="px-2   bg-white  shadow-md  rounded-lg h-28 flex justify-center items-center " >
               
                <div className="flex justify-center items-center h-28 w-full">

                   
                    <div className="w-4/12 lg:w-5/12 xl:w-3/12 md:w-1/4 sm:w-1/3 h-full  flex justify-center items-center " > 
                    
                        <img src={image} alt="imagen del auto" className=" object-cover rounded-lg w-full "/>

                    </div>

                   
                   
                    <div className="w-6/12 lg:w-7/12 xl:w-9/12 md:w-3/4 sm:w-2/3  bg-white flex-col  ">

                        <div className="pl-2 flex-col justify-between items-center w-full py-0 px-1 ">

                            <div className=" flex flex-col mb-3">

                                <p className="font-bold text-xl text text-slate-800 mb-0 w-full">
                                    {marca} {modelo}   
                                </p>
                                    
                                <p className="text-md text text-slate-700 mt-0 mb-0 w-full ">
                               {año}   
                                </p>

                            </div>
                           
                            <div className=" flex items-center" > 

                                    <a href='https://api.whatsapp.com/send?phone=5492915033111&text=Hola,%20Hernán.%20Cómo%20estás?%20Me%20gustaría%20hecerte%20la%20siguiente%20consulta.%0D%0A%0D%0A'>{<FaWhatsappSquare className="text-xl text-green-800 rounded-xl"/>}</a>


                                    <a href="tel:+5492262553135">{<FaPhoneSquareAlt className="text-xl text-gray-400 rounded-xl ml-3"/>}</a>
 
                            </div>

                        </div>















                                        
                    </div>

               
      {/*               <div className="w-2/12 lg:w-5/12 xl:w-3/12 md:w-1/4 sm:w-1/3 h-full flex flex-col items-center justify-around" > 
                    
                    

                        <a href='https://api.whatsapp.com/send?phone=5492915033111&text=Hola,%20Hernán.%20Cómo%20estás?%20Me%20gustaría%20hecerte%20la%20siguiente%20consulta.%0D%0A%0D%0A'>{<FaWhatsappSquare className="text-xl text-green-800 rounded-xl"/>}</a>


                        <a href="tel:+5492262553135">{<FaPhoneSquareAlt className="text-xl text-gray-400 rounded-xl"/>}</a>


                    
                    </div> */}


                   <Link to="/detalle" state={{ from: plato }}>{<FaAngleRight className="text-2xl text-slate-400 bold bg-stone-300 rounded-xl"/>}</Link>





                </div>
            
            </div>
           
        </div>

    )
};

export default PlatoMenu;