import React, { useContext, useEffect, useState} from "react";
import { Footer } from "../../Components/Footer/Footer";
import { Header } from "../../Components/Header/Header";
import { Card } from "../../Components/Card/Card";
import { BotaoPokedex, CorDaMain, HeaderLogin, Pokedex, TodosPokemons } from "./styled";
import {useNavigate} from "react-router-dom"
import { irParaPokedex } from "../../routes/coordinato";
import { PokemonContexto } from "../../contexto/PokemonContexto";

export const Home = () => {
    const navigate = useNavigate()
    const {pokedex} = useContext(PokemonContexto)
    console.log(pokedex)
    
    return(
        <>
            <HeaderLogin>
                <Header />
                <BotaoPokedex onClick={() => irParaPokedex(navigate)}>pokedex</BotaoPokedex>
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