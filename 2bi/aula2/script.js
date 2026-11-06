async function buscarCep() {
    try {
        const response = await fetch(`https://viacep.com.br/ws/85806087/json/`);
        if (!response.ok) {
            throw new Error(`Erro HTTP: ${response.status}`);
        }
        const dados = await response.json();
        if (dados.erro) {
            throw new Error("CEP não encontrado");
        }
        return dados;
    } catch (erro) {
        console.error(erro.message);
    } finally {
        console.log("Busca finalizada");
    }
}

buscarCep().then((dados) => {
    console.log(dados)
});

const obj = {
    nome: "Gabriel",
}

obj.nome