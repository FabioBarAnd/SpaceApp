import styled from "styled-components";

const Imagem = styled.img`
    border-radius: 15px;
    margin-bottom: 24px;
`

const Populares = ({foto}) => {
    return (
        <Imagem src={foto}/>
    )
}

export default Populares;