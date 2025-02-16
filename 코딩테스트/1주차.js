//1. 배열 정렬하기

function solution_1(arr) {
  return arr.sort((a, b) => a - b);
}

//2. 배열 제어하기
function solution_2(arr) {
  const newArr = [...new Set(arr)];
  return newArr.sort((a, b) => b - a);
}

//3. 두 개 뽑아서 더하기
function solution_3(numbers) {
  const newNumbers = [];

  for (let i = 0; i < numbers.length; i++) {
    for (let j = 0; j < i; j++) {
      newNumbers.push(numbers[i] + numbers[i]);
    }
  }

  return [...new Set(newNumbers)].sort((a, b) => a - b);
}

//4. 모의고사
function solution(answers) {
  const patterns = [
    [1, 2, 3, 4, 5],
    [2, 1, 2, 3, 2, 4, 2, 5],
    [3, 3, 1, 1, 2, 2, 4, 4, 5, 5],
  ];
  const answer = [];

  const scores = [0, 0, 0];
  for (let i = 0; i < answers.length; i++) {
    for (let j = 0; j < patterns.length; j++) {
      if (answers[i] === patterns[j][i % patterns[j].length]) {
        scores[j]++;
      }
    }
  }

  const max = Math.max(...scores);
  for (let i = 0; i < scores.length; i++) {
    if (max === scores[i]) answer.push(i + 1);
  }
  return answer;
}

//5. 행렬의 곱셈
function solution_5(arr1, arr2) {
  const answer = [];

  for (let i = 0; i < arr1.length; i++) {
    const row = [];
    for (let j = 0; j < arr2[0].length; j++) {
      let sum = 0;
      for (let k = 0; k < arr2.length; k++) {
        sum += arr1[i][k] * arr2[k][j];
      }
      row.push(sum);
    }
    answer.push(row);
  }

  return answer;
}

//6.실패율
function solution_6(N, stages) {
  const stageCount = new Array(N + 2).fill(0);

  stages.forEach((stage) => stageCount[stage]++);

  const failureRates = [];
  let totalPlayers = stages.length;

  for (let i = 1; i <= N; i++) {
    const failureRate = totalPlayers === 0 ? 0 : stageCount[i] / totalPlayers;
    failureRates.push({ stage: i, rate: failureRate });
    totalPlayers -= stageCount[i];
  }

  failureRates.sort((a, b) =>
    b.rate === a.rate ? a.stage - b.stage : b.rate - a.rate
  );

  return failureRates.map(({ stage }) => stage);
}

/**원래는 이렇게 풀었는데...
function solution(N, stages) {
    const failureRates = [];

    for(let i = 1; i <= N; i++) {
        // 현재 스테이지
        const currentStage = stages.filter(stage => stage === i).length;
        // 도달한 스테이지
        const reachedStage = stages.filter(stage => stage >= i).length;

        const failureRate = reachedStage === 0 ? 0 : currentStage / reachedStage;

        failureRates.push({stage: i, rate: failureRate });
    }
     failureRates.sort((a, b) => 
        b.rate === a.rate ? a.stage - b.stage : b.rate - a.rate
    );

    return failureRates.map(({stage})=> stage);

}
이렇게 하니까 시간복잡도가 O(N^2)가 됨... 엄청 느림   
*/

//7. 방문 길이

const DIRECTIONS = {
  U: [0, 1],
  D: [0, -1],
  R: [1, 0],
  L: [-1, 0],
};

function isValid(x, y) {
  return x >= -5 && x <= 5 && y >= -5 && y <= 5;
}

function solution_7(dirs) {
  let current = [0, 0];
  const visited = new Set();

  for (const dir of dirs) {
    const [dx, dy] = DIRECTIONS[dir];
    const next = [current[0] + dx, current[1] + dy];

    if (!isValid(next[0], next[1])) {
      continue;
    }

    const path1 = `${current[0]},${current[1]},${next[0]},${next[1]}`;
    const path2 = `${next[0]},${next[1]},${current[0]},${current[1]}`;

    visited.add(path1);
    visited.add(path2);

    current = next;
  }

  return visited.size / 2;
}
