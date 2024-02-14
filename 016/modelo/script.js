var nums = []

function  adicionar(){ 
    let num = document.querySelector('#idNum').value;

    let area = document.querySelector('#idArea');

    if ( num >= 1 && num <=100 ){ 

        nums.push(Number(num));
        area.value += '\n' + `valor ${num} adicionando`  ;

    }else { 
        alert ( 'valor inválido ')
    }
   
    num = '';
    num.focus();
    
}

function fim(){
    let t = document.querySelector('#txt');
    var tam = nums.length ;
    var soma = 0;
    var  maior = 0;
    var menor = 0;

   
    
    for(let n in nums){ 
        soma += nums[n];

       if(n == 0) { 
         maior = nums[n] ;
         menor = nums[n];
       }else if( nums[n] > maior ) { 
            maior = nums[n];
       }else if ( nums[n] < menor ){ 
            menor = nums[n];
       }

        
    }

    media = soma / tam ;
    
    if ( tam == 0 ) { 
        alert ( 'nenhum numero adicionado ')
    }else { 

    t.innerHTML  = `<p> ao todo temos ${tam} números cadastrados  </p> <p> o maior valor informado foi ${maior} </p> <p> o menor valor informado foi ${menor} </p> <p> somando todos os valores temos ${soma} </p> <p> a media dos valores digitados é ${media} `}
}