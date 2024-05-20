import styled from "styled-components";

const BlocoGaleria = styled.figure`
    width: ${props => props.$expandida ? '90%' : '460px'};
    max-width: 100%;
    margin: 0;
    display: flex;
    flex-direction: column;    
    & > img {
        max-width: 100%;   
        border-radius: 20px 20px 0px 0px; 
    }
    
    FigCaption {
        border-radius: 0px 0px 20px 20px;
        max-width: 100%;  
        box-sizing: border-box;
        background: #001634;
        color: #fff;
        margin-bottom: 16px;
        padding: 20px;
        h3 {
            font-size: 20px;
            font-weight: 700;
            margin: 0;
        }
        h4 {
            font-size: 16px;   
            margin: 0; 
        }
    }
`

const Rodape = styled.footer`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const Icones = styled.div`
    display: flex;
`

const BotaoIcone = styled.button`
    margin-left: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: transparent;
    border: none;
    cursor: pointer;
`

const Imagem = ({ expandida = false, aoZoomSolicitado, aoAlternarFavorito, foto, imagem }) => {
    const iconeFavorito = foto.favorita ? "/icones/favorito-ativo.png" : "/icones/favorito-inativo.png";

    return (
        <BlocoGaleria $expandida={expandida} id={`foto-${foto.id}`}>
            <img src={foto.path} alt=""></img>
            <figcaption>
                <h3>{foto.titulo}</h3>
                <Rodape>
                    <h4>{foto.fonte}</h4>
                    <Icones>
                        <BotaoIcone onClick={() => aoAlternarFavorito(foto)}>
                            <img src={iconeFavorito} alt="Icone de favorito" />
                        </BotaoIcone>
                        {!expandida && <BotaoIcone aria-hidden={expandida} onClick={() => aoZoomSolicitado(foto)}>
                            <img src="/icones/expandir.png" alt="Icone de expandir" />
                        </BotaoIcone>}
                    </Icones>
                </Rodape>
            </figcaption>
        </BlocoGaleria>
    )
}

/*$expandida={expandida} id={`foto-${foto.id}`*/

export default Imagem;