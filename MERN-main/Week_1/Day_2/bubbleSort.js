const nums1 =[5,3,4,2,1];
const nums2 =[9,2,5,6,4,3,7,10,1,8];
const nums3 =[10,9,8,7,6,5,4,3,2,1];

function bubbleSort(nums){
    isSorted=false;
    temp=0
    while(isSorted==false){
        isSorted=true
        x=nums.length-1
        for(i=0;i<x;i++){
            if(nums[i]>nums[i+1]){
                temp=nums[i]
                nums[i]=nums[i+1]
                nums[i+1]=temp
                isSorted=false
                x--
            }
        }
    }
    return nums;
}

console.log(nums1);
bubbleSort(nums1);
console.log(nums1);