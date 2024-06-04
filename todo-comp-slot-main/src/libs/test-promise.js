async function doSomething(done) {
    console.log('doSomething is executing... waiting')
    return new Promise((resolve , reject) => {
        setTimeout(()=> ( done ? resolve('sucess') : reject('failure')) , 5000)
    })
}
// .then
async function thenDo(result){
    doSomething(result)
    .then((status) => {
        console.log(`your task is ${status}`)
    })
    .catch((error) => {
        console.log(`error : ${error}`)
    })
}
// await
async function waitDoSomething(result){
    try{
        const status = await doSomething(result)
        console.log(`your task is ${status}`)
    }catch (error) {
        console.log(`error : ${error}`)
    }
}
thenDo()