export default function NavBar(){
    return(
            <div className="header">
                <div className="menu-desktop">
                    <div className="logo">
                        <ion-icon name="logo-instagram"></ion-icon>
                        <p>|</p>
                        <img src="./img/menu/logo.png" alt="logo do Instagram"/>
                    </div>
                    <div className="pesquisa">
                        <input type="search" placeholder="Pesquisar"/>
                    </div>
                    <div className="icons-esquerda">
                        <ion-icon name="paper-plane-outline"></ion-icon>
                        <ion-icon name="compass-outline"></ion-icon>
                        <ion-icon name="heart-outline"></ion-icon> 
                        <ion-icon name="person-outline"></ion-icon> 
                    </div> 
                </div>
            </div>
    )
}