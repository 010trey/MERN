function diagonalDifference (arr){
    r1=0
    r2=0
    for (let i = 0; i < arr.length; i++) {
        r1=r1+arr[i][i]
        r2=r2+arr[i][arr.length-1-i]
    }
    if (r1>r2){
        return r1-r2
    }else {
        return r2-r1
    }
}

arr1=[[1,2,3],[4,5,6],[7,8,9]]
console.log(diagonalDifference(arr1));