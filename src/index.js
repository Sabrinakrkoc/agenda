const app = require('./app')

async function main(){
    await app.listen(3000);
    console.log('Server on port', 3000)
}

// function main(){
//     app.listen(app.prototype, (=>(console.log(`server on port ${app.port}`))))
// }

// function main(){
//     app.listen(3000, ()=>(console.log('server on port 3000')));
//     // console.log('Server on port', 3000)
//     .then(res =>{console.log('server on port', 3000)})
//     .catch(err => {console.log('Error', err.message)})
// }

main();