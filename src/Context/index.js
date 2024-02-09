import React, { useState } from 'react'
import axios from 'axios'
export const MyContext = React.createContext({})

export const MyContextProvider = ({children}) => {
    const [pokemonData,setPokemonData] = useState();
    const fetchData = async () => {
        try {
            const res = await axios.get(
                "https://pokeapi.co/api/v2/pokemon/ditto"
            )
            setPokemonData(res.data);
        } catch (error) {
            console.error("Error fetching data" , error)
        }
    }

    const global = {
        someValue : "Nilai Dari Context",
        secondValue: "Nilai ke dua Context",
        pokemonData,
        fetchData
    };

    const provider = {
        ...global,
    };



    return(
        <MyContext.Provider value={provider}>
           {children}
        </MyContext.Provider>   
   )
}


