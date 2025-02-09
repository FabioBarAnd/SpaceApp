import styled from "styled-components";
import EstilosGlobais from "./componentes/EstilosGlobais";
import Cabecalho from "./componentes/Cabecalho";
import BarraLateral from "./componentes/BarraLateral";
import Banner from "./componentes/Banner";
import Galeria from "./componentes/Galeria";
import { useState } from "react";
import ModalZoom from "./componentes/ModalZoom";
import fotos from './fotos.json'
import Footer from "./componentes/Footer";

const FundoGradiente = styled.div`
  background: linear-gradient(174.61deg, #041833 4.16%, #04244F 48%, #154580 96.76%);
  width: 100%;
  min-height: 100vh;
`

const Main = styled.div`
  display: flex;
  gap: 24px;
`

const AppContainer = styled.div`
  width: 1440px;
  margin: 0 auto;
  max-width: 100%;
`

const ConteudoGaleria = styled.section`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  `

const App = () => {
  const [fotosDaGaleria, setFotosDaGaleria] = useState(fotos);
  const [fotoSelecionada, setFotoSelecionada] = useState(null);

  const aoAlternarFavorito = (foto) => {
    if(foto.id === fotoSelecionada?.id) {
      setFotoSelecionada({
        ...fotoSelecionada,
        favorita: !fotoSelecionada.favorita        
      })
    }

    setFotosDaGaleria(fotosDaGaleria.map(fotoDaGaleria => {
      return {
        ...fotoDaGaleria,
        favorita: fotoDaGaleria.id === foto.id ? !foto.favorita : fotoDaGaleria.favorita
      }
    }))
  }

  return (
    <FundoGradiente>
      <EstilosGlobais/>
      <AppContainer>
        <Cabecalho/>
        <Main>
          <BarraLateral/>
          <ConteudoGaleria>
            <Banner/>
            <Galeria aoFotoSelecionada={foto => setFotoSelecionada(foto)} aoAlternarFavorito={aoAlternarFavorito} fotos={fotosDaGaleria}/>
          </ConteudoGaleria>
        </Main>
        <Footer/>
      </AppContainer>
      <ModalZoom foto={fotoSelecionada} aoFechar={() => setFotoSelecionada(null)} aoAlternarFavorito={aoAlternarFavorito}/>
    </FundoGradiente>
  )
}

export default App; 
