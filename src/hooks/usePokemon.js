import React, { useEffect, useState } from "react";
import axios from "axios";

export const usePokemon = (url, namePokemon, estadoInicial, verficar) => {
    const [data, setData] = useState(estadoInicial)
    const [carregando, setCarregando] = useState(false)
    const [erro, setErro] = useState(false)
    const salvarPokemon = [...data]
    console.log(salvarPokemon)

    const carregarPokemons = () => {
        namePokemon ? namePokemon.map((pokemon) => {

            setCarregando(true)
            // return
             axios.get(`${url}${pokemon.name}`)
            .then((res) => {
                setCarregando(false)
                
                salvarPokemon.push(res.data)
                
                
                // return res.data
            })
            .catch((err) => {
                console.log(err.response)
                setCarregando(false)
                setErro(true)
            })
            // try{
            //     const res = await axios.get(`${url}${pokemon.name}`)
            //     console.log(res.data)
            //     return res.data
            // } catch(err) {
            //     console.log(err.response)
            // }
        }) : axios.get(url)
        .then((res) => {
            console.log("entrou aqui" )
            setCarregando(false)
            setData(res.data.results)
        })
        .catch((err) => {
            console.log(err.response)
            setCarregando(false)
            setErro(true)
        })

        // if(namePokemon){
        //     console.log("entrou no if", namePokemon)
        //     namePokemon.map((pokemon) => {
        //         console.log(pokemon)
        //     setCarregando(true)
        //     axios.get(`${url}${pokemon.name}`)
        //     .then((response) => {
        //         setData([...data, response.data])
                
        //         setCarregando(false)
        //     })
        //     .catch((erro) => {
        //         setCarregando(false)
        //         setErro(true)
        //         console.log(erro.response)
        //     })
        //     })
         
        // } else {
        //     console.log("entrou no else")
        //     setCarregando(true)
        //     axios.get(url)
        //     .then((response) => {
                // setData(response.data.results)
                
        //         setCarregando(false)
        //     })
        //     .catch((erro) => {
        //         setCarregando(false)
        //         setErro(true)
        //         console.log(erro.response)
        //     })
        // }
       
    }
    
    useEffect( () => {
        carregarPokemons()
        setData(salvarPokemon)
    },
    [verficar])

    return [data, carregando, erro]
   
}
