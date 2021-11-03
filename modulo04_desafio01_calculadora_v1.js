//Crie uma calculador na qual a entrada de itens retorna um resultado 
//que é armazenado em uma lista. Todos os resultados precisam ser armazenados
//e precisa haver a opção de apagar a lista

let calc = (() => {

    let list = [];
    let vnum1 = 0;
    let vnum2 = 0;
    let vop = 0;
 
     const _sum = (num1, num2) => num1 + num2;
     const _less = (num1,num2) => num1 - num2;
     const _divide = (num1, num2) => num1 / num2;
     const _multi = (num1, num2) => num1 * num2;
     const _divideBzero = (num1, num2) => num1 % num2;
     const _expo = (num1, num2) => num1 ** num2;
     const _and = (num1, num2) => num1 & num2;
     const _nand = (num1, num2) => num1 || num2;
 
     const operators = {
         "+": _sum,
         "-": _less,
         "/": _divide,
         "*": _multi,
         "%": _divideBzero,
         "**": _expo,
         "&": _and,
         "||": _nand
     };
     
     let enter = (() => { 
         let x    = (num1) =>{ 
             if (typeof num1 === "number")
             {return num1, vnum1 = num1} 
             else alert("Please, enter a valid number");
         };
         let y    = (num2) =>{
             if (typeof num2 === "number")
             {return num2, vnum2 = num2} 
             else alert("Please, enter a valid number");
          };
         let oper = (op)   =>{ 
             if (operators[op])
             {return op, vop = op} 
             else alert("Please, enter a valid operator");
         };
        return {
               x,
               oper,
               y
        };
     })();
 
     let equals = ()=>{ 
         let result = operators[vop](vnum1, vnum2);
         let register = `${vnum1} ${vop} ${vnum2} = ${result}`;  
         list.push(register);
         return register;
     };
    
    //const list = console.table(list);
    const reset = (ok) => {
          if (ok == "ok") {
             list.length = 0;
             vnum1 =0;
             vnum2 =0;
             vop = 0;
             return "Data cleaned";
             }
          else console.warn("If you want to erase all data, please redo this operation inserting ok to confirm");
          }
          
 
 return{ enter,
         equals,
         list,
         reset
 };
 })();

function setValue( ) {
  document.querySelector('#form').onsubmit = function(e) {
           e.preventDefault();
           
let entryB  = +(document.querySelector('#userEntryB').value);
let entryA  = +(document.querySelector('#userEntryA').value);
let entryOp =   document.querySelector('#css:checked').value;

calc.enter.x(entryA);
calc.enter.y(entryB);
calc.enter.oper(entryOp);
};
};

function mathValue( ) {

  document.querySelector('form').onsubmit = function(e) {
           e.preventDefault();
    
    const div1 = document.querySelector('.div1');
    const p1 = document.querySelector('.p1');
    const total = document.querySelector('.total');

    const div2 = document.querySelector('.div2');
    const title = document.querySelector('.title');
    
    let operation1 = document.getElementById("span");

    const ul = document.createElement('ul');
    let li = document.createElement('li');
    let operation2 = document.createElement('span');
    ul.id  = 'ul';

        calc.equals();
        calc.list;
        _temp = calc.list[(calc.list.length -1)];

    if (calc.list.length > 1)
        localStorage.setItem((calc.list.length - 1), JSON.stringify(_temp));
    else     
        localStorage.setItem((calc.list.length - 1), JSON.stringify(_temp));
     
    div1.appendChild(p1);
    p1.appendChild(total);

    div2.appendChild(title);
    title.appendChild(ul);
    ul.appendChild(li);
    li.appendChild(operation2);

        operation1.textContent = localStorage.getItem(calc.list.length -1);
        operation2.textContent = localStorage.getItem(calc.list.length -1);
   }
};

function clearValue( ) {
 document.querySelector('#form').onsubmit = function(e) {
    e.preventDefault();
    let result = document.querySelector('.title');
    let _ul  = document.querySelector("#ul");
       calc.reset('ok');
       localStorage.clear();
       
       while (result.firstChild) {
        result.firstChild.remove()
    }
}
};