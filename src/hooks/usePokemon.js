import React, { useEffect, useState } from "react";
import axios from "axios";

export const usePokemon = (url, namePokemon, estadoInicial) => {
    const [data, setData] = useState(estadoInicial)
    const [carregando, setCarregando] = useState(false)
    const [erro, setErro] = useState(false)

   const carregarData = () => {
        setCarregando(true)
        axios.get(`${url}${namePokemon}`)
        .then((response) => {
            namePokemon ? setData(response.data) : setData(response.data.results)
            setCarregando(false)
        })
        .catch((erro) => {
            setCarregando(false)
            setErro(true)
            console.log(erro.response)
        })
   }
    
    useEffect( () => {
        carregarData()
    },
    [])
    return [data, carregando, erro]
}