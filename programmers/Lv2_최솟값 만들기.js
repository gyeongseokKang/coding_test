// test("current test", () => {
//   expect(solution(A,B)).toEqual(output);
// });

const A = [1, 4, 2];
const B = [5, 4, 4];
const output = 29;

function solution(A, B) {
  var answer = 0;
  A = A.sort((a, b) => a - b);
  B = B.sort((a, b) => b - a);

  while (A.length != 0) {
    answer += A.pop() * B.pop();
  }

  return answer;
}

//배열 reverse가 안먹힘
function solution1(A, B) {
  var answer = 0;
  A = A.sort((a, b) => a - b);
  B = B.reverse();

  while (A.length != 0) {
    answer += A.pop() * B.pop();
  }

  return answer;
}
