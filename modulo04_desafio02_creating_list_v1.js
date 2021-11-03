const structure = document.querySelector('.skin'); 
const button    = document.querySelector('button');
var count = [ ];

const _fields = [
            {type:'text',   name:'Name',     placeholder:"Please type your name" ,              label:'name',     required: true,   id:'name',    className:'name'},
            {type:'text',   name:'Lastname', placeholder:"Please type your lastname" ,          label:'lastname', required: true,   id:'lastname',className:'lastname'},
            {type:'phone',  name:'Phone',    placeholder:"Please type your best phone number",  label:'phone',    required: false,  id:'phone',   className:'phone'},
            {type:'e-mail', name:'Mail',     placeholder:"Please type your best mail" ,         label:'email',    required: true,   id:'mail',    className:'mail'},
            {type:'text',   name:'Address',  placeholder:"Please type your name" ,              label:'address',  required: true,   id:'address', className:'address'},
            {type:'submit', name:'Submit',  label:'submit',  id:'submit', className:'submit'}
      ];
const _userForm = document.createElement('form');
structure.appendChild(_userForm);

function _inputSkeleton(data) {
            const input = document.createElement('input')
              input.type = data.type;
              input.name = data.name;
              input.placeholder = data.placeholder;
              input.label= data.label;
              input.required=data.required;
              input.id=data.id;
              input.className=data.className    
return input;
};

function inputForm(_thefields){
    _fields
      .map(data =>_inputSkeleton(data))
      .forEach(input => _userForm.appendChild(input));
      };

document.querySelector('form').onsubmit = function(e) {
  e.preventDefault();

var _temp  = [{
    matricula: count.length,
    name:document.querySelector('#name').value,
    lastname:document.querySelector('#lastname').value,
    phone:document.querySelector('#phone').value,
    mail:document.querySelector('#mail').value,
    address: document.querySelector('#address').value        
}];

const structure = document.querySelector('.structure')
const newGrade  = document.createElement('ul')
const list      = document.createElement('li');
const newData   = document.createElement('span');
const newButton = document.createElement('button');

if (count.length > 1)
    localStorage.setItem(count.length, JSON.stringify(_temp)) , count.push(1);
else     
    localStorage.setItem(count.length, JSON.stringify(_temp)) , count.push(1);

const data = localStorage.getItem(count.length -1);

console.log(data);

newButton.id = count.length -1;
newData.textContent= data;
newButton.textContent = 'Remover';


list
    .appendChild(newData)
    .appendChild(newButton);

newGrade.appendChild(list);

structure.appendChild(newGrade);

newButton.onclick = function(k) {
   const newIndice = newButton.id;
   localStorage.removeItem(newIndice);
   newGrade.removeChild(list);
}
};