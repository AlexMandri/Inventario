document.getElementById("btn-pesquisar").addEventListener("click", function (event) {
    event.preventDefault();

    let section = document.getElementById("pesquisa");
    let resultados = "";
    let campoPesquisa = document.getElementById("input-pesquisa").value.trim().toLocaleLowerCase();

    const unidadeSelecionada = [];
    const checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');
    checkboxes.forEach(checkbox => {
        unidadeSelecionada.push(checkbox.value.toLocaleLowerCase());
    });

    let equipamentosEncontrados = [];
    // Primeiro, filtre os equipamentos com base na pesquisa de texto
    if (campoPesquisa) {
        equipamentosEncontrados = equipamentos.filter(dado =>
            dado.patrimonio.toLocaleLowerCase().includes(campoPesquisa) ||
            dado.tipo.toLocaleLowerCase().includes(campoPesquisa) ||
            dado.marca.toLocaleLowerCase().includes(campoPesquisa) ||
            dado.tags.toLocaleLowerCase().includes(campoPesquisa)
        );
    } else {
        // Se a pesquisa de texto estiver vazia, considere todos os equipamentos
        equipamentosEncontrados = equipamentos;
    }
    // Em seguida, filtre o resultado com base nas unidades selecionadas, se houver
    if (unidadeSelecionada.length > 0) {
        equipamentosEncontrados = equipamentosEncontrados.filter(dado =>
            unidadeSelecionada.includes(dado.localidade.toLocaleLowerCase())
        );
    }
    // Agora, crie a string de resultados a partir dos equipamentos filtrados
    if (equipamentosEncontrados.length > 0) {
        equipamentosEncontrados.forEach(dado => {
            resultados += `
                <div class="item-resultado">
                    <h2><b>PATRIMÔNIO:</b> ${dado.patrimonio}</h2>
                    <p><b>TIPO:</b> ${dado.tipo}</p>
                    <p><b>DESCRIÇÃO:</b> ${dado.descricao}</p>
                    <p><b>MARCA:</b> ${dado.marca}</p>
                    <p><b>LOCALIDADE DO EQUIPAMENTO:</b> ${dado.localidade}</p> 
                </div> 
            `;
        });
    } else {
        resultados = `
            <div class="item-resultado">
                <h2>Nenhum resultado encontrado.</h2>
            </div>
        `;
    }

    section.innerHTML = resultados;

});