function clicou(){
    document.getElementById("agradecimento").innerHTML = "Obrigado por clicar";
    //console.log(document.getElementById("agradecimento"));
}

function redirecionar(){
    window.open("https://github.com/DeividSouzaGIT");
    //window.location.href = "https://github.com/DeividSouzaGIT";
}

function trocar(elemento){
    elemento.innerHTML = "Obrigado por passar o mouse";
    //document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse";
    //alert("Trocar texto")
}
function voltar(elemento){
    elemento.innerHTML = "Passe o mouse aqui";
    //document.getElementById("mousemove").innerHTML = "Passe o mouse aqui";
    //alert("Trocar texto")
}


/*
function soma(n1, n2){
    return n1 + n2;
}

var validar = 0;

function validaIdade(idade){
    if (idade >= 18){
        validar = true
    }else{
        validar = false
    }
    return validar;
}

var idade = prompt("Qual sua idade?");
validaIdade(idade)
console.log(validar);
*/

//alert(soma(5, 10));

/*
var d = new Date();
alert(d)
*/

/*
var count;
for(count=0; count <= 5; count++){
    alert(count);
}
*/


/*
var count = 0;
while (count<= 5){
    console.log(count);
    alert(count);
    count++;
}
*/

/* 
var idade = prompt("Qual sua idade?");
if (idade >= 18){
    alert("Maior de idade");
}else{
    alert("Menor de idade");
};
*/


//var frutas = [{nome:"maça", cor:"vermelha"}, {nome:"uva", cor:"branca"}]
//console.log(frutas);
//alert(frutas[1].cor);

/*
var fruta = {nome:"maça", cor:"vermelha"}
console.log(fruta.nome);
alert(fruta.cor);
*/

//var list = ["maça", "péra", "uva"];
//list.push("laranja");
//list.pop();
//console.log(list.reverse());
//console.log(list.toString());
//console.log(list.join(" - "))


//var nome = "Olaf Santos";
//var n1 = 22;
//var n2 = 10;
//var frase = "Alemanhã melhor time do mundo!";
//alert(nome + " tem " + idade + " anos ");
//alert(idade + idade2);
//console.log(nome);
//console.log(n1 - n2);
//console.log(frase.toUpperCase());
//alert(frase.replace("Alemanhã", "Brasil"));