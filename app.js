// function myFunction(a,b,c){
//    let result= a*b*c
//    console.log(result)
// }

// myFunction(5,6,9)

// const myFunction =(a,b)=>{
//     console.log(a,b)
// }
// myFunction("achu" , "nikashini")

// let arr =["Electronics","Flowers","clothes"]

// console.log(arr[1])
// arr.map((data)=>{console.log(data)})

// let array1=[10,12,14,15]
// const data = array1.filter((user)=>{
//     return user>=18
// })

// console.log(data)

// setTimeout(()=>{console.log("hello")},2000)

// let fruits={"Guava":2,"Lichi":6,"Mango":4,"Apple":2}

// let value=fruits.Guava
// console.log(value)

// const values={
//     num2:0,
//     num1:1,
//     num3:2,
//     result:{
//         num2:1,
//     res: function(){
//         this.num2=10
//     }

// },
// }
// values.result.res()
// let num=values.result.num2
// console.log(num)

// function mysum(callback){
//     console.log("sum method")
    
// }

// function mycalculator(num1,num2,mycallback){
//     let sum=num1+num2;
//     mycallback(sum);
// }

// mycalculator(4,4,mysum);

// const data=fetch('https://fakestoreapi.com/products')
// .then((data)=>data.json()).then(res=>console.log(res[0].image))
// .catch(a=>console.log(e.message))

// async function myFunction(){
//     const data = fetch("")
//     const res = (await data).json("https://fakestoreapi.com/products");
//     console.log(res)

// }
// myfunction()

// const nestedArrays=[
//     [20,30],
//     ["code","sweetly"],
//     [true, "Grace"],
// ];
// const data=nestedArrays.reduce(function (accumulator,currentItem){
//     return [...accumulator,...currentItem];
// },[10]);

// console.log(data)

// setTimeout{
//     function(color){
//         console.log("My best color is "+color + ".");
//     }
//     3000,
//     "White"
// };
// setInterval(()=>{
//     console.log("My best color is "+color + ".")
// },
// 3000,
// "Red"
// )

// const arr2=[1,2,3,4]
// let arr3=arr2
// console.log(arr3)

// let array1 = [1,2,3,4]
// let array2 = [5,6,7,8]
// let array3 = [5,4,2,8,9]

// array3.sort()
// console.log(array3)

// let array1 = [1,2,3,4]
// let array2 = [5,6,7,8]
// // let new_array = array1.splice(1,2,23,24)
// // console.log(array1)
// // console.log(new_array)

// let new_array = array1.slice(1,3)
// console.log(new_array)

// function isPrime(num) {
//     if (num <= 1) return false;
//     for (let i = 2; i < num; i++) {
//         if (num % i === 0) {
//             return false; 
//         }
//     }
//     return true; 
// }

// const userInput = 8;
// console.log( isPrime(userInput));