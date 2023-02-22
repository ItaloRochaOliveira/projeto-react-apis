import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "../pastas/Home/Home"
import { Pokedex } from "../pastas/Pokedex/Pokedex"
import { Detalhes } from "../pastas/Detalhes"
import { ErroPage } from "../pastas/ErroPage";

export const Router = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/pokedex" element={<Pokedex />}/>
                <Route path="/detalhes/:id-pokemon" element={<Detalhes />}/>
                <Route path="*" element={<ErroPage />}/>
            </Routes>
        </BrowserRouter>
    )
}