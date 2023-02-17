import React from "react";
import { pokemon } from "../../img/img"
import { HeaderEstilizado, HeaderLogo } from "./styled";

export const Header = () => {
    return(
        <HeaderEstilizado>
            <HeaderLogo src={pokemon}/>
        </HeaderEstilizado>
    ) 
}