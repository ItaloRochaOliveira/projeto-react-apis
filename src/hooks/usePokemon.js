import React, { useEffect, useState } from "react";
import axios from "axios";

export const usePokemon = (url, namePokemon, estadoInicial) => {
    const [data, setData] = useState(estadoInicial)
    const [carregando, setCarregando] = useState(false)
    const [erro, setErro] = useState(false)

   
    useEffect( () => {
            setCarregando(true)
            axios.get(`${url}${namePokemon}`)
            .then((response) => {
                setData(response.data)
                setCarregando(false)
            })
            .catch((erro) => {
                setCarregando(false)
                setErro(true)
                console.log(erro.response)
            })
    },
    [])
    return [data, carregando, erro]
}
