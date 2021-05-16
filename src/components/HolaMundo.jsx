import React, {useState} from 'react'

function HolaMundo(props) {
    const [hello, sethello] = useState('Hola Mundo');
    const [bool, setbool] = useState(true);
    
    const handleChange = (event) => {
        sethello(event.n);
        bool ? setbool(false) : setbool(true);
    }

    return (
        <div className='holamundo'>
            <h1>{hello}</h1>
            <h2>Curso Escencial de React</h2>
            {(bool) 
                ?
                <img src="https://arepa.s3.amazonaws.com/react.png" alt="React" srcset="" />
                :
                <img src="https://images.pexels.com/photos/7479440/pexels-photo-7479440.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="React" srcset="" />
            }
            <button onClick={handleChange} type='submit'>Cambiar</button>
            {/* <form action="">
                <input ref={(c) => sethello(c)} type="text" />
                <button onClick={handleChange} type='submit'>Cambiar Texto</button>
            </form> */}
        </div>
    )
}

export default HolaMundo
