function insertSort(array){
    for (let i = 0; i < array.length; i++) {
        let temp=array[i+1]
        for (let j = i+1; j >= 0; j--) {
            if (temp<array[j]){
                array[j+1]=array[j]
                array[j]=temp
            }
        }
    }
    return array
}

console.log(insertSort([5,4,0,2,1]));