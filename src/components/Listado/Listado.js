import React, {useState, useEffect, useContext, Fragment} from 'react';
import { Link } from 'react-router-dom';
import { FirebaseContext } from '../../firebase/index';
import ListadoIndividual from './ListadoIndividual.js'





const Listado = () =>{

    const {firebase} = useContext(FirebaseContext);

    const [platos, setPlatos] = useState([])

    const [modificar, setModificar] = useState(false)

    const [idModificar, setIdModificar] = useState('')

    const [infoModificar, setInfoModificar] = useState({})

    const [buscar, setBuscar] = useState('f')

    const [autosParaMostar, setautosParaMostar] = useState({})

    
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