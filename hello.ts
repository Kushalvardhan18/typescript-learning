// Introduce Types to javascript  ----- Javascript with types = Typescript

// let x:number|string = 30
let fname: string | null = "Kushal"

// x = "Kushal"
fname = null

// console.log(x);
console.log(fname);

function add(x: number, y: number) {
    return x + y
}
let x: number = add(4, 3)
console.log(x);


let num: number = 20
// num = "xyz"

console.log(num);


function createUser(user: { firstname: string; lastname?: string }) {
    console.log(user.firstname + user.lastname)
}
createUser({
    firstname: "Kushal",
    lastname: "Vardhan"
})

