function solution(table, languages, preference) {
  var answer = "";
  let preferenceMap = {};
  let scoreMap = new Map();
  let maxScore = 0;

  languages.forEach((item, index) => {
    return (preferenceMap[item] = preference[index]);
  });

  table.forEach((item) => {
    let [career, ...languages] = item.split(" ");
    let score = 0;
    languages.forEach((language, index) => {
      if (preferenceMap[language] === undefined) return;
      score += preferenceMap[language] * (5 - index);
    });
    if (maxScore < score) maxScore = score;
    if (scoreMap.has(score)) {
      scoreMap.set(score, [career, ...scoreMap.get(score)]);
    } else {
      scoreMap.set(score, [career]);
    }
  });
  answer = scoreMap.get(maxScore).sort()[0];

  return answer;
}
