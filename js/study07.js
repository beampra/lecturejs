//Break ใน Loop ทำงานเมื่อไหร่จบเลย

// Continue ใน Loop ทำงานเมื่อไหร่ ถือว่าจบรอบนั้นไปรอบต่อไป

for(let i = 1; i <= 5; i++){
    console.log("Hello...")
}
console.log('--------------')

for(let i = 1; i <= 5; i++){
    if(i == 3){
        break
    }
    console.log("Hi...")
}
console.log('--------------')

for(let i = 1; i <= 5; i++){
    if(i == 3){
        continue
    }
    console.log("Hi...")
}