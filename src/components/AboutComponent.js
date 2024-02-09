import React, {  useContext, useEffect, useState } from 'react'
import { MyContext } from '../Context'

function AboutComponent() {
    const [count,setCount] = useState(100)
    const {someValue,secondValue,pokemonData,fetchData} = useContext(MyContext)
    


    useEffect(() => {
        fetchData()
    },[])



    function handleI(){
        setCount(count+1)
    }

    function handleD(){
        setCount(count-1)
    }

    return (
    <div>
        Count : {count}
        <div>
            <button onClick={() => handleI()}>
                increse
            </button>
            
            <button onClick={() => handleD()}>
                Decrese
            </button>
            <p>Nilai dari Context : {someValue} & {secondValue} </p>
            <h1>
               Name: {pokemonData?.name}
            </h1>
            <h2>
                weight: {pokemonData?.weight}
            </h2>
        </div>
     
    </div>
  )
}

export default AboutComponent
