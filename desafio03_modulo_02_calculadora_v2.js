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
            else console.warn("Please, enter a valid number");
        };
        let y    = (num2) =>{
            if (typeof num2 === "number")
            {return num2, vnum2 = num2} 
            else console.warn("Please, enter a valid number");
         };
        let oper = (op)   =>{ 
            if (operators[op])
            {return op, vop = op} 
            else console.warn("Please, enter a valid operator");
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