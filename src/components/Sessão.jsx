function Sessão({ Titulo, Descricao, HorárioSessão, DataSessão, LocSessão}) {
    return (
        <div className="Sessão">
        <h1>{Titulo}</h1>
        <p>{Descricao}</p> 
        <p>{HorárioSessão}</p> 
        <p>{DataSessão}</p> 
        <p>{LocSessão}</p> 
        </div>
    )
}

export default Sessão;  