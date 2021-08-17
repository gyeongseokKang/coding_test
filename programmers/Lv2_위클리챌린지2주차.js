function solution(scores) {
    let answer = '';
    scores.forEach((item, index) => {
        let targetScore = scores.map(item => item[index]) // 해당 학생의 성적만 가져오기
        let avgScore = getAvgScore(targetScore, index) // 최소, 최대값 고려하여 평균값 가져오기
        let grade = getGrade(avgScore) // 점수로 성적가져오기
        return answer += grade // 성적 합치기
    })
    return answer;
}

function getAvgScore(scoreArray, index) {
    let avgScore = 0
    let min = scoreArray.reduce((acc, val) => {
        return acc < val ? acc : val;
    });
    let max = scoreArray.reduce((acc, val) => {
        return acc > val ? acc : val;
    });
    let sumScore = scoreArray.reduce((a, b) => a + b, 0);

    avgScore = (sumScore) / scoreArray.length
    if (min == scoreArray[index] && scoreArray.filter(item => item == min).length == 1) {
        avgScore = (sumScore - min) / (scoreArray.length - 1)
    }
    if (max == scoreArray[index] && scoreArray.filter(item => item == max).length == 1) {
        avgScore = (sumScore - max) / (scoreArray.length - 1)
    }

    return avgScore
}

function getGrade(avgScore) {
    if (avgScore >= 90)
        return "A";
    if (avgScore >= 80 && avgScore < 90)
        return "B";
    if (avgScore >= 70 && avgScore < 80)
        return "C";
    if (avgScore >= 50 && avgScore < 70)
        return "D";
    return "F"
}

console.log(solution([[100, 90, 98, 88, 65], [50, 45, 99, 85, 77], [47, 88, 95, 80, 67], [61, 57, 100, 80, 65], [24, 90, 94, 75, 65]])); // "FBABD"
