import React from 'react';


const PlatoMenu = ({plato}) =>{

    const {marca, año, modelo, image, descripcion, existencia, id} = plato


   
    return(


         <div className="w-full px-3 mb-4 flex-wrap ">
            <div className="p-5 shadow-lg md:w-4/12  shadow-slate-300 bg-white rounded-lg h-24" >
                <div className="flex">
                    <div className="w-2/6  lg:w-5/12 xl:w-3/12 md:w-1/4 sm:w-1/3  "> 
                    
                        <img src={image} alt="imagen del auto" className=" aspect-auto object-none cover   "/>

                    </div>

                    <div className="w-4/6 lg:w-7/12 xl:w-9/12 md:w-3/4 sm:w-2/3 ml-4">

                        <div className="flex">

                        <p className="font-bold text-2xl text-yellow-600 mb-3 w-10/12">
                                    {marca}   {modelo}   
                                </p>

                         </div>


                         <p className="text-gray-600 mb-4 mt-0 ">
                              <span className="font-bold text-gray-600 uppercase">{año}</span>                           
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