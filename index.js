//variables initialization
let uncoverTargets = 0
let target1 = null
let target2 = null
let firstResult= null
let secondResult = null
let moves = 0

//random number generation
let numbers = [1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8]
numbers = numbers.sort(()=> Math.random()-0.25)
console.log(numbers)
//Main function

const uncover =(id)=> {
uncoverTargets++
console.log(uncoverTargets)

if (uncoverTargets == 1){
    //show first result
    target1 = document.getElementById(id)
    firstResult=numbers[id]
    target1.innerHTML = firstResult

    //Disable first button
    target1.disabled = true
}else if( uncoverTargets == 2){
    //show second result
    target2 = document.getElementById(id)
    secondResult= numbers[id]
    target2.innerHTML = secondResult

    //Disable second button
    target2.disabled = true

    //increase moves
    moves++

}

}



