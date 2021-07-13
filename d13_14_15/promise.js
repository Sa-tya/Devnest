console.log("Start...")

let p1 = new Promise((resolve ,reject)=>{
    setTimeout(()=>{
        resolve("Resolve of p1")
    // reject("Reject of p1")
    },5000)
})

let p2 = new Promise((resolve ,reject)=>{
    setTimeout(()=>{
        resolve("Resolve of p2")
    // reject("Reject of p2")
    },1000)
})

p1.then((retur)=>{
    console.log(retur)
    return p2 //"Return by then-1"
}).then((return2)=>{
    console.log(return2)
}).catch((err)=>{
    console.log(err)
}).finally(()=>{
    console.log("done...")
})

console.log("Finally...")