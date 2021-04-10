/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

//기본 솔루션
var isSubsequence = function (s, t) {
    let sIndex = 0;
    let tIndex = 0;
    let answer = false;
    while (tIndex >= 0) { // 해당 문자열이 없으면 순회 끝 false
        tIndex = t.indexOf(s[sIndex]); // substring의 값이 t에 있는지 확인
        if (tIndex >= 0) { // 있으면 
            t = t.slice(tIndex, t.length); // 해당 인덱스 전에 있는 문자열 버림
            sIndex++; // 다음 substring의 문자열을 향해
        } else {
            answer = false;
        }
        if (s.length == sIndex) { // 마지막까지 확인했는데 다 있으면 true
            answer = true;
            break;
        }
    }
    return answer;
};



console.log(isSubsequence("abcd", "ahbgdc")); // true
