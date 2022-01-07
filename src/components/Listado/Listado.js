import React, {useState, useEffect, useContext} from 'react';

import { FirebaseContext } from '../../firebase/index';
import ListadoIndividual from './ListadoIndividual.js'





const Listado = () =>{

    const {firebase} = useContext(FirebaseContext);
    
    const [platos, setPlatos] = useState([])


    
    useEffect(() => {

       const obtenerPlato = () => {
          firebase.db.collection('autos').onSnapshot(handleSnapshot); 

        }
        obtenerPlato();
    }, []);

// Snapshot permite manejar la base de datos en real time  
  
    const handleSnapshot = (snapshot) =>{
        const platos = snapshot.docs.map(doc => {
            return {
                id: doc.id,
                ...doc.data()
            }
        });

        setPlatos(platos)
    }
 

 return(
   

        
        
       
        
           platos.map((plato) => {          
               return( <ListadoIndividual
                key={plato.id}
                plato={plato}
                /> )
            } )
            
            );}
    

       

export default Listado;