console.log("Start....")

function fun2(){
let p1 = new Promise((res,rej)=>{
        let t1 = setTimeout(()=>{
        res("fun2 Resolved")
    },2000)
})
return p1
}

function fun1(){
    let p1 = new Promise((res,rej)=>{
    let t1 = setTimeout(()=>{
         res("fun1 resolved"
         )},2000)
})
    return p1
}

 async function fun(){
    let f2 = await fun2()
    console.log("fun2 return ",f2)
    let f1 = await fun1()
    console.log("fun1 return ",f1)
    return f2 + f1
 }

// console.log("fun return" ,fun())
fun()
console.log("Finally...")