function mergeDedupe(arr1,arr2){
    let arr=[]
    let i=0
    let j=0
    while(i<arr1.length&&j<arr2.length){

        if (arr.includes(arr1[i])==false){
            arr.push(arr1[i])
        }
        i++
        if (arr.includes(arr2[j])==false){
            arr.push(arr2[j])
        }
        j++
    }
    return arr
}

console.log(mergeDedupe([2,3,3,5,8,10,12],[1,3,4,6]))