
// console.log("Start...")

// setTimeout(()=>{console.log("First timeout")},3000)

// setTimeout(()=>{console.log("second timeout")},2000)

// console.log("Finally")

console.log("Start....")

    function fun2(){
        console.log("Before timeout")
         setTimeout(()=>{
        console.log("asynch 1")
    },2000)
    console.log("after timeout")
    return "fun2 return"
    }
 function fun(){
    console.log("before fun 2 calling")
    let r1 = fun2()
    console.log("after calling fun 2 ")
    return "fun1 + " +r1
}

console.log(fun())

console.log("Finally...")