import React from "react"

function Post(prop){
    return(
        <div className="post">
                    <div className="nome-perfil">
                        <div>
                            <div className="titulo-perfil">
                            <img src={prop.imagemPerfil} alt="nome-perfil"/>
                            <p>{prop.nomePerfil}</p>
                            </div>
                            <ion-icon className="pontinhos" name="ellipsis-horizontal-outline"></ion-icon>
                        </div>
                    </div>
                    <div className="post-midia">
                        <img src={prop.imagemPost} />
                    </div>
                    <div className="icones-post">
                        <div className="icons">
                            <ion-icon name={prop.iconeCoracao}></ion-icon>
                            <ion-icon name={prop.iconeChat}></ion-icon>
                            <ion-icon name={prop.iconeEnviar}></ion-icon>
                        </div>
                        <div className="buttom-salvar" onClick={()=>{ prop.salvar(prop.chave) }}>
                            <ion-icon name={prop.iconeSalvar}></ion-icon>
                        </div>
                    </div>
                    <div className="curtido-por">
                    <img src={prop.imagemCurtidospor}/>
                    <p>Curtido por <strong>respondeai</strong> e <strong>outras {prop.qntCurtidospor} pessoas</strong></p>
                    </div>
                </div>
    )
}

export default function Posts(){
    
    const listaPost = [
        {
            imagemPerfil: "./img/posts/post2/barked 2.png",
            nomePerfil: "barked",
            imagemPost: "./img/posts/post2/dog 1.png",
            iconeCoracao: "heart-outline",
            iconeChat: "chatbubble-outline",
            iconeEnviar: "paper-plane-outline",
            iconeSalvar: "bookmark-outline",
            imagemCurtidospor: "./img/posts/post1/respondeai 2.png",
            qntCurtidospor: "1",
            key: +(new Date()),//criando um codigo para cada post
            isSaved: false
        }
    ]
    
    const [lista, setlista] = React.useState(listaPost)
    const onSave = (key)=>{
        const index = lista.findIndex((p) =>  p.key === key)
        if(index<0){
            return
        }
        const post = lista[index]
        post.isSaved = !post.isSaved

        if(post.isSaved){
            post.iconeSalvar = "bookmark"
        }else{
            post.iconeSalvar = "bookmark-outline"
        }

        const copyList = []
        Object.assign(copyList, lista)
        copyList[index] = post
        setlista(copyList)
    }

    return(
        <div className="posts">
            {
                lista.map(
                    (p) => <Post imagemPerfil = {p.imagemPerfil} nomePerfil={p.nomePerfil} imagemPost = {p.imagemPost} iconeCoracao={p.iconeCoracao} iconeChat={p.iconeChat} iconeEnviar={p.iconeEnviar} iconeSalvar={p.iconeSalvar} imagemCurtidospor={p.imagemCurtidospor} qntCurtidospor = {p.qntCurtidospor} salvar={onSave} chave={p.key}/>
                )
            }        
        </div>
    )
}