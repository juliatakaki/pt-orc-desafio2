import { BrowserRouter, Route, Routes } from "react-router-dom"

import Home from "./pages/Home/Home"
import Multiplayer from "./pages/multiplayer/Multiplayer"
import Singleplayer from "./pages/singleplayer/Singleplayer"
import Nomes2p from "./pages/nomes2p/Nomes2p"
import Nome1p from "./pages/nome1p/Nome1p"


function AppRoutes(){

    return(
       <BrowserRouter>
            <Routes>
                <Route path="/nomes2p" element={<Nomes2p />}></Route>
                <Route path="/nome1p" element = {<Nome1p />}></Route>
                <Route path="/multiplayer" element={<Multiplayer />}></Route>
                <Route path="/singleplayer" element={<Singleplayer />}></Route>
                <Route path="/" element={<Home />}></Route>
            </Routes>
       </BrowserRouter>
    )
}
export default AppRoutes