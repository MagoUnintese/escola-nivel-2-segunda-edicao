let valor1 = 100;
let valor2 = 52;
let resultado = 0;


console.log(fatorial(5));

let numeros = [1, 2, 3, 4, 5];

numeros.forEach(function(numero){
    console.log(numero);
});

let dobro = numeros.map(function(n) {
    return n * 2;
});

console.log(dobro);

let pares = numeros.filter(function(numero){
    return numero % 2 === 0;
});

console.log(pares)

const calculoDois = (a, b) => {
    soma(a, b);
    subtrair(a, b);
    multiplicacao(a, b);
    divisao(a, b);
}

const helloWorld = () => "Hello World";


function fatorial (a){
    if(a === 0 || a === 1){
        return 1;
    }
    return a * fatorial (a - 1);
}



const somaReturn = (a, b) => a+b;

console.log(somaReturn(valor1, valor2));

const soma = (a, b) => console.log(a+b);

const subtrair = (a, b) => console.log(a-b);

function multiplicacao (a, b){
    console.log(a * b);
}

function divisao (a, b){
    let resultado;
    resultado = a / b;
    console.log(resultado);
}


const exercicioUm = () => {
    let valorUm = 199.3;
    let valorDois = 120;
    console.log(valorUm + valorDois);
}

exercicioUm();

let vetorUm = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const exercicioDois = (vetor) => {
    let somaValores = 0;
    for (var x = 0; x < vetor.length; x++){
        somaValores =+ vetor[x];
    }
    console.log(somaValores/vetor.length);
}

exercicioDois(vetorUm);

const exercicioTres = (vetor) => {
    for (var x = 0; x < vetor.length; x++){
        if (vetor[x] <= 1){
            console.log('Valor ', vetor[x],' não é primo');
        } else if (vetor[x] === 2){
            console.log('Valor ', vetor[x],' é um número primo.');
        } else if (vetor[x] === 3){
            console.log('Valor ', vetor[x],' é um número primo.');
        }else if ((vetor[x] % vetor[x] == 0) && (vetor[x] % 1 == 0) && ((vetor[x]) % 2 != 0) && (vetor[x] % 3 != 0)){
            console.log('Valor ', vetor[x],' é um número primo.');
        } else{
             console.log('Valor ', vetor[x],' não é primo');
        }
    }
}

exercicioTres(vetorUm);

const exercicioQuatro = (jogador1, jogador2) => {
    let somaValoresJogo = 0;
    somaValoresJogo = jogador1 + jogador2;
    if (somaValoresJogo % 2 === 0){
        console.log("O resultado é par e o valor total é:", somaValoresJogo);
    } else {
        console.log("O resultado é impar e o valor é:", somaValoresJogo);
    }
}

exercicioQuatro(4, 2);

const exercicioCinco = (n) => {
    if (n === 0){
        console.log ("O N-ésimo número é 0");
    } else if (n === 1){
        console.log("O N-ésimo número é 1");
    } else {
        let termoAtual = 0;
        let proximoTermo = 1;
        let somaTermos = 0;
        for (let x = 2; x < n; x++){
            somaTermos = termoAtual + proximoTermo;
            termoAtual = proximoTermo;
            proximoTermo = somaTermos;
        }
        console.log("O N-ésimo número é", proximoTermo); 
    }
}

exercicioCinco(3);

const meuCarro = {
    cor: 'vermelho',
    marca: 'Ford',
    ligado: false,

    ligar:function(){
        this.ligado = true;
        console.log("Carro ligado");
    },

    desligar:function(){
        this.ligado = false;
        console.log("Carro desligado");
    }
}

meuCarro.ligar();
console.log("Meu carro é da cor:", meuCarro.cor);
meuCarro.desligar();

class Pessoa {
    constructor(nome, idade, altura){
        this.nome = nome;
        this.idade = idade;
        this.altura = altura;
    }

    apresentar(){
        console.log("Olá, meu nome é ", this.nome, ", minha idade é ", this.idade);
    }
}

const dirceu = new Pessoa('Dirceu', 25, 1.77);

dirceu.apresentar();

const joao = new Pessoa('João', 27, 1.73);

joao.apresentar();
dirceu.apresentar();
dirceu.apresentar();
dirceu.apresentar();


// Início HTML + CSS + JS

const mudarTexto = () =>{
    const texto = document.getElementById('hello');
    texto.innerHTML = 'Bye World<p>Texto a mais</p>';
}

const modoNoturno = document.getElementById('botaoModoNoturno');
modoNoturno.addEventListener('click', () => {
    document.body.classList.toggle('modoNoturno');
});

const carrosselSlide = document.querySelector('.slideCarrossel');
const carrosselImagens = document.querySelectorAll('.slideCarrossel img');
const avancaBtn = document.querySelector('.avancaCarrossel');
const voltaBtn = document.querySelector('.voltaCarrossel');

let indice = 0;
let larguraSlide = carrosselImagens[0].clientWidth;

function moveSlide(){
    carrosselSlide.style.transform = 'translateX(' + (-larguraSlide * indice) +'px)'
}

avancaBtn.addEventListener('click', () => {
    if(indice >= carrosselImagens.length - 1){
        return;
    }
    indice++;
    moveSlide();
});

voltaBtn.addEventListener('click', () => {
    if(indice <= 0){
        return;
    }
    indice--;
    moveSlide();
});

const meuFormulario = document.getElementById('meuFormulario');
const nomeInput = document.getElementById('nome');
const emailInput = document.getElementById('email');
const erroNome = document.getElementById('erroNome');
const erroEmail = document.getElementById('erroEmail');
const mensagemFormulario = document.getElementById('mensagemFormulario');

const padraoEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

meuFormulario.addEventListener('submit', (event) => {
    event.preventDefault();
    let eValido = true;

    if (nomeInput.value.trim() === ''){
        erroNome.textContent = 'O nome é obrigatório.';
        eValido = false;
    } else {
        erroNome.textContent = '';
    }

    if(emailInput.value.trim() === ''){
        erroEmail.textContent = 'O e-mail é obrigatório.';
    } else if(!padraoEmail.test(emailInput.value)){
        erroEmail.textContent = 'Por favor, insira um e-mail válido.';
        eValido = false;
    } else {
        erroEmail.textContent = '';
    }

    if (eValido){
        mensagemFormulario.textContent = "Formulário enviado com sucesso.";
        mensagemFormulario.style.color = 'green';
        meuFormulario.reset();
    } else {
        mensagemFormulario.textContent = "Por favor, corrija os dados do formulário.";
        mensagemFormulario.style.color = 'red';
    }
});


const testeParallax = document.getElementById('parallaxJs');

window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;

    testeParallax.style.transform = 'translateY(${scrollY * 0.5}px) translateX(-50%)';
})

