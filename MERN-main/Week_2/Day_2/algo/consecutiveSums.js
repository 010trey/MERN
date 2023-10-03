kk = 16
arrr = [2,5,3,6,7,0,0,23,11]

function consecutiveSums (arr,k) {
    output = []
    for (let i = 0; i < arr.length; i++) {
        xyz = []
        sum=0
        for (let j = i; j < arr.length; j++) {
            xyz.push(arr[j])
            sum=sum+arr[j]
            if (sum==k) {
                output.push([...xyz])
            }
        }
    }
    return output
}

console.log(consecutiveSums(arrr,kk));