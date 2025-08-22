document.getElementById("btn-pesquisar").addEventListener("click", function(event){
    event.preventDefault();
    let section = document.getElementById("pesquisa");
    let resultados = "";
    let localidade ="";
    let patrimonio ="";
    let tipo = "";
    let tags ="";
    let campoPesquisa = document.getElementById("input-pesquisa").value;

    const unidade = document.querySelectorAll('input[type="checkbox"]');
    const unidadeSelecionada =[];
    for(const checkbox of unidade){
        if (checkbox.checked){
            unidadeSelecionada.push(checkbox.value);
        }
    }

    if(unidadeSelecionada.length === 0 && !campoPesquisa){
        resultados += `
            <div class ="item-resultado">
                <h2>Pesquisa vazia</h2> 
            </div> 
        `
        section.innerHTML = resultados;
        return
    }
    campoPesquisa = campoPesquisa.toLocaleLowerCase();

    for (let dado of equipamentos) {
        // localidade = dado.localidade.toLowerCase();
        // tags = dado.tags.toLowerCase();
        for(let local of unidadeSelecionada){
            console.log(local);
        }
        patrimonio = dado.patrimonio;
        tipo = dado.tipo.toLocaleLowerCase();
        
        if(patrimonio.includes(campoPesquisa) || tipo.includes(campoPesquisa)){
            resultados += `
                <div class ="item-resultado">
                    <h2>PATRIMÔNIO: ${dado.patrimonio}</h2>
                    <p>TIPO: ${dado.tipo}</p>
                    <p>Descrição: ${dado.descricao}</p>
                    <p>MARCA: ${dado.marca}</p>
                    <p>LOCALIDADE DO EQUIPAMENTO: ${dado.localidade}</p> 
                </div> 
            `
        }
        

    };
    section.innerHTML = resultados;
});
// document.getElementById("btn-pesquisar").addEventListener("click", function(event){
//     event.preventDefault();
//     let section = document.getElementById("pesquisa");
//     let resultados = "";

//     for (let dado of equipamentos) {
      
//         resultados += `
//             <div class ="item-resultado">
//                 <h2>PATRIMÔNIO: ${dado.patrimonio}</h2>
//                 <p>TIPO: ${dado.tipo}</p>
//                 <p>Descrição: ${dado.descricao}</p>
//                 <p>MARCA: ${dado.marca}</p>
//                 <p>LOCALIDADE DO EQUIPAMENTO: ${dado.localidade}</p>
//             </div>
//         `

//     };
    
//     section.innerHTML = resultados;
// });

