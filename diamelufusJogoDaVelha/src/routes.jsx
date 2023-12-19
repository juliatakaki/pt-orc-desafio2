import { BrowserRouter, Route, Routes } from "react-router-dom"
import Game from "./pages/game/Game"
import Home from "./pages/Home/Home"
import Nomes2p from "./pages/nomes2p/Nomes2p"


function AppRoutes(){

    return(
       <BrowserRouter>
            <Routes>
                <Route path="/nomes2p" element={<Nomes2p />}></Route>
                <Route path="/game" element={<Game />}></Route>
                <Route path="/" element={<Home />}></Route>

            </Routes>
       </BrowserRouter>
    )
}
export default AppRoutes