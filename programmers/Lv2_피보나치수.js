console.log(solution(10));
function solution(n) {
  let answer = 0;
  let test = [0, 1, 1];
  if (n < 3) return n;
  for (let i = 3; i < n + 1; i++) {
    test[i % 3] = (test[(i - 1) % 3] % 1234567) + (test[(i - 2) % 3] % 1234567);
  }
  answer = test[n % 3];
  answer = answer % 1234567;

  return answer;
}

//통과, 그러나 공간복잡도 최적화남았음
function solution2(n) {
  let answer = 0;
  let test = [0, 1, 1];
  if (n < 3) return n;
  for (let i = 3; i < n + 1; i++) {
    test.push((test[i - 1] % 1234567) + (test[i - 2] % 1234567));
  }
  answer = test.pop();
  answer = answer % 1234567;

  return answer;
}

//런타임 에러, 시간 초과
function solution1(n) {
  let answer = 0;
  if (n < 2) return n;
  answer = fibonacci(n) % 1234567;
  return answer;
}

function fibonacci(num) {
  if (num < 2) return num;
  return fibonacci(num - 1) + fibonacci(num - 2);
}
