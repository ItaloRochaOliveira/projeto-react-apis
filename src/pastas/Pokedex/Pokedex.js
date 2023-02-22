import React from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Header } from "../../Components/Header/Header";
import { PokemonContexto } from "../../contexto/PokemonContexto";
import { irParaHome } from "../../routes/coordinato";
import { Content, EstiloGeralDoCard, InfoDosPokemon, CaracteristicasDosPokemons, NomeDoPokemon, IdDoPokemon, TipoDoPokemon, ImagemDoPokemon, EspacoEntreItens, BotaoDetalhes, BotaoExcluir } from "./styled";

export const Pokedex = () => {
    const navigate = useNavigate()

    const {pokemonNaPokedex, setPokemonNaPokedex} = useContext(PokemonContexto)
    
    const excluirPokemon = (name) => {
        const pokemon = pokemonNaPokedex.filter((pokemon) => pokemon.name !== name)
        setPokemonNaPokedex(pokemon)
    }

    return(
        <>
            <header>
                <button onClick={() => irParaHome(navigate)}>Todos Pokemons</button>
                <Header />
            </header>
            <Content>
            {pokemonNaPokedex.map((pokemon) => {
                 return pokemon.types.length > 0 && 
                 <EstiloGeralDoCard key={pokemon.name}>
                 <InfoDosPokemon type={pokemon.types[0].type.name}>
                     <CaracteristicasDosPokemons>
                         <IdDoPokemon>#{pokemon.id}</IdDoPokemon>
                         <NomeDoPokemon>{pokemon.name} </NomeDoPokemon>
                         {pokemon.types.map((uniqueType) => {
                             return <TipoDoPokemon type={uniqueType.type.name}>{uniqueType.type.name}</TipoDoPokemon>
                         })}
                     </CaracteristicasDosPokemons>
                     <EspacoEntreItens>
                         <BotaoDetalhes onClick={() => console.log("entrou")}>detalhes</BotaoDetalhes >
                         <BotaoExcluir onClick={() => excluirPokemon(pokemon.name)}>Exluir</BotaoExcluir>
                     </EspacoEntreItens>
                      
                 </InfoDosPokemon>
                 <ImagemDoPokemon src={pokemon.pokemonImage}/>
                 
             </EstiloGeralDoCard>
            })}
            </Content>
        </>
            
        
    ) 
}