import Usuario from "./Usuario"
import Sugestao from "./Sugestao"

export default function SideBar(){
    return(
        <div className="sidebar">
            <Usuario/>
            <Sugestao/>          
        </div>
    )
}