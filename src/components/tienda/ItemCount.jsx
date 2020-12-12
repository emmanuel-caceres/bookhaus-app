import {useState} from 'react';

function ItemCount () {

    const [contador, setContador] = useState(1);

    if (contador < 1){
       setContador(1);
    };

    return (
       <div className="cardContador">
           <button className="negative" onClick={() => setContador(contador - 1)}>-</button>
           <p>{contador}</p>
           <button className="positive" onClick={() => setContador(contador + 1)}>+</button>
       </div>
    )
}

export default ItemCount;