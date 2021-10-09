//Crie uma calculador na qual a entrada de itens retorna um resultado 
//que é armazenado em uma lista. Todos os resultados precisam ser armazenados
//e precisa haver a opção de apagar a lista

let calc = (() => {

   let list = [];

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

    let enter = (num1, op,num2) => { 
        let result = operators[op]   
            ? operators[op](num1, num2)
            : "Please, choose a right operator";
        let register = `${num1} ${op} ${num2} = ${operators[op](num1, num2)}`;
        if (result !== "Please, choose a right operator") 
        {list.push(register);}
        return register; 
    };
   
   //const list = console.table(list);
   const reset = (ok) => {
         if (ok == "ok") {
            list.length = 0;}
         else "Repita a operação digitando 0 para confirmar o apagamento"   
         }
         

return{ enter,
        list,
        reset
};
})();