function solution(str1, str2) {
  let answer = 0;

  // 1.대소문자를 구별하지 않는 조건을 위해 소문자로 전체 문자열 변경
  let lowerStr1 = str1.toLocaleLowerCase();
  let lowerStr2 = str2.toLocaleLowerCase();

  let str1List = [];
  let str2List = [];
  let interSectionList = [];

  // 2. 각각의 문자열에서 2개씩 읽어가면서 조건 "알파벳으로만 이루어짐"에
  //    따라 정규식만들고 아닌것은 쳐냄(각각 A, B 집합)
  let alphaRex = /^[a-zA-Z]*$/;
  for (let i = 0; i < lowerStr1.length - 1; i++) {
    let testStr = lowerStr1.slice(i, i + 2);
    if (alphaRex.test(testStr)) {
      str1List.push(lowerStr1.slice(i, i + 2));
    }
  }
  for (let j = 0; j < lowerStr2.length - 1; j++) {
    let testStr = lowerStr2.slice(j, j + 2);
    if (alphaRex.test(testStr)) {
      str2List.push(lowerStr2.slice(j, j + 2));
    }
  }

  // 자카드 유사도를 위해 합집합과 교집합을 구하는데,
  // A 기준으로 B에도 있는건 교집합(Intersection), 그리고 B에서 제거
  str1List.forEach((item) => {
    let matchIndex = str2List.indexOf(item);
    if (matchIndex >= 0) {
      interSectionList.push(item);
      str2List.splice(matchIndex, 1);
    }
  });

  // 자카드 유사도 식 ( 교집합 / 합집합)에 넣고 처리.
  // 그리고 예외 조건 처리
  if (str1List.length == 0 && str2List.length == 0) return 65536;
  answer = Math.floor((interSectionList.length / (str1List.length + str2List.length)) * 65536);

  return answer;
}

solution("FRANCE", "french"); //16384
