import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { EstiloGeralDoCard, InfoDosPokemon, CaracteristicasDosPokemons, NomeDoPokemon, IdDoPokemon, TipoDoPokemon, ImagemDoPokemon, EspacoEntreItens, BotaoDetalhes, BotaoExcluir } from "./style";

export const Detalhes = () => {
    const {namePokemon} = useParams()
    console.log(namePokemon)
    const [id, setId] = useState("")
    const [name, setName] = useState("")
    const [types, setTypes] = useState([])
    const [pokemonImage, setPokemonImage] = useState("")


    const carregarPokemons = async() => {
        try{
            console.log("entrou")
            const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${namePokemon}`)
            console.log(response.data)
            setId(response.data.id)
            setName(response.data.name)
            setTypes(response.data.types)
            setPokemonImage(response.data.sprites.other.dream_world.front_default)
            // console.log("normal: ",response.data.sprites.other.dream_world.front_default)
            // console.log("Gif: ", response.data.sprites.versions["generation-v"]["black-white"].animated.front_default)
        } catch(erro){
            console.log("entrou")
            console.log(erro)
        }
    }
    console.log(name)
    useEffect(() => {
        carregarPokemons()
    },
    [namePokemon])
    console.log(types)
    return(
        <>
        {types.length > 0 &&
             <EstiloGeralDoCard key={name}>
                 <InfoDosPokemon type={types[0].type.name}>
                     <CaracteristicasDosPokemons>
                         <IdDoPokemon>#{id}</IdDoPokemon>
                         <NomeDoPokemon>{name} </NomeDoPokemon>
                         {types.length > 0 && types.map((uniqueType) => {
                             return <TipoDoPokemon type={uniqueType.type.name}>{uniqueType.type.name}</TipoDoPokemon>
                         })}
                     </CaracteristicasDosPokemons>
                     <EspacoEntreItens>
                         <BotaoDetalhes onClick={() => console.log("entrou")}>detalhes</BotaoDetalhes >
                         <BotaoExcluir onClick={() => console.log("entrou")}>Exluir</BotaoExcluir>
                     </EspacoEntreItens>
                      
                 </InfoDosPokemon>
                 <ImagemDoPokemon src={pokemonImage}/>
                 
             </EstiloGeralDoCard>
        }
</>
    ) 
}