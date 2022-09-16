import Stories from "./Stories"
import Posts from "./Posts"
import SideBar from "./SideBar"

export default function Corpo(){
    return(
        <div className="container">
            <div className="conteudo">
                <Stories/>
                <Posts/>
            </div>
                <SideBar/>
        </div>
    )
}