//value of variable
let data1 = "Hello..."
let data2 = 123456
let data3 = true
//index number 0 1  2  3  4
let data4 = [10,20,30,40,50]
let data6 = ["lebron",20,true] // เหมาะกับข้อมูลประเภทเดียวกัน
let data7 = ["lebron","luka","yokich"]
let data5 =
{
    fullname : "lebron",
    age : 20,
    status: true,
    color: ["red","green","blue"],
    address: {
        no: "123",
        road: "main",
        soi: "1",
        city: "Bangkok",
        province: "Thailand",
        steet: "bangkok"
    }
} // เหมาะกับข้อมูลคนละประเภท
let data8 =null
let data9

console.log(data1)
console.log(data2)
console.log(data3)
console.log('----------')
//เข้าถึงเฉพาะบางตัวของarray
console.log(data4[1])
console.log(data4[4])
data4[2] = 333
console.log(data4[2])
console.log('----------')
//เข้าถึงช้อมูลทุกตัวของarray
data4.forEach((value) => {
    console.log(value * 10)
})
console.log('----------')
console.log(data5.fullname)
console.log(data5.status)
console.log(data5.age)
console.log(data5.color[1])
console.log(data5.address.steet)
console.log('----------')
console.log(data8)
console.log(data9)