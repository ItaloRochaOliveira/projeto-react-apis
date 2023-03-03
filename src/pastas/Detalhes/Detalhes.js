import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { EstiloGeralDoCard, InfoDosPokemon, CaracteristicasDosPokemons, NomeDoPokemon, IdDoPokemon, TipoDoPokemon, ImagemDoPokemon, EspacoEntreItens, BotaoDetalhes, BotaoExcluir } from "./style";
import { usePokemon } from "../../customHooks/usePokemon";

export const Detalhes = () => {
    const {namePokemon} = useParams()
   
    const [data, carregando, erro] = usePokemon(`https://pokeapi.co/api/v2/pokemon/`, namePokemon, {})
    
    return(
        <>
        {data.name !== undefined &&
             <EstiloGeralDoCard key={data.name}>
                 <InfoDosPokemon type={data.types[0]?.type.name}>
                     <CaracteristicasDosPokemons>
                         <IdDoPokemon>#{data.id}</IdDoPokemon>
                         <NomeDoPokemon>{data.name} </NomeDoPokemon>
                         {data.types?.length && data.types.map((uniqueType) => {
                             return <TipoDoPokemon type={uniqueType.type.name}>{uniqueType.type.name}</TipoDoPokemon>
                         })}
                     </CaracteristicasDosPokemons>
                     <EspacoEntreItens>
                         <BotaoDetalhes onClick={() => console.log("entrou")}>detalhes</BotaoDetalhes >
                         <BotaoExcluir onClick={() => console.log("entrou")}>Exluir</BotaoExcluir>
                     </EspacoEntreItens>
                      
                 </InfoDosPokemon>
                 <ImagemDoPokemon src={data.sprites.other.dream_world.front_default}/>
                 
             </EstiloGeralDoCard>
        }
</>
    ) 
}