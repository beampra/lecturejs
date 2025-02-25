//Operator จัวดำเนินการ
// + - * / % ** ++ --
console.log(10**2)

// == != > < >= <=
let a = 10
let b = "10"
//Python a + b จะได้ Error
//JavaScript a + b จะได้ 20
//java a + b จะได้ 1010
let c = a + b
console.log(c)
console.log(a === b) //สนใจ type
console.log(a == b) //ไม่สนใจ type
//เปรียบเทียบเท่ากัยใช่ไหม
console.log(a * b)
//เปรียบว่าไม่เท่ากันใช่ไหม
console.log(a != b) //สนใจ type
console.log(a !== b) //ไม่สนใจ type

a = "Hello"
console.log(a)

console.log('Bangkok' < 'London')

// Ternary Operator
// ___ ? ___ : ___
// เงื่อนไข ? ทำเมื่อจริง : ทำเมื่อเท็จ

let score = 45
let grade = score > 55 ? 'A' : 'B'
console.log(grade)

//Nullish Operator 
// __??__ 
//หน้าเครื่องหมาย ?? เป็น null หรือ undefined จะได้หลังเครื่องหมาย
//หน้าเครื่องหมาย ?? ไม่เป็น null หรือ undefined จะได้หน้าเครื่องหมาย
let data = null
console.log(data ?? 'No data')
let data2 = "Wow..."
console.log(data2 ?? 'No data')
let data3;
console.log(data3 ?? 'No data')





