// Arithmetic Operators => +, -, *, %, **, ++, __
// Precedent
// Assignment Operators => -=, *=, /=, %=
// Comparison Operators => !=, !==, == (Double Equal) နဲ့ === (Triple Equal)
// Logical Operators => && || !

//     + '5' // 5
//     + 'a' // NaN
// '5' + 5 // 55
//     + '5' + 5 // 10
// "11" + 1 // 111
// "11" – 1 // 10
// 5 / 3 // 1.6666666666666667
// 5 % 3 // 2
// 2 ** 2 // 4
// 2 ** 3 // 8

// Operator နှစ်ခုကတော့++ နဲ့-- ဖြLစ်ပါတယ်။ ++ကို တစ်တိုးLို့သုံး ပြီး-- ကို တစ်နှုတ်Lို့သုံးပါတယ်။
// ++သင်္ကေတကို ရှေ့မှာထားတဲ့အင်္ဂခါ အင်္ဂရင်တစ်တိုးပြီး မှ အင်္ဂလုပ် လုပ်တယ်
// let a = 2
// console.log(a++); // 2
// console.log(a); // 3
// console.log(++a); // 3
// console.log(a); // 3


// --ကိုနောက်မှာထားရင် အင်္ဂလုပ်အင်္ဂရင်လုပ်ပြီးမှ တစ်နှုတ်ပြီး-- ကိုရှေ့မှာထားရင် တစ်နှုတ်ပြီးတော့မှ အင်္ဂလုပ်လုပ်ပေးသွားမှာပဲ ဖြLစ်ပါတယ်။
// let a = 2
// console.log(a--); // 2
// console.log(a); // 1
// console.log(--a); // 1
// console.log(a); // 1

// let result = 4 + 5 – 1 * 3 / 2 => ဘယ်ကနေညာ
// "$" + 4 + 5 // $45
// 4 + 5 + "$" // 9$
// "$" + (4 + 5) // $9
// ဘယ်ကနေညာကို အင်္ဂလုပ်လုပ်တယ်ဆိုတာ Operator အင်္ဂဆင့်တူမှ လုပ်တာ ပါ။

// Precedent
// 1. ဝိုက်ကွင်း
// 2. ++, --
// 3. *, /, %
// 4. +, -
//     3 – 1 + 2 * 5 / 4 // 4.5
//     (2 * 5 / 4 = 2.5)
//     (3 – 1 + 2.5 = 4.5)
//     (3 – 1 + 2) * 5 / 4 // 5

// Assignment Operators
// ။ -=, *=, /=, %=
// let num = 2
// num += 3 // num = num + 3
// let a = b = c = 5

// Comparison Operators
// !=, !==
// == (Double Equal) နဲ့ === (Triple Equal)
// Not Equal, Greater Than, Less Than, Greater Than or Equal, Less Than or Equal
// Double Equal ကို ရိုးရိုး Equal လို့ခေါ်ပါတယ်။ တန်Lိုးတူရင် ရပါပြီ။ Type
// အင်္ဂတိအင်္ဂကျ တူစရာမလိုဘူး၊ တူသလိုလိုရှိရင်ရပြီလို့ မြင်သာတွေအင်္ဂာင် ပြောချင်ပါတယ်။
// Triple Equal ကို တော့ Strict Equal လို့ခေါ်ပါတယ်။
// 5 == "5" // true
// 5 === "5" // false

// 5 != "5" // false
// 5 !== "5" // true

// Logical Operators
// AND, OR နဲ့ NOT
// XOR => Expression နှစ်ခုမှာ တစ်ခု မှန်ရင် true ကိုရပါတယ်။ ဒါပေမယ့် ခြွင်းချက်ကတော့ Expression နှစ်ခုမှာ နှစ်ခုလုံး မမှန်ရပါဘူး။ 