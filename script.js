// Write a function that takes in a list of numbers. If it has more even numbers than odd numbers, return "even". If it has more odd numbers than even numbers, return "odd". If there's a tie, return "even and odd".

// variable to keep track of total evens and total odds, then compare them
// loop through list and decide if number is even or odd

function evensAndOdds(array){
    // initialize variables
    let numberEvens = 0;
    let numberOdds = 0;
    // loop through array
    for(let i = 0; i < array.length; i++){
        // if the number is even, increase even count
      if(array[i] %2 === 0)
        numberEvens++;
        // else increase odd count
      else numberOdds++
    }
    if(numberEvens === numberOdds){
      return "equal";
    }
    else if(numberEvens > numberOdds){
      return "even";
    }else{
      return "odd";
    }
  }
  
  let array = ["2","2","2","1","1","1","1"];
  let result = evensAndOdds(array);
  console.log(result);