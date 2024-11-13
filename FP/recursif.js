const countDown = (count)=>{
    console.log(count)
    if(count > 0) countDown(count - 1);
}

countDown(10)
let arr= []
function generateArr(n){
    if(n<1){
        return []
    }
    // return [...generateArr(n-1), n]
    arr.push(n)
    generateArr(n-1)
}
generateArr(10);
console.log(arr)