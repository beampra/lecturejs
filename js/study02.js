//Variable ตัวแปร
var myData = "Hello..." //เป็นแบบ Global
let myData2 = 20 //เป็นแบบ Local เปลี่ยนค่าได้ recomment ใช้สร้างตัวแปร
const myData3 = "Wow..." //ไม่สามารถเปลี่ยนค่าได้ เป็น local recomment ใช้สร้างตัวแปร

myData = "Hi..."
myData2 = 30
//myData3 = "No..."

{
    var a = 1;
    let b = 2;
    const c = 3;
    {
        var x = 4;
        let y = 5;
        const z = 6;
        console.log(a)
        console.log(x)
        console.log(b,c)
        console.log(y,z)
    }
    console.log(a)
    console.log(x)
    console.log(b,c)
    //console.log(y,z) ใช้ y , z ไม่ได้ เพราะอยู่ข้างนอกปีกกา
}
console.log(a)
console.log(x) 
//console.log(b,c) ใช้ b , c ไม่ได้ เพราะอยู่ข้างนอกปีกกา
//console.log(y,z) ใช้ y , z ไม่ได้ เพราะอยู่ข้างนอกปีกกา