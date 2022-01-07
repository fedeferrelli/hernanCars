import React from 'react';


const PlatoMenu = ({plato}) =>{

    const {marca, año, modelo, image} = plato


   
    return(


         <div className="w-full px-3 mb-4 ">
            <div className="p-5 drop-shadow-md md:w-4/12   bg-white rounded-lg h-24" >
                <div className="flex justify-center">
                    <div className="w-2/6  lg:w-5/12 xl:w-3/12 md:w-1/4 sm:w-1/3  "> 
                    
                        <img src={image} alt="imagen del auto" className=" aspect-auto object-cover rounded-lg w-full"/>

                    </div>

                    <div className="w-4/6 lg:w-7/12 xl:w-9/12 md:w-3/4 sm:w-2/3 ml-4">

                        <div className="flex">

                        <p className="font-bold text-lg text-slate-800 mb-3 w-full">
                                    {marca}   {modelo}   
                                </p>

                         </div>


                         <p className="text-slate-600 mb-4 mt-0 ">
                              <span className="font-bold slate-600">{año}</span>                           
                         </p>

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