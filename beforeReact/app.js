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