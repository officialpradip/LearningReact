//es6
//1. Vatiable declaration
const a=1;
console.log(a)

let b=20
console.log(b=30)

//before es6
function demo(name){
    console.log("this is::",name)
}
demo("ram")
//es6
let demoArrow=(name="Pradip")=>name + " "+"Thapa";
console.log(demoArrow("shyam"))

//rest parameter ...
let rest=(...arg)=>{
    console.log(arg)
}
rest("Hello","Hi")

//spreed operator ...
let fruits=["apple","mango"]
console.log(fruits)
fruits[0]="Orange"
console.log(...fruits)

//spreed operator in objects

let person={
    "name":"Shyam",
    "cast":"Roy"

}
let movie={
    "name":"Shyam SignhRoy"
}
let full={...person,...movie}
console.log(full)
console.log(person.cast)

//object destructing
let info={
    "name":"Pradip Thapa",
    "age":24,
    "occupation":"Software Engineer"
}
console.log(info.occupation)
let {name,age,occupation}=info;
console.log(occupation)

//https://www.youtube.com/watch?v=WzXaeRQKI0c&ab_channel=IndianCoders
//18 minutes

//function in react
// function double(num){
//     return num;
// }
// console.log(double(20))

//above to array
// let double=(num)=>{
//     return num;
// }
// console.log(double(20))
//above to react
let double=num=>(num+num)*num;
console.log(double(20))

//Export and Import (Modules)
import { hello,data as d } from "./sale.js";
import persons  from "./customer.js"
hello();
console.log(d)
console.log(persons)