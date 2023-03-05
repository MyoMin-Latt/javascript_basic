// Arrays and objects
// Array methods => push(), pop(), shift(), unshift(), splice(), join()
// JSON


// Array ဟာ JavaScript ရဲ့ Standard Object တစ်ခုဖြLစ်ပါတယ်။ Compound Type / Structure Type
// let mix = new Array("Bob", 3.14, true)

// Single Quote / Double Quote အင်္ဂLွင့်အင်္ဂပိတ်တွေကို String တည်ဆောက်ပေးနိုင်တဲ့ String Literal
// လေးထောင့်ကွင်း အင်္ဂLွင့်အင်္ဂပိတ်ကိုတော့ Array တွေတည်ဆောက်ပေးနိုင်တဲ့ Array Literal လို့ ခေါ်ပါတယ်။
// let mix = ["Bob", 3.14, true]

// Array Methods
// let animals = ["Dog", "Cat", "Bird"]
// animals.push("Cow") // animals → ["Dog", "Cat", "Bird", "Cow"]
// animals.pop() // animals → ["Dog", "Cat", "Bird"]
// animals.shift() // animals → ["Cat", "Bird"]
// animals.unshift("Ant") // animals → ["Ant", "Cat", "Bird"]

// let fruits = ["Apple", "Orange", "Mango", "Banana"]
// fruits.indexOf("Mango") // 2
// fruits.splice(2, 1) // fruits → ["Apple", "Orange", "Banana"]

// let fruits = ["Apple", "Orange", "Mango"]
// let result = fruits.join(",") // result → Apple,Orange,Mango

// push(), pop(), shift(), unshift(), splice() စတဲ့ Method တွေက
// မူလ Array တန်Lိုးတွေကို ပြုပြင် ပြောင်းလဲသွားစေတဲ့ Method တွေပါ။
// join() ကတော့ မူလ Array တန်Lိုးတွေကို မပြောင်းပါဘူး။

// let nums = [1, 2, 3, 4, 5]
// let result = nums.map(function (n) {
//     return n + 1
// })
// // result → [2, 3, 4, 5, 6]

// let user = {
//     name: "Bob"
//  hello: function () {
//         return `Hello, I'm ${this.name}`
//     }
// }
// user.name // Bob
// user.name = Alice
// user.hello() // Hello, I'm Alice

// let name = "Alice"
// let age = 22
// let user = {
//     name: name,
//     age: age
// }

// let name = "Alice"
// let age = 22
// let user = { name, age }


// JavaScript Object Notation
// JSON
// String,
//     Number, Boolean, null, Array, Object
// JSON.stringify()
// let person = { name: "Alice", age: 21 }
// JSON.stringify(person) // { "name": "Alice", "age": 21 }

// let json = '{ "name": "Alice", "age": 21 }'
// JSON.parse(json) // Object → { name: "Alice", age: 21 }









