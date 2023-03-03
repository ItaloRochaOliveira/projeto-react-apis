import React, { useEffect, useState } from "react";
import axios from "axios";

export const usePokemon = (url, namePokemon, estadoInicial) => {
    console.log(url, namePokemon)
    const [data, setData] = useState(estadoInicial)
    console.log(data)
    const [carregando, setCarregando] = useState(false)
    const [erro, setErro] = useState(false)

    const carregarPokemon = () => {
        setCarregando(true)
        axios.get(`${url}${namePokemon}`)
        .then((response) => {
            console.log(response)
            setData(response.data)
            setCarregando(false)
        })
        .catch((erro) => {
            setCarregando(false)
            setErro(true)
            console.log(erro.response)
        })
    }

    useEffect( () => {
        carregarPokemon()
        
            // console.log("normal: ",response.data.sprites.other.dream_world.front_default)
            // console.log("Gif: ", response.data.sprites.versions["generation-v"]["black-white"].animated.front_default)
        
    },
    [namePokemon])
    return [data, carregando, erro]
}
