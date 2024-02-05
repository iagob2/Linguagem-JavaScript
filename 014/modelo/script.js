function passor() { 
     var ini = Number(document.querySelector('#ini').value);
     var pass = Number(document.querySelector('#pass').value);
     var fim = Number(document.querySelector('#fim').value);
     var p = document.querySelector('#p');
     p.innerHTML +='<br>contando: ';


     if(ini < fim ){ 
        //contagem crescente 
        for(let c =ini ; c <= fim ; c += pass){ 
            p.innerHTML +=`${c} \u{1f449}`;
        }  
     }else { 
         //contagem regressiva 
         for(let c =ini ; c >= fim ; c -= pass){ 
            p.innerHTML +=`${c} \u{1f449}`;
        }
     }

     p.innerHTML += `\u{1f3c1}`;
}


