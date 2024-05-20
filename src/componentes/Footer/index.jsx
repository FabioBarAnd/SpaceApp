import styled from "styled-components";

const FooterEstilizado = styled.footer`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #001634;
    padding: 15px 240px;
    margin-top: 60px;
    div {
        padding-left: 0;
        display: flex;
        justify-content: space-between;
        gap: 34px;
        list-style: none;
    } 

    p {
        color: #d9d9d9;
    }
`

const Footer = () => {
    return(
        <FooterEstilizado>
            <div>
                <a href="#"><img src="./imagens/sociais/facebook.svg" alt="Facebook"/></a>
                <a href="#"><img src="./imagens/sociais/instagram.svg" alt="instagram"/></a>
                <a href="#"><img src="./imagens/sociais/twitter.svg" alt="twitter"/></a>
            </div>
            <p>Desenvolvido por Fabio com a ajuda da Alura.</p>
        </FooterEstilizado>
    )
}

export default Footer;