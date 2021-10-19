
function solution(number){
    let counter = 0;
    for(let i=1; i<number;i++){
      if (i%3===0){
        counter = counter + i
        
      }else if(i%5===0){
        counter = counter + i
      }
    }
    return counter;
  }

console.log(solution(10))// it's to be 23