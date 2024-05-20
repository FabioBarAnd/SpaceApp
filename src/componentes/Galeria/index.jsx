import styled from "styled-components";
import Titulo from "../Titulo";
import Tags from "./Tags";
import Imagem from "./Imagem";
import populares from '../../populares.json'
import Populares from "./Populares";

const GaleriaContainer = styled.div`
    display: flex;
    gap: 24px;
`

const SecaoFluida = styled.section`
    flex-grow: 1;
`

const ImagensGrid = styled.section`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 24px;
`

const SecaoPopulares = styled.div`
    display: flex;
    flex-direction: column;
`

const BtnVerMais = styled.button`
    height: 56px;
    width: 212px;
    border: 2px solid;
    border-radius: 10px;
    border-color: #D9D9D9;
    box-sizing: border-box;
    background: transparent;
    font-size: 20px;
    color: #D9D9D9;
    transition: background-color 0.3s ease;
    &:hover {
      border-color: #C98CF1;
    }
`

const Galeria = ({fotos = [], aoFotoSelecionada, aoAlternarFavorito}) => {    
    return(
        <>
            <Tags/>
            <GaleriaContainer>
                <SecaoFluida>
                    <Titulo>Navegue pela galeria</Titulo>
                    <ImagensGrid>
                        {fotos.map(foto => <Imagem 
                            aoZoomSolicitado={aoFotoSelecionada}
                            aoAlternarFavorito={aoAlternarFavorito}
                            key={foto.id}
                            foto={foto}
                        />)}
                    </ImagensGrid>
                </SecaoFluida>
                <SecaoPopulares>
                    <Titulo>Populares</Titulo>
                    {populares.map(popular => <Populares 
                        foto={popular.path}
                        key={popular.id}
                    />)}
                    <BtnVerMais>Ver Mais</BtnVerMais>
                </SecaoPopulares>
            </GaleriaContainer>
        </>
    )
}

export default Galeria;