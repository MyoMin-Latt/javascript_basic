// Control Flows & Loops
// for, switch,
// Ternary Operator


// for loop
// Expression(၃)
// > ပထမဆုံး Expression ကို Loop မစခင်တစ်ကြိမ် အင်္ဂလုပ်လုပ်ပါတယ်။
// > ဒုတိယ Expression ကို Condition အနေနဲ့စစ်ပြီး true ဖြLစ်နေသ၍ သတ်မှတ်ထားတဲ့
// Statement တွေကို ထပ်ခါထပ်ခါ အင်္ဂလုပ်လုပ်မှာ ဖြLစ်ပါတယ်။
// > တတိယ Expression ကို တစ်ကြိမ်ပြီးတိုင်း တစ်ခါအင်္ဂလုပ်လုပ်ပါတယ်။

// Object တွေကို Loop လုပ်Lို့အင်္ဂတွက် for-in Loop ကိုသုံးနိုင်ပါတယ်။
// let user = { name: "Bob", age: 22, gender: "Male" }
// for (p in user) {
//     console.log(`${p} is ${user[p]}`)
// }
// // name is Bob
// // age is 22
// // gender is Male

// Array တွေအင်္ဂတွက် for-of Loop ကိုလည်း အင်္ဂသုံးပြုနိုင်ပါတယ်။
// for-of Loop ကို Iterable Object တွေအင်္ဂတွက်ပဲသုံးလို့ရပါတယ်။
// ရိုးရိုး Object တွေအင်္ဂတွက် မရပါဘူး။
// let users = ["Alice", "Bob", "Tom", "Mary"]
// for (u of users) {
//     console.log(u)
// }
// Array တွေString တွေကို for-of နဲ့ Loop လုပ်နိုင်ပြီး
// ရိုးရိုး Object တွေအင်္ဂတွက် လိုအင်္ဂပ်ရင် for-in ကို အင်္ဂသုံးပြုရမှာပဲဖြLစ်ပါတယ်။

// if (condition)
// if true, do this statement
// else
// if false, do this statements

// let nums = [1, 12, 5, 4, 9, 5]
// let result = nums.map(function (n) {
//     if (n === 5) n += 10
//     return n
// })
// console.log(result);
// result → [ 1, 12, 15, 4, 9, 15 ]


// let people = [
//     { name: "Alex" },
//     { name: "Bob", gender: "M" },
//     { name: "Tom", gender: "m" },
//     { name: "Mary", gender: "F" },
// ]
// let result = people.map(function (person) {
//     if (person.gender) {
//         if (person.gender === "m" || person.gender === "M") {
//             person.gender = "Male"
//         }
//         if (person.gender === "f" || person.gender === "F") {
//             person.gender = "Female"
//         }
//     } else {
//         person.gender = "Unknown"
//     }
//     return person
// })
// console.log(result);
/* result → [
 { name: "Alex", gender: "Unknown" },
 { name: "Bob", gender: "Male" },
 { name: "Tom", gender: "Male" },
 { name: "Mary", gender: "Female" },
] */


// let result = people.map(function (person) {
//     switch (person.gender) {
//         case "m":
//         case "M":
//             person.gender = "Male"
//             break
//         case "f":
//         case "F":
//             person.gender = "Female"
//             break
//         default:
//             person.gender = "Unknown"
//     }
//     return person
// })
// console.log(result);


// Condition ? Do-this-if-true : Do-this-if-false
// let user = { name: "Bob", age: 17 }
// let status = user.age >= 18 ? "Authorized" : "Unauthorized"


// let count = 0
// while (count < 3) {
//     console.log(count)
//     count++
// }
// 0
// 1
// 2







