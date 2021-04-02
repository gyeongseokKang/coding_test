function solution(s) {
    let answer = s.length;
    let splitMap = new Map();
    for(let i =1; i < s.length ; i++){
        let target = s;
        let tempAnswer ="";
        while(target.length > 0){

            let splitedStr = target.substring(0,i);
            target = target.substring(i,target.length);
            if(splitedStr.length === i) {
                if(splitMap.has(splitedStr)){
                    splitMap.set(splitedStr,splitMap.get(splitedStr)+1)
                }else{
                    let temp = splitMap.entries().next().value;
                    if(temp) tempAnswer += temp[1]+temp[0];
                   
                    splitMap.clear();
                    splitMap.set(splitedStr, 1);
                }
            }else{
                if(splitedStr.length >0) tempAnswer+=splitedStr;
            }
         
        }
        let temp = splitMap.entries().next().value;
        if(temp) tempAnswer += temp[1]+temp[0];
        splitMap.clear();
        tempAnswer = tempAnswer.replace(/1/g,"");
        if(tempAnswer !== undefined && answer >tempAnswer.length){
            answer = tempAnswer.length;
        }

    }
    return answer;
}

let input = "ababcdcdababcdcd";

console.log(solution(input))
