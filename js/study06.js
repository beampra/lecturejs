//Controll Flow: Loop/Iteration/Repetition
//ทำงานเดิมๆซ้ำ
//while,do-while,for,for-in,for-of,foreach
//while พิสูจน์ก่อนทำงาน
let a = 1
while(a <= 5){
    //console.log(a,"Hello...",true)
    //console.log(a  + " Hello...", true)
    console.log(`${a} Hello... ${true}`)
    a++
}
console.log('--------------')
//do-while ทำงานก่อนพิสูจน์
let y = 1
do {
    console.log(`${y} Hello... ${true}`)
    y++
}while(y <= 5)
console.log('--------------')
//for รู้จํานวนครั้งที่จะทำงาน
for(let i = 1; i <= 5; i++){
    console.log(`${i} Hello... ${true}`)
}
