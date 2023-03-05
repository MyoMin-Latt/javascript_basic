// Procedures & Functions
// 1. Default & Rest Parameters
// 2. Function Expressions, Anonymous, Nameless Function
// 3. Callback
// 4. Arrow Functions
// 5. Function Hoisting
// 6. Name Conflict => နောက်မှရေးတဲ့ Function ကို အင်္ဂတည်ယူသွားမှာ
// 7. Variable Scope => Global Variable တွေဟာ အင်္ဂန္တရာယ်တော့ များပါတယ်




// Procedure ဆိုတာဟာ Statement တွေကို စုစည်းထားခြင်း
// Function တွေရဲ့ ထူးခြားချက်ကတော့ ပေးလာတဲ့ တန်Lိုးကို လက်ခံပြီး၊ အင်္ဂလုပ်လုပ်လို့ရလာတဲ့ ရလဒ်ကို ပြန်ပေးခြင်း
// Function Parameter
// Function ကို ခေါ်ယူစဉ်မှာ ပေးလိုက်တဲ့ တန်Lိုးတွေကိုတော့ Arguments

// Default & Rest Parameters
// function add(a, b) {
//     console.log(a + b);
//     return a + b
// }
// add(1, 2, 3, 4) // 3
// add(1) // NaN

// function add(a, b = 0) {
//     console.log(a + b);
//     return a + b
// }
// add(1, 2, 3, 4) // 3
// add(1) // NaN

// function add(a, b, ...c) {
//     console.log(c)
// }
// add(1, 2, 3, 4, 5) // [3, 4, 5]



// Function Expressions
// let greet = function greeting() {
//     console.log("Hello, World")
// }
// greet() // Hello, World

// Anonymous, Nameless Function
// let greet = function () {
//     console.log("Hello, World")
// }
// greet(); // Hello, World


// IIFE ခေါ် Immediately Invoked Function Expression
// (function () {
//     console.log("Hello, World")
// })()
// Hello, World


// Callback,
// function twice(num, fun) {
//     let result = fun(num)
//     console.log(result * 2);
//     return result * 2
// }
// twice(5, function (x) {
//     return x + 1
// })
//     Function တစ်ခုရဲ့ အင်္ဂတွင်းမှာ ထပ်ဆင့်ရှိနေတဲ့ Nested Function တွေရဲ့ သဘောသဘာဝတွေ၊ Closure လို့ခေါ်တဲ့
// ထူးခြားတဲ့ Variable Scope သဘောသဘာဝတွေ၊ Recursive Function သဘောသဘာဝတွေ၊ this
// Keyword Binding လို့ခေါ်တဲ့ ရှုပ်ထွေးတဲ့ ကိစ္စတွေ ကျန်ပါသေးတယ်။

// Arrow Functions
// let add = (a, b) => a + b
// let two = n => n * 2
// 1. ဝိုက်ကွင်းအင်္ဂLွင့်အင်္ဂပိတ်ရှေ့က function ကိုLယ်ပြီး ဝိုက်ကွင်းအင်္ဂLွင့်အင်္ဂပိတ်နောက်မှာ =>
//     သင်္ကေတ လေး ထည့်ပေးလိုက်ပါတယ်။
// 2. Function မှာ Statement တစ်ကြောင်းဘဲရှိရင် တွန့်ကွင်းအင်္ဂLွင့်အင်္ဂပိတ်နဲ့ return ကို မထည့်ဘဲ
// ရေးလို့ရပါတယ်။ အင်္ဂလိုအလျှောက် return ပြန်ပေးပါတယ်။
// 3. Parameter က တစ်ခုထဲဆိုရင် ဝိုက်ကွင်းအင်္ဂLွင့်အင်္ဂပိတ်ကို မထည့်ဘဲထားလို့ ရပါတယ်။
// let hello = () => "Hello, World"
// let hello = _ => "Hello, World"









