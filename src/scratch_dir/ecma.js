'use strict';
// Sets server port and logs message on success
let gg = 4;
console.warn(gg);
var array = [11, 22];
//var ss = array.map((no) => {return no*5;} );
console.log(array);
//get total
console.log(array.reduce((cum, element) => cum+element,0));
console.log("------------------------------")

var ddarr = [1, 2, 3];
var hh = ddarr.reduce(function (cum, item) {
    cum["no"+item]=item*2;
    return cum;
}, {"nfjdslafdjslfo":555});

console.log(hh);


var fetch = require('node-fetch');

console.log("start");
var dog  = {
    name: "Buddy",
    breed: "Generic dog",
    bark:  (a) => {
        console.log("bark"+a);
    }
};

console.log(dog.name);
dog.bark(111);

let arr = [1, 2, 3];

console.log(arr.map( n => n+=1))
console.log(arr.map((n)=> n*=2));

let a = [2, 3, 4];
let b = [1, ...a, 5]


console.log(b);

//setTimeout( () => console.log("huehuehue"), 3000);

let values = [20, 30, 40];
console.log(values.map(n => n*2));

let values2 = [20, 30, 40];
console.log(values2.filter(n => n>25));

var ddarr = [1, 2, 3];
var rr = ddarr.reduce((cum, item) =>  cum+item, 5);
var hh = ddarr.reduce((cum, item) => { cum["no"+item]=item*2; return cum;}, {"one":555});
console.log(rr);
console.log(hh);


//----------class---------------

class Animal{
    constructor(name, height){
        this.name = name;
        this.height = height;
        this.myname = "prasad";
    }
    hello() {
        console.log(`Hi I'm a ${this.name}`)
    }

    static roar(){
        console.log("roarrrrr");
    }
}

class Lion extends Animal{
    constructor(name, height, age){
        super(name, height);
        this.age=age;
    }
    hello() {
        console.log(`Hi I'm a ${this.name} and age : ${this.age}`)
    }
}

let mice = new Animal();
let king = new Animal("Lion", 0.5);
king.hello();
console.log(mice);
console.log(king);

let son = new Lion("aa", 5, 50);
console.log(son);
son.hello(); // access overriden methods
Lion.roar(); //access static method

//-----------------prototype-----------------

function Wizard(name, house, pet){
    this.name = name;
    this.house = house;
    this.pet = pet;

    this.greet = () => console.log(`I'm ${this.name} from ${this.house}`)
}

Wizard.prototype.petname; //adds more fields on the fly
Wizard.prototype.getPetName = () => console.log("huehuehue") //this dont bcs ano funcs have no ref outside
Wizard.prototype.getPetName = function() { console.log(`huehuehue ${this.petname}`)} //this works
let harry = new Wizard("harry", "griffindor", "owl");
harry.petname = "hedwig";
console.log(harry);
harry.greet();
harry.getPetName();

//-----SET----------

let set = new Set();
set.add(5);
set.add("a");
set.add(1);
console.log(set);
console.log()

//-----MAP-------
let aa = new Map();
aa.set("key1", "value1");
aa.set( ()=> {} ,"value3");
aa.set( ()=> {} ,"value4");
console.log(aa);

let numArr = [[1, "one"], [2, "two"]];
let bb = new Map(numArr);
console.log(bb);

for (let [key, value] of bb.entries()){
    console.log(`key : ${key} | value : ${value}`);
}

//------ Closure and function factory ----------------
/*
const addSuffix = (x) => {
    const concat = (y) => {
        return y+x;
    }
    return concat;
}
*/

const addSuffix  = x => y => y+x

let add_ness  =  addSuffix("ness");
console.log(add_ness);
let h  =  add_ness("happi");
console.log(h);


//---------- private variables ------------------

const budget = () => {
    let balance = 0;
    let addMoney = amount => balance+=amount;

    const deposit = (amount) => addMoney(amount);
    const checkBalance = () => balance;

    return {
        deposit: deposit,
        checkBalance: checkBalance
    }
}

let wallet = budget();
console.log(wallet.checkBalance()); //0
wallet.deposit(500);
console.log(wallet.checkBalance()); //500
//console.log(wallet.balance); //doesnt work


// Generators

function* letterMaker(){
    yield () => {return "huehuehue"};
    yield 'b';
}

let letgen = letterMaker();
console.log(letgen.next().value());
console.log(letgen.next().value);
console.log(letgen.next(true).value);

console.log("-----------------------");

function* evenGenerator() {
    let count = 0;
    while(true){
        count += 2;
        let reset = yield count;
        if (reset){
            count = 0;
        }
    }
}

let numgen = evenGenerator();
console.log(numgen.next().value);
console.log(numgen.next().value);
console.log(numgen.next(true).value);
console.log(numgen.next().value);


function* arrIterator(){
    yield* arguments;
}

let it = arrIterator(1, 2, 3);
console.log(it.next().value);
console.log(it.next().value);
/*
let p = new Promise( (resolve, reject) => {
    setTimeout( () => resolve('1'),  3000);
})

p.then(response => console.log(response)).catch(error => console.log(error));

console.log("233333");*/



const url = "http://developer.12thdoor.com:3000/com.duosoftware.auth/users?securityToken=1&skip=1&take=1";

fetch(url, { method: 'GET' })
    .then(res => res.json())
    .then(body => console.log(body));
