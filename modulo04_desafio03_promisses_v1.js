class Calculate{
 constructor(number, time, push){
   this.number = Math.random()*10;
  
   this.push = (( )=>{
     let array = [];
         for (let i = 0; i < this.number; i++) {
             let random = Math.random()*this.number
                 array.push(random);  
         }
        return array  
    })();

    this.time = (()=>{
      let ms = Math.trunc(this.number * 1000)
        return ms 
    })();
}};

function createElements(element){
    const ul     = document.querySelector('.ul');
    const list   = document.createElement('li');
       
     list.innerText = element;
     ul.appendChild(list);
}

async function createPromiseList(userNum){
    let promiseList = [];
    let result = [];
 for (let index = 0; index < userNum; index++) {
    let basis = new Calculate;
    let promise = ms => new Promise(resolve => 
                  setTimeout(resolve,ms));

    await promise(basis.time).then(() => 
          result = basis.push); 
  
    promiseList = [...promiseList, result] 
     createElements(promiseList[index]);      
    }   

       console.log(promiseList)
 return promiseList; 
}

async function theList(){
  let userNumber = +(document.querySelector('.userData').value)    
   createPromiseList(userNumber)
};

function clearList(){
    const ulFill = document.querySelector('ul')
       while (ulFill.firstChild) {
              ulFill.firstChild.remove()
}};
