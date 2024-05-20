import {styled} from "styled-components";
import search from '../CampoTexto/search.png'

const ContainerEstilizado = styled.div`
    position: relative;
    display: inline-block;
`;

const Lupa = styled.img`
    position: absolute;
    top: 10px;
    right: 10px;
    width: 38px;
    height: 38px; 
`

const InputEstilizado = styled.input`
    height: 56px;
    width: 566px;
    padding: 12px 16px;
    border: 2px solid;
    border-radius: 10px;
    border-color: #C98CF1;
    box-sizing: border-box;
    background: transparent;
    font-size: 20px;
    color: #D9D9D9;
    line-height: 20px;
`

const CampoTexto = (props) => {
    return(
        <ContainerEstilizado>
            <InputEstilizado placeholder="O que você procura?" {...props}/> 
            <Lupa src={search} alt="Lupa"/>
        </ContainerEstilizado>
    )
}

export default CampoTexto;
