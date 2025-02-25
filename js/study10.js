//Funtion
//Default Parameter
const zz = (a,b =20,c=30) => {
    console.log(a+b+c)
}

zz(10)
zz(10,50)
zz(10,50,60)
console.log('--------------')

//Callback Function
const aa = () => {
    console.log('Hello...')
}
const bb = (xx) => {
    console.log('Hey...')
    xx() //callback function
}

bb(aa)
bb( () => console.log('Wow wow wow') )