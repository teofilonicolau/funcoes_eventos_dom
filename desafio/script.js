let titulo = document.getElementById('titulo');
let botaoAdicionarItem = document.getElementById('adicionarItem');
let botaoRemoverItem = document.getElementById('removerItem');
let lista = document.getElementById('lista');

let itens = Array.from(lista.children).map(item => item.textContent);


function renderizarLista() {
    lista.innerHTML = ''; 

    itens.forEach((item) => {
        let novoItem = document.createElement('li');
        novoItem.innerHTML = item;
        lista.appendChild(novoItem);
    });
}


function adicionarItem() {
    let novoItemTexto = `Item ${itens.length + 1}`;
    itens.push(novoItemTexto); 

    renderizarLista(); 

    titulo.innerHTML = 'Novo item adicionado!';
    titulo.style.color = 'green';
}


function removerItem() {
    if (itens.length > 0) {
        itens.pop(); 
        renderizarLista(); 

        titulo.innerHTML = 'Item removido!';
        titulo.style.color = 'red';
    } else {
        titulo.innerHTML = 'Não há mais itens para remover!';
        titulo.style.color = 'gray';
    }
}


renderizarLista();


botaoAdicionarItem.addEventListener('click', adicionarItem);
botaoRemoverItem.addEventListener('click', removerItem);
