/***********************************************************************************************************
 * WHen doing recursion, you need to have a base case
 * a base case is the point when the the recursion must end
 * 
 * 
 * 
 *  
 *********************************************************************************************************/


export function getNthFibonacci(n, last, last_last){
    if(n===0) return last_last
    if(n===1) return last

    return getNthFibonacci(n-1, last+last_last, last) 

}

console.log(getNthFibonacci(6,1,0))

//1 1 2 3 5