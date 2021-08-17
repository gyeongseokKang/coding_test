function solution(price, money, count) {
    let answer = -1;
    let total = count * (count + 1) / 2;
    if (money >= price * total) {
        answer = 0;
    }
    else {
        answer = price * total - money
    }
    return answer;
}

