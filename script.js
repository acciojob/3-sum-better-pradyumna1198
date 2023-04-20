function threeSum(arr, target) {
// write your code here
  let csum = Number.MAX_VALUE;
	 for(let i = 0; i < arr.length ; i++)
	 {
      for(let j =i + 1; j < arr.length; j++)
      {
        for(let k =j + 1; k < arr.length; k++)
         {
           if (Math.abs(x - csum) >
           Math.abs(x - (arr[i] + arr[j] + arr[k])))
            closestSum = (arr[i] + arr[j] + arr[k]);
         }
    }
  }
     
    
    return csum;
}

module.exports = threeSum;
