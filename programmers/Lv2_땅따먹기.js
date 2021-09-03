function solution(land) {
  let answer = 0;
  const landLength = land.length;
  for (let i = 0; i < landLength - 1; i++) {
    land[i + 1][0] += Math.max(land[i][1], land[i][2], land[i][3]);
    land[i + 1][1] += Math.max(land[i][0], land[i][2], land[i][3]);
    land[i + 1][2] += Math.max(land[i][0], land[i][1], land[i][3]);
    land[i + 1][3] += Math.max(land[i][0], land[i][1], land[i][2]);
  }
  answer = Math.max(land[landLength - 1][0], land[landLength - 1][1], land[landLength - 1][2], land[landLength - 1][3]);
  return answer;
}

function solution2(land) {
  var answer = 0;
  let allPath = permutation([1, 2, 3, 4], land.length);
  allPath.forEach((item) => {
    let pathPrice = land.reduce((acc, cur, i) => {
      return acc + cur[item[i] - 1];
    }, 0);
    if (pathPrice > answer) answer = pathPrice;
  });

  return answer;
}

function permutation(arr, selectNum) {
  const result = [];
  if (selectNum === 1) return arr.map((v) => [v]);

  arr.forEach((v, idx, arr) => {
    const fixed = v;
    const restArr = arr;
    const permutationArr = permutation(restArr, selectNum - 1);
    const combineFix = permutationArr.map((v) => [fixed, ...v]);
    combineFix.forEach((item) => {
      if (availPath(item)) result.push(item);
    });
  });
  return result;
}

function availPath(arrPath) {
  for (let i = 0; i < arrPath.length - 1; i++) {
    if (arrPath[i] === arrPath[i + 1]) return false;
  }
  return true;
}
