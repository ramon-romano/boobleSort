function boobleSort(array){

    for(let i = 0; i < array.length;i++){
      for(let j = 0; j < array.length - 1;j++){
        if(array[j] < array[j + 1]){
          let temp = array[j]
          array[j] = array[j + 1]
          array[j + 1] = temp;
        }
      }
    }
  
    return array;
  }
  
  
  console.log(boobleSort([4, 2, 6, 8, 3, 7]))