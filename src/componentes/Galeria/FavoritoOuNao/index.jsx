const FavoritoOuNao = ({children, iconeAtivo, iconeInativo, ativo = false}) => {
    return(
        <ItemIcone $ativo={ativo}>
            <img src={ativo ? iconeAtivo : iconeInativo}/>
            {children}
        </ItemIcone>
    )
}  

export default FavoritoOuNao;