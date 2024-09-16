let section = document.getElementById("pesquisa");
let resultados = "";

for (let dado of equipamentos) {
    resultados += `
            <div class ="item-resultado">
                <h2>PATRIMÔNIO: ${dado.patrimonio}</h2>
                <p>TIPO: ${dado.tipo}</p>
                <p>Descrição: ${dado.descricao}</p>
                <p>MARCA: ${dado.marca}</p>
                <p>LOCALIDADE DO EQUIPAMENTO: ${dado.localidade}</p> 
            </div> 
        `

};
section.innerHTML = resultados;