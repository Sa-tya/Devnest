console.log("Startr....")

// async function fun2(){
let p1 = new Promise((res,rej)=>{
        console.log("Before timeout")
        let t1 = setTimeout(()=>{
        console.log("asynch 1")
        res("Resolved")
    },2000)
    console.log("after timeout")
    // return res("fun2 return " + t1)
})

async function fun(){
    console.log("before fun2 calling")
    let r1 = await p1
    console.log("after calling fun2 ")
    return "fun1 + " + r1
    // return p1
}

console.log(fun())

console.log("Finally...")