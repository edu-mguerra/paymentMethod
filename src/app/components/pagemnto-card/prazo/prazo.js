export const Prazo = () => {

    const prazoPag = () => {
        let dataAtual = new Date();

        
        dataAtual.setDate(dataAtual.getDate() + 2); 
        dataAtual.setHours(dataAtual.getHours() + 2); 

       
        let dia = ('0' + dataAtual.getDate()).slice(-2); 
        let mes = ('0' + (dataAtual.getMonth() + 1)).slice(-2);
        let ano = dataAtual.getFullYear(); 
        let hora = ('0' + dataAtual.getHours()).slice(-2);
        let minuto = ('0' + dataAtual.getMinutes()).slice(-2); 

        // Retorna a data formatada
        return `${dia}/${mes}/${ano} - ${hora}:${minuto}`;
    }; // colocar em um componente 
    return(
        <p>Prazo de pagamento:<br /> <span>{prazoPag()}</span></p>  

    )
}