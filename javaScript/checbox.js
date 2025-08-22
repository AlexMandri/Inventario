const checkboxes = document.querySelectorAll('input[type="checkbox"]');

checkboxes.forEach(checkbox => {
    checkbox.addEventListener("change", function () {
        const label = this.parentElement;//seleciona o label seguinte
        if (this.checked) {
            label.className = 'selecionado';
            console.log(label);
        } else {
            label.className = 'naoSelecionado';
            console.log(label);

        }
    });
});
// console.log(checkboxes);