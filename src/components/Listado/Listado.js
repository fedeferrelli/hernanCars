import React, {useState, useEffect, useContext} from 'react';

import { FirebaseContext } from '../../firebase/index';
import ListadoIndividual from './ListadoIndividual.js';
import _ from 'lodash'; 






const Listado = ({filtro}) =>{

    const {firebase} = useContext(FirebaseContext);
    
    const [platos, setPlatos] = useState([])

  
    useEffect(() => {

       const obtenerPlato = () => {
          firebase.db.collection('autos').onSnapshot(handleSnapshot); 

        }
        obtenerPlato();
    }, [filtro]);

// Snapshot permite manejar la base de datos en real time  
  
    const handleSnapshot = (snapshot) =>{
        const platos = snapshot.docs.map(doc => {
            return {
                id: doc.id,
                ...doc.data()
            }
        });

        const platos_filtrados = _.filter(platos, plato => _.includes(_.lowerCase([plato.marca, plato.modelo, plato.año]), _.lowerCase(filtro) ));
        const platos_sorteados = _.sortBy(platos_filtrados, 'marca', 'modelo' ,'año');
        setPlatos(platos_sorteados)
    }
 
    const MostrarMarca = (marca, i) => {

        if(i>0){
        const marcaAnterior = platos[i-1].marca

        if(marcaAnterior!=marca){
            return(
                <h1 className="text-yellow-600 font-bold font-sans text-2xl text-left mt-2 mb-1 border-2" >{marca} </h1>
            )
        }}
        else{
            return(
                <h1 className="text-yellow-600 font-bold font-sans text-2xl text-left  mt-2 mb-1 border-2" >{marca} </h1>

            )
        }
    }


 return(
        
           platos.map((plato,i) => {          
               return( 
               
                <div key={plato.id}>
                {MostrarMarca(plato.marca, i)}
               
               <ListadoIndividual
                key={plato.id}
                plato={plato}
                
                /> 
                
                </div>)
            } )
            
           
            );}
    

       

export default Listado;