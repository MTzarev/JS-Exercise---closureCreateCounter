function createCounter(){

    let count = 0;

    return function(){
        count++;
        console.log(count);
    }
}  
let myNew = createCounter()
for (let i=0; i<3; i++){
    myNew()

}

