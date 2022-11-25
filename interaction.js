let ITENS_LOJA = [
    {
        nome: "Bola da Copa",
        preco: 86.30,
        url_img: "./img/bola_copa.webp",
        descricao: "Bola utilizada na Copa do Mundo, idela para utilizar em campo e colecionar"
    },
    {
        nome: "Carrinho da Hot Wheels",
        preco: 5.80,
        url_img: "./img/carro_hotwheels.jpeg",
        descricao: "Carrinho para dar de presentes para crianças ou colecionar"
    },
    {
        nome: "Chinelo",
        preco: 19.99,
        url_img: "./img/chinelo.webp",
        descricao: "Chinelo para se utilizar em qualquer lugar"
    },
    {
        nome: "Escorredor de Louça",
        preco: 15.20,
        url_img: "./img/escorredor_louca.webp",
        descricao: "Utilizando para ajudar no processo de secagem dos utensilios"
    },
    {
        nome: "Espada Medieval",
        preco: 200.18,
        url_img: "./img/espada_medieval.png",
        descricao: "Utilizada em batalhar para neutralizar o inimigo ou como item de decoração"
    },
    {
        nome: "Guitarra",
        preco: 1980.99,
        url_img: "./img/guitarra.webp",
        descricao: "Otima para utilizar em bandas de hard rock"
    },
    {
        nome: "Toalha de Banho",
        preco: 9.99,
        url_img: "./img/toalha_banho.webp",
        descricao: "Boa para se secar apos o banho"
    },
    {
        nome: "Vinho",
        preco: 59.90,
        url_img: "./img/vinho.webp",
        descricao: "Vinho que harmoniza muito bem com carnes vermelhas "
    }
]
let tamanho_lista = ITENS_LOJA.length;

for(i=0; i < tamanho_lista; i++){

    exibit_itens(ITENS_LOJA[i])
}

function exibit_itens(ITENS_LOJA) {
    const  sessao_vendas = document.getElementById("sessao-venda");
    const sessao_pai_dos_itens = document.getElementById("sessao-pai-de-todos");
    const itens_section = document.createElement("section");
    itens_section.className = "itens_section"

    let conteudo =`<div class="itens-header">
                        <img src="${ITENS_LOJA.url_img}" alt="">
                        <h1>${ITENS_LOJA.nome}</h1>
                        <p>preco: R$${ITENS_LOJA.preco}</p>
                    </div>
                    <div class="itens-footer">
                        <h1>Descricao:</h1>
                        <p>${ITENS_LOJA.descricao}</p>
                    </div>`

    itens_section.innerHTML = conteudo;
    sessao_pai_dos_itens.appendChild(itens_section);
    sessao_vendas.appendChild(sessao_pai_dos_itens);
    

}





