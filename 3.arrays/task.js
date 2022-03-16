function compareArrays(arr1, arr2) {
  let result = false;
  if(arr1.length != arr2.length){
    return(result)
  }
  arr1 = arr1.join('')
  arr2 = arr2.join('')
  if(arr1 == arr2){
    result = true
  }
  return result; // boolean
}

function advancedFilter(arr) {
  let resultArr = []
  arr.map(el=>{
    if(el > 0 && el % 3 == 0){
      resultArr.push(el*10)
    }
  })

  return resultArr; // array
}