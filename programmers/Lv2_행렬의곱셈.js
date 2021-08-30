function solution(arr1, arr2) {
  var answer = Array.from(Array(arr1.length), () => Array(arr2[0].length).fill(0));

  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2[0].length; j++) {
      answer[i][j] = arr1[i].map((item, index) => item * arr2[index][j]).reduce((a, b) => a + b, 0);
    }
  }

  return answer;
}

console.log(
  solution(
    [
      [2, 3, 2],
      [4, 2, 4],
      [3, 1, 4],
    ],
    [
      [5, 4, 3],
      [2, 4, 1],
      [3, 1, 1],
    ]
  )
); //[[22, 22, 11], [36, 28, 18], [29, 20, 14]]
