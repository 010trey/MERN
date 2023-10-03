const myArr = [3,2,9,5,1,4,8]
const arrTest = [4,5,1,3,6,7,10,2,8,9]

function selectionSort(array){
    for (let i = 0; i < array.length; i++) {
        min=i
        for (let j = i+1; j < array.length; j++) {
            if (array[j]<array[min]){min=j}
        }
        temp=array[i]
        array[i]=array[min]
        array[min]=temp
    }
    return array
}

console.log(selectionSort(arrTest));