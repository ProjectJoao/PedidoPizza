'use strict';
//variaveis
let somaMussarela = 0;
let somaMista = 0;
let somaCalabresa = 0;
let vendaMussarela = 0.00;
let vendaMista = 0.00;
let vendaCalabresa = 0.00;

let Chocolate = 10.00;
let Morango = 15.00;
let Banana = 0;
let Guarana = 0.00;
let Agua = 0.00;
let Suco = 0.00;


let btnCompra = document.getElementById('comprar');
let btnEstorno = document.getElementById('estorno');
let btnPLanilha = document.getElementById('export');

//eventos
btnVendas.addEventListener('click',comprei,false);
btnEstorno.addEventListener('click',estorno,false);
btnPLanilha.addEventListener('click',planilha,false);

function comprei(){
   <alert>oi</alert>

}
//funçoes
function venda(e)
{
    if(document.getElementById('Mussarela').checked)
    {
        somaMussarela = somaMussarela + 1;
        vendaMussarela = vendaMussarela + 25.00;
        document.getElementById('resultadoMussarela').innerHTML = somaMussarela;
        document.getElementById('vendaMussarela').innerHTML = vendaMussarela.toFixed(2);
    }else if(documento.getElementById('Mista').checked)
    {
        somaMista = somaMista + 1;
        vendaMista = vendaMista + 25.00;
        document.getElementById('resultadoMista').innerHTML = somaMista;
        document.getElementById('vendaMista').innerHTML = vendaMista.toFixed(2);
    }else if(document.getElementById('Calabresa').checked)
    {
        somaCalabresa = somaCalabresa + 1;
        vendaCalabresa = vendaCalabresa + 25.00;
        document.getElementById('resultadoCalabresa').innerHTML = somaCalabresa;
        document.getElementById('vendaCalabresa').innerHTML = vendaCalabresa.toFixed(2);
    }
}