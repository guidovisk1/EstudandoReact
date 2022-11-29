import Titulo from "../../components/Titulo";

export default function usandoTitulo(){
    return(
        <Titulo
        principal = 'Pagina de cadastro'
        secundario = 'Incluir,alterar,excluir objetos'
        pequeno = {true}
        />
    )
}