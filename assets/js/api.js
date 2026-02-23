async function buscarDados() {

    try {
        const url = './data/profile.json';

        const resposta = await fetch(url);
        const dadosFormatadosEmJson = await resposta.json();

        return dadosFormatadosEmJson;

    } catch (error) {

        console.log("Ocorreu um erro ao buscar os dados: ", error);

    }finally {

        console.log("Processo de busca de dados finalizado.");
    }

}

