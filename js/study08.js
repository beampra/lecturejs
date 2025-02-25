//Funtion คือ การทำงานหนึ่งๆ จะไม่ทำงานถ้าไม่เรียกใช้ (Call Function)
//Function มี 4 ประเภทใหญ่
//1. no parameter-no return
function funcA() {
    console.log("wow wow wow")
}

//2. have parameter-no return
function funcB(a,b) {
    console.log(a+b)
}

//3. no parameter-have return
function funcC() {
    console.log("Wow...")
    return 10
}

//4. have parameter-have return
function funcD(a,b,c,d) {
    console.log(a,b,c,d)
    return a+b+c+d
}

funcA()
funcB(10,20) //เราเรียกข้อมูลที่ส่งให้ parameter ว่า argument

console.log(funcC()) //มี return ควรนำค่ามาใช้หรือlogออกมา
console.log(funcD(10,20,30,40))