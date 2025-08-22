function pesquisar() {
     const unidade = document.querySelectorAll('input[type="checkbox"]');
     const unidadeSelecionada =[];
     for(const checkbox of unidade){
        if (checkbox.checked){
            unidadeSelecionada.push(checkbox.value);
        }
     }
     console.log(unidadeSelecionada);
     return unidadeSelecionada;
}

