import React, { useEffect, useState } from "react";
import { Footer } from "../../Components/Footer/Footer";
import { Header } from "../../Components/Header/Header"
import { BotaoPokedex, CorDaMain, HeaderLogin, Pokedex, TodosPokemons } from "./styled";
import axios from "axios"
import { Card } from "../../Components/Card/Card";

export const Home = () => {
    const [pokedex, setPokedex] = useState([])
    const [pokemonNaPokedex, setPokemonNaPokedex] = useState([])

    const carregarPokedex = async() => {
        try{
            const response = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=30&offset=0")
            setPokedex(response.data.results)
        } catch(erro){
            console.log(erro.response)
        }
    }

    useEffect(() => {
        carregarPokedex()
    },
    [])
    return(
        <>
            <HeaderLogin>
                <Header />
                <BotaoPokedex>pokedex</BotaoPokedex>
            </HeaderLogin>

            <CorDaMain>
                <TodosPokemons>Todos Pokémons:</TodosPokemons>
                <Pokedex>
                    {pokedex.map((pokemon) => {
                        return <Card key={pokemon.name} namePokemon={pokemon.name}/> 
                    })}
                </Pokedex>
            </CorDaMain>
    
            <Footer />
        </>
    )
}