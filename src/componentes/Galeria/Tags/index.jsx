import styled from 'styled-components';
import tags from './tags.json'

const TagsOpcoes = styled.div`
    display: flex;
    gap: 24px;
`

const Texto = styled.p`
    font-size: 24px;
    color: #D9D9D9;
    margin-right: 28px;
    margin: 10px 8px;
`

const Botao = styled.button`
    border-radius: 10px;
    font-size: 24px;
    color: #fff;
    background: rgba(217, 217, 217, 0.3);
    box-sizing: border-box;
    border: 2px solid transparent;
    transition: background-color 0.3s ease;
    &:hover {
      border-color: #C98CF1;
    }
`

const Tags = () => {
    return(
        <TagsOpcoes>
            <Texto>Busque por tags:</Texto>
            {tags.map(tag => <Botao key={tag.id}>{tag.titulo}</Botao>)}
        </TagsOpcoes>
    )
} 

export default Tags;