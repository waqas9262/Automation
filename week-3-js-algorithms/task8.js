function isBiggerThan5(number) {
    if(number > 5){
      return true;
    }
    else{
      return false;
    }
  }
  
  console.log(isBiggerThan5(6)) // true
  console.log(isBiggerThan5(5)) // false
  console.log(isBiggerThan5(4)) // false
  console.log(isBiggerThan5(1)) // false