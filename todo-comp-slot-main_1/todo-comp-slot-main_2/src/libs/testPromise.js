async function doSomeThing(done) {
  console.log('DoSomeThing is execute...waiting')
  return new Promise((resolve, reject) => {
    setTimeout(() => (done ? resolve('success') : reject('failure')), 5000)
  })
}

doSomeThing(false)
  .then((status) => {
    console.log(`your task is ${status}`)
  })
  .catch((error) => {
    console.log(`your task is ${error}`)
  })
