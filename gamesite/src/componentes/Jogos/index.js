import './Jogos.css'

const jogos = ({ nome, imagem }) => {
    return (<div className ='jogos'>
        <div className = 'cabecalho'>
            <img src={imagem} alt={nome}/>
        </div>
        <div className='rodape'>
            <h4>{nome}</h4>
        </div>
    </div>)
}

export default Jogos