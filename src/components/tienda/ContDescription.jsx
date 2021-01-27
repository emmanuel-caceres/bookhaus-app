import {useParams} from 'react-router-dom';
import ItemDescription from './ItemDescription';
import { useEffect, useState } from 'react';

import {getFirestore} from '../../firebase'

function ContDescription() {

    const{productId} = useParams();
    const [publibro, setpublibro] = useState([]);
    const db = getFirestore();

    
    useEffect(() => {
        if ( productId ) {
            db.collection('productos').where('id', '==', parseFloat(productId)).get()
            
            .then(cont => {
                let arr = [];
               
                cont.forEach(libro => {
                    arr.push(libro.data());
                })
                
                setpublibro(arr[0]);
                
            })
        }
    })

    

    return(
        <div className="container-fluid contDescription">
            <div className="row">
                <h2>Detalles del Producto</h2>
            </div>
            <ItemDescription 
            item={publibro} />
        </div>
    )
}

export default ContDescription;