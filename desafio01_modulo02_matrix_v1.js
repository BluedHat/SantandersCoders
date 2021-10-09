// 01 - Com base em uma lista de 2 objetos - nome e idade -  
//defina quem tem mais de 18 anos e pode ir ver o filme indicado

let _clientList = [
{name: "Angelina Jolie",age:80},
{name: "Eric Jones",age:2},
{name: "Paris Hilton",age:5},
{name: "Kaney West",age:16},
{name: "Bob Ziroll",age:100}];

function clientFactory(name, lastname, age) {
    (typeof name === "string"
        && typeof lastname === "string"
        && typeof age === "number")
        ? _clientList.push({
            name,
            lastname,
            age
        })
        : console.warn("Please, verify the entry data and redo the operation")
};

const checkList = _clientList;

const remove = line => _clientList.shift(line)

const movie = window.prompt("Please, type the movie's name")
const limit = window.prompt("What's the movie's rating?")

const _ratingReport = _clientList.map((client) =>
      (client.age >= limit) ? `Congratulations ${client.name} ${client.lastname} can go the ${movie}`
                            : `Sorry but ${client.name} ${client.lastname} is under age!`
      );

console.table(_ratingReport)