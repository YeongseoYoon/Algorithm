const bubbleSort = arr => {
  let noSwaps;
  for (let i = arr.length; i > 0; i--) {
  	noSwaps = true;
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];

        noSwaps = false;
      }
    }
    if(noSwaps) break;
  }
  return arr;
}

function solution(array, commands) {
    let answer = [];
    
    for(let i =0; i<commands.length;i++){
        let arr1 = array.slice(commands[i][0]-1, commands[i][1]);
        bubbleSort(arr1);
        answer.push(arr1[commands[i][2]-1]);
    }
    
    return answer;
}