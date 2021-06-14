function solution(n) {
  let answer = 1;

  for (let i = 1; i <= n / 2 + 1; i++) {
    let total = 0;
    for (let j = i; j <= n; j++) {
      total += j;
      if (total == n) answer++;
      if (total > n) break;
    }
  }
  return answer;
}

console.log(solution(15)); // 4
