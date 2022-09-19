function Suggestion(prop) {
    return (
        <div className="sugestao-secundaria">
            <img src={prop.imagem}/>
            <div>
                <p>{prop.nome}</p>
                <p>Segue voce</p>
            </div>
            <p>Seguir</p>
        </div>
    )
}

export default function Sugestao() {
    const listaSugestao = [
        {
            imagem: "./img/sidebar/sugestao-secundaria-1.png",
            nome: "bad.vibes.memes",
        },
        {
            imagem: "./img/sidebar/1.png",
            nome: "pintinho",
        },
        {
            imagem: "./img/sidebar/sugestao-secundaria-1.png",
            nome: "beija-flor",
        },
        {
            imagem: "./img/sidebar/3.png",
            nome: "roxinho",
        },
        {
            imagem: "./img/sidebar/4.png",
            nome: "gatinho",
        }
    ]

    return (
        <div>
            <div className="outras-sugestoes">
                <div className="titulo-sugestoes">
                    <p>Sugestões para você</p>
                    <p>Ver tudo</p>
            </div>
            {listaSugestao.map(
                (p) => <Suggestion nome={p.nome} imagem={p.imagem}/>
            )}
            </div>
            <div className="sobre">
                <p>Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade •
                    Termos • Localizações • Contas mais relevantes • Hashtags •
                    Idioma</p>
                <p>
                    © 2021 INSTAGRAM DO FACEBOOK
                </p>
            </div>
        </div>
    )
}