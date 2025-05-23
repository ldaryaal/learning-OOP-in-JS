//OOP with Vanilla JS
// object Literals vs template literals ``
// let client = {
//     name : "Darya",
//     balance : 10000,
//     membership : function(){
//         let name;
//         if (this.balance >= 10000) {
//             name ='gold'
            
//         } else if (this.balance >= 5000){
//             name = 'silver'   
//         }else{
//             name = 'normal'
//         }
//         return name

//     }       
    
// }
// console.log(client)
// console.log(client.balance)
// console.log(client.membership())

//object constructors
let Client =function(name, balance) {
    this.balance = balance
    this.name = name
    this.membership = function(){
        let name;
        if (balance >= 10000) {
            name ='gold'
            
        } else if (balance >= 5000){
            name = 'silver'   
        }else{
            name = 'normal'
        }
        return name
    }       
}

let person1 = new Client('Darya', 30000)
let person2 = new Client('Amin', 9000)
console.log(person1.membership(), person2.membership())



// string
const string = 'darya' // type => STRING
const string1 = new String('darya') // type => OBJECT


console.log(string == string1) //returns true
console.log(string === string1) // returns false


// numbers
const num1 = 21 // number
const num2 = Number(21) // Object
console.log(num1)
console.log(num2)

// arrays
const array1 = [1,2,3,4,5] //394857w9et3409275  
const array2 = Array(1,2,3,4,5) //3259408698q4tgier
console.log(array1 == array2) //returns false `
// bc the address of these two array is different for the compiler 
// no matter what are the entries`
console.log(array1 === array2)


// functions 
const function1 = function(a,b){
    return a + b
}

const function2 = Function('a','b','return a + b')

console.log(function1(2,3))
console.log(function2(2,3))

// prototype 

Client.prototype.getInfo = function(){
    //write your code here`
    // stil should use this for coding and we only need to know the entry 
    // params & this.param1 ,.... to work with this`
    return ` name: ${this.name}, balance: ${this.balance}, membership: ${this.membership()}`

}
// withdraw money
Client.prototype.withdraw = function (amount) {
    return this.balance -= amount
    
}
//adding money to account
Client.prototype.deposite = function(amount){
    return this.balance += amount
}

person1.withdraw(200)
person2.deposite(1000)

//premium account for special clients
let Business = function(name, balance, phone, category){
    Client.call(this, name, balance)
    this.phone = phone
    this.category = category
}
Business.prototype = Object.create(Client.prototype)
Business.prototype.constructor = Business

const business1 = new Business('Darya', 20000000, 3312770000, 'Developer')
console.log(business1.getInfo(),business1)