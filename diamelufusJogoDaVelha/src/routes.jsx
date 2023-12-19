import { BrowserRouter, Route, Routes } from "react-router-dom"
import Multiplayer from "./pages/game/Multiplayer"
import Singleplayer from "./pages/game/Singleplayer"
import Home from "./pages/Home/Home"
import Nomes2p from "./pages/nomes2p/Nomes2p"


function AppRoutes(){

    return(
       <BrowserRouter>
            <Routes>
                <Route path="/nomes2p" element={<Nomes2p />}></Route>
                <Route path="/multiplayer" element={<Multiplayer />}></Route>
                <Route path="/singleplayer" element={<Singleplayer />}></Route>
                <Route path="/" element={<Home />}></Route>
            </Routes>
       </BrowserRouter>
    )
}
export default AppRoutes