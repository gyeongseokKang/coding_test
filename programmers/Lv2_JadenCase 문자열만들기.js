// test("current test", () => {
//   expect(solution(input)).toEqual(output);
// });

const input = "3people unFollowed me";
const output = "3people Unfollowed Me";

function solution(s) {
  let answer = "";
  answer = s
    .split(" ")
    .map((item) => {
      return item.length > 0 ? item[0].toUpperCase() + item.slice(1, item.length).toLowerCase() : "";
    })
    .join(" ");
  return answer;
}

function solution1(s) {
  let answer = "";
  answer = s
    .split(" ")
    .map((item) => item[0].toUpperCase() + item.slice(1, item.length).toLowerCase())
    .join(" ");
  return answer;
}
