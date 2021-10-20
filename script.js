let order = [];
let clickedOrder = [];
let score = 0;

/*
0 = azul
1 = verde
2 = vermelho 
3 = amarelo
*/ 

const azul = document.querySelector('.azul');
const verde = document.querySelector('.verde');
const vermelho = document.querySelector('.vermelho');
const amarelo = document.querySelector('.amarelo');

//cria order aleatoria
let suffleOrder = () =>{
    let colorOrder = Math.floor(Math.random()*4);
    order[order.length] = colorOrder;
    clickedOrder = [];
    for(let i in order){
        let elementColor = createElement(order[i]);
        lightColor(elementColor, Number(i)+1);
    }
}

//acende a proxima cor
let lightColor = (element, number) =>{
   number = number * 1000;
   setTimeout(()=>{
    element.classList.add('selected');
   },number - 250);
   setTimeout(()=>{
    element.classList.remove('selected');
   });
}

//verifica as cores com a oredem gerada
let checOrder = ()=>{
    for(let i in clickedOrder){
        if(clickedOrder[i] != order[i]){
            lose();
            break;
        }
    }
    if(clickedOrder.length == order.length){
        alert(`Pontuação: ${score}\nVocê acertou`);
        nextlevel();
    }
}

//reconhecer o click do usuario
let click = (color) =>{
    clickedOrder[clickedOrder.length] = color;
    createElement(color).classList.add('selected');
    setTimeout(()=>{
        createElement(color).classList.remove('selected');
        checOrder();
    },250);    
}

//retorna a cor 
let createElement = (color) =>{
    if(color == 0){
        return azul;
    }else if(color == 1){
        return verde;
    }else if(color == 2){
        return vermelho;
    }else if(color == 3){
        return amarelo;
    }
} 

//proximo nivel
let nextlevel = () =>{
    score++;
    suffleOrder();
}

//perdeu playboy
let lose = () =>{
    alert(`Pontuação: ${score}!\nPerdeu rapa\nQuer tentar de novo?`);
    order = [];
    clickedOrder = [];
    playAgame();
} 

let playAgame = () =>{
    alert('Bem vindo');
    score = 0;
    nextlevel();
}

/*azul.addEventListener('click', click(0));
verde.addEventListener('click', click(1));
vermelho.addEventListener('click',click(2));
amarelo.addEventListener('click',click(3));*/

azul.onclick=()=>click(0);
verde.onclick=()=>click(1); 
vermelho.onclick=()=>click(2); 
amarelo.onclick =()=>click(3);

playAgame();