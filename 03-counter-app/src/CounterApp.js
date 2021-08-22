import React, {useState} from 'react';
import PropTypes from 'prop-types'

//se puede hacer la plantilla de este documento rapidamente
//usando el snippet racf o recf si queremos incorporar el export


const CounterApp = ({value}) => {
    
    //Hook useState
    const [ counter, setCounter ] = useState( value ); // []
    // const [ nombre, setNombre ] = useState('Neko');
    //los hooks regresan un array y se compone de dos partes, un valor dado y una funcion relacionada
    //suele nombrarse a la funcion como el valor mas set, osea valor, setValor
    //en si se suele usar la desestructuracion, es decir, en vez de una funcion llamada state
    //veremos const [valor, setValor]
    //por lo que no suelen llevar un nombre implicito



    //Podemos hacer estas operaciones directamente en los botones, pero es mas prolijo separarlo 
    // y luego referenciarlo

    //handleAdd

    const handleAdd = (e) => setCounter(counter + 1);
    
        //si no agregamos un return , devolvera undefined, pueden ponerse en return, tanto valores como funciones
        //para modificar el valor de counter, que es una constante, react nos obliga a usar la funcion setCounter, en vez de directamente cambiar de const a let, setCounter(counter + 1 );
        //de esta manera mantenemos el uso de una constante, y trabajamos con ella usando el segundo argumento del hook

        //otra forma de usarlo es con una funcion dentro de setCounter
        //setCounter( (c) => c + 1 );
    

    //handleReset
    
    const handleReset = (c) => setCounter(value);
    

    //handleSubstract

    const handleSubstract = (e) => setCounter(counter - 1);
    

    //al ser arrow functions que manejan un solo valor, podemos sacar las llaves.
    //-------------------------------------------------//



    const counterApp = (
        <>
            <br></br>
            <h1>CounterApp</h1>
            <h2> {counter} </h2>
            {/* al ser una funcion de flecha que recibe un solo valor,
            podemos simplificarla, dejando solo la referencia a la funcion */}
            {/* <button onClick={(e) => { handleAdd(e) }} >+1</button> */}
            <button onClick={handleAdd} >+1</button>
            {/* si colocamos la funcion sin parentesis, sera una referencia y se ejecutara cuando se de la condicion,
            pero si ponemos los parentesis estaremos llamandola y ejecutandola, en el momento en que el codigo lee esa linea y tambien al cumplirse la condicion */}

            <button onClick={handleReset} >Reset</button>
            <button onClick={handleSubstract} >-1</button>
        </>
    )


    return counterApp
}

CounterApp.propTypes = {
    value: PropTypes.number.isRequired
}

export default CounterApp