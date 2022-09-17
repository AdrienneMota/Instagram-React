function Story(prop){
        return(    
            <div className="story">
                <div>
                    <img src={prop.borda} alt="borda do storie"/>
                    <img src={prop.imagem} alt="9gag"/>     
                    </div>
                    <h1>{prop.nome}</h1>
            </div>
        )
}

export default function Stories(){
    
    const arrStory = [
        {
            borda: "./img/stories_background.jpg",
            imagem: "./img/stories/9gag 1.png",
            nome: "9gap"  
        },
        {
            borda: "./img/stories_background.jpg",
            imagem: "./img/stories/2.png",
            nome: "barked" 
        },
        {
            borda: "./img/stories_background.jpg",
            imagem: "./img/stories/3.png",
            nome: "filo" 
        },
        {
            borda: "./img/stories_background.jpg",
            imagem: "./img/stories/4.png",
            nome: "bolinho" 
        },
        {
            borda: "./img/stories_background.jpg",
            imagem: "./img/stories/5.png",
            nome: "meowed" 
        },
        {
            borda: "./img/stories_background.jpg",
            imagem: "./img/stories/6.png",
            nome: "etbr" 
        },
        {
            borda: "./img/stories_background.jpg",
            imagem: "./img/stories/7.png",
            nome: "respondeai" 
        },
        {
            borda: "./img/stories_background.jpg",
            imagem: "./img/stories/8.png",
            nome: "wawa" 
        }
    ] 

    return(
        <div className="stories">
            {arrStory.map(
                (p) => <Story borda={p.borda} imagem={p.imagem} nome={p.nome}  /> 
            )}
            <div className="seta">
                    <ion-icon name="chevron-forward-circle"></ion-icon>
            </div> 
        </div>
    )
}