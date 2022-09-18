import React from "react"

function User(prop) {
    return (
        <div className="sugestao-principal">
            <img src={prop.img} alt="sugestao-principal" width="56px" height="56px" onClick={prop.mudaImagem}/>
            <div>
                <p>catanacomics</p>
                <p>{prop.name} <span onClick={prop.mudaNome}>mudanome</span></p>
            </div>
        </div>
    )
}

export default function Usuario() {
    const defaultUser = { imgUser: "./img/sidebar/catanacomics-principal.png", nameUser: "Catana" }
    const [user, setUser] = React.useState(defaultUser)

    const changeUsername = () => {
        const name = prompt("Digite seu nome: ")
        if (!name) {
            alert('Nome não válido')
            return
        }
        const newUser = {}
        Object.assign(newUser, defaultUser)
        newUser.nameUser = name
        setUser(newUser)
        console.log(newUser)
    }

    const ChangeImagemUser = () => {
        const img = prompt("Digite o caminho da imagem")
        if(!img){
            alert('A imagem não é válido')
            return
        }
        const newUser = {}
        Object.assign(newUser, defaultUser)
        newUser.imgUser = img
        setUser(newUser)
        console.log(newUser)
    }

    return (
        <div>
            <User img={user.imgUser} name={user.nameUser} mudaNome={changeUsername} mudaImagem={ChangeImagemUser}/>
        </div>
    )
}