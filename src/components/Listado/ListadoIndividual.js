import React from 'react';
import {FaWhatsapp} from 'react-icons/fa';



const PlatoMenu = ({plato}) =>{

    const {marca, año, modelo, image} = plato;

   
    return(


         <div className="w-full px-3 mb-4 ">
            <div className="px-2 md:w-4/12  bg-white  shadow-md  rounded-lg h-24 flex justify-center items-center" >
               
                <div className="flex justify-center items-center m-auto  h-20 w-full">

                    <div className="w-2/6  lg:w-5/12 xl:w-3/12 md:w-1/4 sm:w-1/3 h-full  flex justify-center items-center" > 
                    
                        <img src={image} alt="imagen del auto" className=" object-cover rounded-lg w-full h-max-20"/>

                    </div>

                    <div className="w-4/6 lg:w-7/12 xl:w-9/12 md:w-3/4 sm:w-2/3  bg-white flex-col  ">

                        <div className="pl-2 flex justify-center items-center w-full py-0 px-1 h-10 ">

                            <p className="font-bold text-lg text-slate-800 mb-3 w-full">
                                    {marca}   {modelo} {año}   
                                </p>

                        </div>

                        <div className="pl-2 flex w-full py-0 px-1 h-10 ">

                        <a href='https://api.whatsapp.com/send?phone=5492915033111&text=Hola,%20Hernán.%20Cómo%20estás?%20Me%20gustaría%20hecerte%20la%20siguiente%20consulta.%0D%0A%0D%0A'>{<FaWhatsapp className="text-2xl text-green-800 bold"/>}</a>
                        
                        </div>


                       {/*   <p className="text-slate-800 mb-4 mt-0 bg-red-500">
                              <span className="font-bold slate-600">{año}</span>                           
                         </p> */}

                       {/*   <p className="text-gray-600 mb-4  ">
                              {descripcion}                           
                         </p>  */}

                    
                    
                    </div>

               

                </div>
            
            </div>
           
        </div>
    )
};

export default PlatoMenu;