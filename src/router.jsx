import { BrowserRouter, Routes, Route } from "react-router-dom";

import Sobre from "./pages/sobre";
import Inicio from "./pages/inicio";
import Exer02 from "./pages/ex02";
import Exer04 from "./pages/ex04";
import Exer05 from "./pages/ex05";
import Exer10 from "./pages/ex10";
import Exer11 from "./pages/ex11";

export default function Navegacao() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={ <Inicio /> } />
                <Route path="/sobre" element={ <Sobre/> } />
                <Route path="/ex02" element={ <Exer02 /> } />
                <Route path="/ex04" element={ <Exer04 /> } />
                <Route path="/ex05" element={ <Exer05 /> } />
                <Route path="/ex10" element={ <Exer10 /> } />
                <Route path="/ex11" element={ <Exer11 /> } />
            </Routes>
        </BrowserRouter>
    )

}