import ItemDescription from './ItemDescription';

function ContDescription() {
    return(
        <div className="container-fluid contDescription">
            <div className="row">
                <h2>Detalles del Producto</h2>
            </div>
            <ItemDescription 
            titulo="El Ultimo Mago"
            resenia="En la Nueva York moderna, la magia está extinta. Las pocas personas que tienen algo de afinidad con ella -los Mageus- viven en las sombras. Cualquier Mageus que ingrese en Manhattan queda atrapado por la Brecha, una barrera de energía oscura que los confina. Cruzar la Brecha implica perder sus poderes y, casi inevitablemente, sus vidas.Estrella es una ladrona muy talentosa, y entrenada para robar artefactos mágicos de la Orden, los creadores de la Brecha. Con su habilidad innata para manipular el tiempo, ella puede saltar al pasado para conseguir esos artefactos antes de que la Orden lo note."
            idioma="Español"
            autor="Lisa Maxwell"
            dimensiones="145 x 208 x 48 mm - 658g"
            publicacion="30 Apr 2018"
            editorial="V&R Ediciones"
            precio="ARS$3.425,23"/>
        </div>
    )
}

export default ContDescription;